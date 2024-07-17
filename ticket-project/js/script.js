﻿let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countriesData = {
  AzSh	:["	اسکو	"	,	
    "	اهر	"	,	
    "	ایلخچی	"	,	
    "	آذرشهر	"	,	
    "	بستان آباد	"	,	
    "	بناب	"	,	
    "	تبریز 	"	,	
    "	ترکمانچای	"	,	
    "	تسوج	"	,	
    "	تیکمه داش	"	,	
    "	جلفا	"	,	
    "	چاراویماق	"	,	
    "	خاروانا	"	,	
    "	خداآفرین	"	,	
    "	خسروشاه	"	,	
    "	خواجه	"	,	
    "	سراب	"	,	
    "	شبستر	"	,	
    "	صوفیان	"	,	
    "	عجب شیر	"	,	
    "	کاغذکنان	"	,	
    "	کلیبر	"	,	
    "	کندوان	"	,	
    "	گوگان	"	,	
    "	لیلان	"	,	
    "	مراغه	"	,	
    "	مرند	"	,	
    "	ملکان	"	,	
    "	مهربان	"	,	
    "	میانه	"	,	
    "	نظرکهریزی	"	,	
    "	هریس	"	,	
    "	هشترود	"	,	
    "	هوراند	"	,	
    "	ورزقان	"	]	,
  AzGh	:["	 ارومیه	"	,	
    "	اشنویه	"	,	
    "	انزل	"	,	
    "	بوکان	"	,	
    "	پلدشت	"	,	
    "	پیرانشهر	"	,	
    "	تکاب	"	,	
    "	چالدران	"	,	
    "	چایپاره	"	,	
    "	خوی	"	,	
    "	سردشت	"	,	
    "	سلماس	"	,	
    "	سیلوانا	"	,	
    "	شاهین دژ	"	,	
    "	شوط	"	,	
    "	صومای	"	,	
    "	کشاورز	"	,	
    "	ماکو	"	,	
    "	مرحمت آباد	"	,	
    "	مهاباد	"	,	
    "	میاندوآب	"	,	
    "	نازلو	"	,	
    "	نقده	"	]	,
  Ard	:["	اردبیل	"	,	
    "	ارشق	"	,	
    "	اصلاندوز	"	,	
    "	انگوت	"	,	
    "	بیله سوار	"	,	
    "	پارس آباد	"	,	
    "	جعفرآباد	"	,	
    "	خلخال	"	,	
    "	خورش رستم	"	,	
    "	سرعین	"	,	
    "	شاهرود	"	,	
    "	کوثر	"	,	
    "	گرمی	"	,	
    "	لاهرود	"	,	
    "	مشگین شهر	"	,	
    "	نمین	"	,	
    "	نیر	"	,	
    "	هیر	"	]	,
  Esf	:["	اردستان	"	,	
    "	اصفهان 	"	,	
    "	امامزاده	"	,	
    "	آران و بیدگل	"	,	
    "	باغبادران	"	,	
    "	برخوار	"	,	
    "	بوئین و میاندشت	"	,	
    "	پیربکران	"	,	
    "	تیران وکرون	"	,	
    "	جرقویه سفلی	"	,	
    "	جرقویه علیا	"	,	
    "	چادگان	"	,	
    "	خمینی شهر	"	,	
    "	خوانسار	"	,	
    "	خوروبیابانک	"	,	
    "	دهاقان	"	,	
    "	زرین شهر	"	,	
    "	زواره	"	,	
    "	سمیرم	"	,	
    "	شاهین شهر	"	,	
    "	شهرضا	"	,	
    "	فریدن	"	,	
    "	فریدونشهر	"	,	
    "	فلاورجان	"	,	
    "	فولادشهر	"	,	
    "	کاشان	"	,	
    "	کوهپایه	"	,	
    "	گلپایگان	"	,	
    "	مبارکه	"	,	
    "	مهردشت	"	,	
    "	میمه	"	,	
    "	نائین	"	,	
    "	نجف آباد	"	,	
    "	نطنز	"	,	
    "	هرند	"	,	
    "	ورزنه	"	]	,
  Alb	:["	اشتهارد	"	,	
    "	ساوجبلاغ	"	,	
    "	طالقان	"	,	
    "	کرج	"	,	
    "	نظرآباد	"	]	,
  Ila	:["	ایلام	"	,	
    "	ایوان	"	,	
    "	آبدانان	"	,	
    "	بدره	"	,	
    "	چرداول	"	,	
    "	چوار	"	,	
    "	دره شهر	"	,	
    "	دهلران	"	,	
    "	سیروان	"	,	
    "	ملکشاهی	"	,	
    "	منطقه زرین آباد	"	,	
    "	منطقه موسیان	"	,	
    "	مهران	"	,	
    "	هلیلان	"	]	,
  Bou	:["	آب پخش	"	,	
    "	بردخون	"	,	
    "	بندرریگ	"	,	
    "	بوشهر	"	,	
    "	تنگستان	"	,	
    "	جم	"	,	
    "	خارک	"	,	
    "	دشتستان	"	,	
    "	دشتی	"	,	
    "	دلوار	"	,	
    "	دیر	"	,	
    "	دیلم	"	,	
    "	سعدآباد	"	,	
    "	شبانکاره	"	,	
    "	عسلویه	"	,	
    "	کاکی	"	,	
    "	کنگان	"	,	
    "	گناوه	"	]	,
  The	:["	اسلامشهر	"	,	
    "	بهارستان 	"	,	
    "	پاکدشت	"	,	
    "	پردیس	"	,	
    "	پیشوا	"	,	
    "	تهران	"	,	
    "	جوادآباد	"	,	
    "	چهاردانگه	"	,	
    "	دماوند	"	,	
    "	رباط کریم	"	,	
    "	رودهن	"	,	
    "	شهر ری 	"	,	
    "	شهریار	"	,	
    "	فشافویه	"	,	
    "	فیروزکوه	"	,	
    "	قدس	"	,	
    "	قرچک	"	,	
    "	کهریزک	"	,	
    "	ملارد	"	,	
    "	ورامین	"	]	,
  Chb	:["	اردل	"	,	
    "	بروجن	"	,	
    "	بلداجی	"	,	
    "	بن	"	,	
    "	خانمیرزا	"	,	
    "	سامان	"	,	
    "	شهرکرد 	"	,	
    "	فارسان	"	,	
    "	فلارد	"	,	
    "	کوهرنگ	"	,	
    "	کیار	"	,	
    "	گندمان	"	,	
    "	لاران	"	,	
    "	لردگان	"	,	
    "	میانکوه	"	]	,
  Khj	:["	بشرویه	"	,	
    "	بیرجند	"	,	
    "	خوسف	"	,	
    "	درمیان	"	,	
    "	دستگردان	"	,	
    "	زیرکوه	"	,	
    "	سرایان	"	,	
    "	سربیشه	"	,	
    "	طبس	"	,	
    "	فردوس	"	,	
    "	قائنات	"	,	
    "	نهبندان	"	]	,
  Khr	:["	احمدآباد	"	,	
    "	باخرز	"	,	
    "	بجستان	"	,	
    "	بردسکن	"	,	
    "	تایباد	"	,	
    "	تبادکان	"	,	
    "	تربت جام	"	,	
    "	تربت حیدریه	"	,	
    "	جغتای	"	,	
    "	جلگه رخ	"	,	
    "	جوین	"	,	
    "	چناران	"	,	
    "	خلیل آباد	"	,	
    "	خواف	"	,	
    "	خوشاب	"	,	
    "	داورزن	"	,	
    "	درگز	"	,	
    "	رشتخوار	"	,	
    "	رضویه	"	,	
    "	زاوه	"	,	
    "	زبرخان	"	,	
    "	سبزوار	"	,	
    "	سرخس	"	,	
    "	سرولایت	"	,	
    "	ششتمد	"	,	
    "	صالح آباد	"	,	
    "	طرقبه	"	,	
    "	فریمان	"	,	
    "	فیروزه	"	,	
    "	قوچان	"	,	
    "	کاشمر	"	,	
    "	کدکن	"	,	
    "	کلات	"	,	
    "	کوهسرخ	"	,	
    "	گلبهار	"	,	
    "	گناباد	"	,	
    "	مشهد 	"	,	
    "	مه ولات	"	,	
    "	میان جلگه	"	,	
    "	نوخندان	"	,	
    "	نیشابور	"	]	,
  Khsh	:["	اسفراین	"	,	
    "	بام و صفی آباد	"	,	
    "	بجنورد	"	,	
    "	جاجرم	"	,	
    "	راز و جرگلان	"	,	
    "	شیروان	"	,	
    "	فاروج	"	,	
    "	گرمه	"	,	
    "	مانه و سملقان	"	]	,
  Kho	:["	اروند کنار	"	,	
    "	الوار گرمسیری	"	,	
    "	امیدیه	"	,	
    "	اندیکا	"	,	
    "	اندیمشک	"	,	
    "	اهواز	"	,	
    "	ایذه	"	,	
    "	آبادان	"	,	
    "	آغاجاری	"	,	
    "	باغملک	"	,	
    "	باوی	"	,	
    "	بستان	"	,	
    "	بندر امام خمینی	"	,	
    "	بهبهان	"	,	
    "	حمیدیه	"	,	
    "	خرمشهر	"	,	
    "	دزفول	"	,	
    "	دشت آزادگان	"	,	
    "	دهدز	"	,	
    "	رامشیر	"	,	
    "	رامهرمز	"	,	
    "	زیدون	"	,	
    "	سردشت	"	,	
    "	شادگان	"	,	
    "	شاوور	"	,	
    "	شوش	"	,	
    "	شوشتر	"	,	
    "	صیدون	"	,	
    "	کارون	"	,	
    "	گتوند	"	,	
    "	لالی	"	,	
    "	ماهشهر	"	,	
    "	مسجد سلیمان	"	,	
    "	هفتکل	"	,	
    "	هندیجان	"	,	
    "	هویزه	"	]	,
  Zan	:["	ابهر	"	,	
    "	افشار	"	,	
    "	انگوران	"	,	
    "	ایجرود	"	,	
    "	بزینه رود	"	,	
    "	خدابنده	"	,	
    "	خرمدره	"	,	
    "	زنجان	"	,	
    "	زنجانرود	"	,	
    "	سجاسرود	"	,	
    "	سلطانیه	"	,	
    "	طارم	"	,	
    "	ماهنشان	"	]	,
  Sem	:["	امیرآباد	"	,	
    "	آرادان	"	,	
    "	بسطام	"	,	
    "	بیارجمند	"	,	
    "	دامغان	"	,	
    "	سرخه	"	,	
    "	سمنان	"	,	
    "	شاهرود	"	,	
    "	گرمسار	"	,	
    "	مهدیشهر	"	,	
    "	میامی	"	]	,
  Seb	:["	ایرانشهر	"	,	
    "	بزمان	"	,	
    "	بم پشت	"	,	
    "	بنت	"	,	
    "	بنجار	"	,	
    "	پلان	"	,	
    "	تفتان	"	,	
    "	چابهار	"	,	
    "	خاش	"	,	
    "	دشتیاری	"	,	
    "	دلگان	"	,	
    "	راسک	"	,	
    "	زابل	"	,	
    "	زاهدان	"	,	
    "	زرآباد	"	,	
    "	زهک	"	,	
    "	سراوان	"	,	
    "	سرباز	"	,	
    "	سیب و سوران	"	,	
    "	فنوج	"	,	
    "	قصر قند	"	,	
    "	کنارک	"	,	
    "	گلشن	"	,	
    "	لاشار	"	,	
    "	مهرستان	"	,	
    "	میرجاوه	"	,	
    "	نصرت آباد	"	,	
    "	نیکشهر	"	,	
    "	نیمروز	"	,	
    "	هامون	"	,	
    "	هیرمند	"	]	,
  Far	:["	ارژن	"	,	
    "	ارسنجان	"	,	
    "	استهبان	"	,	
    "	اشکنان	"	,	
    "	اقلید	"	,	
    "	اوز	"	,	
    "	آباده	"	,	
    "	بالاده	"	,	
    "	بختگان	"	,	
    "	بنارویه	"	,	
    "	بوانات	"	,	
    "	بیرم	"	,	
    "	بیضا	"	,	
    "	پاسارگاد	"	,	
    "	جهرم	"	,	
    "	جویم	"	,	
    "	خرامه	"	,	
    "	خرم بید	"	,	
    "	خشت وکمارج	"	,	
    "	خفر	"	,	
    "	خنج	"	,	
    "	داراب	"	,	
    "	درودزن	"	,	
    "	دشمن زیاری	"	,	
    "	رستم	"	,	
    "	زرقان	"	,	
    "	زرین دشت	"	,	
    "	سپیدان	"	,	
    "	سده	"	,	
    "	سرچهان	"	,	
    "	سروستان	"	,	
    "	ششده و قره بلاغ	"	,	
    "	شیب کوه	"	,	
    "	شیراز	"	,	
    "	علامرودشت	"	,	
    "	فراشبند	"	,	
    "	فرگ	"	,	
    "	فسا	"	,	
    "	فیروزآباد	"	,	
    "	قیروکارزین	"	,	
    "	کازرون	"	,	
    "	کامفیروز	"	,	
    "	کوار	"	,	
    "	کوه چنار	"	,	
    "	کوهمره نودان	"	,	
    "	گراش	"	,	
    "	گله دار	"	,	
    "	لارستان	"	,	
    "	لامرد	"	,	
    "	ماهورمیلاتی	"	,	
    "	مرودشت	"	,	
    "	مشهد مرغاب	"	,	
    "	ممسنی	"	,	
    "	مهر	"	,	
    "	میمند	"	,	
    "	نی ریز	"	]	,
  Qaz	:["	اسفرورین	"	,	
    "	البرز	"	,	
    "	الموت غربی	"	,	
    "	آبیک	"	,	
    "	آوج	"	,	
    "	بوئین زهرا	"	,	
    "	تاکستان	"	,	
    "	خرمدشت	"	,	
    "	رودبار الموت	"	,	
    "	شال	"	,	
    "	ضیاء آباد	"	,	
    "	طارم سفلی	"	,	
    "	قزوین	"	]	,
  Qom	:["	جعفرآباد	"	,	
    "	خلجستان	"	,	
    "	قم	"	,	
    "	کهک	"	]	,
  Kor	:["	بانه	"	,	
    "	بیجار	"	,	
    "	دهگلان	"	,	
    "	دیواندره	"	,	
    "	زیویه	"	,	
    "	سرو آباد	"	,	
    "	سریش آباد	"	,	
    "	سقز	"	,	
    "	سنندج	"	,	
    "	قروه	"	,	
    "	کامیاران	"	,	
    "	کرانی	"	,	
    "	کلاترزان	"	,	
    "	مریوان	"	,	
    "	موچش	"	]	,
  Ker	:["	ارزوئیه	"	,	
    "	انار	"	,	
    "	بافت	"	,	
    "	بردسیر	"	,	
    "	بم	"	,	
    "	جازموریان	"	,	
    "	جیرفت	"	,	
    "	چترود	"	,	
    "	رابر	"	,	
    "	راور	"	,	
    "	راین	"	,	
    "	رفسنجان	"	,	
    "	رودبار جنوب	"	,	
    "	ریگان	"	,	
    "	زرند	"	,	
    "	سیرجان	"	,	
    "	شهداد	"	,	
    "	شهر بابک	"	,	
    "	عنبر آباد	"	,	
    "	فاریاب	"	,	
    "	فهرج	"	,	
    "	قلعه گنج	"	,	
    "	کرمان	"	,	
    "	کشکوئیه	"	,	
    "	کهنوج	"	,	
    "	کوهبنان	"	,	
    "	گلباف	"	,	
    "	ماهان	"	,	
    "	منوجان	"	,	
    "	نرماشیر	"	,	
    "	نوق	"	]	,
  Ksha	:["	اسلام آباد غرب	"	,	
    "	باینگان	"	,	
    "	بیستون	"	,	
    "	پاوه	"	,	
    "	ثلاث باباجانی	"	,	
    "	جوانرود	"	,	
    "	حمیل	"	,	
    "	دینور	"	,	
    "	روانسر	"	,	
    "	سرپل ذهاب	"	,	
    "	سنقر کلیایی	"	,	
    "	صحنه	"	,	
    "	قصر شیرین	"	,	
    "	کرمانشاه	"	,	
    "	کرند غرب	"	,	
    "	کنگاور	"	,	
    "	گهواره	"	,	
    "	گواور	"	,	
    "	گیلانغرب	"	,	
    "	ماهیدشت	"	,	
    "	نوسود	"	,	
    "	هرسین	"	]	,
  Kab	:["	باشت	"	,	
    "	بهمئی	"	,	
    "	بویراحمد	"	,	
    "	چاروسا	"	,	
    "	چرام	"	,	
    "	دنا	"	,	
    "	دیشموک	"	,	
    "	کهگیلویه	"	,	
    "	گچساران	"	,	
    "	لنده	"	,	
    "	لوداب	"	,	
    "	مارگون	"	]	,
  Gol	:["	آزاد شهر	"	,	
    "	آق قلا	"	,	
    "	بندر ترکمن	"	,	
    "	بندرگز	"	,	
    "	رامیان	"	,	
    "	علی آباد	"	,	
    "	کردکوی	"	,	
    "	کلاله	"	,	
    "	گالیکش	"	,	
    "	گرگان	"	,	
    "	گمیشان	"	,	
    "	گنبد کاووس	"	,	
    "	مراوه تپه	"	,	
    "	مینودشت	"	]	,
  Gil	:["	اطاقور	"	,	
    "	املش	"	,	
    "	آستارا	"	,	
    "	آستانه اشرفیه	"	,	
    "	بندرانزلی	"	,	
    "	تالش	"	,	
    "	تولمات	"	,	
    "	چابکسر	"	,	
    "	حویق	"	,	
    "	خشکبیجار	"	,	
    "	خمام	"	,	
    "	دیلمان	"	,	
    "	رحمت آباد و بلوکات	"	,	
    "	رحیم آباد	"	,	
    "	رشت	"	,	
    "	رضوانشهر	"	,	
    "	رودبار	"	,	
    "	رودبنه	"	,	
    "	رودسر	"	,	
    "	سنگر	"	,	
    "	سیاهکل	"	,	
    "	شفت	"	,	
    "	صومعه سرا	"	,	
    "	عمارلو	"	,	
    "	فومن	"	,	
    "	کلاچای	"	,	
    "	کوچصفهان	"	,	
    "	کومله	"	,	
    "	کیاشهر	"	,	
    "	لاهیجان	"	,	
    "	لشت نشاء	"	,	
    "	لنگرود	"	,	
    "	ماسال	"	]	,
  Lor	:["	ازنا	"	,	
    "	اشترینان	"	,	
    "	الشتر	"	,	
    "	الیگودرز	"	,	
    "	بروجرد	"	,	
    "	بیرانوند	"	,	
    "	پاپی	"	,	
    "	پلدختر	"	,	
    "	چگنی	"	,	
    "	خرم آباد	"	,	
    "	خرم آباد	"	,	
    "	دورود	"	,	
    "	رومشکان	"	,	
    "	زاغه	"	,	
    "	ززوماهرو	"	,	
    "	سیلاخور	"	,	
    "	طرحان	"	,	
    "	کاکاوند	"	,	
    "	کوهدشت	"	,	
    "	کوهنانی	"	,	
    "	معمولان	"	,	
    "	نورآباد	"	,	
    "	ویسیان	"	]	,
  Maz	:["	آمل	"	,	
    "	بابل	"	,	
    "	بابلسر	"	,	
    "	بلده	"	,	
    "	بند پی شرقی	"	,	
    "	بند پی غربی	"	,	
    "	بهشهر	"	,	
    "	بهنمیر	"	,	
    "	تنکابن	"	,	
    "	جویبار	"	,	
    "	چالوس	"	,	
    "	چمستان	"	,	
    "	چهار دانگه	"	,	
    "	دو دانگه	"	,	
    "	رامسر	"	,	
    "	ساری	"	,	
    "	سوادکوه	"	,	
    "	سوادکوه شمالی	"	,	
    "	سیمرغ	"	,	
    "	عباس آباد	"	,	
    "	فریدونکنار	"	,	
    "	قائمشهر	"	,	
    "	کجور	"	,	
    "	کلاردشت	"	,	
    "	گلوگاه	"	,	
    "	لاریجان	"	,	
    "	محمودآباد	"	,	
    "	مرزن آباد	"	,	
    "	میاندورود	"	,	
    "	نکا	"	,	
    "	نور	"	,	
    "	نوشهر	"	]	,
  Mar	:["	اراک	"	,	
    "	آشتیان	"	,	
    "	تفرش	"	,	
    "	خمین	"	,	
    "	خنداب	"	,	
    "	دلیجان	"	,	
    "	زرندیه	"	,	
    "	ساوه	"	,	
    "	سربند	"	,	
    "	شازند	"	,	
    "	فراهان	"	,	
    "	کمیجان	"	,	
    "	محلات	"	,	
    "	نوبران	"	]	,
  Hor	:["	ابوموسی	"	,	
    "	بستک	"	,	
    "	بشاگرد	"	,	
    "	بندر خمیر	"	,	
    "	بندر لنگه	"	,	
    "	بندرعباس	"	,	
    "	پارسیان	"	,	
    "	جاسک	"	,	
    "	جناح	"	,	
    "	حاجی آباد	"	,	
    "	رودان	"	,	
    "	رودخانه	"	,	
    "	سندرک	"	,	
    "	سیریک	"	,	
    "	شهاب	"	,	
    "	شیبکوه	"	,	
    "	فین	"	,	
    "	قشم	"	,	
    "	کیش	"	,	
    "	لیردف	"	,	
    "	میناب	"	,	
    "	هرمز	"	]	,
  Ham	:["	اسد آباد	"	,	
    "	بهار	"	,	
    "	تویسرکان	"	,	
    "	جوکار	"	,	
    "	خزل	"	,	
    "	رزن	"	,	
    "	سامن	"	,	
    "	سردرود	"	,	
    "	فامنین	"	,	
    "	قروه درگزین	"	,	
    "	قلقلرود	"	,	
    "	قهاوند	"	,	
    "	کبودرآهنگ	"	,	
    "	گل تپه	"	,	
    "	لالجین	"	,	
    "	ملایر	"	,	
    "	نهاوند	"	]	,
  Yaz	:["	ابرکوه	"	,	
    "	اردکان	"	,	
    "	اشکذر	"	,	
    "	بافق	"	,	
    "	بهاباد	"	,	
    "	تفت	"	,	
    "	خاتم	"	,	
    "	زارچ	"	,	
    "	مروست	"	,	
    "	مهریز	"	,	
    "	میبد	"	,	
    "	نیر	"	,	
    "	یزد	"	]	,
  }
  
  
 
countrySelectBox.addEventListener("change", function () {

  if (countrySelectBox.value === "Please Select") {
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option>Select City</option>";
  } else {
    let mainCountryName = countrySelectBox.value; // Us
    let mainCountryCities = countriesData[mainCountryName];

    citySelect.innerHTML = "";

    mainCountryCities.forEach(function (city) {
      citySelect.innerHTML += "<option>" + city + "</option>";
    });
  }
});
