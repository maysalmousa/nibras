// =====================================================================
//  نبراس — الباك إند (Nibras Backend)
//  يستقبل الرصد الخام من الأجهزة (حساس الاهتزاز + الكاميرا) عبر Firebase،
//  يدمجهم في بلاغات حقيقية مؤكدة، ويقدّم الموقع + واجهة API للجهات المختصة.
//
//  التشغيل:  node server.js      ثم افتحي  http://localhost:3000
//  ما يحتاج أي مكتبات خارجية — يكفي Node.js 18 أو أحدث.
// =====================================================================
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

/* ------------------------------ الإعدادات ------------------------------ */
const CONFIG = {
  FIREBASE: process.env.NIBRAS_FIREBASE || 'https://nibs-eb9d5-default-rtdb.europe-west1.firebasedatabase.app',
  PORT: +process.env.PORT || 3000,
  SITE_DIR: path.join(__dirname, '..', 'nibras-site'),
  MERGE_M: 15,             // رصدتين لنفس النوع ضمن 15 متر = نفس العيب
  CAM_AHEAD_M: 4,          // الكاميرا تشوف قدّام السيارة بحوالي 4 متر
  MAX_HDOP: 10,            // أسوأ دقة GPS نقبلها (كل ما قل الرقم = أدق). كانت 5 — رفعناها لأن الإشارة داخل البيت/القاعة أضعف
  MIN_SATS: 4,             // أقل عدد أقمار صناعية
  MAX_LOC_AGE_MS: 20000,   // موقع الكاميرا لازم يكون أحدث من 20 ثانية
  DEVICE_ONLINE_MS: 30000, // الجهاز "متصل" إذا أرسل موقعه خلال 30 ثانية
  GEOCODE: process.env.NIBRAS_GEOCODE !== 'off',
  // تجربة البيت/القاعة: لما الجهاز ما عنده GPS ويرسل موقع ثابت، كل رصد يطلع بلاغ جديد مستقل
  // (ما يندمج مع البلاغات القديمة). الحساس والكاميرا لنفس الحفرة يندمجون إذا وصلوا خلال TEST_PAIR_MS
  SEPARATE_TEST: process.env.NIBRAS_SEPARATE !== 'off',
  TEST_PAIR_MS: 30000,   // الحساس والكاميرا لنفس الحفرة يندمجون إذا وصلوا خلال 30 ثانية من بعض
};
const FB = CONFIG.FIREBASE.replace(/\/$/, '');

const TYPES = ['pothole', 'longitudinal_crack', 'alligator_crack', 'rutting', 'raveling', 'depression', 'faded_marking'];
const GROUP = { pothole: 'hole', rutting: 'hole', depression: 'hole', longitudinal_crack: 'crack', alligator_crack: 'crack', raveling: 'crack', faded_marking: 'marking' };
const STATUSES = ['review', 'new', 'in_progress', 'fixed', 'dismissed'];   // dismissed = رصد خاطئ (يختفي من المنصة)
const SEV_RANK = { low: 1, medium: 2, high: 3 };
const CITIES = {
  riyadh: [24.7136, 46.6753], jeddah: [21.5433, 39.1728], mecca: [21.3891, 39.8579], medina: [24.5247, 39.5692],
  dammam: [26.4207, 50.0888], khobar: [26.2172, 50.1971], taif: [21.2703, 40.4158], tabuk: [28.3835, 36.5662],
  abha: [18.2164, 42.5053], buraydah: [26.326, 43.975],
};

/* ------------------------------ أدوات ------------------------------ */
const sleep = ms => new Promise(r => setTimeout(r, ms));
const time = () => new Date().toLocaleTimeString('en-GB');
const log = (...a) => console.log(`[${time()}]`, ...a);
const num = v => (v === null || v === undefined || v === '' ? NaN : +v);

function distM(aLat, aLng, bLat, bLng) {
  const R = 6371000, toR = Math.PI / 180;
  const dLat = (bLat - aLat) * toR, dLng = (bLng - aLng) * toR;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * toR) * Math.cos(bLat * toR) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
function moveAhead(lat, lng, courseDeg, meters) {
  const R = 6371000, b = courseDeg * Math.PI / 180;
  return [lat + (meters * Math.cos(b) / R) * 180 / Math.PI,
          lng + (meters * Math.sin(b) / (R * Math.cos(lat * Math.PI / 180))) * 180 / Math.PI];
}
function nearestCity(lat, lng) {
  let best = 'jeddah', bd = Infinity;
  for (const [k, [a, b]] of Object.entries(CITIES)) { const d = distM(lat, lng, a, b); if (d < bd) { bd = d; best = k; } }
  return best;
}
const sensorSeverity = g => (g > 1.5 ? 'high' : g > 1.1 ? 'medium' : 'low');
// خطورة الحفرة من عمقها (بالسم) حسب درجات مؤشر حالة الرصف: أقل من 2.5 منخفضة، 2.5 إلى 5 متوسطة، أكثر من 5 عالية
// عمق الحفرة من الرصد: الجهاز الرئيسي يرسله باسم depth_cm، ونقبل depthCm بعد
const depthOf = raw => { const v = num(raw.depthCm ?? raw.depth_cm); return v > 0 && v < 50 ? +v.toFixed(1) : null; };
const depthSeverity = cm => (cm > 5 ? 'high' : cm >= 2.5 ? 'medium' : 'low');
const maxSev = (a, b) => (!a ? b : !b ? a : SEV_RANK[a] >= SEV_RANK[b] ? a : b);

/* ------------------------------ Firebase REST ------------------------------ */
async function fb(method, p, body) {
  const r = await fetch(`${FB}${p}.json`, {
    method, headers: { 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`Firebase ${method} ${p} → ${r.status} ${await r.text().catch(() => '')}`);
  return r.json();
}

// يفتح اتصال "مباشر" مع Firebase: أي كتابة جديدة توصلنا فوراً
function firebaseStream(p, onEvent, name) {
  (async () => {
    for (;;) {
      try {
        const r = await fetch(`${FB}${p}.json`, { headers: { Accept: 'text/event-stream' } });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        state.firebase = true;
        log(`🔗 متصل بـ Firebase (${name})`);
        broadcast('health', health());
        const dec = new TextDecoder(); let buf = '';
        for await (const chunk of r.body) {
          buf += dec.decode(chunk, { stream: true }).replace(/\r/g, '');
          let i;
          while ((i = buf.indexOf('\n\n')) >= 0) {
            const block = buf.slice(0, i); buf = buf.slice(i + 2);
            let ev = '', data = '';
            for (const line of block.split('\n')) {
              if (line.startsWith('event:')) ev = line.slice(6).trim();
              else if (line.startsWith('data:')) data += line.slice(5).trim();
            }
            if (ev === 'put' || ev === 'patch') {
              try { onEvent(ev, JSON.parse(data)); } catch (e) { log('⚠️ خطأ في قراءة حدث:', e.message); }
            } else if (ev === 'cancel' || ev === 'auth_revoked') throw new Error(ev);
          }
        }
        throw new Error('انقطع الاتصال');
      } catch (e) {
        state.firebase = false;
        log(`⚠️ Firebase (${name}): ${e.message} — إعادة المحاولة بعد 3 ثواني`);
        broadcast('health', health());
        await sleep(3000);
      }
    }
  })();
}

/* ------------------------------ الحالة ------------------------------ */
const state = { firebase: false, ready: false, reports: new Map(), seq: 0, device: null, processed: new Set(), rawLog: [], rawReport: new Map() };

// سجل نشاط الأجهزة (آخر 60 رصد خام) — يظهر في صفحة "جهاز نبراس"
function addLog(key, raw, result, live) {
  const e = { key, src: raw.src || '?', type: raw.src === 'sensor' ? 'pothole' : raw.type || null, g: raw.g ?? null, conf: raw.conf ?? null,
    sizeCm: raw.sizeCm ?? null, depthCm: depthOf(raw),   // طول التشقق/البهتان/قطر الحفرة من الكاميرا + عمق الحفرة من حساس العمق
    lat: raw.lat ?? null, lng: raw.lng ?? null, sats: raw.sats ?? null, ts: typeof raw.ts === 'number' ? raw.ts : Date.now(), ...result };
  state.rawLog.push(e); if (state.rawLog.length > 60) state.rawLog.shift();
  if (live) broadcast('raw', e);
}

function health() {
  const d = state.device;
  return {
    ok: true, firebase: state.firebase, reports: state.reports.size,
    device: d ? { online: Date.now() - (d.ts || 0) < CONFIG.DEVICE_ONLINE_MS, lastSeen: d.ts || null, sats: d.sats ?? null, hdop: d.hdop ?? null } : null,
  };
}
const sortedReports = () => [...state.reports.values()].sort((a, b) => (b.lastSeen || 0) - (a.lastSeen || 0));

/* ------------------------------ البث المباشر للموقع (SSE) ------------------------------ */
const clients = new Set();
function broadcast(event, data) {
  const msg = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const res of clients) res.write(msg);
}
setInterval(() => { for (const res of clients) res.write(': ping\n\n'); }, 20000);

/* ------------------------------ العنوان الحقيقي (اسم الشارع والحي) ------------------------------ */
const geoQueue = []; let geoBusy = false;
function queueGeocode(id) { if (CONFIG.GEOCODE) { geoQueue.push(id); runGeocode(); } }
async function runGeocode() {
  if (geoBusy) return; geoBusy = true;
  while (geoQueue.length) {
    const id = geoQueue.shift(), r = state.reports.get(id);
    if (!r || r.road) continue;
    try {
      const get = async lang => {
        const u = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=17&addressdetails=1&lat=${r.lat}&lon=${r.lng}&accept-language=${lang}`;
        const res = await fetch(u, { headers: { 'User-Agent': 'Nibras-Road-Monitor/1.0 (student project, Effat University)' } });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return (await res.json()).address || {};
      };
      const ar = await get('ar'); await sleep(1100);
      const en = await get('en'); await sleep(1100);
      const road = a => a.road || a.pedestrian || a.residential || a.highway || '';
      const dist = a => a.neighbourhood || a.suburb || a.quarter || a.city_district || '';
      const patch = {};
      if (road(ar) || road(en)) patch.road = { ar: road(ar) || road(en), en: road(en) || road(ar) };
      if (dist(ar) || dist(en)) patch.district = { ar: dist(ar) || dist(en), en: dist(en) || dist(ar) };
      if (Object.keys(patch).length) {
        Object.assign(r, patch);
        await fb('PATCH', `/reports/${id}`, patch);
        broadcast('report', { report: r });
        log(`📍 ${id}: ${patch.road ? patch.road.ar : ''} ${patch.district ? '— ' + patch.district.ar : ''}`);
      }
    } catch (e) { log(`⚠️ ما قدرنا نجيب اسم الشارع لـ ${id}: ${e.message}`); }
  }
  geoBusy = false;
}

/* ------------------------------ قلب النظام: معالجة الرصد ------------------------------ */
// كل رصد خام من الجهاز يمر هنا: نتحقق منه ← ندوّر بلاغ قريب من نفس النوع ← ندمج أو ننشئ بلاغ جديد
function validate(raw) {
  const src = ['camera', 'sensor', 'citizen'].includes(raw.src) ? raw.src : null;
  if (!src) return { error: 'unknown_source' };
  let lat = num(raw.lat), lng = num(raw.lng);
  if (!isFinite(lat) || !isFinite(lng) || (lat === 0 && lng === 0)) return { error: 'no_gps' };
  if (lat < 15 || lat > 33 || lng < 33 || lng > 57) return { error: 'outside_ksa' };
  if (src !== 'citizen' && isFinite(num(raw.hdop)) && num(raw.hdop) > CONFIG.MAX_HDOP) return { error: 'gps_weak' };
  if (src !== 'citizen' && isFinite(num(raw.sats)) && num(raw.sats) < CONFIG.MIN_SATS) return { error: 'gps_weak' };
  if (src === 'citizen' && !TYPES.includes(raw.type)) return { error: 'unknown_type' };
  const ts = isFinite(num(raw.ts)) ? num(raw.ts) : Date.now();
  if (src === 'camera') {
    if (isFinite(num(raw.locTs)) && ts - num(raw.locTs) > CONFIG.MAX_LOC_AGE_MS) return { error: 'stale_location' };
    if (!TYPES.includes(raw.type)) return { error: 'unknown_type' };
    const speed = num(raw.speed), course = num(raw.course);
    if (speed > 5 && isFinite(course)) [lat, lng] = moveAhead(lat, lng, course, CONFIG.CAM_AHEAD_M);
  }
  const type = src === 'sensor' ? 'pothole' : raw.type;
  return {
    src, type, group: GROUP[type], lat, lng, ts,
    g: src === 'sensor' && isFinite(num(raw.g)) ? +num(raw.g).toFixed(2) : null,
    conf: src === 'camera' && isFinite(num(raw.conf)) ? +num(raw.conf).toFixed(2) : null,
    camSeverity: src === 'camera' && SEV_RANK[raw.severity] ? raw.severity : null,
    sizeCm: src === 'camera' && num(raw.sizeCm) > 0 ? +num(raw.sizeCm).toFixed(1) : null, // طول التشقق / طول الجزء الباهت / قطر الحفرة
    depthCm: depthOf(raw) ?? (src === 'camera' && state.device ? depthOf(state.device) : null), // عمق الحفرة: من الرصد نفسه، أو للكاميرا من آخر عمق قاسه الجهاز الرئيسي
    label: typeof raw.label === 'string' ? raw.label.slice(0, 40) : null,
    testLoc: isTestLoc(raw, src),   // موقع ثابت/قديم (بدون GPS) = تجربة
    photo: typeof raw.photo === 'string' && raw.photo ? raw.photo : null,
    dev: typeof raw.dev === 'string' ? raw.dev.slice(0, 40) : null,
    desc: src === 'citizen' && typeof raw.desc === 'string' ? raw.desc.slice(0, 500) : null,
    name: src === 'citizen' && typeof raw.name === 'string' ? raw.name.slice(0, 60) : null,
  };
}

const TEST_LOCS = ['fixed', 'last_fix'];
function isTestLoc(raw, src) {
  if (TEST_LOCS.includes(raw.loc)) return true;
  return src === 'camera' && !!state.device && TEST_LOCS.includes(state.device.loc);   // الكاميرا تاخذ مكانها من الجهاز الرئيسي
}

function findMatch(ev) {
  let best = null, bd = Infinity;
  const testOnly = ev.testLoc && CONFIG.SEPARATE_TEST;
  for (const r of state.reports.values()) {
    if (r.status === 'fixed' || r.status === 'dismissed' || GROUP[r.type] !== ev.group) continue;
    if (testOnly && (!r.testLoc || ev.ts - (r.lastSeen || 0) > CONFIG.TEST_PAIR_MS)) continue;   // تجربة: بس نفس الحفرة اللحظية
    const d = distM(ev.lat, ev.lng, r.lat, r.lng);
    if ((testOnly || d <= CONFIG.MERGE_M) && d < bd) { bd = d; best = r; }   // التجربة بدون GPS: نفس الحفرة = خلال 30 ثانية مهما كان المكان
  }
  return best;
}

function finalize(r) {
  r.confirmed = !!(r.sensor && r.camera);
  r.source = r.sensor && r.camera ? 'both' : r.camera ? 'camera' : r.sensor ? 'sensor' : 'citizen';
  let sev = null;
  if (r.sensor) sev = maxSev(sev, sensorSeverity(r.sensor.g || 0));
  if (r.depthCm) sev = maxSev(sev, depthSeverity(r.depthCm));   // العمق الحقيقي يرفع الخطورة إذا كانت الحفرة عميقة
  if (r.camera) sev = maxSev(sev, r.camera.severity || 'medium');
  if (!sev && r.citizen) sev = 'medium';
  if (r.confirmed && GROUP[r.type] === 'hole') sev = maxSev(sev, 'medium'); // حفرة أكدها الحساس والكاميرا معاً
  r.severity = sev || 'medium';
  if (r.status === 'review' && r.camera) r.status = 'new'; // الكاميرا شافتها = ما تحتاج مراجعة
  return r;
}

async function handleRaw(key, raw) {
  if (!raw || typeof raw !== 'object' || state.processed.has(key)) return;
  if (raw.report || raw.rejected) { state.processed.add(key); addLog(key, raw, raw.report ? { report: raw.report } : { rejected: raw.rejected }); return; }
  state.processed.add(key);
  const ev = validate(raw);
  if (ev.error) {
    log(`🚫 رصد مرفوض (${key}): ${ev.error}`);
    addLog(key, raw, { rejected: ev.error }, true);
    await fb('PATCH', `/raw/${key}`, { rejected: ev.error }).catch(() => {});
    return;
  }
  const match = findMatch(ev);
  let r, isNew = false, wasConfirmed = false;
  if (match) {
    r = match; wasConfirmed = r.confirmed;
    // متوسط المواقع: كل رصد إضافي يخلي الموقع أدق
    const n = r.samples || 1;
    r.lat = +((r.lat * n + ev.lat) / (n + 1)).toFixed(6);
    r.lng = +((r.lng * n + ev.lng) / (n + 1)).toFixed(6);
    r.samples = n + 1; r.hits = (r.hits || 1) + 1; r.lastSeen = ev.ts;
  } else {
    isNew = true;
    state.seq += 1;
    const id = `NB-${String(state.seq).padStart(4, '0')}`;
    if (ev.testLoc && CONFIG.SEPARATE_TEST) {   // تجربة بدون GPS: نبعّد البلاغات عن بعض ~8 متر عشان كل وحدة تبان لحالها على الخريطة
      const n = [...state.reports.values()].filter(x => x.testLoc).length;
      ev.lat += (n % 10) * 0.00007; ev.lng += Math.floor(n / 10) * 0.00007;
    }
    r = {
      id, type: ev.type, lat: +ev.lat.toFixed(6), lng: +ev.lng.toFixed(6), city: nearestCity(ev.lat, ev.lng),
      testLoc: !!ev.testLoc,
      status: ev.src === 'camera' ? 'new' : 'review', hits: 1, samples: 1, firstSeen: ev.ts, lastSeen: ev.ts,
    };
  }
  if (ev.src === 'sensor') {
    r.sensor = { g: Math.max(ev.g || 0, r.sensor ? r.sensor.g || 0 : 0), ts: ev.ts };
  } else if (ev.src === 'citizen') {
    const notes = (r.citizen && r.citizen.notes) || [];
    if (ev.desc) notes.push({ desc: ev.desc, name: ev.name || null, ts: ev.ts });
    r.citizen = { count: (r.citizen ? r.citizen.count || 0 : 0) + 1, ts: ev.ts, notes: notes.slice(-3) };
    if (ev.photo && !r.photo) r.photo = ev.photo;
  } else {
    const hadCamera = !!r.camera;
    const better = !r.camera || (ev.conf || 0) >= (r.camera.conf || 0);
    r.camera = {
      conf: Math.max(ev.conf || 0, r.camera ? r.camera.conf || 0 : 0),
      severity: maxSev(r.camera && r.camera.severity, ev.camSeverity || 'medium'),
      label: better ? ev.label : r.camera.label, ts: ev.ts,
      sizeCm: Math.max(ev.sizeCm || 0, r.camera ? r.camera.sizeCm || 0 : 0) || null,
    };
    if (ev.photo && (better || !r.photo)) r.photo = ev.photo;
    if (!hadCamera && GROUP[ev.type] === GROUP[r.type]) r.type = ev.type; // الكاميرا تعرف النوع بالضبط
    if (ev.depthCm && !r.sensor) r.sensor = { g: 0, ts: ev.ts, depthOnly: true };   // حساس العمق قاس الحفرة = تأكيد ثاني مع الكاميرا
  }
  if (ev.dev) r.device = ev.dev;
  if (ev.depthCm) r.depthCm = Math.max(ev.depthCm, r.depthCm || 0);   // أعمق قراءة للحفرة
  finalize(r);
  state.reports.set(r.id, r);
  await fb('PUT', `/reports/${r.id}`, r);
  await fb('PATCH', `/raw/${key}`, { report: r.id }).catch(() => {});
  if (isNew) await fb('PUT', '/meta/seq', state.seq).catch(() => {});

  const confirmedNow = !wasConfirmed && r.confirmed && !isNew;
  state.rawReport.set(key, r.id);
  addLog(key, raw, { report: r.id }, true);
  const what = ev.src === 'sensor' ? `حساس ${ev.g}g` : ev.src === 'citizen' ? `بلاغ مواطن ${ev.type}` : `كاميرا ${ev.type} ${Math.round((ev.conf || 0) * 100)}%`;
  log(isNew ? `🆕 بلاغ جديد ${r.id} (${what}) ${r.confirmed ? '✅ مؤكد' : r.status === 'review' ? '⚠️ يحتاج مراجعة' : ''}`
            : `🔁 ${r.id} رُصد مرة ثانية (${what})${confirmedNow ? ' — ✅ تأكد الحين (حساس + كاميرا)' : ''}`);
  broadcast('report', { report: r, isNew, confirmedNow,
    citizen: ev.src === 'citizen' ? { name: ev.name || '', desc: ev.desc || '', photo: ev.photo || null } : null });
  if (isNew) queueGeocode(r.id);
}

// طابور واحد عشان ما يتعالج رصدين بنفس اللحظة ويتكرر البلاغ
let chain = Promise.resolve();
const enqueue = fn => { chain = chain.then(fn).catch(e => log('⚠️', e.message)); };

function onRawEvent(type, { path: p, data }) {
  const parts = p.split('/').filter(Boolean);
  if (parts.length === 0) {               // أول ما نتصل: كل الرصد القديم
    const entries = Object.entries(data || {}).sort(([a], [b]) => a.localeCompare(b));
    for (const [k, v] of entries) enqueue(() => handleRaw(k, v));
    enqueue(async () => { if (!state.ready) { state.ready = true; log(`✅ جاهز — ${state.reports.size} بلاغ محفوظ`); } });
  } else if (parts.length === 1 && type === 'put') { // رصد جديد وصل الحين
    enqueue(() => handleRaw(parts[0], data));
  }
}

function onLocationEvent(type, { path: p, data }) {
  if (p === '/') state.device = type === 'put' ? (data && typeof data === 'object' ? data : null) : { ...(state.device || {}), ...data };
  else state.device = { ...(state.device || {}), [p.split('/').filter(Boolean)[0]]: data };
  broadcast('device', state.device);
}

/* ------------------------------ الإحصائيات ------------------------------ */
function stats() {
  const out = { total: 0, confirmed: 0, byType: {}, bySeverity: {}, byStatus: {}, byCity: {},
    // القياسات: مجموع أطوال التشققات والخطوط الباهتة (سم) وأعماق الحفر (سم) — للعيوب غير المُصلحة
    measures: { crackLengthCm: 0, cracksMeasured: 0, fadedLengthCm: 0, fadedMeasured: 0, potholesWithDepth: 0, avgDepthCm: null, maxDepthCm: null } };
  let depthSum = 0;
  for (const r of state.reports.values()) {
    const open = r.status !== 'fixed' && r.status !== 'dismissed', size = r.camera && r.camera.sizeCm;
    if (open && size && (r.type === 'longitudinal_crack' || r.type === 'alligator_crack')) { out.measures.crackLengthCm += size; out.measures.cracksMeasured++; }
    if (open && size && r.type === 'faded_marking') { out.measures.fadedLengthCm += size; out.measures.fadedMeasured++; }
    if (open && r.depthCm) { out.measures.potholesWithDepth++; depthSum += r.depthCm; out.measures.maxDepthCm = Math.max(out.measures.maxDepthCm || 0, r.depthCm); }
    out.total++; if (r.confirmed) out.confirmed++;
    out.byType[r.type] = (out.byType[r.type] || 0) + 1;
    out.bySeverity[r.severity] = (out.bySeverity[r.severity] || 0) + 1;
    out.byStatus[r.status] = (out.byStatus[r.status] || 0) + 1;
    out.byCity[r.city] = (out.byCity[r.city] || 0) + 1;
  }
  if (out.measures.potholesWithDepth) out.measures.avgDepthCm = +(depthSum / out.measures.potholesWithDepth).toFixed(1);
  out.measures.crackLengthCm = +out.measures.crackLengthCm.toFixed(1); out.measures.fadedLengthCm = +out.measures.fadedLengthCm.toFixed(1);
  return out;
}

/* ------------------------------ صور الكاميرا ------------------------------ */
const photoCache = new Map();
async function getPhoto(key) {
  if (photoCache.has(key)) return photoCache.get(key);
  const b64 = await fb('GET', `/photos/${encodeURIComponent(key)}`);
  if (typeof b64 !== 'string') return null;
  const buf = Buffer.from(b64, 'base64');
  photoCache.set(key, buf);
  if (photoCache.size > 300) photoCache.delete(photoCache.keys().next().value);
  return buf;
}

/* ------------------------------ خادم الويب + API ------------------------------ */
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.json': 'application/json', '.md': 'text/plain; charset=utf-8', '.ico': 'image/x-icon' };
function send(res, code, body, type = 'application/json; charset=utf-8') {
  res.writeHead(code, { 'Content-Type': type, 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' });
  res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}
function readBody(req) {
  return new Promise((ok, bad) => { let s = ''; req.on('data', c => { s += c; if (s.length > 2e6) req.destroy(); }); req.on('end', () => { try { ok(s ? JSON.parse(s) : {}); } catch (e) { bad(e); } }); });
}

// بلاغ مواطن: نخزنه كرصد خام (src: citizen) ويمر بنفس التحقق والدمج
const lastCitizen = new Map();
async function citizenReport(req, res) {
  const ip = req.socket.remoteAddress || '?';
  if (Date.now() - (lastCitizen.get(ip) || 0) < 15000) return send(res, 429, { error: 'too_many' });
  let b; try { b = await readBody(req); } catch (e) { return send(res, 400, { error: 'bad_json' }); }
  const lat = num(b.lat), lng = num(b.lng);
  if (!TYPES.includes(b.type)) return send(res, 400, { error: 'unknown_type' });
  if (!isFinite(lat) || !isFinite(lng)) return send(res, 400, { error: 'no_location' });
  if (lat < 15 || lat > 33 || lng < 33 || lng > 57) return send(res, 400, { error: 'outside_ksa' });
  lastCitizen.set(ip, Date.now());
  let photo = null;
  if (typeof b.photo === 'string' && /^[A-Za-z0-9+/=]+$/.test(b.photo) && b.photo.length < 1.5e6) {
    photo = (await fb('POST', '/photos', b.photo)).name;
  }
  const raw = { src: 'citizen', type: b.type, lat: +lat.toFixed(6), lng: +lng.toFixed(6),
    desc: typeof b.desc === 'string' ? b.desc.slice(0, 500) : '', name: typeof b.name === 'string' ? b.name.slice(0, 60) : '' };
  if (photo) raw.photo = photo;
  const { name: key } = await fb('POST', '/raw', { ...raw, ts: { '.sv': 'timestamp' } });
  await new Promise(done => enqueue(async () => { try { await handleRaw(key, { ...raw, ts: Date.now() }); } finally { done(); } }));
  const id = state.rawReport.get(key);
  return send(res, 200, { ok: true, report: id ? state.reports.get(id) : null });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const p = decodeURIComponent(url.pathname);
  try {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' });
      return res.end();
    }
    if (p === '/api/health') return send(res, 200, health());
    if (p === '/api/reports' && req.method === 'GET') return send(res, 200, sortedReports());
    if (p === '/api/stats') return send(res, 200, stats());
    if (p === '/api/device') return send(res, 200, state.device || {});
    if (p === '/api/raw') return send(res, 200, state.rawLog.slice().reverse());
    if (p === '/api/camera') {   // آخر صورة من الكاميرا + وش شاف الموديل
      const c = await fb('GET', '/camera').catch(() => null);
      return send(res, 200, c ? { ts: c.ts || null, seen: c.seen || '', hasImg: !!c.img } : {});
    }
    if (p === '/api/camera.jpg') {
      const c = await fb('GET', '/camera/img').catch(() => null);
      if (typeof c !== 'string') return send(res, 404, { error: 'no_frame' });
      res.writeHead(200, { 'Content-Type': 'image/jpeg', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' });
      return res.end(Buffer.from(c, 'base64'));
    }
    if (p === '/api/info') return send(res, 200, { citizenUrls: lanUrls().map(u => u + '/citizen') });
    if (p === '/api/citizen' && req.method === 'POST') return citizenReport(req, res);
    if (p === '/api/events') {
      res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store', Connection: 'keep-alive', 'Access-Control-Allow-Origin': '*' });
      res.write(`retry: 2000\nevent: hello\ndata: ${JSON.stringify({ reports: sortedReports(), device: state.device, health: health(), rawLog: state.rawLog.slice(-30) })}\n\n`);
      clients.add(res); res.on('close', () => clients.delete(res));
      return;
    }
    let m;
    if ((m = p.match(/^\/api\/photo\/([\w-]+)$/))) {
      const buf = await getPhoto(m[1]);
      if (!buf) return send(res, 404, { error: 'not_found' });
      res.writeHead(200, { 'Content-Type': 'image/jpeg', 'Cache-Control': 'max-age=86400', 'Access-Control-Allow-Origin': '*' });
      return res.end(buf);
    }
    if ((m = p.match(/^\/api\/reports\/(NB-\d+)$/))) {
      const r = state.reports.get(m[1]);
      if (!r) return send(res, 404, { error: 'not_found' });
      if (req.method === 'GET') return send(res, 200, r);
      if (req.method === 'PATCH') {
        const body = await readBody(req);
        if (!STATUSES.includes(body.status)) return send(res, 400, { error: 'bad_status', allowed: STATUSES });
        r.status = body.status; r.statusAt = Date.now();
        await fb('PATCH', `/reports/${r.id}`, { status: r.status, statusAt: r.statusAt });
        broadcast('report', { report: r });
        log(`📝 ${r.id} ← ${r.status}`);
        return send(res, 200, r);
      }
    }
    if (p.startsWith('/api/')) return send(res, 404, { error: 'not_found' });

    // ملفات الموقع
    const file = path.normalize(path.join(CONFIG.SITE_DIR, p === '/' ? 'index.html' : p === '/citizen' ? 'citizen.html' : p));
    if (!file.startsWith(CONFIG.SITE_DIR)) return send(res, 403, 'Forbidden', 'text/plain');
    fs.readFile(file, (err, data) => {
      if (err) return send(res, 404, 'Not found', 'text/plain');
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      res.end(data);
    });
  } catch (e) {
    log('⚠️', e.message);
    send(res, 500, { error: e.message });
  }
});

// عناوين اللابتوب على الشبكة (عشان الجوال يفتح صفحة المواطن)
function lanUrls() {
  const out = [];
  for (const list of Object.values(os.networkInterfaces())) for (const n of list || [])
    if (n.family === 'IPv4' && !n.internal && !n.address.startsWith('169.254')) out.push(`http://${n.address}:${CONFIG.PORT}`);
  return out;
}

/* ------------------------------ التشغيل ------------------------------ */
async function boot() {
  console.log('\n  🛣️  نبراس — الباك إند\n  ───────────────────────');
  for (;;) {
    try {
      const saved = (await fb('GET', '/reports')) || {};
      for (const r of Object.values(saved)) if (r && r.id) state.reports.set(r.id, r);
      const seq = await fb('GET', '/meta/seq');
      state.seq = Math.max(+seq || 0, ...[...state.reports.keys()].map(k => +k.slice(3) || 0), 0);
      state.firebase = true;
      break;
    } catch (e) {
      log(`⚠️ ما قدرنا نوصل لـ Firebase: ${e.message} — نحاول بعد 5 ثواني (تأكدي من الإنترنت)`);
      await sleep(5000);
    }
  }
  firebaseStream('/raw', onRawEvent, 'الرصد');
  firebaseStream('/location', onLocationEvent, 'موقع الجهاز');
  for (const r of state.reports.values()) if (!r.road) queueGeocode(r.id);
}

server.listen(CONFIG.PORT, () => {
  console.log(`  🌐 الموقع:  http://localhost:${CONFIG.PORT}`);
  console.log(`  🔌 الـ API: http://localhost:${CONFIG.PORT}/api/reports`);
  for (const u of lanUrls()) console.log(`  📱 صفحة المواطن (من الجوال على نفس الشبكة): ${u}/citizen`);
  console.log('');
  boot();
});
server.on('error', e => {
  if (e.code === 'EADDRINUSE') console.log(`\n  ⚠️ الباك إند شغّال أصلاً (المنفذ ${CONFIG.PORT} مستخدم). افتحي http://localhost:${CONFIG.PORT}\n`);
  else console.log(e);
  process.exit(1);
});
