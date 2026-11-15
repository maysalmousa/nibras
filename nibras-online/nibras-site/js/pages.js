/* =====================================================================
   نبراس — الصفحات الإضافية:
   لوحة المؤشرات · جهاز نبراس · بلاغ مواطن · جودة الطرق · التقارير · عن نبراس
   كل الأرقام هنا محسوبة من البلاغات الحقيقية القادمة من الباك إند (DEFECTS)
   يُحمَّل قبل app.js — الدوال تُستدعى من app.js بعد ما يجهز
   ===================================================================== */

window.PAGES_ICONS = {
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  hourglass: '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
  crosshair: '<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  radio: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
  ruler: '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',
  vibrate: '<path d="m2 8 2 2-2 2 2 2-2 2"/><path d="m22 8-2 2 2 2-2 2 2 2"/><rect width="8" height="14" x="8" y="5" rx="1"/>',
  server: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
};

window.PAGES_I18N = {
  ar: {
    navDashboard: 'لوحة المؤشرات', navDevice: 'جهاز نبراس', navCitizen: 'بلاغ مواطن', navQuality: 'جودة الطرق', navReports: 'التقارير', navAbout: 'عن نبراس',
    // Dashboard
    mTitle: 'القياسات', mSub: 'أبعاد العيوب المفتوحة كما قاستها الكاميرا وحساس العمق', mCrack: 'مجموع أطوال التشققات', mFaded: 'مجموع أطوال الخطوط الباهتة', mDepthAvg: 'متوسط عمق الحفر', mDepthMax: 'أعمق حفرة', mMeasured: 'عيب مقاس', mWaitDepth: 'بانتظار حساس العمق', mM: 'م', mCm: 'سم', lenShort: 'الطول', diaShort: 'القطر', depthShort: 'العمق',
    dashTitle: 'لوحة المؤشرات', dashSub: 'مؤشرات حالة الطرق محسوبة مباشرة من الرصد الحقيقي',
    kTotal: 'إجمالي البلاغات', kConfirmed: 'بلاغات مؤكدة', kHigh: 'خطورة عالية مفتوحة', kProgress: 'قيد المعالجة', kFixed: 'نسبة الإصلاح',
    prTitle: 'أولويات الإصلاح — ابدأ بهذه أولاً', prSub: 'ترتيب تلقائي للعيوب المفتوحة حسب الخطورة وعدد مرات الرصد ومدة بقائها بدون إصلاح', prEmpty: 'لا توجد عيوب مفتوحة 🎉',
    prSevHigh: 'خطورة عالية', prSevMed: 'خطورة متوسطة', prSevLow: 'خطورة منخفضة', prHits: 'رُصد {n} مرات', prAge: 'مفتوح منذ {d}', prConfirmed: 'مؤكد بالحساس والكاميرا', prCitizen: 'بلاغ من مواطن', prScore: 'درجة الأولوية',
    fxTitle: 'متابعة الإصلاح', fxSub: 'بعد أن تُعلن الجهة إصلاح العيب، يتحقق منه جهاز نبراس عند مروره بالموقع نفسه',
    fxAvg: 'متوسط مدة الإصلاح', fxFast: 'أسرع إصلاح', fxSlow: 'أبطأ إصلاح', fxVerified: 'إصلاح مؤكد بالجهاز', fxPending: 'بانتظار تحقق الجهاز', fxFailed: 'أُعلن إصلاحه ولا يزال قائماً',
    fxRow: 'التحقق من الإصلاح', fxDur: 'مدة الإصلاح', fxOk: 'تحقق منه الجهاز', fxWait: 'بانتظار مرور الجهاز للتحقق', fxBad: 'رصده الجهاز مجدداً بعد الإعلان عن إصلاحه', fxAt: 'بتاريخ', fxNone: 'لا توجد إصلاحات مؤكدة بعد',
    uMin: 'دقيقة', uHour: 'ساعة', uDay: 'يوم', kCitizen: 'بلاغات المواطنين',
    byType: 'حسب نوع العيب', byStatus: 'حسب حالة البلاغ', bySeverity: 'حسب درجة الخطورة', byCity: 'حسب المدينة', last14: 'الرصد خلال آخر 14 يوماً', recent: 'أحدث البلاغات',
    noDataYet: 'لا توجد بيانات بعد — بانتظار أول رصد من جهاز نبراس', viewAll: 'عرض السجل',
    // Device
    devTitle: 'جهاز نبراس', devSub: 'حالة الجهاز المباشرة ومكوناته وسجل نشاطه',
    devConn: 'الاتصال', devGps: 'إشارة GPS', devSpeed: 'السرعة', devLast: 'آخر تحديث', devCoords: 'الموقع الحالي', devNoData: 'لم يتصل الجهاز بعد',
    gpsGood: 'ممتازة', gpsOk: 'جيدة', gpsWeak: 'ضعيفة', partsTitle: 'مكونات الجهاز', logTitle: 'سجل نشاط الجهاز', logSub: 'كل رصد خام يصل من الأجهزة ونتيجة فحصه في الباك إند',
    logTime: 'الوقت', logSrc: 'المصدر', logWhat: 'الرصد', logResult: 'النتيجة', logEmpty: 'لا يوجد نشاط بعد',
    accepted: 'قُبل ←', rejected: 'مرفوض',
    reasons: { no_gps: 'لا يوجد موقع GPS', gps_weak: 'إشارة GPS ضعيفة', outside_ksa: 'خارج المملكة', stale_location: 'موقع الكاميرا قديم', unknown_type: 'نوع غير معروف', not_road_defect: 'الصورة لا تُظهر عيباً في الطريق', no_photo: 'بدون صورة', unknown_source: 'مصدر غير معروف' },
    srcCitizen: 'مواطن', camTitle: 'ما تراه الكاميرا الآن', camLive: 'الكاميرا شغالة', camOld: 'آخر صورة قديمة — الكاميرا طافية؟', camSeen: 'ما رصده الموديل', camNothing: 'لا شيء — الطريق سليم', camNone: 'لم تصل صورة من الكاميرا بعد', camHint: 'تتحدث كل بضع ثوانٍ. استخدمها لضبط زاوية الكاميرا والإضاءة.', replayAlert: 'عرض تنبيه هذا البلاغ', reDetected: 'رُصد نفس العيب مرة ثانية:', citizenOnly: 'بلاغ مواطن — بانتظار التحقق', alertCitizen: 'بلاغ مواطن جديد', alertCitizenSub: 'وصل بلاغ من مواطن — بانتظار تحقق جهاز نبراس',
    parts: [
      ['cpu', 'ESP32', 'المعالج الرئيسي: يقرأ الحساسات ويتصل بالإنترنت عبر Wi-Fi ويرسل الرصد.'],
      ['vibrate', 'MPU6050', 'حساس الاهتزاز: يقيس قوة الصدمة (g) عند مرور العجلة فوق حفرة.'],
      ['radio', 'GPS NEO-6M', 'يحدد الموقع بدقة عدة أمتار، ويُرفض أي رصد إشارته ضعيفة.'],
      ['camera', 'ESP32-CAM + YOLO', 'تصوّر الطريق، ونموذج ذكاء اصطناعي (Roboflow) يتعرف على الحفر والتشققات والخطوط الباهتة، ويقدّر طول التشقق وطول الجزء الباهت وقطر الحفرة بالسنتيمتر.'],
      ['ruler', 'VL53L0X — حساس العمق', 'حساس ليزر موجّه للأرض يقيس عمق الحفرة بالسنتيمتر (الفرق بين المسافة الطبيعية للأرض والمسافة فوق الحفرة).'],
      ['server', 'الباك إند', 'يتحقق من الرصد، يدمج الحساس مع الكاميرا، يمنع التكرار، ويحدد اسم الشارع والحي.'],
    ],
    // Citizen
    citTitle: 'بلاغ مواطن', citSub: 'بلاغات المواطنين تصل هنا لحظياً مع الموقع والصورة والاسم — ويتحقق منها جهاز نبراس عند مروره بالمكان', citTry: 'جرّب البلاغ من جوالك', citTryBody: 'موقع مستقل يقدر أي شخص يفتحه من جواله: يصوّر العيب ويحدد مكانه ويرسل — ويظهر البلاغ هنا فوراً مع تنبيه وصورة واسم المبلّغ.', citSite: 'نبراس المواطن', citSiteSub: 'موقع البلاغات للعموم', copy: 'نسخ', copied: 'تم نسخ الرابط', citOpen: 'فتح موقع نبراس المواطن', citSameNet: 'الجوال لازم يكون متصل بنفس شبكة اللابتوب (نفس الواي فاي أو الهوتسبوت).', citRecent: 'آخر بلاغات المواطنين', citNone: 'لا توجد بلاغات مواطنين بعد', anonymous: 'مواطن (بدون اسم)', citNoQr: 'شغّل الباك إند لإظهار الكود', citName2: 'اسم المبلّغ',
    citType: 'نوع العيب', citDesc: 'وصف مختصر', citDescPh: 'مثال: حفرة كبيرة في المسار الأيمن قبل الإشارة', citName: 'الاسم (اختياري)',
    citPhoto: 'صورة (اختياري)', citLoc: 'الموقع', citLocHint: 'اضغط على الخريطة لتحديد مكان العيب بالضبط، أو استخدم موقعك الحالي',
    useMyLoc: 'استخدم موقعي', citSubmit: 'إرسال البلاغ', citSending: 'جاري الإرسال…', citNoLoc: 'حدد مكان العيب على الخريطة أولاً',
    citOk: 'تم استلام البلاغ', citFail: 'تعذر إرسال البلاغ — تأكد أن الباك إند شغّال', citWait: 'انتظر قليلاً قبل إرسال بلاغ آخر', citOutside: 'الموقع خارج المملكة',
    citGeoFail: 'تعذر تحديد موقعك — حدده على الخريطة', citPrivacy: 'لا نطلب رقم جوال ولا بيانات شخصية. البلاغ يظهر بحالة "يحتاج مراجعة" حتى يتحقق منه الجهاز أو الجهة المختصة.',
    // Quality
    qTitle: 'جودة الطرق', qSub: 'مؤشر جودة لكل طريق ومدينة محسوب من العيوب غير المُصلحة',
    qOverall: 'مؤشر الجودة العام', qCities: 'مؤشر المدن', qRoads: 'ترتيب الطرق (الأسوأ أولاً)', qRoad: 'الطريق', qCity: 'المدينة', qOpen: 'عيوب مفتوحة', qScore: 'المؤشر', qGrade: 'التقييم',
    grades: { excellent: 'ممتاز', good: 'جيد', fair: 'متوسط', poor: 'سيئ' },
    qMethod: 'طريقة الحساب: يبدأ كل طريق بـ 100 نقطة، ويُخصم 20 لكل عيب عالي الخطورة، و10 للمتوسط، و5 للمنخفض (العيوب المُصلحة لا تُحسب).',
    qNoData: 'كل الطرق المرصودة بحالة ممتازة — لا توجد عيوب مفتوحة',
    // Reports
    repTitle: 'التقارير', repSub: 'تقرير قابل للطباعة والتصدير عن البلاغات حسب الفترة والمدينة والحالة',
    repStatus: 'الحالة', allStatuses: 'جميع الحالات', repPrint: 'طباعة / PDF', repCsv: 'تصدير Excel (CSV)', repGenerated: 'تاريخ التقرير',
    repSummary: 'ملخص', repPeriod: 'الفترة', repAll: 'كل الفترات', repEmpty: 'لا توجد بلاغات مطابقة',
    // About
    aboutTitle: 'عن نبراس', aboutSub: 'منصة ذكية لرصد عيوب أسطح الطرق في المملكة',
    aboutLead: 'نبراس يجمع بين جهاز يُركَّب في المركبة ومنصة رقمية للجهات المختصة: الجهاز يرصد عيوب الطريق أثناء القيادة، والمنصة تعرضها على الخريطة بموقعها الدقيق لتسريع الصيانة.',
    aboutProblem: 'المشكلة', aboutProblemBody: 'رصد الحفر والتشققات يعتمد غالباً على البلاغات اليدوية والجولات الميدانية، فيتأخر اكتشاف العيوب وتزيد خطورتها وتكلفة إصلاحها.',
    aboutSolution: 'الحل', aboutSolutionBody: 'رصد آلي ومستمر: كل مركبة مزودة بجهاز نبراس تصبح أداة مسح للطريق، والبلاغات تصل للجهة المختصة لحظياً مع الصورة والموقع ودرجة الخطورة.',
    howTitle: 'كيف يعمل نبراس',
    how: [
      ['vibrate', 'يحس بالصدمة', 'حساس الاهتزاز يقيس قوة الصدمة، والـ GPS يحدد المكان.'],
      ['camera', 'يشوف العيب', 'الكاميرا ونموذج الذكاء الاصطناعي يتعرفون على الحفر والتشققات والخطوط الباهتة.'],
      ['server', 'يتحقق ويدمج', 'الباك إند يرفض الرصد غير الدقيق، ويؤكد البلاغ إذا اتفق الحساس والكاميرا.'],
      ['map', 'يعرض ويتابع', 'البلاغ يظهر فوراً على الخريطة مع تنبيه، والجهة تتابع حالته حتى الإصلاح.'],
    ],
    techTitle: 'التقنيات المستخدمة',
  },
  en: {
    navDashboard: 'Dashboard', navDevice: 'Nibras Device', navCitizen: 'Citizen Report', navQuality: 'Road Quality', navReports: 'Reports', navAbout: 'About',
    mTitle: 'Measurements', mSub: 'Dimensions of open defects as measured by the camera and the depth sensor', mCrack: 'Total crack length', mFaded: 'Total faded marking length', mDepthAvg: 'Average pothole depth', mDepthMax: 'Deepest pothole', mMeasured: 'measured', mWaitDepth: 'Waiting for depth sensor', mM: 'm', mCm: 'cm', lenShort: 'Length', diaShort: 'Width', depthShort: 'Depth',
    dashTitle: 'Dashboard', dashSub: 'Road condition indicators computed live from real detections',
    kTotal: 'Total reports', kConfirmed: 'Confirmed', kHigh: 'Open high severity', kProgress: 'In progress', kFixed: 'Fix rate',
    prTitle: 'Repair priorities — fix these first', prSub: 'Open defects ranked automatically by severity, number of detections and how long they have stayed unrepaired', prEmpty: 'No open defects 🎉',
    prSevHigh: 'High severity', prSevMed: 'Medium severity', prSevLow: 'Low severity', prHits: 'detected {n} times', prAge: 'open for {d}', prConfirmed: 'confirmed by sensor + camera', prCitizen: 'reported by a citizen', prScore: 'Priority score',
    fxTitle: 'Repair tracking', fxSub: 'After the authority marks a defect as fixed, the Nibras device verifies it when it passes the same spot',
    fxAvg: 'Average repair time', fxFast: 'Fastest repair', fxSlow: 'Slowest repair', fxVerified: 'Repairs verified by device', fxPending: 'Awaiting device check', fxFailed: 'Marked fixed but still there',
    fxRow: 'Repair check', fxDur: 'Repair time', fxOk: 'Verified by device', fxWait: 'Waiting for the device to pass', fxBad: 'Device detected it again after repair', fxAt: 'on', fxNone: 'No verified repairs yet',
    uMin: 'min', uHour: 'h', uDay: 'days', kCitizen: 'Citizen reports',
    byType: 'By defect type', byStatus: 'By status', bySeverity: 'By severity', byCity: 'By city', last14: 'Detections in the last 14 days', recent: 'Latest reports',
    noDataYet: 'No data yet — waiting for the first detection from the Nibras device', viewAll: 'Open list',
    devTitle: 'Nibras Device', devSub: 'Live device status, components and activity log',
    devConn: 'Connection', devGps: 'GPS signal', devSpeed: 'Speed', devLast: 'Last update', devCoords: 'Current position', devNoData: 'The device has not connected yet',
    gpsGood: 'Excellent', gpsOk: 'Good', gpsWeak: 'Weak', partsTitle: 'Device components', logTitle: 'Device activity log', logSub: 'Every raw detection received from the devices and how the backend handled it',
    logTime: 'Time', logSrc: 'Source', logWhat: 'Detection', logResult: 'Result', logEmpty: 'No activity yet',
    accepted: 'Accepted →', rejected: 'Rejected',
    reasons: { no_gps: 'No GPS fix', gps_weak: 'Weak GPS signal', outside_ksa: 'Outside Saudi Arabia', stale_location: 'Camera location too old', unknown_type: 'Unknown type', not_road_defect: 'Photo shows no road defect', no_photo: 'No photo', unknown_source: 'Unknown source' },
    srcCitizen: 'Citizen', camTitle: 'What the camera sees now', camLive: 'Camera is live', camOld: 'Last frame is old — is the camera off?', camSeen: 'Model detections', camNothing: 'Nothing — road looks fine', camNone: 'No frame received from the camera yet', camHint: 'Refreshes every few seconds. Use it to adjust the camera angle and lighting.', replayAlert: 'Show this alert again', reDetected: 'Same defect detected again:', citizenOnly: 'Citizen report — awaiting verification', alertCitizen: 'New citizen report', alertCitizenSub: 'A citizen reported a defect — awaiting verification by the Nibras device',
    parts: [
      ['cpu', 'ESP32', 'Main controller: reads the sensors, connects over Wi-Fi and sends detections.'],
      ['vibrate', 'MPU6050', 'Shock sensor: measures the impact (g) when a wheel hits a pothole.'],
      ['radio', 'GPS NEO-6M', 'Locates the defect within a few meters; weak-signal detections are rejected.'],
      ['ruler', 'VL53L0X — depth sensor', 'A downward laser sensor that measures pothole depth in cm (normal distance to the road vs. distance over the pothole).'],
      ['camera', 'ESP32-CAM + YOLO', 'Films the road; an AI model (Roboflow) recognises potholes, cracks and faded markings.'],
      ['server', 'Backend', 'Validates detections, fuses sensor and camera, removes duplicates and finds the street name.'],
    ],
    citTitle: 'Citizen Report', citSub: 'Citizen reports arrive here instantly with location, photo and name — the Nibras device verifies them when it passes by', citTry: 'Try it from your phone', citTryBody: 'A separate public site anyone can open on their phone: photograph the defect, mark the spot and send — it appears here instantly with an alert, photo and reporter name.', citSite: 'Nibras Citizen', citSiteSub: 'Public reporting site', copy: 'Copy', copied: 'Link copied', citOpen: 'Open Nibras Citizen', citSameNet: 'The phone must be on the same network as this laptop (same Wi-Fi or hotspot).', citRecent: 'Latest citizen reports', citNone: 'No citizen reports yet', anonymous: 'Citizen (no name)', citNoQr: 'Start the backend to show the code', citName2: 'Reporter',
    citType: 'Defect type', citDesc: 'Short description', citDescPh: 'e.g. Large pothole in the right lane before the signal', citName: 'Name (optional)',
    citPhoto: 'Photo (optional)', citLoc: 'Location', citLocHint: 'Click the map to mark the exact spot, or use your current location',
    useMyLoc: 'Use my location', citSubmit: 'Submit report', citSending: 'Sending…', citNoLoc: 'Mark the defect location on the map first',
    citOk: 'Report received', citFail: 'Could not send — is the backend running?', citWait: 'Please wait a moment before sending another report', citOutside: 'Location is outside Saudi Arabia',
    citGeoFail: 'Could not get your location — mark it on the map', citPrivacy: 'No phone number or personal data is required. The report shows as "Needs review" until the device or the authority verifies it.',
    qTitle: 'Road Quality', qSub: 'A quality index per road and city, computed from unrepaired defects',
    qOverall: 'Overall quality index', qCities: 'City index', qRoads: 'Road ranking (worst first)', qRoad: 'Road', qCity: 'City', qOpen: 'Open defects', qScore: 'Index', qGrade: 'Grade',
    grades: { excellent: 'Excellent', good: 'Good', fair: 'Fair', poor: 'Poor' },
    qMethod: 'How it is computed: each road starts at 100 points; 20 are deducted per high-severity defect, 10 per medium and 5 per low (fixed defects are not counted).',
    qNoData: 'All monitored roads are in excellent condition — no open defects',
    repTitle: 'Reports', repSub: 'A printable, exportable report of defects by period, city and status',
    repStatus: 'Status', allStatuses: 'All statuses', repPrint: 'Print / PDF', repCsv: 'Export Excel (CSV)', repGenerated: 'Generated',
    repSummary: 'Summary', repPeriod: 'Period', repAll: 'All time', repEmpty: 'No matching reports',
    aboutTitle: 'About Nibras', aboutSub: 'A smart platform for monitoring road-surface defects in Saudi Arabia',
    aboutLead: 'Nibras combines an in-vehicle device with a digital platform for the authorities: the device detects road defects while driving, and the platform shows them on the map at their exact location to speed up maintenance.',
    aboutProblem: 'The problem', aboutProblemBody: 'Finding potholes and cracks usually depends on manual complaints and field inspections, so defects are found late and become more dangerous and costly to repair.',
    aboutSolution: 'The solution', aboutSolutionBody: 'Automatic, continuous monitoring: every vehicle with a Nibras device becomes a road scanner, and reports reach the authority instantly with photo, location and severity.',
    howTitle: 'How Nibras works',
    how: [
      ['vibrate', 'Feels the impact', 'The shock sensor measures the impact and GPS records the location.'],
      ['camera', 'Sees the defect', 'The camera and AI model recognise potholes, cracks and faded markings.'],
      ['server', 'Verifies & fuses', 'The backend rejects inaccurate detections and confirms a report when sensor and camera agree.'],
      ['map', 'Shows & tracks', 'The report appears instantly on the map with an alert, and the authority tracks it until it is fixed.'],
    ],
    techTitle: 'Technologies',
  },
};

/* ------------------------------ shared helpers ------------------------------ */
const STATUS_COLOR = { review: '#D97706', new: '#0284C7', in_progress: '#7C3AED', fixed: '#059669', dismissed: '#94A3B8' };
const TYPE_COLOR = { pothole: '#E11D48', longitudinal_crack: '#EA580C', alligator_crack: '#D97706', rutting: '#7C3AED', raveling: '#0891B2', depression: '#4F46E5', faded_marking: '#64748B' };
let RAWLOG = [];
const fmtNum = n => Number(n).toLocaleString('en-US');

function barList(items, total) {
  const max = Math.max(1, ...items.map(i => i.value));
  if (!items.some(i => i.value)) return `<p class="py-6 text-center text-sm text-slate-500">${esc(T().noDataYet)}</p>`;
  return `<ul class="space-y-3">${items.map(i => `<li>
    <div class="mb-1 flex items-center justify-between gap-3 text-sm"><span class="font-medium text-slate-700">${esc(i.label)}</span><span class="tabular-nums text-slate-500"><bdo dir="ltr">${fmtNum(i.value)}${total ? ` · ${Math.round(i.value / total * 100)}%` : ''}</bdo></span></div>
    <div class="h-2.5 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full" style="width:${(i.value / max * 100).toFixed(1)}%;background:${i.color}"></div></div>
  </li>`).join('')}</ul>`;
}
const card = (title, body, extra = '') => `<div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${extra}"><h3 class="mb-4 text-base font-semibold text-slate-900">${esc(title)}</h3>${body}</div>`;
const pageHead = (t, s, right = '') => `<div class="flex flex-wrap items-end justify-between gap-3"><div><h1 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">${esc(t)}</h1><p class="mt-1 text-sm text-slate-500">${esc(s)}</p></div>${right}</div>`;

/* ------------------------------ Dashboard ------------------------------ */
function renderDashboard() {
  const el = $('#dashboardBody'); if (!el) return;
  const t = T(), D = DEFECTS, n = D.length;
  const cnt = f => D.filter(f).length;
  const fixed = cnt(d => d.status === 'fixed');
  const kpis = [
    ['layers', t.kTotal, fmtNum(n), 'text-slate-900'],
    ['circle-check', t.kConfirmed, fmtNum(cnt(d => d.confirmed)), 'text-emerald-700'],
    ['alert', t.kHigh, fmtNum(cnt(d => d.severity === 'high' && d.status !== 'fixed')), 'text-rose-600'],
    ['activity', t.kProgress, fmtNum(cnt(d => d.status === 'in_progress')), 'text-violet-600'],
    ['gauge', t.kFixed, n ? Math.round(fixed / n * 100) + '%' : '—', 'text-sky-700'],
    ['megaphone', t.kCitizen, fmtNum(cnt(d => d.citizen)), 'text-amber-600'],
  ];
  // القياسات: أطوال التشققات والخطوط الباهتة (من الكاميرا) وعمق الحفر (من حساس العمق) للعيوب غير المُصلحة
  const open = D.filter(d => d.status !== 'fixed' && d.status !== 'dismissed');
  const cracks = open.filter(d => (d.type === 'longitudinal_crack' || d.type === 'alligator_crack') && d.sizeCm);
  const faded = open.filter(d => d.type === 'faded_marking' && d.sizeCm);
  const deep = open.filter(d => d.depthCm);
  const sum = a => a.reduce((s, d) => s + (+d.sizeCm || 0), 0);
  const len = cm => cm >= 100 ? `${(cm / 100).toFixed(2)} ${t.mM}` : `${cm.toFixed(1)} ${t.mCm}`;
  const mCards = [
    ['ruler', t.mCrack, cracks.length ? len(sum(cracks)) : '—', `${fmtNum(cracks.length)} ${t.mMeasured}`],
    ['ruler', t.mFaded, faded.length ? len(sum(faded)) : '—', `${fmtNum(faded.length)} ${t.mMeasured}`],
    ['gauge', t.mDepthAvg, deep.length ? `${(deep.reduce((s, d) => s + d.depthCm, 0) / deep.length).toFixed(1)} ${t.mCm}` : '—', deep.length ? `${fmtNum(deep.length)} ${t.mMeasured}` : t.mWaitDepth],
    ['alert', t.mDepthMax, deep.length ? `${Math.max(...deep.map(d => d.depthCm)).toFixed(1)} ${t.mCm}` : '—', deep.length ? '' : t.mWaitDepth],
  ];
  // متابعة الإصلاح: المدة من أول رصد إلى إصلاحه، للإصلاحات اللي أكدها الجهاز
  const vf = D.filter(d => d.fixCheck === 'verified' && d.fixMs != null), fxMs = vf.map(d => d.fixMs);
  const fxCards = [
    ['clock', t.fxAvg, fxMs.length ? durTxt(fxMs.reduce((a, b) => a + b, 0) / fxMs.length) : '—', fxMs.length ? '' : t.fxNone, 'text-slate-900'],
    ['zap', t.fxFast, fxMs.length ? durTxt(Math.min(...fxMs)) : '—', '', 'text-emerald-700'],
    ['hourglass', t.fxSlow, fxMs.length ? durTxt(Math.max(...fxMs)) : '—', '', 'text-amber-700'],
    ['circle-check', t.fxVerified, fmtNum(vf.length), '', 'text-emerald-700'],
    ['activity', t.fxPending, fmtNum(cnt(d => d.status === 'fixed' && d.fixCheck === 'pending')), '', 'text-sky-700'],
    ['alert', t.fxFailed, fmtNum(cnt(d => d.fixCheck === 'failed')), '', 'text-rose-600'],
  ];
  const fixHtml = card(t.fxTitle, `<p class="-mt-2 mb-3 text-sm text-slate-500">${esc(t.fxSub)}</p><div class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">${fxCards.map(([icn, l, v, sub, c]) => `<div class="rounded-lg border border-slate-200 bg-slate-50/60 p-4"><div class="flex items-center gap-2 text-xs font-medium text-slate-500">${ic(icn, 'size-4')}${esc(l)}</div><div class="mt-2 text-2xl font-bold tabular-nums ${c}">${esc(v)}</div>${sub ? `<div class="mt-1 text-xs text-slate-500">${esc(sub)}</div>` : ''}</div>`).join('')}</div>`);
  // أولويات الإصلاح: درجة = الخطورة × (عدد مرات الرصد) × (مدة بقائه مفتوح) × (مؤكد؟) × (بلاغ مواطن؟)
  const SEVW = { high: 3, medium: 2, low: 1 }, now = Date.now();
  const prio = d => {
    const days = d.firstSeen ? Math.max(0, (now - d.firstSeen) / 86400000) : 0;
    return (SEVW[d.severity] || 1) * (1 + 0.5 * Math.log2(d.hits || 1)) * (1 + Math.min(days, 30) / 30) * (d.confirmed ? 1.2 : 1) * (d.citizen ? 1.1 : 1);
  };
  const ranked = D.filter(d => d.status !== 'fixed' && d.status !== 'dismissed').map(d => ({ d, s: prio(d) })).sort((a, b) => b.s - a.s).slice(0, 5);
  const maxS = ranked.length ? ranked[0].s : 1;
  const why = d => [d.severity === 'high' ? t.prSevHigh : d.severity === 'medium' ? t.prSevMed : t.prSevLow,
    (d.hits || 1) > 1 ? t.prHits.replace('{n}', d.hits) : null,
    d.firstSeen ? t.prAge.replace('{d}', durTxt(now - d.firstSeen)) : null,
    d.confirmed ? t.prConfirmed : null, d.citizen ? t.prCitizen : null].filter(Boolean);
  const prioHtml = card(t.prTitle, `<p class="-mt-2 mb-3 text-sm text-slate-500">${esc(t.prSub)}</p>` + (ranked.length ? `<ol class="space-y-2">${ranked.map(({ d, s: sc }, i) => `<li><button type="button" data-open="${d.id}" class="flex w-full items-center gap-3 rounded-lg border border-slate-200 p-3 text-start transition-colors hover:bg-slate-50">
      <span class="grid size-9 shrink-0 place-items-center rounded-full text-base font-bold text-white" style="background:${SEV_COLOR[d.severity]}">${i + 1}</span>
      <span class="min-w-0 flex-1"><span class="block truncate text-sm font-semibold text-slate-900">${esc(t.types[d.type])} · <span class="font-mono text-xs text-slate-500">${d.id}</span> <span class="text-xs font-normal text-slate-500">— ${esc(placeName(d))}</span></span>
        <span class="mt-1 flex flex-wrap gap-1.5">${why(d).map(w => `<span class="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">${esc(w)}</span>`).join('')}</span></span>
      <span class="hidden w-24 shrink-0 sm:block" title="${esc(t.prScore)}"><span class="block h-2 overflow-hidden rounded-full bg-slate-100"><span class="block h-full rounded-full" style="width:${Math.round(sc / maxS * 100)}%;background:${SEV_COLOR[d.severity]}"></span></span><span class="mt-1 block text-center text-[11px] text-slate-500"><bdo dir="ltr">${sc.toFixed(1)}</bdo></span></span>
    </button></li>`).join('')}</ol>` : `<p class="py-6 text-center text-sm text-slate-500">${esc(t.prEmpty)}</p>`));
  const measuresHtml = card(t.mTitle, `<p class="-mt-2 mb-3 text-sm text-slate-500">${esc(t.mSub)}</p><div class="grid grid-cols-2 gap-3 xl:grid-cols-4">${mCards.map(([icn, l, v, sub]) => `<div class="rounded-lg border border-slate-200 bg-slate-50/60 p-4"><div class="flex items-center gap-2 text-xs font-medium text-slate-500">${ic(icn, 'size-4')}${esc(l)}</div><div class="mt-2 text-2xl font-bold tabular-nums text-slate-900"><bdo dir="ltr">${esc(v)}</bdo></div>${sub ? `<div class="mt-1 text-xs text-slate-500">${esc(sub)}</div>` : ''}</div>`).join('')}</div>`);
  const days = [];
  for (let i = 13; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); days.push(fmt(d)); }
  const perDay = days.map(day => D.filter(d => d.date === day).length), maxDay = Math.max(1, ...perDay);
  const recent = [...D].sort((a, b) => (b.lastSeen || 0) - (a.lastSeen || 0)).slice(0, 6);
  el.innerHTML = `
    ${pageHead(t.dashTitle, t.dashSub)}
    <div class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">${kpis.map(([icn, l, v, c]) => `
      <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div class="flex items-center gap-2 text-xs font-medium text-slate-500">${ic(icn, 'size-4')}${esc(l)}</div><div class="mt-2 text-3xl font-bold tabular-nums ${c}"><bdo dir="ltr">${v}</bdo></div></div>`).join('')}
    </div>
    ${prioHtml}
    ${measuresHtml}
    ${fixHtml}
    <div class="grid gap-4 lg:grid-cols-2">
      ${card(t.byType, barList(TYPES.map(k => ({ label: t.types[k], value: cnt(d => d.type === k), color: TYPE_COLOR[k] })).filter(i => i.value || n === 0), n))}
      ${card(t.byStatus, barList(STATUS_KEYS.filter(k => k !== 'dismissed').map(k => ({ label: t.statuses[k], value: cnt(d => d.status === k), color: STATUS_COLOR[k] })), n))}
      ${card(t.bySeverity, barList(SEVS.map(k => ({ label: t.severities[k], value: cnt(d => d.severity === k), color: SEV_COLOR[k] })), n))}
      ${card(t.byCity, barList(CITY_KEYS.map(k => ({ label: t.cities[k], value: cnt(d => d.city === k), color: '#047857' })).filter(i => i.value).sort((a, b) => b.value - a.value), n))}
    </div>
    ${card(t.last14, `<div class="flex h-40 items-end gap-1.5" dir="ltr">${perDay.map((v, i) => `<div class="flex h-full flex-1 flex-col items-center justify-end gap-1" title="${days[i]}: ${v}"><span class="text-[10px] tabular-nums text-slate-500">${v || ''}</span><div class="w-full rounded-t-md ${v ? 'bg-emerald-600' : 'bg-slate-100'}" style="height:${Math.max(4, v / maxDay * 100)}%"></div><span class="text-[10px] text-slate-400">${days[i].slice(8)}</span></div>`).join('')}</div>`)}
    ${card(t.recent, recent.length ? `<ul class="divide-y divide-slate-100">${recent.map(d => `<li><button type="button" data-open="${d.id}" class="flex w-full items-center justify-between gap-3 py-2.5 text-start hover:bg-slate-50">
        <span class="flex min-w-0 items-center gap-3"><span class="size-2.5 shrink-0 rounded-full" style="background:${SEV_COLOR[d.severity]}"></span><span class="min-w-0"><span class="block truncate text-sm font-medium text-slate-900">${esc(t.types[d.type])} · <span class="font-mono text-xs text-slate-500">${d.id}</span></span><span class="block truncate text-xs text-slate-500">${esc(placeName(d))}</span></span></span>
        <span class="flex shrink-0 items-center gap-2">${statusBadge(d.status)}<span class="hidden text-xs text-slate-500 sm:inline">${d.lastSeen ? esc(tfmt(d.lastSeen)) : ''}</span></span></button></li>`).join('')}</ul>` : `<p class="py-6 text-center text-sm text-slate-500">${esc(t.noDataYet)}</p>`)}`;
}

/* ------------------------------ Device ------------------------------ */
let devMap = null, devPin = null;
function renderDevicePage() {
  const el = $('#deviceBody'); if (!el) return;
  const t = T(), d = device, on = deviceOnline();
  const sats = d && d.sats != null ? +d.sats : null, hdop = d && d.hdop != null ? +d.hdop : null;
  const gpsQ = sats == null ? '—' : (sats >= 7 && (hdop == null || hdop < 2)) ? t.gpsGood : (sats >= 4 && (hdop == null || hdop <= 5)) ? t.gpsOk : t.gpsWeak;
  const stat = (icn, k, v, c = 'text-slate-900') => `<div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><div class="flex items-center gap-2 text-xs font-medium text-slate-500">${ic(icn, 'size-4')}${esc(k)}</div><div class="mt-2 text-lg font-bold ${c}">${v}</div></div>`;
  if (!$('#devStats')) {
    el.innerHTML = `${pageHead(t.devTitle, t.devSub)}
      <div id="devStats" class="grid grid-cols-2 gap-3 lg:grid-cols-5"></div>
      <div class="grid gap-4 lg:grid-cols-5">
        <div class="relative z-0 h-80 overflow-hidden rounded-xl border border-slate-200 shadow-sm lg:col-span-3" dir="ltr"><div id="devMap" class="h-full w-full"></div><div id="devMapEmpty" class="absolute inset-0 z-[500] grid place-items-center bg-white/80 text-sm text-slate-500"></div></div>
        <div id="devParts" class="lg:col-span-2"></div>
      </div>
      <div id="devCam"></div>
      <div id="devLog"></div>`;
    updateCam();
  }
  $('#devStats').innerHTML =
    stat('radio', t.devConn, `<span class="inline-flex items-center gap-2"><span class="size-2.5 rounded-full ${on ? 'bg-emerald-500' : d ? 'bg-rose-500' : 'bg-slate-400'}"></span>${esc(on ? t.deviceOnline : d ? t.deviceOffline : t.deviceNone)}</span>`, on ? 'text-emerald-700' : 'text-slate-900') +
    stat('crosshair', t.devGps, sats == null ? '—' : `${esc(gpsQ)} <span class="text-sm font-medium text-slate-500">· ${sats} ${esc(t.sats)}${hdop != null ? ` · HDOP <span dir="ltr">${hdop.toFixed(1)}</span>` : ''}</span>`) +
    stat('gauge', t.devSpeed, d && d.speed != null ? `${(+d.speed).toFixed(0)} ${esc(t.kmh)}` : '—') +
    stat('activity', t.devLast, d && d.ts ? `<span class="text-base">${esc(tfmt(d.ts))}</span>` : '—') +
    stat('map', t.devCoords, d && d.lat ? `<bdo dir="ltr" class="font-mono text-sm">${(+d.lat).toFixed(6)}, ${(+d.lng).toFixed(6)}</bdo>` : '—');
  $('#devParts').innerHTML = card(t.partsTitle, `<ul class="space-y-3">${t.parts.map(([icn, n, b]) => `<li class="flex gap-3"><span class="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">${ic(icn, 'size-5')}</span><span><span class="block text-sm font-semibold text-slate-900">${esc(n)}</span><span class="block text-xs leading-relaxed text-slate-500">${esc(b)}</span></span></li>`).join('')}</ul>`, 'h-full');
  renderDevLog();
  // mini map
  if (typeof L !== 'undefined') {
    if (!devMap) {
      devMap = L.map('devMap', { center: [23.8859, 45.0792], zoom: 5, scrollWheelZoom: false });
      devMap.createPane('basePane').style.zIndex = 150;
      if (window.SAUDI_GEO) L.geoJSON(window.SAUDI_GEO, { interactive: false, style: geoStyle, pane: 'basePane' }).addTo(devMap);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap', errorTileUrl: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' }).addTo(devMap);
    }
    const empty = $('#devMapEmpty');
    if (d && +d.lat) {
      const ll = [+d.lat, +d.lng];
      const icon = L.divIcon({ className: '', html: `<div class="device-pin ${on ? '' : 'off'}"><span></span></div>`, iconSize: [22, 22], iconAnchor: [11, 11] });
      if (!devPin) { devPin = L.marker(ll, { icon }).addTo(devMap); devMap.setView(ll, 17); } else { devPin.setLatLng(ll).setIcon(icon); if (on) devMap.panTo(ll, { animate: true }); }
      empty.hidden = true;
    } else { empty.hidden = false; empty.textContent = t.devNoData; }
    setTimeout(() => devMap.invalidateSize(), 50);
  }
}
function renderDevLog() {
  const el = $('#devLog'); if (!el) return;
  const t = T(), rows = RAWLOG.slice().reverse().slice(0, 25);
  const srcName = s => s === 'sensor' ? t.srcSensor : s === 'camera' ? t.srcCamera : s === 'citizen' ? t.srcCitizen : s;
  const what = e => e.src === 'sensor' ? `${esc(t.shock)}: <bdo dir="ltr">${e.g != null ? (+e.g).toFixed(2) : '—'} g</bdo>${e.depthCm ? ` · ${esc(t.depthShort)} <bdo dir="ltr">${e.depthCm} ${esc(t.mCm)}</bdo>` : ''}` : `${esc(t.types[e.type] || e.type || '—')}${e.conf != null ? ` · <bdo dir="ltr">${Math.round(e.conf * 100)}%</bdo>` : ''}${e.sizeCm ? ` · ${esc(e.type === 'pothole' ? t.diaShort : t.lenShort)} <bdo dir="ltr">${e.sizeCm} ${esc(t.mCm)}</bdo>` : ''}${e.depthCm ? ` · ${esc(t.depthShort)} <bdo dir="ltr">${e.depthCm} ${esc(t.mCm)}</bdo>` : ''}`;
  el.innerHTML = card(t.logTitle, `<p class="-mt-2 mb-3 text-sm text-slate-500">${esc(t.logSub)}</p><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b bg-slate-50/80"><th class="th">${esc(t.logTime)}</th><th class="th">${esc(t.logSrc)}</th><th class="th">${esc(t.logWhat)}</th><th class="th">${esc(t.coordinates)}</th><th class="th">${esc(t.logResult)}</th></tr></thead><tbody>${rows.map(e => `<tr class="border-b border-slate-100 last:border-0"><td class="td text-slate-600">${esc(tfmt(e.ts))}</td><td class="td">${esc(srcName(e.src))}</td><td class="td">${what(e)}</td><td class="td"><bdo dir="ltr" class="font-mono text-xs text-slate-500">${e.lat != null ? `${(+e.lat).toFixed(5)}, ${(+e.lng).toFixed(5)}` : '—'}</bdo></td><td class="td">${e.report ? `<button type="button" data-open="${e.report}" class="inline-flex items-center gap-1 font-medium text-emerald-700 hover:underline">${ic('circle-check', 'size-4')}${esc(t.accepted)} <span class="font-mono text-xs">${e.report}</span></button>` : `<span class="inline-flex items-center gap-1 text-rose-600">${ic('circle-alert', 'size-4')}${esc(t.rejected)}: ${esc(t.reasons[e.rejected] || e.rejected || '')}</span>`}</td></tr>`).join('') || `<tr><td colspan="5" class="py-8 text-center text-slate-500">${esc(t.logEmpty)}</td></tr>`}</tbody></table></div>`);
}
let camTs = 0;
const CAM_FB = 'https://nibs-eb9d5-default-rtdb.europe-west1.firebasedatabase.app';   // آخر صورة ترفعها الكاميرا
async function updateCam() {
  const el = $('#devCam'); if (!el) return;
  const t = T();
  let c = {}; try { c = (await fetch(`${CAM_FB}/camera.json`, { cache: 'no-store' }).then(r => r.json())) || {}; c.hasImg = typeof c.img === 'string'; } catch (_) {}
  const fresh = c.ts && Date.now() - c.ts < 60000;
  const body = c.hasImg
    ? `<div class="grid gap-4 md:grid-cols-2"><img src="data:image/jpeg;base64,${c.img}" alt="" class="w-full rounded-lg border border-slate-200 bg-slate-100 object-cover">
        <div class="space-y-3 text-sm"><div class="flex items-center gap-2"><span class="size-2.5 rounded-full ${fresh ? 'bg-emerald-500' : 'bg-slate-400'}"></span><span class="font-medium text-slate-900">${esc(fresh ? t.camLive : t.camOld)}</span></div>
          <div><div class="text-slate-500">${esc(t.lastUpdate)}</div><div class="font-medium text-slate-900">${c.ts ? esc(tfmt(c.ts)) : '—'}</div></div>
          <div><div class="text-slate-500">${esc(t.camSeen)}</div><div class="font-medium text-slate-900" dir="ltr">${esc(c.seen || '') || esc(t.camNothing)}</div></div>
          <p class="text-xs leading-relaxed text-slate-500">${esc(t.camHint)}</p></div></div>`
    : `<p class="py-6 text-center text-sm text-slate-500">${esc(t.camNone)}</p>`;
  if (c.ts !== camTs || !el.innerHTML) { camTs = c.ts; el.innerHTML = card(t.camTitle, body); }
}
setInterval(() => { if ($('#devCam')) updateCam(); }, 4000);

function setRawLog(list) { RAWLOG = Array.isArray(list) ? list : []; renderDevLog(); }
function onRawLog(e) { RAWLOG.push(e); if (RAWLOG.length > 60) RAWLOG.shift(); renderDevLog(); }

/* ------------------------------ Citizen reports (the form itself is a separate page: /citizen) ------------------------------ */
// رابط موقع «نبراس المواطن» بعد نشره على الإنترنت (مثلاً https://nibras-citizen.netlify.app)
const CITIZEN_URL = '';
function renderCitizen() {
  const el = $('#citizenBody'); if (!el) return;
  const t = T();
  const url = CITIZEN_URL || (VIEWER ? new URL('citizen.html', location.href.split('#')[0]).href : `${API || location.origin}/citizen`);
  const list = DEFECTS.filter(d => d.citizen).sort((a, b) => (b.citizen.ts || 0) - (a.citizen.ts || 0));
  el.innerHTML = `${pageHead(t.citTitle, t.citSub)}
    <div class="grid gap-4 lg:grid-cols-5 grid-cols-1">
      <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2 min-w-0">
        <div class="flex items-center gap-3"><span class="logo-tile grid size-11 shrink-0 place-items-center rounded-xl bg-[#064E3B] text-amber-300">${LOGO_SVG}</span><div><h3 class="text-base font-semibold text-slate-900">${esc(t.citSite)}</h3><p class="text-xs text-slate-500">${esc(t.citSiteSub)}</p></div></div>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">${esc(t.citTryBody)}</p>
        <div class="mt-4 flex items-center gap-2 rounded-lg bg-slate-50 p-2"><span class="min-w-0 flex-1 truncate px-1 font-mono text-xs text-slate-700" dir="ltr">${esc(url)}</span><button type="button" id="citCopy" class="btn-outline !h-7 shrink-0">${esc(t.copy)}</button></div>
        <a href="${esc(url)}" target="_blank" rel="noopener" class="btn-primary mt-4 h-10 w-full text-base">${ic('megaphone', 'size-4')}${esc(t.citOpen)}</a>
      </div>
      <div class="rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-3 min-w-0">
        <div class="flex items-center justify-between border-b border-slate-100 p-4"><h3 class="font-semibold text-slate-900">${esc(t.citRecent)}</h3><span class="text-sm text-slate-500">${list.length}</span></div>
        <ul class="divide-y divide-slate-100">${list.slice(0, 8).map(d => { const n = (d.citizen.notes || []).slice(-1)[0] || {}; return `<li><button type="button" data-open="${d.id}" class="flex w-full gap-3 p-4 text-start hover:bg-slate-50">
          ${d.photo ? `<img ${VIEWER ? `data-fbphoto="${esc(d.photo)}"` : `src="${API}/api/photo/${encodeURIComponent(d.photo)}"`} alt="" class="size-16 shrink-0 rounded-lg bg-slate-100 object-cover">` : `<span class="grid size-16 shrink-0 place-items-center rounded-lg bg-amber-50 text-amber-600">${ic('megaphone', 'size-6')}</span>`}
          <span class="min-w-0 flex-1"><span class="flex flex-wrap items-center gap-2"><span class="font-semibold text-slate-900">${esc(t.types[d.type])}</span><span class="font-mono text-xs text-slate-500">${d.id}</span>${statusBadge(d.status)}</span>
            <span class="mt-0.5 block text-sm text-slate-600">${esc(n.name || t.anonymous)}${n.desc ? ` — “${esc(n.desc)}”` : ''}</span>
            <span class="mt-0.5 block truncate text-xs text-slate-500">${esc(placeName(d))} · ${esc(tfmt(d.citizen.ts || d.lastSeen))}</span></span></button></li>`; }).join('') || `<li class="p-8 text-center text-sm text-slate-500">${esc(t.citNone)}</li>`}</ul>
      </div>
    </div>`;
  $('#citCopy').onclick = () => { try { navigator.clipboard.writeText(url).then(() => toast(t.copied)); } catch (_) {} };
}

/* ------------------------------ Road quality ------------------------------ */
const Q_W = { high: 20, medium: 10, low: 5 };
function gradeOf(s) { return s >= 85 ? 'excellent' : s >= 70 ? 'good' : s >= 50 ? 'fair' : 'poor'; }
const GRADE_CLS = { excellent: 'bg-emerald-50 text-emerald-800 ring-emerald-600/25', good: 'bg-lime-50 text-lime-800 ring-lime-600/25', fair: 'bg-amber-50 text-amber-800 ring-amber-600/25', poor: 'bg-rose-50 text-rose-800 ring-rose-600/25' };
const GRADE_COL = { excellent: '#059669', good: '#65A30D', fair: '#D97706', poor: '#E11D48' };
const gradeBadge = g => `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${GRADE_CLS[g]}">${esc(T().grades[g])}</span>`;
function roadQuality() {
  const roads = new Map();
  for (const d of DEFECTS) {
    const key = (d.road ? d.road.ar : '—') + '|' + d.city;
    if (!roads.has(key)) roads.set(key, { road: d.road, city: d.city, open: 0, pen: 0, total: 0 });
    const r = roads.get(key); r.total++;
    if (d.status !== 'fixed') { r.open++; r.pen += Q_W[d.severity] || 10; }
  }
  const list = [...roads.values()].map(r => ({ ...r, score: Math.max(0, 100 - r.pen) })).sort((a, b) => a.score - b.score);
  return list;
}
function renderQuality() {
  const el = $('#qualityBody'); if (!el) return;
  const t = T(), roads = roadQuality();
  const avg = a => a.length ? Math.round(a.reduce((s, r) => s + r.score, 0) / a.length) : 100;
  const overall = avg(roads), g = gradeOf(overall);
  const cities = CITY_KEYS.map(k => ({ k, rs: roads.filter(r => r.city === k) })).filter(c => c.rs.length).map(c => ({ k: c.k, score: avg(c.rs), open: c.rs.reduce((s, r) => s + r.open, 0) })).sort((a, b) => a.score - b.score);
  const ring = (s, col) => `<svg viewBox="0 0 120 120" class="size-36"><circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" class="text-slate-100" stroke-width="12"/><circle cx="60" cy="60" r="50" fill="none" stroke="${col}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${(s / 100 * 314.16).toFixed(1)} 314.16" transform="rotate(-90 60 60)"/><text x="60" y="68" text-anchor="middle" class="fill-slate-900" style="font:700 30px var(--font-sans,system-ui)">${s}</text></svg>`;
  el.innerHTML = `${pageHead(t.qTitle, t.qSub)}
    <div class="grid gap-4 lg:grid-cols-3">
      ${card(t.qOverall, `<div class="flex flex-col items-center gap-3">${ring(overall, GRADE_COL[g])}${gradeBadge(g)}<p class="text-center text-xs leading-relaxed text-slate-500">${esc(t.qMethod)}</p></div>`)}
      ${card(t.qCities, cities.length ? `<ul class="space-y-3">${cities.map(c => `<li><div class="mb-1 flex items-center justify-between text-sm"><span class="font-medium text-slate-700">${esc(t.cities[c.k])}</span><span class="flex items-center gap-2"><span class="tabular-nums text-slate-500">${c.score}/100</span>${gradeBadge(gradeOf(c.score))}</span></div><div class="h-2.5 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full" style="width:${c.score}%;background:${GRADE_COL[gradeOf(c.score)]}"></div></div></li>`).join('')}</ul>` : `<p class="py-6 text-center text-sm text-slate-500">${esc(t.noDataYet)}</p>`, 'lg:col-span-2')}
    </div>
    <div class="rounded-xl border border-slate-200 bg-white shadow-sm"><div class="border-b border-slate-100 p-4 font-semibold text-slate-900">${esc(t.qRoads)}</div><div class="overflow-x-auto"><table class="w-full text-sm">
      <thead><tr class="border-b bg-slate-50/80"><th class="th">${esc(t.qRoad)}</th><th class="th">${esc(t.qCity)}</th><th class="th">${esc(t.qOpen)}</th><th class="th w-1/3">${esc(t.qScore)}</th><th class="th">${esc(t.qGrade)}</th></tr></thead>
      <tbody>${roads.map(r => { const gr = gradeOf(r.score); return `<tr class="border-b border-slate-100 last:border-0"><td class="td font-medium text-slate-900">${esc(r.road ? r.road[S.lang] : t.unknownRoad)}</td><td class="td">${esc(t.cities[r.city])}</td><td class="td tabular-nums">${r.open}</td><td class="td"><div class="flex items-center gap-2"><div class="h-2 flex-1 overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full" style="width:${r.score}%;background:${GRADE_COL[gr]}"></div></div><span class="w-12 text-end tabular-nums text-slate-600">${r.score}</span></div></td><td class="td">${gradeBadge(gr)}</td></tr>`; }).join('') || `<tr><td colspan="5" class="py-8 text-center text-slate-500">${esc(DEFECTS.length ? t.qNoData : t.noDataYet)}</td></tr>`}</tbody>
    </table></div></div>`;
}

/* ------------------------------ Reports ------------------------------ */
const RF = { from: '', to: '', city: 'all', status: 'all' };
function reportRows() {
  return DEFECTS.filter(d => (!RF.from || d.date >= RF.from) && (!RF.to || d.date <= RF.to) && (RF.city === 'all' || d.city === RF.city) && (RF.status === 'all' || d.status === RF.status))
    .sort((a, b) => (b.firstSeen || 0) - (a.firstSeen || 0));
}
function renderReports() {
  const el = $('#reportsBody'); if (!el) return;
  const t = T(), rows = reportRows();
  const opt = (v, l, cur) => `<option value="${v}" ${v === cur ? 'selected' : ''}>${esc(l)}</option>`;
  const cnt = f => rows.filter(f).length;
  if (!$('#r-from')) {
    el.innerHTML = `${pageHead(t.repTitle, t.repSub, `<div class="no-print flex flex-wrap gap-2"><button type="button" id="r-print" class="btn-outline"></button><button type="button" id="r-csv" class="btn-primary"></button></div>`)}
      <div class="no-print grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-1.5"><label for="r-from" class="text-xs font-medium text-slate-500" id="l-rfrom"></label><input id="r-from" type="date" class="finput"></div>
        <div class="space-y-1.5"><label for="r-to" class="text-xs font-medium text-slate-500" id="l-rto"></label><input id="r-to" type="date" class="finput"></div>
        <div class="space-y-1.5"><label for="r-city" class="text-xs font-medium text-slate-500" id="l-rcity"></label><select id="r-city" class="fsel"></select></div>
        <div class="space-y-1.5"><label for="r-status" class="text-xs font-medium text-slate-500" id="l-rstatus"></label><select id="r-status" class="fsel"></select></div>
      </div>
      <div id="repDoc" class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"></div>`;
    $('#r-from').onchange = e => { RF.from = e.target.value; renderReports(); };
    $('#r-to').onchange = e => { RF.to = e.target.value; renderReports(); };
    $('#r-city').onchange = e => { RF.city = e.target.value; renderReports(); };
    $('#r-status').onchange = e => { RF.status = e.target.value; renderReports(); };
    $('#r-print').onclick = () => { document.documentElement.classList.add('print-report'); window.print(); setTimeout(() => document.documentElement.classList.remove('print-report'), 500); };
    $('#r-csv').onclick = exportCsv;
  }
  el.querySelector('h1').textContent = t.repTitle; el.querySelector('h1 + p').textContent = t.repSub;
  $('#r-print').innerHTML = ic('printer', 'size-4') + esc(t.repPrint); $('#r-csv').innerHTML = ic('download', 'size-4') + esc(t.repCsv);
  $('#l-rfrom').textContent = t.filterFrom; $('#l-rto').textContent = t.filterTo; $('#l-rcity').textContent = t.filterCity; $('#l-rstatus').textContent = t.repStatus;
  $('#r-city').innerHTML = opt('all', t.allCities, RF.city) + CITY_KEYS.map(k => opt(k, t.cities[k], RF.city)).join('');
  $('#r-status').innerHTML = opt('all', t.allStatuses, RF.status) + STATUS_KEYS.map(k => opt(k, t.statuses[k], RF.status)).join('');
  const period = RF.from || RF.to ? `${RF.from || '…'} — ${RF.to || '…'}` : t.repAll;
  const sumCell = (k, v) => `<div class="rounded-lg bg-slate-50 p-3"><div class="text-xs text-slate-500">${esc(k)}</div><div class="mt-1 text-xl font-bold tabular-nums text-slate-900">${v}</div></div>`;
  $('#repDoc').innerHTML = `
    <div class="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
      <div class="flex items-center gap-3"><span class="logo-tile grid size-10 place-items-center rounded-lg bg-[#064E3B] text-amber-300">${LOGO_SVG}</span><div><div class="text-lg font-bold text-slate-900">${esc(t.brand)} — ${esc(t.repTitle)}</div><div class="text-xs text-slate-500">${esc(t.brandSub)}</div></div></div>
      <div class="text-xs leading-relaxed text-slate-500"><div>${esc(t.repGenerated)}: ${esc(tfmt(Date.now()))}</div><div>${esc(t.repPeriod)}: ${RF.from || RF.to ? `<bdo dir="ltr">${esc(period)}</bdo>` : esc(period)}</div><div>${esc(t.filterCity)}: ${esc(RF.city === 'all' ? t.allCities : t.cities[RF.city])} · ${esc(t.repStatus)}: ${esc(RF.status === 'all' ? t.allStatuses : t.statuses[RF.status])}</div></div>
    </div>
    <h3 class="mt-4 mb-2 text-sm font-semibold text-slate-900">${esc(t.repSummary)}</h3>
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">${sumCell(t.kTotal, rows.length)}${sumCell(t.kConfirmed, cnt(d => d.confirmed))}${SEVS.map(s => sumCell(t.severities[s], cnt(d => d.severity === s))).join('')}${sumCell(t.statuses.fixed, cnt(d => d.status === 'fixed'))}</div>
    <div class="mt-4 overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b bg-slate-50/80"><th class="th">${esc(t.colId)}</th><th class="th">${esc(t.colType)}</th><th class="th">${esc(t.colSeverity)}</th><th class="th">${esc(t.colStatus)}</th><th class="th">${esc(t.location)}</th><th class="th">${esc(t.coordinates)}</th><th class="th">${esc(t.dateDetected)}</th></tr></thead>
      <tbody>${rows.map(d => `<tr class="border-b border-slate-100 last:border-0"><td class="td font-mono text-xs">${d.id}</td><td class="td">${esc(t.types[d.type])}</td><td class="td">${badge(d.severity)}</td><td class="td">${statusBadge(d.status)}</td><td class="td">${esc(placeName(d))}</td><td class="td"><bdo dir="ltr" class="font-mono text-xs">${d.lat}, ${d.lng}</bdo></td><td class="td text-slate-600">${d.firstSeen ? esc(tfmt(d.firstSeen)) : d.date}</td></tr>`).join('') || `<tr><td colspan="7" class="py-8 text-center text-slate-500">${esc(DEFECTS.length ? t.repEmpty : t.noDataYet)}</td></tr>`}</tbody></table></div>`;
}
function exportCsv() {
  const t = T(), rows = reportRows();
  const head = [t.colId, t.colType, t.colSeverity, t.colStatus, t.verify, t.colCity, t.colRoad, 'Lat', 'Lng', t.dateDetected, t.hits, t.shock, t.confidence];
  const q = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const lines = rows.map(d => [d.id, t.types[d.type], t.severities[d.severity], t.statuses[d.status], d.source, t.cities[d.city], d.road ? d.road[S.lang] : '', d.lat, d.lng, d.firstSeen ? new Date(d.firstSeen).toISOString() : d.date, d.hits, d.shock ?? '', d.conf != null ? Math.round(d.conf * 100) + '%' : ''].map(q).join(','));
  const blob = new Blob(['﻿' + [head.map(q).join(','), ...lines].join('\r\n')], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `nibras-report-${fmt(new Date())}.csv`; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

/* ------------------------------ About ------------------------------ */
function renderAbout() {
  const el = $('#aboutBody'); if (!el) return;
  const t = T();
  const tech = ['ESP32', 'MPU6050', 'GPS NEO-6M', 'ESP32-CAM', 'YOLO · Roboflow', 'Firebase Realtime Database', 'Node.js', 'HTML · Tailwind CSS · JavaScript', 'Leaflet · OpenStreetMap'];
  el.innerHTML = `${pageHead(t.aboutTitle, t.aboutSub)}
    <div class="overflow-hidden rounded-xl bg-[linear-gradient(135deg,#064E3B_0%,#0F172A_100%)] p-6 text-white shadow-sm sm:p-8"><div class="flex items-start gap-4"><span class="logo-tile grid size-14 shrink-0 place-items-center rounded-xl bg-white/10 text-amber-300">${LOGO_SVG.replace('size-6', 'size-9')}</span><p class="text-base leading-relaxed text-emerald-50 sm:text-lg">${esc(t.aboutLead)}</p></div></div>
    <div class="grid gap-4 md:grid-cols-2">${card(t.aboutProblem, `<p class="text-sm leading-relaxed text-slate-600">${esc(t.aboutProblemBody)}</p>`)}${card(t.aboutSolution, `<p class="text-sm leading-relaxed text-slate-600">${esc(t.aboutSolutionBody)}</p>`)}</div>
    ${card(t.howTitle, `<ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${t.how.map(([icn, h, b], i) => `<li class="relative rounded-lg bg-slate-50 p-4"><span class="absolute top-3 end-3 text-xs font-bold text-slate-400">${i + 1}</span><span class="grid size-10 place-items-center rounded-lg bg-emerald-50 text-emerald-700">${ic(icn, 'size-5')}</span><div class="mt-3 font-semibold text-slate-900">${esc(h)}</div><p class="mt-1 text-sm leading-relaxed text-slate-600">${esc(b)}</p></li>`).join('')}</ol>`)}
    ${card(t.techTitle, `<div class="flex flex-wrap gap-2" dir="ltr">${tech.map(x => `<span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">${esc(x)}</span>`).join('')}</div>`)}
    <p class="text-sm text-slate-500">${esc(t.scopeNote)}</p>`;
}

/* ------------------------------ entry points (called from app.js) ------------------------------ */
function renderPages() { renderDashboard(); renderDevicePage(); renderCitizen(); renderQuality(); renderReports(); renderAbout(); }
function renderStaticPages() {}
function bindPages() {
  document.addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) showDefect(b.dataset.open); });
}
