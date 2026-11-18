/* ---------- Logo: road mark (replaces the lamp icon) ---------- */
const LOGO_SVG = `<svg viewBox="0 0 100 100" fill="currentColor" class="size-6" aria-hidden="true">
  <path d="M3 97C10 58 42 22 94 3C62 26 34 60 24 97Z"/>
  <path d="M73 97C69 64 74 32 94 3C84 34 83 66 91 97Z"/>
  <path d="M47 97C47 66 62 32 93 5" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray="10 7"/>
</svg>`;

/* ---------- Icons (lucide paths) ---------- */
const P = {
  house:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  map:'<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  table:'<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>',
  building:'<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>',
  settings:'<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
  languages:'<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  menu:'<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>',
  'shield-check':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'arrow-left':'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  'arrow-right':'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'chevron-right':'<path d="m9 18 6-6-6-6"/>',
  'chevron-left':'<path d="m15 18-6-6 6-6"/>',
  rotate:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  search:'<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
  pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  trash:'<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
  'arrow-up-down':'<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>',
  'arrow-down':'<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  'arrow-up':'<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  'image-off':'<line x1="2" x2="22" y1="2" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"/><path d="M21 15V5a2 2 0 0 0-2-2H9"/>',
  x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  alert:'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  bell:'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  'bell-off':'<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"/><path d="m2 2 20 20"/><path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"/>',
  'circle-check':'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  'circle-alert':'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>'
};
Object.assign(P, window.PAGES_ICONS||{});
const ic = (n, cls='size-4') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}" aria-hidden="true">${P[n]||''}</svg>`;

/* ---------- i18n ---------- */
const AR = {brand:'نبراس',brandSub:'منصة رصد عيوب أسطح الطرق',navHome:'الرئيسية',navMap:'خريطة العيوب',navDefects:'سجل العيوب',navEntities:'إدارة الجهات',navSettings:'الإعدادات',entitiesTitle:'إدارة الجهات',entitiesSub:'الجهات الحكومية المسؤولة عن معالجة عيوب الطرق',addEntity:'إضافة جهة',editEntity:'تعديل الجهة',deleteEntity:'حذف الجهة',deleteConfirm:'هل تريد حذف هذه الجهة؟ لا يمكن التراجع عن هذا الإجراء.',colEntity:'اسم الجهة',colRegion:'المدينة / المنطقة المسؤولة',colAssigned:'عدد العيوب المسندة',colContact:'مسؤول التواصل',colPhone:'رقم الهاتف',colActions:'الإجراءات',edit:'تعديل',save:'حفظ',cancel:'إلغاء',delete:'حذف',requiredFields:'يرجى تعبئة جميع الحقول المطلوبة',entityAdded:'تمت إضافة الجهة',entityUpdated:'تم تحديث بيانات الجهة',entityDeleted:'تم حذف الجهة',noEntities:'لا توجد جهات مضافة',settingsTitle:'الإعدادات',settingsSub:'تفضيلات العرض',language:'اللغة',languageDesc:'لغة واجهة المنصة واتجاه العرض',theme:'المظهر',themeDesc:'الوضع الفاتح أو الداكن',light:'فاتح',dark:'داكن',langToggle:'English',heroEyebrow:'للجهات الحكومية وهيئات الطرق المختصة',heroTitle:'رؤية واضحة لحالة أسطح الطرق في المملكة',heroBody:'نبراس منصة تعرض إحصائيات ومواقع عيوب أسطح الطرق — الحفر والتشققات وأضرار الرصف المشابهة — لمساعدة الجهات المختصة على تحديد الأولويات وتوجيه أعمال الصيانة بدقة.',viewMap:'عرض الخريطة',pillarsTitle:'ما الذي تقدمه نبراس',pillarMapTitle:'خريطة تفاعلية',pillarMapBody:'مواقع العيوب على خريطة المملكة مُلوّنة حسب درجة الخطورة.',pillarListTitle:'سجل تفصيلي',pillarListBody:'جدول شامل للعيوب مع البحث والفرز والتصفية وعرض التفاصيل.',scopeNote:'يقتصر نطاق المنصة على عيوب أسطح الطرق فقط.',filterType:'نوع العيب',filterCity:'المدينة',filterSeverity:'درجة الخطورة',filterFrom:'من تاريخ',filterTo:'إلى تاريخ',allTypes:'جميع الأنواع',allCities:'جميع المدن',allSeverities:'جميع الدرجات',reset:'إعادة التعيين',noData:'لا توجد عيوب مطابقة للتصفية الحالية',mapTitle:'خريطة العيوب',mapSub:'انقر على أي علامة لعرض تفاصيل العيب',legend:'درجة الخطورة',listTitle:'سجل العيوب',listSub:'جميع عيوب أسطح الطرق المرصودة',search:'ابحث برقم العيب أو الطريق أو المدينة',colId:'رقم العيب',colType:'النوع',colSeverity:'الخطورة',colCity:'المدينة',colRoad:'الطريق',colDate:'تاريخ الرصد',results:'نتيجة',page:'صفحة',of:'من',prev:'السابق',next:'التالي',detailsTitle:'تفاصيل العيب',type:'نوع العيب',severity:'درجة الخطورة',location:'الموقع',coordinates:'الإحداثيات',dateDetected:'تاريخ الرصد',area:'المساحة المتأثرة التقديرية',m2:'م²',photoPlaceholder:'صورة العيب — غير متوفرة حالياً',footer:'نبراس — منصة رصد عيوب أسطح الطرق في المملكة العربية السعودية',live:'مباشر',liveLegend:'رصد مباشر من الجهاز',source:'المصدر',sourceDevice:'جهاز نبراس',shock:'قوة الاهتزاز',newLive:'رصد جديد من جهاز نبراس',unknownRoad:'طريق غير محدد',srcCamera:'الكاميرا',srcSensor:'حساس الاهتزاز',confidence:'نسبة التأكد',loadingPhoto:'جاري تحميل الصورة…',soundOn:'التنبيه الصوتي مفعّل',soundOff:'التنبيه الصوتي متوقف',soundLabel:'التنبيه الصوتي',alertTitle:'رصد جديد!',alertSub:'جهاز نبراس رصد عيباً في الطريق الآن',viewOnMap:'عرض على الخريطة',dismiss:'إغلاق',justNow:'الآن',waiting:'لا توجد عيوب مرصودة بعد — بانتظار رصد من جهاز نبراس',
sizeCrack:'طول التشقق التقديري',sizeFaded:'طول الجزء الباهت',sizeRut:'طول التخدد',sizePothole:'قطر الحفرة التقديري',depth:'عمق الحفرة',depthWaiting:'بانتظار مستشعر العمق',cm:'سم',colStatus:'الحالة',status:'حالة البلاغ',statuses:{review:'يحتاج مراجعة',new:'جديد',in_progress:'قيد المعالجة',fixed:'تم الإصلاح',dismissed:'رصد خاطئ — إخفاء'},verify:'التحقق',confirmedBoth:'مؤكد — الحساس والكاميرا',camOnly:'رصدته الكاميرا',sensorOnly:'الحساس فقط — يحتاج تأكيد',hits:'مرات الرصد',lastSeen:'آخر رصد',changeStatus:'تحديث حالة البلاغ',statusUpdated:'تم تحديث حالة البلاغ',statusFailed:'تعذر تحديث الحالة — تأكدي أن الباك إند شغّال',alertConfirmed:'رصد مؤكد!',alertConfirmedSub:'الحساس والكاميرا أكّدوا وجود العيب في نفس المكان',alertReview:'صدمة في الطريق!',alertReviewSub:'حساس الاهتزاز رصد صدمة — بانتظار تأكيد الكاميرا',alertCamSub:'كاميرا نبراس رصدت عيباً في الطريق الآن',backendOk:'الباك إند متصل',backendDown:'الباك إند غير متصل — شغّلي start.command',fbDown:'الباك إند لا يصل إلى Firebase',deviceOnline:'الجهاز متصل',deviceOffline:'الجهاز غير متصل',deviceNone:'بانتظار الجهاز',device:'جهاز نبراس',sats:'قمر',speed:'السرعة',kmh:'كم/س',lastUpdate:'آخر تحديث',srcBoth:'الحساس + الكاميرا',
types:{pothole:'حفرة',longitudinal_crack:'تشقق طولي',alligator_crack:'تشقق شبكي (تمساحي)',rutting:'تخدد',raveling:'تفكك السطح',depression:'هبوط',faded_marking:'خطوط أرضية باهتة'},severities:{low:'منخفضة',medium:'متوسطة',high:'عالية'},cities:{riyadh:'الرياض',jeddah:'جدة',mecca:'مكة المكرمة',medina:'المدينة المنورة',dammam:'الدمام',khobar:'الخبر',taif:'الطائف',tabuk:'تبوك',abha:'أبها',buraydah:'بريدة'}};
const EN = {brand:'Nibras',brandSub:'Road Surface Defect Monitoring',navHome:'Home',navMap:'Defects Map',navDefects:'Defects List',navEntities:'Entities Management',navSettings:'Settings',entitiesTitle:'Entities Management',entitiesSub:'Government entities responsible for handling road defects',addEntity:'Add entity',editEntity:'Edit entity',deleteEntity:'Delete entity',deleteConfirm:'Delete this entity? This action cannot be undone.',colEntity:'Entity name',colRegion:'Responsible city / region',colAssigned:'Assigned defects',colContact:'Contact person',colPhone:'Phone',colActions:'Actions',edit:'Edit',save:'Save',cancel:'Cancel',delete:'Delete',requiredFields:'Please fill in all required fields',entityAdded:'Entity added',entityUpdated:'Entity updated',entityDeleted:'Entity deleted',noEntities:'No entities added',settingsTitle:'Settings',settingsSub:'Display preferences',language:'Language',languageDesc:'Interface language and layout direction',theme:'Appearance',themeDesc:'Light or dark mode',light:'Light',dark:'Dark',langToggle:'العربية',heroEyebrow:'For government and specialized road authorities',heroTitle:'A clear view of road surface condition across the Kingdom',heroBody:'Nibras displays statistics and locations of road-surface defects — potholes, cracks and similar pavement damage — helping authorities set priorities and direct maintenance work precisely.',viewMap:'View map',pillarsTitle:'What Nibras provides',pillarMapTitle:'Interactive map',pillarMapBody:'Defect locations across the Kingdom, color-coded by severity.',pillarListTitle:'Detailed registry',pillarListBody:'A complete defects table with search, sorting, filters and details.',scopeNote:'Platform scope is limited to road-surface defects only.',filterType:'Defect type',filterCity:'City',filterSeverity:'Severity',filterFrom:'From date',filterTo:'To date',allTypes:'All types',allCities:'All cities',allSeverities:'All severities',reset:'Reset',noData:'No defects match the current filters',mapTitle:'Defects Map',mapSub:'Click any marker to see defect details',legend:'Severity',listTitle:'Defects List',listSub:'All detected road-surface defects',search:'Search by defect ID, road or city',colId:'Defect ID',colType:'Type',colSeverity:'Severity',colCity:'City',colRoad:'Road',colDate:'Date detected',results:'results',page:'Page',of:'of',prev:'Previous',next:'Next',detailsTitle:'Defect details',type:'Defect type',severity:'Severity',location:'Location',coordinates:'Coordinates',dateDetected:'Date detected',area:'Estimated affected area',m2:'m²',photoPlaceholder:'Defect photo — not available yet',footer:'Nibras — Road surface defect monitoring platform, Kingdom of Saudi Arabia',live:'Live',liveLegend:'Live from device',source:'Source',sourceDevice:'Nibras device',shock:'Shock',newLive:'New detection from the Nibras device',unknownRoad:'Unspecified road',srcCamera:'Camera',srcSensor:'Shock sensor',confidence:'Confidence',loadingPhoto:'Loading photo…',soundOn:'Sound alerts on',soundOff:'Sound alerts off',soundLabel:'Sound alerts',alertTitle:'New detection!',alertSub:'The Nibras device just detected a road defect',viewOnMap:'View on map',dismiss:'Dismiss',justNow:'Just now',waiting:'No defects detected yet — waiting for the Nibras device',
sizeCrack:'Estimated crack length',sizeFaded:'Faded marking length',sizeRut:'Rutting length',sizePothole:'Estimated pothole width',depth:'Pothole depth',depthWaiting:'Waiting for depth sensor',cm:'cm',colStatus:'Status',status:'Report status',statuses:{review:'Needs review',new:'New',in_progress:'In progress',fixed:'Fixed',dismissed:'False detection — hide'},verify:'Verification',confirmedBoth:'Confirmed — sensor + camera',camOnly:'Detected by camera',sensorOnly:'Sensor only — needs confirmation',hits:'Times detected',lastSeen:'Last detected',changeStatus:'Update report status',statusUpdated:'Report status updated',statusFailed:'Could not update status — is the backend running?',alertConfirmed:'Confirmed detection!',alertConfirmedSub:'Sensor and camera both confirmed the defect at the same spot',alertReview:'Road shock!',alertReviewSub:'The shock sensor felt an impact — waiting for camera confirmation',alertCamSub:'The Nibras camera just detected a road defect',backendOk:'Backend connected',backendDown:'Backend offline — run start.command',fbDown:'Backend cannot reach Firebase',deviceOnline:'Device online',deviceOffline:'Device offline',deviceNone:'Waiting for device',device:'Nibras device',sats:'sats',speed:'Speed',kmh:'km/h',lastUpdate:'Last update',srcBoth:'Sensor + camera',
types:{pothole:'Pothole',longitudinal_crack:'Longitudinal crack',alligator_crack:'Alligator crack',rutting:'Rutting',raveling:'Raveling',depression:'Depression',faded_marking:'Faded lane markings'},severities:{low:'Low',medium:'Medium',high:'High'},cities:{riyadh:'Riyadh',jeddah:'Jeddah',mecca:'Makkah',medina:'Madinah',dammam:'Dammam',khobar:'Al Khobar',taif:'Taif',tabuk:'Tabuk',abha:'Abha',buraydah:'Buraydah'}};

/* ---------- Data (same deterministic generator as the original) ---------- */
if(window.PAGES_I18N){Object.assign(AR,PAGES_I18N.ar);Object.assign(EN,PAGES_I18N.en)}
const TYPES=['pothole','longitudinal_crack','alligator_crack','rutting','raveling','depression','faded_marking'];
const SEVS=['high','medium','low'];
const KIND={pothole:'pothole',longitudinal_crack:'crack',alligator_crack:'crack',rutting:'other',raveling:'other',depression:'other',faded_marking:'other'};
const SEV_COLOR={high:'#E11D48',medium:'#D97706',low:'#059669'};
const SEV_RANK={low:1,medium:2,high:3};
const CITIES={riyadh:{center:[24.7136,46.6753],weight:26,roads:[{ar:'طريق الملك فهد',en:'King Fahd Road'},{ar:'طريق الملك عبدالله',en:'King Abdullah Road'},{ar:'طريق العليا العام',en:'Olaya Main Road'},{ar:'الطريق الدائري الشمالي',en:'Northern Ring Road'}]},jeddah:{center:[21.5433,39.1728],weight:20,roads:[{ar:'طريق الملك عبدالعزيز',en:'King Abdulaziz Road'},{ar:'طريق المدينة المنورة',en:'Madinah Road'},{ar:'شارع التحلية',en:'Tahlia Street'}]},mecca:{center:[21.3891,39.8579],weight:12,roads:[{ar:'طريق إبراهيم الخليل',en:'Ibrahim Al-Khalil Road'},{ar:'الطريق الدائري الثالث',en:'Third Ring Road'}]},medina:{center:[24.5247,39.5692],weight:10,roads:[{ar:'طريق الملك فيصل',en:'King Faisal Road'},{ar:'طريق قباء',en:'Quba Road'}]},dammam:{center:[26.4207,50.0888],weight:11,roads:[{ar:'طريق الملك سعود',en:'King Saud Road'},{ar:'طريق الأمير محمد بن فهد',en:'Prince Mohammed bin Fahd Road'}]},khobar:{center:[26.2172,50.1971],weight:6,roads:[{ar:'طريق الكورنيش',en:'Corniche Road'},{ar:'شارع الملك خالد',en:'King Khalid Street'}]},taif:{center:[21.2703,40.4158],weight:5,roads:[{ar:'طريق الهدا',en:'Al-Hada Road'},{ar:'شارع شهار',en:'Shihar Street'}]},tabuk:{center:[28.3835,36.5662],weight:4,roads:[{ar:'طريق الأمير فهد بن سلطان',en:'Prince Fahd bin Sultan Road'},{ar:'طريق المدينة',en:'Madinah Road'}]},abha:{center:[18.2164,42.5053],weight:3,roads:[{ar:'طريق الملك فهد',en:'King Fahd Road'},{ar:'طريق السودة',en:'Al-Soudah Road'}]},buraydah:{center:[26.326,43.975],weight:3,roads:[{ar:'طريق الملك عبدالعزيز',en:'King Abdulaziz Road'},{ar:'طريق الملك فهد',en:'King Fahd Road'}]}};
const CITY_KEYS=Object.keys(CITIES);
function rng(seed){let t=seed;return()=>{t|=0;t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);e=e+Math.imul(e^e>>>7,61|e)^e;return((e^e>>>14)>>>0)/4294967296}}
function pick(r,list){const tot=list.reduce((a,[,w])=>a+w,0);let x=r()*tot;for(const[k,w]of list){x-=w;if(x<=0)return k}return list[list.length-1][0]}
const fmt=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
function generate(n){const r=rng(2030),now=new Date(),cw=CITY_KEYS.map(k=>[k,CITIES[k].weight]),tw=[['pothole',34],['longitudinal_crack',24],['alligator_crack',18],['rutting',10],['raveling',8],['depression',6]],sw=[['high',25],['medium',40],['low',35]],out=[];
  for(let i=0;i<n;i++){const city=pick(r,cw),c=CITIES[city],type=pick(r,tw),severity=pick(r,sw),days=Math.floor(r()**.8*365),d=new Date(now);d.setDate(d.getDate()-days);const road=c.roads[Math.floor(r()*c.roads.length)];
    out.push({id:'',type,severity,city,road,lat:+(c.center[0]+(r()-.5)*.14).toFixed(5),lng:+(c.center[1]+(r()-.5)*.14).toFixed(5),date:fmt(d),areaM2:+(.2+r()*(KIND[type]==='pothole'?2.5:18)).toFixed(1)})}
  out.sort((a,b)=>a.date.localeCompare(b.date));out.forEach((e,i)=>{e.id=`NB-${String(i+1).padStart(4,'0')}`});return out.reverse()}
const DEMO=[];   // بيانات حقيقية فقط من جهاز نبراس. للبيانات التجريبية: generate(150)
let LIVE=[];
const API=location.protocol.startsWith('http')?'':'http://localhost:3000';
// وضع المشاهدة (للحكام): يشتغل تلقائياً على رابط GitHub Pages أو بإضافة ?view للرابط — يقرأ النتائج من Firebase مباشرة وبدون أزرار تعديل
const VIEWER=/github\.io$/.test(location.hostname)||new URLSearchParams(location.search).has('view');
const FB_URL='https://nibs-eb9d5-default-rtdb.europe-west1.firebasedatabase.app';   // الباك إند
const STATUS_KEYS=['review','new','in_progress','fixed','dismissed'];
const STATUS_BADGE={review:'bg-amber-50 text-amber-800 ring-amber-600/25',new:'bg-sky-50 text-sky-800 ring-sky-600/25',in_progress:'bg-violet-50 text-violet-800 ring-violet-600/25',fixed:'bg-emerald-50 text-emerald-800 ring-emerald-600/25',dismissed:'bg-slate-100 text-slate-600 ring-slate-400/30'};
const statusBadge=s=>`<span class="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${STATUS_BADGE[s]||STATUS_BADGE.new}">${esc(T().statuses[s]||s)}</span>`;
let DEFECTS=DEMO.slice();
let entities=[{id:'ent-1',name:'الجهة (1) — اسم مؤقت',region:'riyadh',assignedDefects:38,contactPerson:'مسؤول التواصل 1',phone:'011 000 0001'},{id:'ent-2',name:'الجهة (2) — اسم مؤقت',region:'jeddah',assignedDefects:27,contactPerson:'مسؤول التواصل 2',phone:'012 000 0002'},{id:'ent-3',name:'الجهة (3) — اسم مؤقت',region:'mecca',assignedDefects:16,contactPerson:'مسؤول التواصل 3',phone:'012 000 0003'},{id:'ent-4',name:'الجهة (4) — اسم مؤقت',region:'medina',assignedDefects:14,contactPerson:'مسؤول التواصل 4',phone:'014 000 0004'},{id:'ent-5',name:'الجهة (5) — اسم مؤقت',region:'dammam',assignedDefects:19,contactPerson:'مسؤول التواصل 5',phone:'013 000 0005'},{id:'ent-6',name:'الجهة (6) — اسم مؤقت',region:'abha',assignedDefects:6,contactPerson:'مسؤول التواصل 6',phone:'017 000 0006'}];

/* ---------- State ---------- */
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const S={lang:store.get('nibras-lang')==='en'?'en':'ar',theme:store.get('nibras-theme')==='dark'?'dark':'light',filters:{type:'all',city:'all',severity:'all',from:'',to:''},q:'',sort:{key:'date',dir:'desc'},page:1,active:'landing'};
const T=()=>S.lang==='ar'?AR:EN;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

/* ---------- Static paint ---------- */
const NAV=[['landing','house','navHome'],['dashboard','gauge','navDashboard'],['map','map','navMap'],['defects','table','navDefects'],['code','ruler','navCode'],['device','cpu','navDevice'],['citizen','megaphone','navCitizen'],['quality','activity','navQuality'],['reports','file-text','navReports'],['about','info','navAbout'],['entities','building','navEntities'],['settings','settings','navSettings']];
if(VIEWER)NAV.splice(NAV.findIndex(n=>n[0]==='device'),1);
function paintNav(){
  $$('[data-nav]').forEach(n=>{const top=n.dataset.nav==='top',items=top?NAV.slice(0,9):NAV;
    n.innerHTML=items.map(([id,icn,k])=>`<a href="#${id}" class="${top?'toplink':'navlink'}" ${S.active===id?'aria-current="true"':''} ${n.dataset.nav==='drawer'?'data-close':''}>${top?'':ic(icn,'size-4')}${esc(T()[k])}</a>`).join('')});
}
function paintStatic(){
  const t=T(),rtl=S.lang==='ar';
  document.documentElement.lang=S.lang;document.documentElement.dir=rtl?'rtl':'ltr';
  document.documentElement.classList.toggle('dark',S.theme==='dark');
  $$('[data-t]').forEach(el=>el.textContent=t[el.dataset.t]);
  $$('[data-tp]').forEach(el=>el.placeholder=t[el.dataset.tp]);
  $$('.logo-tile').forEach(el=>el.innerHTML=LOGO_SVG);
  $$('[data-icon]').forEach(el=>{let n=el.dataset.icon;
    if(n==='arrow-fwd')n=rtl?'arrow-left':'arrow-right';
    if(n==='chev-back')n=rtl?'chevron-right':'chevron-left';
    if(n==='chev-fwd')n=rtl?'chevron-left':'chevron-right';
    el.innerHTML=ic(n,'size-full');el.classList.add('inline-block','shrink-0')});
  $$('.nudge').forEach(el=>el.style.setProperty('--nudge',rtl?'-4px':'4px'));
  $('#seg-lang').querySelectorAll('.seg').forEach(b=>b.setAttribute('aria-checked',b.dataset.v===S.lang));
  $('#seg-theme').querySelectorAll('.seg').forEach(b=>b.setAttribute('aria-checked',b.dataset.v===S.theme));
  // filter selects
  const opt=(v,l,cur)=>`<option value="${v}" ${v===cur?'selected':''}>${esc(l)}</option>`;
  $('#f-type').innerHTML=opt('all',t.allTypes,S.filters.type)+TYPES.map(k=>opt(k,t.types[k],S.filters.type)).join('');
  $('#f-city').innerHTML=opt('all',t.allCities,S.filters.city)+CITY_KEYS.map(k=>opt(k,t.cities[k],S.filters.city)).join('');
  $('#f-sev').innerHTML=opt('all',t.allSeverities,S.filters.severity)+SEVS.map(k=>opt(k,t.severities[k],S.filters.severity)).join('');
  document.title=S.lang==='ar'?'نبراس | Nibras':'Nibras | نبراس';
  paintNav();paintSound();renderStaticPages();renderPages();paintLiveStatus();paintDevice();renderLegend();renderDefects();renderEntities();refreshPopups();geoLayer&&geoLayer.setStyle(geoStyle);
}

/* ---------- Badges / details ---------- */
const BADGE={high:'bg-[#FFE4E6] text-[#9F1239] ring-[#E11D48]/20',medium:'bg-[#FEF3C7] text-[#92400E] ring-[#D97706]/20',low:'bg-[#ECFDF5] text-[#065F46] ring-[#059669]/20'};
const badge=s=>`<span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${BADGE[s]}"><span class="size-1.5 rounded-full bg-current"></span>${esc(T().severities[s])}</span>`;
const photo=(h,d)=>d&&d.photo?`<div class="photo-ph overflow-hidden rounded-lg border border-slate-200 bg-slate-100 ${h}"><img ${VIEWER?`data-fbphoto="${esc(d.photo)}"`:`src="${API}/api/photo/${encodeURIComponent(d.photo)}"`} alt="" class="h-full w-full object-cover"></div>`:`<div class="photo-ph flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 text-slate-500 ${h}">${ic('image-off','size-6')}<span class="text-xs font-medium">${esc(T().photoPlaceholder)}</span></div>`;
const roadName=d=>d.road?d.road[S.lang]:T().unknownRoad;
const placeName=d=>{const t=T(),sep=S.lang==='ar'?'، ':', ';return [d.road?d.road[S.lang]:null,d.district?d.district[S.lang]:null,t.cities[d.city]].filter(Boolean).join(sep)};
const tfmt=ts=>new Date(ts).toLocaleString(S.lang==='ar'?'ar-SA-u-ca-gregory-nu-latn':'en-GB',{dateStyle:'medium',timeStyle:'short'});
function verifyHtml(d){const t=T();
  if(d.source==='both')return `<span class="inline-flex items-center gap-1 font-semibold text-emerald-700">${ic('circle-check','size-4')}${esc(t.confirmedBoth)}</span>`;
  if(d.source==='camera')return `<span class="inline-flex items-center gap-1 text-sky-700">${ic('circle-check','size-4')}${esc(t.camOnly)}</span>`;
  if(d.source==='citizen')return `<span class="inline-flex items-center gap-1 text-amber-700">${ic('megaphone','size-4')}${esc(t.citizenOnly)}</span>`;
  return `<span class="inline-flex items-center gap-1 text-amber-700">${ic('circle-alert','size-4')}${esc(t.sensorOnly)}</span>`}
function sizeHtml(d){const t=T();return `<span>≈ <bdo dir="ltr">${d.sizeCm}</bdo> ${esc(t.cm)}</span>`}
function sizeLabel(d){const t=T();return d.type==='pothole'?t.sizePothole:d.type==='faded_marking'?t.sizeFaded:d.type==='rutting'?t.sizeRut:t.sizeCrack}
// ميلان الشارع عند العيب + حالة تصريف المياه
function slopeHtml(d){const t=T(),poor=d.drainage==='poor',c=poor?'text-rose-700':'text-emerald-700';
  return `<span><bdo dir="ltr">${d.crossPct.toFixed(1)}%</bdo>${d.gradePct!=null?` <span class="text-slate-500">· ${esc(t.slopeGrade)} <bdo dir="ltr">${d.gradePct.toFixed(1)}%</bdo></span>`:''}</span>`}
function drainHtml(d){const t=T(),poor=d.drainage==='poor';return `<span class="inline-flex items-center gap-1 ${poor?'text-rose-700':'text-emerald-700'}">${ic(poor?'circle-alert':'circle-check','size-4')}${esc(poor?t.slopePoor:t.slopeOk)}</span>`}
function depthHtml(d){const t=T();return d.depthCm!=null?`<span><bdo dir="ltr">${d.depthCm}</bdo> ${esc(t.cm)}</span>`:`<span class="text-slate-400">${esc(t.depthWaiting)}</span>`}
function details(d,compact){const t=T();const rows=[[t.type,esc(t.types[d.type])],[t.severity,badge(d.severity)]];
  if(d.live)rows.push([t.status,statusBadge(d.status)],[t.verify,verifyHtml(d)]);
  rows.push([t.location,esc(placeName(d))],[t.coordinates,`<bdo dir="ltr" class="font-mono text-xs">${d.lat}, ${d.lng}</bdo>`],[t.dateDetected,d.firstSeen?`<span>${esc(tfmt(d.firstSeen))}</span>`:`<bdo dir="ltr">${d.date}</bdo>`]);
  if(d.live&&d.fixCheck)rows.push([t.fxRow,fixHtml(d)]);
  if(d.live&&d.fixMs!=null&&d.status==='fixed')rows.push([t.fxDur,`<span class="font-semibold text-slate-900">${esc(durTxt(d.fixMs))}</span>`]);
  if(d.live&&d.hits>1)rows.push([t.hits,`${d.hits} · <span class="text-slate-500">${esc(t.lastSeen)}: <span>${esc(tfmt(d.lastSeen))}</span></span>`]);
  if(d.shock!=null)rows.push([t.shock,`<bdo dir="ltr">${d.shock} g</bdo>`]);
  if(d.conf!=null)rows.push([t.confidence,`<bdo dir="ltr">${Math.round(d.conf*100)}%</bdo>`]);
  if(d.sizeCm!=null)rows.push([sizeLabel(d),sizeHtml(d)]);
  if(d.live&&d.type==='pothole')rows.push([t.depth,depthHtml(d)]);
  if(d.crossPct!=null){rows.push([t.slopeAt,slopeHtml(d)]);if(d.drainage)rows.push([t.slopeDrain,drainHtml(d)])}
  if(d.live&&d.code){const L=o=>o?(S.lang==='ar'?o.ar:o.en)||'':'',w='block max-w-xs whitespace-normal text-end';
    if(d.code.rule)rows.push([t.codeRule,`<span class="${w}">${esc(L(d.code.rule))}</span>`]);
    if(d.code.action)rows.push([t.codeAction,`<span class="${w} font-semibold">${esc(L(d.code.action))}</span>`]);
    if(d.code.drainage)rows.push(['',`<span class="${w} text-rose-700">${esc(L(d.code.drainage))}</span>`]);
    if(!compact&&d.code.ref)rows.push([t.codeRef,`<span class="${w} text-xs font-normal text-slate-500">${esc(L(d.code.ref))}</span>`])}
  if(d.citizen){rows.push([t.navCitizen,`${d.citizen.count||1}`]);if(!compact)(d.citizen.notes||[]).forEach(n=>rows.push(['',`<span class="block max-w-xs whitespace-normal text-start text-sm font-normal text-slate-600">“${esc(n.desc)}”${n.name?` — ${esc(n.name)}`:''}</span>`]))}
  if(!compact&&d.areaM2!=null)rows.push([t.area,`${d.areaM2} ${t.m2}`]);
  return `<dl class="divide-y divide-slate-100 text-sm">${rows.map(([k,v])=>`<div class="flex items-center justify-between gap-4 py-2"><dt class="shrink-0 text-slate-500">${esc(k)}</dt><dd class="text-end font-medium text-slate-900">${v}</dd></div>`).join('')}</dl>`}

/* ---------- Map ---------- */
let map,markers=[],geoLayer=null;
function geoStyle(f){const cs=getComputedStyle(document.documentElement),v=n=>cs.getPropertyValue(n).trim();return{color:v('--land-line'),weight:f.properties.k?1.4:.8,fillColor:f.properties.k?v('--land-ksa'):v('--land'),fillOpacity:1}}
function renderLegend(){const t=T();$('#legend').innerHTML=`<span class="font-medium text-slate-700">${esc(t.legend)}:</span>`+SEVS.map(s=>`<span class="flex items-center gap-1.5 text-slate-600"><span class="size-3 rounded-full ring-2 ring-white" style="background:${SEV_COLOR[s]}"></span>${esc(t.severities[s])} (${DEFECTS.filter(d=>d.severity===s).length})</span>`).join('')+(LIVE.length?`<span class="flex items-center gap-1.5 text-slate-600"><span class="live-dot"></span>${esc(t.liveLegend)} (${LIVE.length})</span>`:'')}
function popupHtml(d){const t=T();return `<div dir="${S.lang==='ar'?'rtl':'ltr'}" class="font-sans"><div class="mb-2 flex items-center justify-between"><span class="text-sm font-semibold text-slate-900">${esc(t.detailsTitle)}</span><span class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-600">${d.id}</span></div>${photo('h-24',d)}${details(d,true)}</div>`}
function refreshPopups(){markers.forEach(({m,d})=>m.setPopupContent(popupHtml(d)))}
function initMap(){
  if(typeof L==='undefined'){$('#leafletMap').innerHTML='<div class="grid h-full place-items-center text-sm text-slate-500">Map unavailable</div>';return}
  map=L.map('leafletMap',{center:[23.8859,45.0792],zoom:5,minZoom:4,scrollWheelZoom:true});
  map.on('popupopen',e=>hydratePhotos(e.popup.getElement()));
  const css=getComputedStyle(document.documentElement);
  // Offline vector base (works everywhere), real OSM tiles drawn on top when the host allows them
  const geo=window.SAUDI_GEO||null;
  // الخريطة الاحتياطية تحت صور الخريطة الحقيقية (تظهر بس إذا ما فيه إنترنت)
  map.createPane('basePane').style.zIndex=150;
  if(geo){geoLayer=L.geoJSON(geo,{interactive:false,style:geoStyle,pane:'basePane'}).addTo(map)}
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',errorTileUrl:'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='}).addTo(map);
  DEFECTS.forEach(addMarker);
}
function addMarker(d){if(!map)return;const m=L.circleMarker([d.lat,d.lng],d.live?{radius:d.status==='fixed'?7:11,color:d.status==='review'?'#B45309':'#0F172A',weight:3,dashArray:d.status==='review'?'4 3':null,fillColor:d.status==='fixed'?'#94A3B8':SEV_COLOR[d.severity],fillOpacity:d.status==='review'?.55:1,className:'defect-marker'+(d.status==='fixed'?'':' live-marker')}:{radius:d.severity==='high'?8:d.severity==='medium'?7:6,color:'#FFFFFF',weight:1.5,fillColor:SEV_COLOR[d.severity],fillOpacity:.9,className:`defect-marker defect-marker-${d.severity}`}).bindPopup(popupHtml(d),{minWidth:260,maxWidth:300}).addTo(map);if(d.live)m.bringToFront();markers.push({m,d})}

/* ---------- Defects table ---------- */
const PAGE=15;
function filtered(){const t=T(),f=S.filters,q=S.q.trim().toLowerCase();
  let rows=DEFECTS.filter(d=>(f.type==='all'||d.type===f.type)&&(f.city==='all'||d.city===f.city)&&(f.severity==='all'||d.severity===f.severity)&&(!f.from||d.date>=f.from)&&(!f.to||d.date<=f.to));
  if(q)rows=rows.filter(d=>d.id.toLowerCase().includes(q)||(d.road?(d.road.ar.includes(q)||d.road.en.toLowerCase().includes(q)):false)||(d.district?(d.district.ar.includes(q)||d.district.en.toLowerCase().includes(q)):false)||AR.cities[d.city].includes(q)||EN.cities[d.city].toLowerCase().includes(q));
  const {key,dir}=S.sort,val=d=>key==='type'?t.types[d.type]:key==='severity'?SEV_RANK[d.severity]:key==='city'?t.cities[d.city]:key==='road'?roadName(d):key==='status'?STATUS_KEYS.indexOf(d.status):key==='date'?(d.lastSeen||d.date):d[key];
  rows=[...rows].sort((a,b)=>{const x=val(a),y=val(b);const c=typeof x==='number'?x-y:String(x).localeCompare(String(y),S.lang);if(c===0&&a.live&&b.live)return b.id.localeCompare(a.id);return c===0?((b.live?1:0)-(a.live?1:0)):(dir==='asc'?c:-c)});
  return rows}
function renderDefects(){const t=T(),rows=filtered(),pages=Math.max(1,Math.ceil(rows.length/PAGE));S.page=Math.min(S.page,pages);
  const cols=[['id',t.colId],['type',t.colType],['severity',t.colSeverity],['status',t.colStatus],['city',t.colCity],['road',t.colRoad],['date',t.colDate]];
  $('#defHead').innerHTML=cols.map(([k,l])=>{const on=S.sort.key===k;return `<th class="th"><button type="button" data-sort="${k}" class="inline-flex items-center gap-1.5 font-semibold text-slate-600 transition-colors duration-150 hover:text-slate-900">${esc(l)}${on?ic(S.sort.dir==='asc'?'arrow-up':'arrow-down','size-3.5 text-emerald-700'):ic('arrow-up-down','size-3.5 text-slate-400')}</button></th>`}).join('');
  const slice=rows.slice((S.page-1)*PAGE,S.page*PAGE);
  $('#defBody').innerHTML=slice.map(d=>`<tr data-id="${d.id}" class="cursor-pointer border-b border-slate-200 transition-colors duration-150 last:border-0 hover:bg-emerald-50/50"><td class="td font-mono text-xs text-slate-600"><span class="inline-flex items-center gap-2">${d.id}${d.live?`<span class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-sans text-[11px] font-semibold text-emerald-700"><span class="live-dot"></span>${esc(t.live)}</span>`:''}</span></td><td class="td font-medium text-slate-900">${esc(t.types[d.type])}</td><td class="td">${badge(d.severity)}</td><td class="td">${d.live?statusBadge(d.status):''}</td><td class="td">${esc(t.cities[d.city])}</td><td class="td text-slate-600">${esc(roadName(d))}</td><td class="td tabular-nums text-slate-600" dir="ltr"><span class="${S.lang==='ar'?'block text-end':''}">${d.date}</span></td></tr>`).join('')
    ||`<tr><td colspan="7" class="py-10 text-center text-slate-500">${esc(DEFECTS.length?t.noData:t.waiting)}</td></tr>`;
  $('#resultCount').textContent=`${rows.length.toLocaleString('en-US')} ${t.results}`;
  $('#pageInfo').textContent=`${t.page} ${S.page} ${t.of} ${pages}`;
  $('#prevBtn').disabled=S.page<=1;$('#nextBtn').disabled=S.page>=pages;}

/* ---------- Entities ---------- */
function renderEntities(){const t=T();
  $('#entHead').innerHTML=[t.colEntity,t.colRegion,t.colAssigned,t.colContact,t.colPhone].map(l=>`<th class="th font-semibold text-slate-600">${esc(l)}</th>`).join('')+`<th class="th !text-end font-semibold text-slate-600">${esc(t.colActions)}</th>`;
  $('#entBody').innerHTML=entities.map(e=>`<tr class="border-b border-slate-200 transition-colors last:border-0 hover:bg-muted/50"><td class="td font-medium text-slate-900">${esc(e.name)}</td><td class="td">${esc(t.cities[e.region])}</td><td class="td tabular-nums">${e.assignedDefects.toLocaleString('en-US')}</td><td class="td text-slate-600">${esc(e.contactPerson)}</td><td class="td tabular-nums text-slate-600"><bdo dir="ltr">${esc(e.phone)}</bdo></td><td class="td text-end"><div class="inline-flex gap-1"><button type="button" class="btn-icon" data-edit="${e.id}" aria-label="${esc(t.edit)}">${ic('pencil')}</button><button type="button" class="btn-icon text-rose-700 hover:!bg-rose-50 hover:!text-rose-800" data-del="${e.id}" aria-label="${esc(t.delete)}">${ic('trash')}</button></div></td></tr>`).join('')
    ||`<tr><td colspan="6" class="py-10 text-center text-slate-500">${esc(t.noEntities)}</td></tr>`;}



/* ---------- Sound alert for real detections ---------- */
let audioCtx=null;
let soundOn=store.get('nibras-sound')!=='off';
function unlockAudio(){try{if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume()}catch(e){}}
['pointerdown','keydown','touchstart'].forEach(ev=>document.addEventListener(ev,unlockAudio,{passive:true}));
function beep(t0,freq,dur){const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='square';o.frequency.setValueAtTime(freq,t0);g.gain.setValueAtTime(0.0001,t0);g.gain.exponentialRampToValueAtTime(0.25,t0+0.02);g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);o.connect(g).connect(audioCtx.destination);o.start(t0);o.stop(t0+dur+0.05)}
function alertSound(sev){
  if(!soundOn)return;unlockAudio();if(!audioCtx)return;
  const reps=sev==='high'?3:sev==='medium'?2:1,now=audioCtx.currentTime+0.05;
  for(let i=0;i<reps;i++){beep(now+i*0.5,988,0.18);beep(now+i*0.5+0.2,740,0.22)}
}
function paintSound(){const b=$('#soundBtn');if(!b)return;const t=T();b.innerHTML=ic(soundOn?'bell':'bell-off','size-4');b.setAttribute('aria-label',t.soundLabel);b.title=soundOn?t.soundOn:t.soundOff;b.setAttribute('aria-pressed',soundOn);b.classList.toggle('text-emerald-700',soundOn)}



/* ---------- Photos: served by the backend (/api/photo/:key) ---------- */
function hydratePhotos(){}

/* ---------- Big alert card for a new detection ---------- */
let alertTimer=null;
function hideBigAlert(){const el=$('#bigAlert');el.hidden=true;el.innerHTML='';clearTimeout(alertTimer)}
function showBigAlert(d,extra){
  const t=T(),el=$('#bigAlert'),col=SEV_COLOR[d.severity];
  const title=d.source==='both'?t.alertConfirmed:d.source==='sensor'?t.alertReview:d.source==='citizen'?t.alertCitizen:t.alertTitle,sub=d.source==='both'?t.alertConfirmedSub:d.source==='sensor'?t.alertReviewSub:d.source==='citizen'?t.alertCitizenSub:t.alertCamSub;
  const cell=(k,v)=>`<div class="rounded-xl bg-slate-50 p-4"><div class="text-sm text-slate-500">${esc(k)}</div><div class="mt-1 text-lg font-bold text-slate-900">${v}</div></div>`;
  el.style.setProperty('--alert',col);
  el.innerHTML=`
  <div class="big-alert-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm" data-x></div>
  <div class="big-alert-edge pointer-events-none absolute inset-0"></div>
  <div class="relative grid h-full place-items-center p-4">
    <div class="big-alert-card max-h-full w-[min(720px,100%)] overflow-y-auto rounded-3xl bg-white shadow-2xl" dir="${S.lang==='ar'?'rtl':'ltr'}" role="alertdialog" aria-live="assertive">
      <div class="flex flex-col items-center gap-3 px-6 pt-8 pb-7 text-center text-white" style="background:${col}">
        <span class="big-alert-icon grid size-24 place-items-center rounded-full bg-white/25 ring-8 ring-white/15">${ic('alert','size-14')}</span>
        <div class="text-5xl font-extrabold tracking-tight sm:text-6xl">${esc(title)}</div>
        <div class="text-lg text-white/90 sm:text-xl">${esc(sub)}</div>
        <div class="mt-2 rounded-full bg-white px-6 py-2 text-2xl font-extrabold" style="color:${col}">${esc(t.severity)}: ${esc(t.severities[d.severity])}</div>
      </div>
      ${d.photo?`<div class="px-5 pt-5">${photo('h-60',d)}</div>`:''}
      <div class="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3">
        ${cell(t.type,esc(t.types[d.type]))}
        ${cell(t.location,esc(placeName(d)))}
        ${cell(t.dateDetected,`${esc(t.justNow)} · <bdo dir="ltr">${new Date().toLocaleTimeString(S.lang==='ar'?'ar-SA':'en-US',{hour:'2-digit',minute:'2-digit'})}</bdo>`)}
        ${cell(t.coordinates,`<bdo dir="ltr" class="font-mono text-sm">${d.lat}, ${d.lng}</bdo>`)}
        ${extra&&extra.name?cell(t.citName2,esc(extra.name)):''}
        ${extra&&extra.desc?cell(t.citDesc,esc(extra.desc)):''}
        ${cell(t.verify,verifyHtml(d))}
        ${d.shock!=null?cell(t.shock,`<bdo dir="ltr">${d.shock} g</bdo>`):''}
        ${d.conf!=null?cell(t.confidence,`<bdo dir="ltr">${Math.round(d.conf*100)}%</bdo>`):''}
        ${d.sizeCm!=null?cell(sizeLabel(d),sizeHtml(d)):''}
        ${d.type==='pothole'?cell(t.depth,depthHtml(d)):''}
        ${d.crossPct!=null?cell(t.slopeAt,slopeHtml(d)):''}
        ${cell(t.colId,`<span class="font-mono text-base">${d.id}</span>`)}
      </div>
      <div class="flex flex-wrap gap-3 px-5 pb-5">
        <button type="button" data-map class="btn-primary h-14 flex-1 px-6 text-lg">${ic('map','size-5')}${esc(t.viewOnMap)}</button>
        <button type="button" data-x class="btn-outline h-14 px-6 text-lg">${esc(t.dismiss)}</button>
      </div>
      <div class="big-alert-progress h-2" style="background:${col}"></div>
    </div>
  </div>`;
  el.hidden=false;hydratePhotos(el);
  el.querySelectorAll('[data-x]').forEach(b=>b.onclick=hideBigAlert);
  el.querySelector('[data-map]').onclick=()=>{hideBigAlert();document.getElementById('map').scrollIntoView({behavior:'smooth'});if(map)setTimeout(()=>map.flyTo([d.lat,d.lng],18,{duration:1.2}),400)};
  clearTimeout(alertTimer);alertTimer=setTimeout(hideBigAlert,15000);
}

/* ---------- Live data from the Nibras backend (REST + Server-Sent Events) ---------- */
const VALID_SEV=['low','medium','high'];
function nearestCity(lat,lng){let best='riyadh',bd=Infinity;for(const k of CITY_KEYS){const[a,b]=CITIES[k].center;const dd=(a-lat)**2+((b-lng)*Math.cos(lat*Math.PI/180))**2;if(dd<bd){bd=dd;best=k}}return best}
function fromReport(r){return{id:r.id,key:r.id,live:true,
  type:TYPES.includes(r.type)?r.type:'pothole',severity:VALID_SEV.includes(r.severity)?r.severity:'medium',
  city:CITY_KEYS.includes(r.city)?r.city:nearestCity(+r.lat,+r.lng),
  road:r.road&&r.road.ar?r.road:null,district:r.district&&r.district.ar?r.district:null,
  lat:+(+r.lat).toFixed(6),lng:+(+r.lng).toFixed(6),date:fmt(new Date(r.firstSeen||Date.now())),
  firstSeen:r.firstSeen||null,lastSeen:r.lastSeen||r.firstSeen||null,
  shock:r.sensor&&r.sensor.g!=null?+r.sensor.g:null,conf:r.camera&&r.camera.conf!=null?+r.camera.conf:null,sizeCm:r.camera&&r.camera.sizeCm?+r.camera.sizeCm:null,depthCm:r.depthCm?+r.depthCm:null,crossPct:r.crossPct!=null&&isFinite(+r.crossPct)?+r.crossPct:null,gradePct:r.gradePct!=null&&isFinite(+r.gradePct)?+r.gradePct:null,drainage:r.drainage==='poor'||r.drainage==='ok'?r.drainage:null,code:r.code&&typeof r.code==='object'?r.code:null,
  photo:typeof r.photo==='string'&&r.photo?r.photo:null,source:['both','camera','sensor','citizen'].includes(r.source)?r.source:'sensor',citizen:r.citizen||null,
  confirmed:!!r.confirmed,status:STATUS_KEYS.includes(r.status)?r.status:'new',hits:r.hits||1,areaM2:null,
  fixCheck:['pending','verified','failed'].includes(r.fixCheck)?r.fixCheck:null,fixedAt:r.fixedAt||null,verifiedAt:r.verifiedAt||null,
  fixMs:r.fixedAt&&r.firstSeen?Math.max(0,r.fixedAt-r.firstSeen):null}}
// مدة مقروءة: دقائق / ساعات / أيام
function durTxt(ms){const t=T(),m=ms/60000;return m<60?`${Math.max(1,Math.round(m))} ${t.uMin}`:m<1440?`${(m/60).toFixed(m<600?1:0)} ${t.uHour}`:`${(m/1440).toFixed(m<14400?1:0)} ${t.uDay}`}
function fixHtml(d){const t=T();if(d.fixCheck==='verified')return `<span class="inline-flex items-center gap-1 font-medium text-emerald-700">${ic('circle-check','size-4')}${esc(t.fxOk)}</span>${d.verifiedAt?` <span class="text-slate-500">· ${esc(t.fxAt)} ${esc(tfmt(d.verifiedAt))}</span>`:''}`;
  if(d.fixCheck==='pending')return `<span class="inline-flex items-center gap-1 text-sky-700">${ic('activity','size-4')}${esc(t.fxWait)}</span>`;
  if(d.fixCheck==='failed')return `<span class="inline-flex items-center gap-1 text-rose-700">${ic('circle-alert','size-4')}${esc(t.fxBad)}</span>`;return ''}
const REPORTS=new Map();
function rebuild(){LIVE=[...REPORTS.values()].filter(r=>r.status!=='dismissed').map(fromReport);DEFECTS=LIVE;
  markers.forEach(({m})=>m.remove());markers=[];LIVE.forEach(addMarker);renderLegend();renderDefects();renderPages()}
let backend={up:false,firebase:false},device=null,devMarker=null,liveStarted=false;
function setBackend(up,h){backend.up=up;if(h)backend.firebase=!!h.firebase;paintLiveStatus()}
function deviceOnline(){return !!(device&&device.ts&&Date.now()-device.ts<30000)}
function paintLiveStatus(){const el=$('#liveStatus');if(!el)return;const t=T();
  if(VIEWER){const ok=backend.up;el.innerHTML=`<span class="inline-flex items-center gap-1.5"><span class="inline-block size-2 rounded-full" style="background:${ok?'#059669':'#D97706'}"></span>${esc(S.lang==='ar'?(ok?'عرض مباشر للنتائج':'جاري الاتصال...'):(ok?'Live results':'Connecting...'))}</span>`;return}
  const dot=c=>`<span class="inline-block size-2 rounded-full" style="background:${c}"></span>`;
  const be=!backend.up?[dot('#E11D48'),t.backendDown]:!backend.firebase?[dot('#D97706'),t.fbDown]:[dot('#059669'),t.backendOk];
  let dv=[dot('#94A3B8'),t.deviceNone];
  if(device&&device.lat)dv=deviceOnline()?[dot('#059669'),`${t.deviceOnline}${device.sats!=null?` · GPS ${device.sats} ${t.sats}`:''}`]:[dot('#E11D48'),t.deviceOffline];
  el.innerHTML=`<span class="inline-flex items-center gap-1.5">${be[0]}${esc(be[1])}</span><span class="text-slate-300">|</span><span class="inline-flex items-center gap-1.5">${dv[0]}${esc(dv[1])}</span>`}
function paintDevice(){paintLiveStatus();if(!map)return;
  if(!device||!isFinite(+device.lat)||!+device.lat){if(devMarker){devMarker.remove();devMarker=null}renderDevicePage();return}
  const t=T(),on=deviceOnline(),ll=[+device.lat,+device.lng];
  const icon=L.divIcon({className:'',html:`<div class="device-pin ${on?'':'off'}"><span></span></div>`,iconSize:[22,22],iconAnchor:[11,11]});
  const pop=`<div dir="${S.lang==='ar'?'rtl':'ltr'}" class="font-sans text-sm"><div class="font-semibold text-slate-900">${esc(t.device)}</div><div class="${on?'text-emerald-700':'text-rose-700'}">${esc(on?t.deviceOnline:t.deviceOffline)}</div>${device.speed!=null?`<div>${esc(t.speed)}: ${(+device.speed).toFixed(0)} ${esc(t.kmh)}</div>`:''}${device.sats!=null?`<div>GPS: ${device.sats} ${esc(t.sats)}${device.hdop!=null?` · HDOP <span dir="ltr">${(+device.hdop).toFixed(1)}</span>`:''}</div>`:''}<div class="text-slate-500">${esc(t.lastUpdate)}: <span>${device.ts?esc(tfmt(device.ts)):'—'}</span></div><div class="font-mono text-xs text-slate-500" dir="ltr">${(+device.lat).toFixed(6)}, ${(+device.lng).toFixed(6)}</div></div>`;
  if(!devMarker){devMarker=L.marker(ll,{icon,zIndexOffset:1000}).bindPopup(pop).addTo(map)}else{devMarker.setLatLng(ll).setIcon(icon).setPopupContent(pop)}renderDevicePage()}
function connectViewer(){let first=true,timer=null;
  const load=async()=>{try{const o=(await fetch(`${FB_URL}/reports.json`,{cache:'no-store'}).then(r=>r.json()))||{};
    const before=new Map(REPORTS);REPORTS.clear();Object.values(o).forEach(r=>{if(r&&r.id)REPORTS.set(r.id,r)});rebuild();setBackend(true,{firebase:true});
    if(first){first=false;if(LIVE.length&&map)map.fitBounds(L.latLngBounds(LIVE.map(d=>[d.lat,d.lng])).pad(.3),{maxZoom:16});liveStarted=true;return}
    for(const r of REPORTS.values()){if(r.status==='dismissed')continue;const old=before.get(r.id);
      if(!old||(r.confirmed&&!old.confirmed)){const d=fromReport(r);showBigAlert(d,!!(r.citizen&&!r.camera&&!r.sensor));alertSound(d.severity);if(map)map.flyTo([d.lat,d.lng],17,{duration:1.2});break}}
  }catch(e){setBackend(false)}};
  const soon=()=>{clearTimeout(timer);timer=setTimeout(load,500)};
  load();setInterval(load,15000);
  if(window.EventSource){try{const es=new EventSource(`${FB_URL}/reports.json`);es.addEventListener('put',soon);es.addEventListener('patch',soon)}catch(e){}}
  const loadPhotos=()=>document.querySelectorAll('img[data-fbphoto]').forEach(img=>{const k=img.dataset.fbphoto;img.removeAttribute('data-fbphoto');
    fetch(`${FB_URL}/photos/${encodeURIComponent(k)}.json`).then(r=>r.json()).then(b=>{if(typeof b==='string')img.src=b.startsWith('data:')?b:`data:image/jpeg;base64,${b}`}).catch(()=>{})});
  new MutationObserver(loadPhotos).observe(document.body,{childList:true,subtree:true});
  const dev=document.getElementById('device');if(dev)dev.style.display='none';
}
function connectLive(){if(VIEWER)return connectViewer();
  if(!window.EventSource){setBackend(false);return}
  const es=new EventSource(`${API}/api/events`);
  es.addEventListener('hello',e=>{const m=JSON.parse(e.data);REPORTS.clear();(m.reports||[]).forEach(r=>REPORTS.set(r.id,r));rebuild();device=m.device||null;setBackend(true,m.health);setRawLog(m.rawLog);paintDevice();
    if(!liveStarted&&LIVE.length&&map){liveStarted=true;map.fitBounds(L.latLngBounds(LIVE.map(d=>[d.lat,d.lng])).pad(.3),{maxZoom:16})}liveStarted=true});
  es.addEventListener('report',e=>{const m=JSON.parse(e.data),old=REPORTS.get(m.report.id);REPORTS.set(m.report.id,m.report);rebuild();
    if(m.report.status==='dismissed')return;
    // الإنذار الكبير + الصوت: بس لعيب جديد (نوع جديد بالمكان). نفس النوع بنفس المكان = تنبيه صغير صامت بدون تكرار الإنذار
    if(m.isNew||m.citizen){const d=fromReport(m.report);showBigAlert(d,m.citizen);alertSound(d.severity);if(map)map.flyTo([d.lat,d.lng],17,{duration:1.2})}
    else if(old&&(m.report.hits||1)>(old.hits||1)){const t=T();toast(`${t.reDetected} ${m.report.id} — ${t.types[m.report.type]} (${m.report.hits}×)`)}});
  es.addEventListener('device',e=>{device=JSON.parse(e.data);paintDevice()});
  es.addEventListener('raw',e=>onRawLog(JSON.parse(e.data)));
  es.addEventListener('health',e=>setBackend(true,JSON.parse(e.data)));
  es.onopen=()=>setBackend(true);
  es.onerror=()=>setBackend(false);
}
async function setStatus(id,status){const t=T();
  try{const r=await fetch(`${API}/api/reports/${id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({status})});
    if(!r.ok)throw 0;const rep=await r.json();REPORTS.set(rep.id,rep);rebuild();toast(t.statusUpdated);showDefect(id)}
  catch(e){toast(t.statusFailed,false)}}

/* ---------- Dialogs & toasts ---------- */
let lastFocus=null;
function openDialog(html,maxW){lastFocus=document.activeElement;const box=$('#dlgBox');box.className=box.className.replace(/sm:max-w-\S+/g,'')+' '+maxW;box.dir=S.lang==='ar'?'rtl':'ltr';
  box.innerHTML=html+`<button type="button" data-dclose class="btn-icon absolute top-2 end-2 size-8" aria-label="close">${ic('x')}</button>`;$('#dlg').hidden=false;setTimeout(()=>(box.querySelector('input')||box.querySelector('button')).focus(),30)}
function closeDialog(){$('#dlg').hidden=true;$('#dlgBox').innerHTML='';lastFocus&&lastFocus.focus&&lastFocus.focus()}
function toast(msg,ok=true){const el=document.createElement('div');el.className='toast pointer-events-auto flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-lg';el.dir=S.lang==='ar'?'rtl':'ltr';el.innerHTML=ic(ok?'circle-check':'circle-alert',`size-4 ${ok?'text-emerald-700':'text-rose-700'}`)+`<span>${esc(msg)}</span>`;$('#toasts').appendChild(el);setTimeout(()=>{el.style.transition='opacity .2s';el.style.opacity='0';setTimeout(()=>el.remove(),200)},3000)}

function showDefect(id){const d=DEFECTS.find(x=>x.id===id),t=T();if(!d)return;
  openDialog(`<div class="flex flex-col gap-1 pe-8"><h2 class="flex items-center gap-2 text-lg font-semibold text-slate-900">${esc(t.detailsTitle)}<span class="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-600">${d.id}</span></h2><p class="text-sm text-slate-500">${esc(t.types[d.type])}</p></div>${photo('h-44',d)}${details(d,false)}${d.live?`<button type="button" id="replayAlert" class="btn-outline h-10 w-full">${ic('bell','size-4')}${esc(t.replayAlert)}</button>`:''}${d.live?`<div class="space-y-2 border-t border-slate-100 pt-3"><div class="text-sm font-medium text-slate-700">${esc(t.changeStatus)}</div><div class="flex flex-wrap gap-2" id="statusBtns">${STATUS_KEYS.map(s=>`<button type="button" data-status="${s}" class="rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${d.status===s?'border-emerald-600 bg-emerald-50 text-emerald-800':'border-slate-200 text-slate-700 hover:bg-slate-50'}">${esc(t.statuses[s])}</button>`).join('')}</div></div>`:''}`,'sm:max-w-lg');
  const ra=$('#replayAlert');if(ra)ra.onclick=()=>{closeDialog();unlockAudio();showBigAlert(d);alertSound(d.severity)};
  if(VIEWER){const x=$('#statusBtns');if(x)x.parentElement.remove()}
  const sb=$('#statusBtns');if(sb)sb.onclick=e=>{const b=e.target.closest('[data-status]');if(b&&b.dataset.status!==d.status)setStatus(d.id,b.dataset.status)}}

let editing=null;
function entityForm(e){editing=e;const t=T(),v=e==='new'?{name:'',region:'riyadh',assignedDefects:0,contactPerson:'',phone:''}:e;
  openDialog(`<div class="pe-8"><h2 class="text-base font-semibold text-slate-900">${esc(e==='new'?t.addEntity:t.editEntity)}</h2></div>
  <form id="entForm" class="space-y-3" novalidate>
    <div class="space-y-1.5"><label for="ent-name" class="text-sm font-medium">${esc(t.colEntity)} *</label><input id="ent-name" class="finput" value="${esc(v.name)}"></div>
    <div class="space-y-1.5"><label for="ent-region" class="text-sm font-medium">${esc(t.colRegion)}</label><select id="ent-region" class="fsel">${CITY_KEYS.map(k=>`<option value="${k}" ${k===v.region?'selected':''}>${esc(t.cities[k])}</option>`).join('')}</select></div>
    <div class="space-y-1.5"><label for="ent-assigned" class="text-sm font-medium">${esc(t.colAssigned)}</label><input id="ent-assigned" type="number" min="0" class="finput" value="${v.assignedDefects}"></div>
    <div class="space-y-1.5"><label for="ent-contact" class="text-sm font-medium">${esc(t.colContact)} *</label><input id="ent-contact" class="finput" value="${esc(v.contactPerson)}"></div>
    <div class="space-y-1.5"><label for="ent-phone" class="text-sm font-medium">${esc(t.colPhone)} *</label><input id="ent-phone" type="tel" dir="ltr" class="finput" value="${esc(v.phone)}"></div>
    <div class="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end"><button type="button" class="btn-outline" data-dclose>${esc(t.cancel)}</button><button type="submit" class="btn-primary">${esc(t.save)}</button></div>
  </form>`,'sm:max-w-md');
  $('#entForm').addEventListener('submit',ev=>{ev.preventDefault();const t=T();
    const o={name:$('#ent-name').value.trim(),region:$('#ent-region').value,assignedDefects:Math.max(0,Math.floor(+$('#ent-assigned').value||0)),contactPerson:$('#ent-contact').value.trim(),phone:$('#ent-phone').value.trim()};
    if(!o.name||!o.contactPerson||!o.phone){toast(t.requiredFields,false);return}
    if(editing==='new'){entities.push({id:'ent-'+Date.now(),...o});toast(t.entityAdded)}else{entities=entities.map(x=>x.id===editing.id?{id:x.id,...o}:x);toast(t.entityUpdated)}
    closeDialog();renderEntities()});}
function entityDelete(e){const t=T();
  openDialog(`<div class="flex flex-col gap-2 pe-8"><h2 class="text-base font-semibold text-slate-900">${esc(t.deleteEntity)}</h2><p class="text-sm text-slate-500">${esc(t.deleteConfirm)}</p></div><p class="text-sm font-medium text-slate-900">${esc(e.name)}</p><div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><button type="button" class="btn-outline" data-dclose>${esc(t.cancel)}</button><button type="button" class="btn-destructive" id="confirmDel">${esc(t.delete)}</button></div>`,'sm:max-w-sm');
  $('#confirmDel').onclick=()=>{entities=entities.filter(x=>x.id!==e.id);closeDialog();renderEntities();toast(T().entityDeleted)}}

/* ---------- (unused) Hero backdrop: a drawn highway at dusk (stands in when the photo can't load) ---------- */
function drawHero(){const c=$('#heroCanvas'),r=c.getBoundingClientRect(),dpr=Math.min(2,window.devicePixelRatio||1);c.width=r.width*dpr;c.height=r.height*dpr;const g=c.getContext('2d');g.scale(dpr,dpr);const w=r.width,h=r.height,hy=h*.42;
  let sky=g.createLinearGradient(0,0,0,hy);sky.addColorStop(0,'#5b6b73');sky.addColorStop(1,'#c9b99a');g.fillStyle=sky;g.fillRect(0,0,w,hy);
  let gr=g.createLinearGradient(0,hy,0,h);gr.addColorStop(0,'#6d6a5f');gr.addColorStop(1,'#3b3a35');g.fillStyle=gr;g.fillRect(0,hy,w,h-hy);
  const vx=w*.5;g.fillStyle='#2b2d30';g.beginPath();g.moveTo(vx-6,hy);g.lineTo(vx+6,hy);g.lineTo(w*1.05,h);g.lineTo(-w*.05,h);g.closePath();g.fill();
  g.strokeStyle='rgba(255,255,255,.75)';for(const s of[-.33,0,.33]){g.lineWidth=2;g.setLineDash(s===0?[]:[14,18]);g.beginPath();g.moveTo(vx+s*8,hy);g.lineTo(vx+s*w*1.1,h);g.stroke()}
  g.setLineDash([]);for(let i=0;i<14;i++){const t=(i*.071+.05)%1,y=hy+t*t*(h-hy),x=vx+((i%5)-2)*.22*(y-hy)*w/(h-hy)*.9;const s=2+t*14;g.fillStyle=i%3?'#e8e6e1':'#9aa3a8';g.fillRect(x-s,y-s*.5,s*2,s)}
  for(let i=0;i<9;i++){const x=w*(.1+i*.1);g.strokeStyle='rgba(30,30,30,.5)';g.lineWidth=1.5;g.beginPath();g.moveTo(x,hy-40-(i%3)*10);g.lineTo(x,hy+4);g.stroke()}}

/* ---------- Active section tracking ---------- */
function trackActive(){const ids=NAV.map(n=>n[0]);let cur='landing';for(const id of ids){const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=window.innerHeight*.35)cur=id}
  if(cur!==S.active){S.active=cur;paintNav()}}

/* ---------- Events ---------- */
function bind(){
  const setLang=l=>{S.lang=l;store.set('nibras-lang',l);paintStatic()};
  bindPages();
  $('#soundBtn').onclick=()=>{soundOn=!soundOn;store.set('nibras-sound',soundOn?'on':'off');unlockAudio();paintSound();toast(soundOn?T().soundOn:T().soundOff);if(soundOn)alertSound('low')};
  $('#langBtn').onclick=()=>setLang(S.lang==='ar'?'en':'ar');
  $('#seg-lang').onclick=e=>{const b=e.target.closest('[data-v]');b&&setLang(b.dataset.v)};
  $('#seg-theme').onclick=e=>{const b=e.target.closest('[data-v]');if(!b)return;S.theme=b.dataset.v;store.set('nibras-theme',S.theme);paintStatic()};
  $('#menuBtn').onclick=()=>{$('#drawer').hidden=false};
  $('#drawer').addEventListener('click',e=>{if(e.target.closest('[data-close]'))$('#drawer').hidden=true});
  const fset=(k,v)=>{S.filters[k]=v;S.page=1;renderDefects()};
  $('#f-type').onchange=e=>fset('type',e.target.value);$('#f-city').onchange=e=>fset('city',e.target.value);$('#f-sev').onchange=e=>fset('severity',e.target.value);
  $('#f-from').onchange=e=>fset('from',e.target.value);$('#f-to').onchange=e=>fset('to',e.target.value);
  $('#f-reset').onclick=()=>{S.filters={type:'all',city:'all',severity:'all',from:'',to:''};$('#f-from').value='';$('#f-to').value='';S.page=1;paintStatic()};
  $('#q').oninput=e=>{S.q=e.target.value;S.page=1;renderDefects()};
  $('#defHead').onclick=e=>{const b=e.target.closest('[data-sort]');if(!b)return;const k=b.dataset.sort;S.sort=S.sort.key===k?{key:k,dir:S.sort.dir==='asc'?'desc':'asc'}:{key:k,dir:'asc'};renderDefects()};
  $('#defBody').onclick=e=>{const r=e.target.closest('tr[data-id]');r&&showDefect(r.dataset.id)};
  $('#prevBtn').onclick=()=>{S.page--;renderDefects()};$('#nextBtn').onclick=()=>{S.page++;renderDefects()};
  $('#addEnt').onclick=()=>entityForm('new');
  $('#entBody').onclick=e=>{const ed=e.target.closest('[data-edit]'),dl=e.target.closest('[data-del]');if(ed)entityForm(entities.find(x=>x.id===ed.dataset.edit));if(dl)entityDelete(entities.find(x=>x.id===dl.dataset.del))};
  $('#dlg').addEventListener('click',e=>{if(e.target.closest('[data-dclose]'))closeDialog()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){hideBigAlert();if(!$('#dlg').hidden)closeDialog();$('#drawer').hidden=true}});
  window.addEventListener('scroll',trackActive,{passive:true});
  window.addEventListener('resize',()=>{map&&map.invalidateSize()});
}

bind();paintStatic();initMap();trackActive();connectLive();setInterval(paintDevice,5000);
if(!VIEWER)setInterval(async()=>{try{const h=await fetch(`${API}/api/health`,{cache:'no-store'}).then(r=>r.json());setBackend(true,h)}catch(e){setBackend(false)}},10000);
