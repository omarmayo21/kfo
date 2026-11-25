import { assets } from './assets';

/**
 * Projects — all 65 projects ported from the old kfoco.com WordPress site (EN + AR).
 * Fields the old site did not publish (e.g. year) are empty strings and are hidden in the UI.
 */
export interface Project {
  slug: string;
  title: { en: string; ar: string };
  category: string; // category slug from categories.ts
  location: { en: string; ar: string };
  year: { en: string; ar: string };
  client: { en: string; ar: string };
  area: { en: string; ar: string };
  services: { en: string; ar: string };
  status: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  body: { en: string[]; ar: string[] };
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "dallah-namar-medical-complex",
    title: { en: "Dallah Namar Medical Complex", ar: "مجمع دله نمار الطبي" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Dallah Healthcare Company", ar: "مجموعة دله الصحية" },
    area: { en: "Land 118,704 m² · Built 168,814 m²", ar: "الأرض 118,704 m² · المبنية 168,814 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: 295 Beds", ar: "السعة: 295 سرير" },
    excerpt: { en: "295 Beds · Design · Riyadh - KSA", ar: "295 سرير · تصميم · الرياض" },
    body: {
      en: ["Client Dallah Healthcare Company", "Projects Capacity 295 Beds", "Land Area 118,704 m²", "Total Built Area 168,814 m²", "Scope Of Work Design", "Location Riyadh - KSA"],
      ar: ["العميل مجموعة دله الصحية", "سعة المشروع 295 سرير", "مساحة الأرض 118,704 m²", "المساحة المبنية 168,814 m²", "نطاق العمل تصميم", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitaaled-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitlaaed-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untiaatled-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitlesd-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-namar-05.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-namar-06.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-namar-07.jpg"],
    featured: true
  },
  {
    slug: "dr-mohammed-alfagih-hospital",
    title: { en: "Dr. Mohammed Alfagih Hospital", ar: "مستشفى الدكتور محمد الفقيه" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Dr. Mohammed Alfagih Hospital", ar: "مستشفى الدكتور محمد فقيه" },
    area: { en: "Land 17,175 m² · Built 92,000 m²", ar: "الأرض 17,175 m² · المبنية 92,000 m²" },
    services: { en: "Design and Supervision", ar: "تصميم واشراف" },
    status: { en: "Capacity: 300 Beds", ar: "السعة: 300 سرير" },
    excerpt: { en: "300 Beds · Design and Supervision · Riyadh - KSA", ar: "300 سرير · تصميم واشراف · الرياض" },
    body: {
      en: ["Client Dr. Mohammed Alfagih Hospital", "Projects Capacity 300 Beds", "Land Area 17,175 m²", "Total Built Area 92,000 m²", "Scope Of Work Design and Supervision", "Location Riyadh - KSA"],
      ar: ["العميل مستشفى الدكتور محمد فقيه", "سعة المشروع 300 سرير", "مساحة الأرض 17,175 m²", "المساحة المبنية 92,000 m²", "نطاق العمل تصميم واشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-8s.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untsitled-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitlsed-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-8-2.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-mohammed-01.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-mohammed-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-mohammed-03.jpg"],
    featured: true
  },
  {
    slug: "al-hammadi-medical-complex",
    title: { en: "Al Hammadi Medical Complex", ar: "مجمع الحماد الطبي" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Al Hammadi Medical Complex", ar: "مجمع الحماد الطبي" },
    area: { en: "Land 17,550 m² · Built 98,323 m²", ar: "الأرض 17,550 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: 200 Beds", ar: "السعة: 200 سرير" },
    excerpt: { en: "200 Beds · Design · Riyadh - KSA", ar: "200 سرير · تصميم · الرياض" },
    body: {
      en: ["Client Al Hammadi Medical Complex", "Projects Capacity 200 Beds", "Land Area 17,550 m²", "Total Built Area 98,323 m²", "Scope Of Work Design", "Location Riyadh - KSA"],
      ar: ["العميل مجمع الحماد الطبي", "سعة المشروع 200 سرير", "مساحة الأرض 17,550 m²", "مساحة الأرض المبنية 98,323 m²", "نطاق العمل تصميم", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitsled-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitlsed-8-1.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitlesd-8-1.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-2-1-scaled-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-4-1-scaled-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-7-scaled-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitlexd-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-hammadi-09.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-hammadi-10.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-hammadi-11.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-hammadi-12.jpg"],
    featured: true
  },
  {
    slug: "akdital-hospitals-construction-supervision-projects",
    title: { en: "Akdital Hospitals – Construction Supervision Projects", ar: "مستشفيات أكديطال – مشاريع الإشراف على التنفيذ" },
    category: "healthcare",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Akdital Hospitals – Construction Supervision Projects", ar: "مستشفيات أكديطال – مشاريع الإشراف على التنفيذ" },
    body: {
      en: ["Construction supervision services for the renovation of three Akdital Healthcare Group hospitals in Riyadh, Makkah and Jeddah.", "Dr. Abdul Rahman Al Mishari Hospital – Inpatient Wards Renovation", "HealthCare", "Dr. Awad Albishri Hospital – Renovation Supervision, Makkah", "HealthCare", "Odwani Hospital – Renovation & Repurposing Supervision, Jeddah", "HealthCare"],
      ar: ["خدمات الإشراف على التنفيذ لأعمال تجديد ثلاثة مستشفيات تابعة لمجموعة أكديطال للرعاية الصحية في الرياض ومكة المكرمة وجدة.", "مستشفى الدكتور عبد الرحمن المشاري – تجديد أجنحة التنويم", "HealthCare", "مستشفى الدكتور عوض البشري – الإشراف على التجديد، مكة المكرمة", "HealthCare", "مستشفى العدواني – الإشراف على التجديد وإعادة التوظيف، جدة", "HealthCare"]
    },
    images: [assets.categories.healthcare],
    featured: false
  },
  {
    slug: "al-adwani-general-hospital",
    title: { en: "Al Adwani General Hospital", ar: "مستشفى العدواني العام" },
    category: "healthcare",
    location: { en: "Jeddah - KSA", ar: "جدة" },
    year: { en: "", ar: "" },
    client: { en: "Al Adwani General Hospital", ar: "مستشفى العدواني العام" },
    area: { en: "Land 5,125 m² · Built 37,000 m²", ar: "الأرض 5,125 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: 100 Beds", ar: "السعة: 100 سرير" },
    excerpt: { en: "100 Beds · Design · Jeddah - KSA", ar: "100 سرير · تصميم · جدة" },
    body: {
      en: ["Client Al Adwani General Hospital", "Projects Capacity 100 Beds", "Land Area 5,125 m²", "Total Built Area 37,000 m²", "Scope Of Work Design", "Location Jeddah - KSA"],
      ar: ["العميل مستشفى العدواني العام", "سعة المشروع 100 سرير", "مساحة الأرض 5,125 m²", "مساحة الأرض المبنية 37,000 m²", "نطاق العمل تصميم", "الموقع جدة"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-ss.jpg"],
    featured: false
  },
  {
    slug: "al-maarefa-university-hospital-hotel-sports-center-recreation-center-public-library",
    title: { en: "Al Maarefa, University, Hospital, Hotel, Sports Center, Recreation Center & Public Library", ar: "جامعة المعرفة، مستشفى، فندق، مركز رياضي، مركز ترفيهي، مكتبة عامة" },
    category: "education",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Al Maarefa University, Hospital, Hotel, Sports Center, Recreation Center & Public Library", ar: "جامعة المعرفة، مستشفى، فندق، مركز رياضي، مركز ترفيهي، مكتبة عامة" },
    area: { en: "Land 118,882 m² · Built 276,000 m²", ar: "الأرض 118,882 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: 300 Beds and 10,000 Students", ar: "السعة: 300 سرير و ١٠ آلاف طالب" },
    excerpt: { en: "300 Beds and 10,000 Students · Design · Riyadh - KSA", ar: "300 سرير و ١٠ آلاف طالب · تصميم · الرياض" },
    body: {
      en: ["Client Al Maarefa University, Hospital, Hotel, Sports Center, Recreation Center & Public Library", "Projects Capacity 300 Beds and 10,000 Students", "Land Area 118,882 m²", "Total Built Area 276,000 m²", "Scope Of Work Design", "Location Riyadh - KSA"],
      ar: ["العميل جامعة المعرفة، مستشفى، فندق، مركز رياضي، مركز ترفيهي، مكتبة عامة", "سعة المشروع 300 سرير و ١٠ آلاف طالب", "مساحة الأرض 118,882 m²", "مساحة الأرض المبنية 276,000 m²", "نطاق العمل تصميم", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-maarefa-campus-aerial-hd-scaled-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-maarefa-campus-close-hd-scaled-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-8ssa.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitlassed-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitlssed-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-8ss.png"],
    featured: false
  },
  {
    slug: "al-madinah-hospital",
    title: { en: "Al Madinah Hospital", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Al Ahsa , KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Al Madinah Hospital", ar: "" },
    area: { en: "Land 26,711 m² · Built 37,970 m²", ar: "" },
    services: { en: "Design", ar: "" },
    status: { en: "Capacity: 150 Beds", ar: "" },
    excerpt: { en: "150 Beds · Design · Al Ahsa , KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Client Al Madinah Hospital", "Projects Capacity 150 Beds", "Land Area 26,711 m²", "Total Built Area 37,970 m²", "Scope Of Work Design", "Location Al Ahsa , KSA"],
      ar: []
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-7430.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-7432.jpg"],
    featured: false
  },
  {
    slug: "al-majmaah-commercial-center",
    title: { en: "Al Majmaah Commercial Center", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Al Majmaah, Riyadh Region, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "Land ≈ 8,160 m² (10 adjacent plots, Nos. 10–19)", ar: "" },
    services: { en: "Concept Design – Architecture & Interior (two design options)", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Concept Design – Architecture & Interior (two design options) · Al Majmaah, Riyadh Region, KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Project Type Commercial Center (Mall)", "Land Area ≈ 8,160 m² (10 adjacent plots, Nos. 10–19)", "Frontage Prince Sultan Road (40 m)", "Scope Of Work Concept Design – Architecture & Interior (two design options)", "Location Al Majmaah, Riyadh Region, KSA"],
      ar: ["تصور مفاهيمي لمركز تجاري على أرض تبلغ نحو 8,160 م² في المجمعة، تتكون من عشر قطع متجاورة في حي الملك عبدالعزيز بواجهة طويلة على طريق الأمير سلطان واتصال مباشر بالشوارع المحلية المحيطة. يجاور الموقع كتلاً سكنية وحديقة ومسجداً؛ لذلك تتجه الواجهة التجارية نحو الطريق بينما تراعي الواجهات الخلفية خصوصية السكن.", "تحليل الموقع والبيئة: هرمية الشوارع والوصول، والحواف وفرص الدخول، والمناسيب (تفاوت ظاهري نحو 3 أمتار)، ومسار الشمس عبر الفصول، والشمس في الشتاء والاعتدال، واتجاهات الرياح وراحة المستخدم، وقد وجّهت جميعها الكتلة والتظليل وتوجيه الفتحات.", "النموذج الأول: كتلة بيضاء منخفضة منسابة بواجهة مثقبة بلون التراكوتا، وبهو مدخل رحب وأتريوم، وممرات محلات بجلسات، وكافي ومدرجات في الدور الأخير، وبدروم للمواقف.", "النموذج الثاني: تكوين متدرج مكسو بالحجر مع شرفات مظللة بالخشب، ومدخل مشجّر، وجلسات كافي مطلة على الحي المحيط.", "التصميم الداخلي: أتريوم مضاء طبيعياً بالنباتات وأسقف خشبية دافئة يربط الأدوار التجارية، مع واجهات محلات زجاجية وشرفات مفتوحة ومناطق جلوس مريحة على امتداد الحركة."]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-19-m1-front-facade.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-21-m1-aerial.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-22-m1-street-facade.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-24-m1-side-facade.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-25-m1-entrance-corner.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-26-m1-left-side.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-27-m1-entrance-parking.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-28-m1-entrance-pedestrian.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-34-m1-aerial-roundabout.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-37-m2-overview.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-39-m2-main-entrance.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-40-m2-cafe-seating.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-29-in-m1-lobby-atrium.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-30-in-m1-shops-corridor.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-31-in-m1-upper-view.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-32-in-m1-top-cafe.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majmaah-33-in-m1-evening-seating.jpg"],
    featured: false
  },
  {
    slug: "almana-medical-complex-college-of-nursing",
    title: { en: "Almana Medical Complex & College of Nursing", ar: "مساحة الأرض 24,425 م²" },
    category: "healthcare",
    location: { en: "Al Naseem Al Sharqi, Khurais Road, Riyadh, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Almana", ar: "" },
    area: { en: "Land 24,425 m² · Built 93,238 m² (above ground)", ar: "الأرض 24,425 م²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "", ar: "" },
    excerpt: { en: "Design · Al Naseem Al Sharqi, Khurais Road, Riyadh, KSA", ar: "تصميم" },
    body: {
      en: ["Client Almana", "Location Al Naseem Al Sharqi, Khurais Road, Riyadh, KSA", "Land Area 24,425 m²", "Capacity 180–200 Beds", "Scope Of Work Design", "Total Built Area 93,238 m² (above ground)", "Parking 1,009 Cars"],
      ar: ["السعة 180–200 سرير", "نطاق العمل تصميم", "إجمالي مساحة البناء 93,238 م² (فوق الأرض)", "المواقف 1,009 سيارة"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-almana-01.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-almana-02.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-almana-12.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-almana-03.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-almana-04.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-almana-05.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-almana-06.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-almana-07.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-almana-08.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-almana-09.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-7466.jpg"],
    featured: false
  },
  {
    slug: "dallah-al-arid-healthcare-medical-complex",
    title: { en: "Dallah Al Arid Medical Complex", ar: "العودة إلى مشاريع دلة" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Dallah Healthcare Company", ar: "" },
    area: { en: "Built 123,163 m²", ar: "" },
    services: { en: "Construction Supervision", ar: "" },
    status: { en: "Capacity: Dallah Healthcare Medical Complex Riyadh -KSA Construction Supervision", ar: "" },
    excerpt: { en: "Dallah Healthcare Medical Complex Riyadh -KSA Construction Supervision · Construction Supervision · Riyadh - KSA", ar: "العودة إلى مشاريع دلة" },
    body: {
      en: ["Client Dallah Healthcare Company", "Projects Capacity Dallah Healthcare Medical Complex Riyadh -KSA Construction Supervision", "Total Built Area 123,163 m²", "Scope Of Work Construction Supervision", "Location Riyadh - KSA"],
      ar: []
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-arid-crane.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-arid-scaffold.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-arid-site.jpg"],
    featured: false
  },
  {
    slug: "dallah-al-nakheel-construction-supervision-projects",
    title: { en: "Dallah Al Nakheel – Construction Supervision Projects", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Dallah Healthcare Company", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Construction Supervision", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Construction Supervision · Riyadh - KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Client Dallah Healthcare Company", "Scope Of Work Construction Supervision", "Location Riyadh - KSA"],
      ar: ["خدمات استشارات الإشراف على التنفيذ لمجموعة دله الصحية في مجمع النخيل بالرياض، بموجب اتفاقيتين.", "تجديد وتعديل الجانب CD من المبنى الرئيسي للمستشفى (2021)", "تجديد شامل لخمسة طوابق بمساحة بناء حوالي 11,350 م² وأعمال خارجية 2,500 م²: المختبر (القبو)؛ قسم الطوارئ (الأرضي)؛ التنويم بسعة 20 سريراً مع غرف العزل (الأول)؛ الولادة بـ17 غرفة LDR مع غرف عزل وغرف العمليات القيصرية وما قبل العملية وبعدها (الثاني)؛ التنويم بسعة 16 سريراً شاملة غرف VIP (الثالث)؛ التطوير الخارجي؛ وتصميم الدور العلوي للعيادات الشمالية كوحدة غسيل كلى (حوالي 1,300 م²).", "مشاريع متعددة في مجمع النخيل (2025)", "توسعة العناية المركزة لحديثي الولادة في المبنى الرئيسي (تصميم وتنفيذ)؛ منطقة جمع العينات الجديدة في مبنى المستشفى الغربي (تصميم وتنفيذ)؛ ومشاريع تطوير متعددة في الأشعة والقبو والنساء والولادة والتعقيم المركزي وغرف العمليات.", "خدمات الإشراف", "متابعة التزام المقاولين بالأكواد ومتطلبات الجهات ومعايير دله، ومراقبة التقدم مقابل الجدول المعتمد.", "مراجعة خطط السلامة والجودة وإجراءات الفحص والاختبار وحضور الاختبارات.", "الاعتمادات الفنية: المخططات التنفيذية وعينات المواد وطرق التنفيذ والحسابات والمخططات المنفذة.", "المساعدة في مراجعة المستخلصات والمطالبات وأوامر التغيير.", "قوائم الملاحظات والتسليم ومتابعة فترة الضمان وإدارة الوثائق."]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-7407.jpg"],
    featured: false
  },
  {
    slug: "dallah-al-nakheel-medical-complex",
    title: { en: "Dallah Al Nakheel Medical Complex", ar: "مجمع دله النخيل الطبي" },
    category: "healthcare",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Dallah Al Nakheel Medical Complex", ar: "مجمع دله النخيل الطبي" },
    body: {
      en: ["Dallah North Clinics", "HealthCare", "Dallah Pediatric Hospital", "HealthCare", "Dallah Al Nakheel – Construction Supervision Projects", "HealthCare"],
      ar: ["عيادات دلة الشمالية", "HealthCare", "مستشفى دلة للأطفال", "HealthCare", "مجمع دله النخيل – مشاريع الإشراف على التنفيذ", "HealthCare"]
    },
    images: [assets.categories.healthcare],
    featured: false
  },
  {
    slug: "dallah-al-nakheel-residential-buildings",
    title: { en: "Dallah Al Nakheel Residential Buildings", ar: "المباني السكنية لمجمع دله النخيل الطبي" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Dallah Healthcare Company", ar: "مجموعة دله الصحية" },
    area: { en: "Land 6,250 m² · Built 29,000 m²", ar: "الأرض 6,250 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: 50 Units", ar: "السعة: 50 سرير" },
    excerpt: { en: "50 Units · Design · Riyadh - KSA", ar: "50 سرير · تصميم · الرياض" },
    body: {
      en: ["Client Dallah Healthcare Company", "Projects Capacity 50 Units", "Land Area 6,250 m²", "Total Built Area 29,000 m²", "Scope Of Work Design", "Location Riyadh - KSA"],
      ar: ["العميل مجموعة دله الصحية", "سعة المشروع 50 سرير", "مساحة الأرض 6,250 m²", "مساحة الأرض المبنية 29,000 m²", "نطاق العمل تصميم", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dallah-residential-02-scaled-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dallah-north-housing-aerial-hd-scaled-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-4-1.jpg"],
    featured: false
  },
  {
    slug: "dallah-derab-hospital-administration-building",
    title: { en: "Dallah Derab Hospital – Administration Building", ar: "العودة إلى مشاريع دلة" },
    category: "healthcare",
    location: { en: "Riyadh, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Dallah Healthcare Company", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Concept Design – Architecture & Interior", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Concept Design – Architecture & Interior · Riyadh, KSA", ar: "العودة إلى مشاريع دلة" },
    body: {
      en: ["Client Dallah Healthcare Company", "Project Type Administration Building", "Net Area Ground 2,418 m² · First 2,510 m² · Annex 960 m²", "Scope Of Work Concept Design – Architecture & Interior", "Location Riyadh, KSA"],
      ar: ["يُعد المجمع الإداري جزءاً من حرم مستشفى دله ديراب لعلاج الإدمان والصحة النفسية في الرياض. يُنظّم التصميم المفاهيمي العمليات والمراقبة والدعم الفني والموارد البشرية والمالية والجودة والإدارة التنفيذية حول ردهة مركزية مضاءة طبيعياً تعمل كصالة مشتركة ومحور حركة ونقطة توجيه.", "التصميم المعماري: كسوة من الحجر الفاتح وشاشات مشربية برونزية ومدخل رئيسي زجاجي تمنح المبنى هوية هادئة ورصينة ضمن الحرم، مع إيقاع نوافذ رأسي ومدخل مظلل يحدد نقطة الوصول.", "التصميم الداخلي: مكتب استقبال منحنٍ بجوار مصعد زجاجي بكامل الارتفاع، ومقاعد صالة معيارية منحنية حول أحواض نباتات، وممرات وواجهات مكاتب زجاجية تحافظ على الاتصال البصري بالردهة، مع مكاتب خشبية وشريط أرضية أزرق رمادي لخلق بيئة عمل مشرقة وشفافة ومرحبة.", "التخطيط: يضم الدور الأرضي مراقبة الكاميرات والعمليات والغرف الفنية وردهة الوصول؛ ويوزع الدور الأول إدارات التمريض والموارد البشرية والطبية والتنفيذية والجودة والمخاطر والمالية حول المركز المشترك؛ ويحتضن الملحق في الدور الثاني العمليات والمهندسين والمكاتب الفنية."]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-ext-02-campus-setting.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-ext-03-main-entrance.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-ext-04-facade-design.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-int-01-reception-glass-lift.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-int-02-central-atrium-lounge.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-int-03-atrium-upper-level.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-int-04-glazed-corridor.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-int-05-reception-atrium.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-int-06-entrance-facade-detail.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-int-07-private-office.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-int-08-shared-workstations.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-int-09-meeting-room.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-dhdrb-int-10-lounge-detail.jpg"],
    featured: false
  },
  {
    slug: "dallah-healthcare-projects",
    title: { en: "Dallah Healthcare Projects", ar: "مشاريع مجموعة دله الصحية" },
    category: "healthcare",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Dallah Healthcare Projects", ar: "مشاريع مجموعة دله الصحية" },
    body: {
      en: ["KFO has delivered design, project management and construction supervision services across the facilities of Dallah Healthcare Company in Riyadh. Select a project to learn more.", "Dallah Namar Medical Complex", "HealthCare", "Design of Outpatient & Rehab Building at Namar Hospital", "HealthCare", "Dallah Al Nakheel Medical Complex", "HealthCare", "Dallah Al Arid Medical Complex", "HealthCare", "Dallah Derab Psychiatric & Addiction Treatment Hospital", "HealthCare"],
      ar: ["قدّمت الشركة خدمات التصميم وإدارة المشاريع والإشراف على التنفيذ في منشآت شركة دله الصحية بالرياض. اختر المشروع للاطلاع على تفاصيله.", "مجمع دله نمار الطبي", "HealthCare", "تصميم العيادات الخارجية وإعادة التأهيل لمستشفى دله نمار", "HealthCare", "مجمع دله النخيل الطبي", "HealthCare", "مجمع دله العارض الطبي", "HealthCare", "مستشفى دله ديراب لعلاج الإدمان والصحة النفسية", "HealthCare"]
    },
    images: [assets.categories.healthcare],
    featured: false
  },
  {
    slug: "dallah-new-offices",
    title: { en: "Dallah New Offices", ar: "مكاتب دله الإدارية الجديدة" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Dallah Healthcare Company", ar: "مجموعة دله الصحية" },
    area: { en: "Land 1000 m² · Built 3000 m²", ar: "الأرض 1000 m² · المبنية 1500 m²" },
    services: { en: "Design and Supervision", ar: "تصميم واشراف" },
    status: { en: "Capacity: 400 m² Private offices, Workstations, Meeting Rooms, Reception, Lounges, Open Work Space and Hallways for 2 floors office.", ar: "السعة: مكاتب خاصة بمساحة 400 متر مربع، محطات عمل، غرف اجتماعات، استقبال، صالات، مساحة عمل مفتوحة وممرات لمكتب مكون من طابقين." },
    excerpt: { en: "400 m² Private offices, Workstations, Meeting Rooms, Reception, Lounges, Open Work Space and Hallways for 2 floors office. · Design and Supervision · Riyadh - KSA", ar: "مكاتب خاصة بمساحة 400 متر مربع، محطات عمل، غرف اجتماعات، استقبال، صالات، مساحة عمل مفتوحة وممرات لمكتب مكون من طابقين. · تصميم واشراف · الرياض" },
    body: {
      en: ["Client Dallah Healthcare Company", "Projects Capacity 400 m² Private offices, Workstations, Meeting Rooms, Reception, Lounges, Open Work Space and Hallways for 2 floors office.", "Land Area 1000 m²", "Total Built Area 3000 m²", "Scope Of Work Design and Supervision", "Location Riyadh - KSA"],
      ar: ["العميل مجموعة دله الصحية", "سعة المشروع مكاتب خاصة بمساحة 400 متر مربع، محطات عمل، غرف اجتماعات، استقبال، صالات، مساحة عمل مفتوحة وممرات لمكتب مكون من طابقين.", "مساحة الأرض 1000 m²", "المساحة المبنية 1500 m²", "نطاق العمل تصميم واشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P4.4.4.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P6.1.1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P7.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-S3.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P10.1-1.jpg"],
    featured: false
  },
  {
    slug: "dallah-north-clinics",
    title: { en: "Dallah North Clinics", ar: "عيادات دلة الشمالية" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Dallah Healthcare Company", ar: "مجموعة دله الصحية" },
    area: { en: "Land 4,000 m² · Built 17,600 m²", ar: "الأرض 4,000 m²" },
    services: { en: "Design and Supervision", ar: "تصميم وإشراف" },
    status: { en: "Capacity: 70 Clinics", ar: "السعة: 70 عيادة" },
    excerpt: { en: "70 Clinics · Design and Supervision · Riyadh - KSA", ar: "70 عيادة · تصميم وإشراف · الرياض" },
    body: {
      en: ["Client Dallah Healthcare Company", "Projects Capacity 70 Clinics", "Land Area 4,000 m²", "Total Built Area 17,600 m²", "Scope Of Work Design and Supervision", "Location Riyadh - KSA"],
      ar: ["العميل مجموعة دله الصحية", "سعة المشروع 70 عيادة", "مساحة الأرض 4,000 m²", "مساحة الأرض المبنية 17,600 m²", "نطاق العمل تصميم وإشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-img4244.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-img4246.jpg"],
    featured: false
  },
  {
    slug: "dallah-pediatric-hospital",
    title: { en: "Dallah Pediatric Hospital", ar: "مستشفى دلة للأطفال" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Dallah Healthcare Company", ar: "مجموعة دله الصحية" },
    area: { en: "Land 3,096 m² · Built 13,598 m²", ar: "الأرض 3,096 m²" },
    services: { en: "Design and Supervision", ar: "" },
    status: { en: "Capacity: 80 Beds", ar: "السعة: 80 سرير" },
    excerpt: { en: "80 Beds · Design and Supervision · Riyadh - KSA", ar: "80 سرير · الرياض" },
    body: {
      en: ["Client Dallah Healthcare Company", "Projects Capacity 80 Beds", "Land Area 3,096 m²", "Total Built Area 13,598 m²", "Scope Of Work Design and Supervision", "Location Riyadh - KSA"],
      ar: ["العميل مجموعة دله الصحية", "سعة المشروع 80 سرير", "مساحة الأرض 3,096 m²", "مساحة الأرض المبنية 13,598 m²", "نطاق المشروع تصميم وإشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-sdfd.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dfd.jpg"],
    featured: false
  },
  {
    slug: "dallah-psychiatric-hospital-dirab",
    title: { en: "Dallah Derab Psychiatric & Addiction Treatment Hospital", ar: "العودة إلى مشاريع دلة" },
    category: "healthcare",
    location: { en: "Riyadh, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Dallah Healthcare Company", ar: "" },
    area: { en: "Land 40,000 m² · Built 60,000 m²", ar: "" },
    services: { en: "Design", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Design · Riyadh, KSA", ar: "العودة إلى مشاريع دلة" },
    body: {
      en: ["Client Dallah Healthcare Company", "Capacity 180 Beds", "Land Area 40,000 m²", "Total Built Area 60,000 m²", "Scope Of Work Design", "Location Riyadh, KSA"],
      ar: []
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-02-facade-corner-day.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-03-facade-night.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-04-aerial-view.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-05-site-plan.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-06-interior-reception-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-07-interior-reception-2.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-08-interior-lobby-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-09-interior-lobby-2.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-10-interior-reception-3.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-11-interior-waiting.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-12-interior-meeting.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-dirab-13-interior-service-counter.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Artboard-4-100.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Artboard-3-100.jpg"],
    featured: false
  },
  {
    slug: "dammam-private-hospital",
    title: { en: "Dammam Private Hospital", ar: "مستشفى الدمام الخاص" },
    category: "healthcare",
    location: { en: "Dammam - KSA", ar: "الدمام" },
    year: { en: "", ar: "" },
    client: { en: "Dammam Private Hospital", ar: "مستشفى الدمام الخاص" },
    area: { en: "Land 21,454 m² · Built 117,670 m²", ar: "الأرض 21,454 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: 300 Beds", ar: "السعة: 300 سرير" },
    excerpt: { en: "300 Beds · Design · Dammam - KSA", ar: "300 سرير · تصميم · الدمام" },
    body: {
      en: ["Client Dammam Private Hospital", "Projects Capacity 300 Beds", "Land Area 21,454 m²", "Total Built Area 117,670 m²", "Scope Of Work Design", "Location Dammam - KSA"],
      ar: ["العميل مستشفى الدمام الخاص", "سعة المشروع 300 سرير", "مساحة الأرض 21,454 m²", "مساحة الأرض المبنية 117,670 m²", "نطاق العمل تصميم", "الموقع الدمام"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/image-4-scaled.jpg", "https://kfoco.com/wp-content/uploads/2026/11/image-5-scaled.jpg", "https://kfoco.com/wp-content/uploads/2026/11/image-6-scaled.jpg", "https://kfoco.com/wp-content/uploads/2026/11/image-7.jpg", "https://kfoco.com/wp-content/uploads/2026/11/image-8.jpg"],
    featured: false
  },
  {
    slug: "dr-abdul-rahman-al-mishari-hospital-inpatient-wards-renovation",
    title: { en: "Dr. Abdul Rahman Al Mishari Hospital – Inpatient Wards Renovation", ar: "نطاق العمل الإشراف على التنفيذ (الأعمال المعمارية)" },
    category: "healthcare",
    location: { en: "Riyadh, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Akdital Healthcare Group", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Construction Supervision (Architectural Works)", ar: "الإشراف على التنفيذ (الأعمال المعمارية)" },
    status: { en: "", ar: "" },
    excerpt: { en: "Construction Supervision (Architectural Works) · Riyadh, KSA", ar: "الإشراف على التنفيذ (الأعمال المعمارية)" },
    body: {
      en: ["Client Akdital Healthcare Group", "Location Riyadh, KSA", "Scope Of Work Construction Supervision (Architectural Works)"],
      ar: ["نطاق العمل: الإشراف على التنفيذ (الأعمال المعمارية)."]
    },
    images: [assets.categories.healthcare],
    featured: false
  },
  {
    slug: "dr-awad-albishri-hospital-renovation-supervision-makkah",
    title: { en: "Dr. Awad Albishri Hospital – Renovation Supervision, Makkah", ar: "نطاق العمل الإشراف على التنفيذ" },
    category: "healthcare",
    location: { en: "Makkah, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Akdital Healthcare Group", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Construction Supervision", ar: "الإشراف على التنفيذ" },
    status: { en: "", ar: "" },
    excerpt: { en: "Construction Supervision · Makkah, KSA", ar: "الإشراف على التنفيذ" },
    body: {
      en: ["Client Akdital Healthcare Group", "Location Makkah, KSA", "Scope Of Work Construction Supervision"],
      ar: ["نطاق العمل: الإشراف على التنفيذ."]
    },
    images: [assets.categories.healthcare],
    featured: false
  },
  {
    slug: "dr-soliman-fakeeh-hospital-jeddah",
    title: { en: "Dr. Soliman Fakeeh Hospital – Jeddah", ar: "مستشفى الدكتور سليمان فقيه – جدة" },
    category: "healthcare",
    location: { en: "Jeddah - KSA", ar: "جدة" },
    year: { en: "", ar: "" },
    client: { en: "Dr. Soliman Fakeeh Hospital", ar: "مستشفى الدكتور سليمان فقيه" },
    area: { en: "Land 26,881 m² · Built 30,644 m²", ar: "الأرض 26,881 m²" },
    services: { en: "Consultancy Services for Bed Capacity Expansion (MOH Approval), Re-Purposing", ar: "خدمات استشارية لتوسعة السعة السريرية (اعتماد وزارة الصحة) وإعادة الاستخدام" },
    status: { en: "Capacity: +450 Beds", ar: "السعة: +450 سرير" },
    excerpt: { en: "+450 Beds · Consultancy Services for Bed Capacity Expansion (MOH Approval), Re-Purposing · Jeddah - KSA", ar: "+450 سرير · خدمات استشارية لتوسعة السعة السريرية (اعتماد وزارة الصحة) وإعادة الاستخدام · جدة" },
    body: {
      en: ["Client Dr. Soliman Fakeeh Hospital", "Projects Capacity +450 Beds", "Land Area 26,881 m²", "Total Built Area 30,644 m²", "Scope Of Work Consultancy Services for Bed Capacity Expansion (MOH Approval), Re-Purposing", "Location Jeddah - KSA"],
      ar: ["العميل مستشفى الدكتور سليمان فقيه", "سعة المشروع +450 سرير", "مساحة الأرض 26,881 m²", "مساحة الأرض المبنية 30,644 m²", "نطاق العمل خدمات استشارية لتوسعة السعة السريرية (اعتماد وزارة الصحة) وإعادة الاستخدام", "الموقع جدة"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-fakeeh-jeddah-night-hd-scaled-1.jpg"],
    featured: false
  },
  {
    slug: "dr-soliman-fakeeh-hospital-projects",
    title: { en: "Dr. Soliman Fakeeh Hospital Projects", ar: "مشاريع مستشفى الدكتور سليمان فقيه" },
    category: "healthcare",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Dr. Soliman Fakeeh Hospital Projects", ar: "مشاريع مستشفى الدكتور سليمان فقيه" },
    body: {
      en: ["KFO has delivered services for Dr. Soliman Fakeeh Hospital in Jeddah, including consultancy for bed capacity expansion and re-purposing, and in Riyadh, including the psychiatric ward with isolation rooms. Select a project to learn more.", "Dr. Soliman Fakeeh Hospital – Jeddah", "HealthCare", "Dr. Soliman Fakeeh Hospital – Psychiatric Ward and Isolation Rooms Design", "HealthCare"],
      ar: ["قدّمت الشركة خدمات استشارية لمستشفى الدكتور سليمان فقيه في جدة (توسعة السعة السريرية وإعادة التوظيف) وفي الرياض (جناح الطب النفسي مع غرف العزل). اختر مشروعاً لمعرفة المزيد.", "مستشفى الدكتور سليمان فقيه – جدة", "HealthCare", "مستشفى الدكتور سليمان فقيه – تصميم جناح الطب النفسي وغرف العزل", "HealthCare"]
    },
    images: [assets.categories.healthcare],
    featured: false
  },
  {
    slug: "dr-soliman-fakeeh-hospital-psychiatric-ward-isolation-rooms",
    title: { en: "Dr. Soliman Fakeeh Hospital – Psychiatric Ward and Isolation Rooms Design", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Dr. Soliman Fakeeh Hospital", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Design", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Design · Riyadh - KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Client Dr. Soliman Fakeeh Hospital", "Project Capacity 1,600 m² psychiatric ward inside the hospital in Riyadh, plus 200 m² of isolation rooms in ICU and recovery", "Scope Of Work Design", "Location Riyadh - KSA"],
      ar: []
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-3-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-4-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-5-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-6-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-7-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-8-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-1-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-2-1.jpg"],
    featured: false
  },
  {
    slug: "hawtat-sudair-hospital-main-building-expansion",
    title: { en: "Hawtat Sudair Hospital – Main Building Expansion", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Hawtat Sudair, Riyadh Region, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Riyadh Second Health Cluster", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Pre-Concept Design – Architecture & Interior", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Pre-Concept Design – Architecture & Interior · Hawtat Sudair, Riyadh Region, KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Client Riyadh Second Health Cluster", "Project Type Hospital Expansion – Main Building", "Floor Area Ground 1,431 m² · First 1,404 m²", "Scope Of Work Pre-Concept Design – Architecture & Interior", "Location Hawtat Sudair, Riyadh Region, KSA"],
      ar: ["يُمثّل المبنى الرئيسي نواة توسعة مستشفى حوطة سدير المقترحة في منطقة الرياض. يُنظّم التصميم المبدئي الوظائف التشخيصية والعامة في الدور الأرضي، والرعاية الحرجة والجراحية في الدور الأول، مع غرف المرضى ومكاتب الأطباء في الأدوار العليا.", "الدور الأرضي: الردهة الرئيسية والاستقبال والصيدلية والمختبر الطبي ووحدة الرنين المغناطيسي والمطبخ ومكاتب الصيدلية، موزعة حول مسار حركة عام واضح مع ارتباط مستقل بالطوارئ.", "الدور الأول: قسم العمليات والتعقيم المركزي ووحدة العناية المركزة، مخطط كمنطقة محكومة بحركة مخصصة وفصل بين النظيف والملوث.", "التصميم الداخلي: تشطيبات محايدة دافئة بلمسات زرقاء وإضاءة طبيعية وإرشاد واضح ومناطق انتظار هادئة في الردهة والصيدلية والمختبر، وبيئات سريرية متخصصة للعناية المركزة وغرفة العمليات والتعقيم المركزي.", "الحرم: ترتبط التوسعة بالحرم القائم عبر مدخل للمشاة وواجهات مظللة، مع مواقف سيارات مشجرة وروابط طرق واضحة.", "استكشف الموقع العام", "اضغط على المبنى لعرض تفاصيله", "اضغط على أحد المباني في المخطط لعرض تفاصيله هنا."]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hawtat-ext-02-building-and-parking.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hawtat-ext-03-road-through-campus.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hawtat-int-01-lobby-entrance-reception.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hawtat-int-02-pharmacy.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hawtat-int-03-lobby-waiting.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hawtat-int-04-clinical-laboratory.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hawtat-int-05-icu.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hawtat-int-06-operating-theatre.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hawtat-int-07-cssd.jpg"],
    featured: false
  },
  {
    slug: "health-endowment-mc",
    title: { en: "Health Endowment MC", ar: "مجمع الأوقاف الصحي" },
    category: "healthcare",
    location: { en: "Dammam - KSA", ar: "الدمام" },
    year: { en: "", ar: "" },
    client: { en: "Health Endowment MC", ar: "مركز الوقف الصحي الطبي" },
    area: { en: "Land 15,000 m² · Built 28,000 m²", ar: "الأرض 15,000 m² · المبنية 28,000 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: Medical Complex", ar: "السعة: مجمع طبي" },
    excerpt: { en: "Medical Complex · Design · Dammam - KSA", ar: "مجمع طبي · تصميم · الدمام" },
    body: {
      en: ["Client Health Endowment MC", "Projects Capacity Medical Complex", "Land Area 15,000 m²", "Total Built Area 28,000 m²", "Scope Of Work Design", "Location Dammam - KSA"],
      ar: ["العميل مركز الوقف الصحي الطبي", "سعة المشروع مجمع طبي", "مساحة الأرض 15,000 m²", "المساحة المبنية 28,000 m²", "نطاق العمل تصميم", "الموقع الدمام"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-IMG-20231102-WA0003.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-IMG-20231102-WA0010.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-IMG-20231102-WA0009.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-IMG-20231102-WA0008.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-IMG-20231102-WA0007.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-IMG-20231102-WA0002.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-IMG-20231102-WA0001.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-1-1.jpg"],
    featured: false
  },
  {
    slug: "institute-of-consulting-and-business-solutions-prince-sattam-bin-abdulaziz-university",
    title: { en: "Institute of Consulting and Business Solutions, Prince Sattam Bin Abdulaziz University", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Institute of Consulting and Business Solutions, Prince Sattam Bin Abdulaziz University", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Consultancy and Supervision Services", ar: "" },
    status: { en: "Capacity: Riyadh City Roads Maintenance Supervision and Consultancy Services", ar: "" },
    excerpt: { en: "Riyadh City Roads Maintenance Supervision and Consultancy Services · Consultancy and Supervision Services · Riyadh - KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Client Institute of Consulting and Business Solutions, Prince Sattam Bin Abdulaziz University", "Projects Capacity Riyadh City Roads Maintenance Supervision and Consultancy Services", "Scope Of Work Consultancy and Supervision Services", "Location Riyadh - KSA"],
      ar: []
    },
    images: ["https://kfoco.com/wp-content/uploads/2024/05/LOGO-03j-1.jpg"],
    featured: false
  },
  {
    slug: "int-blood-bank",
    title: { en: "Blood Bank Center", ar: "مركز بنك الدم" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Blood Bank Center", ar: "مركز بنك الدم" },
    body: {
      en: ["Service Healthcare Interior Design"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-blood-bank-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-blood-bank-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-blood-bank-04.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-int-bloodbank-04.jpg"],
    featured: false
  },
  {
    slug: "int-dallah-hq",
    title: { en: "Dallah Head Office – Al Nakheel Tower", ar: "المقر الرئيسي لدلة – برج النخيل" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Dallah Head Office – Al Nakheel Tower", ar: "المقر الرئيسي لدلة – برج النخيل" },
    body: {
      en: ["Service Healthcare Interior Design", "Spaces Administration offices"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية", "المساحات المكاتب الإدارية"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-hq-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-hq-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-hq-04.jpg"],
    featured: false
  },
  {
    slug: "int-dallah-nakheel",
    title: { en: "Dallah Hospital – Al Nakheel", ar: "مستشفى دلة – النخيل" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Dallah Hospital – Al Nakheel", ar: "مستشفى دلة – النخيل" },
    body: {
      en: ["Service Healthcare Interior Design", "Spaces Lobby, Clinics, Pharmacy, Reception & Waiting, Nurse Station, Patient Rooms, Mosque"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية", "المساحات الردهة، العيادات، الصيدلية، الاستقبال والانتظار، محطة التمريض، غرف المرضى، المسجد"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-04.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-05.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-06.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-07.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-08.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-09.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-10.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-11.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-nakheel-12.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-int-nakheel-12.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-int-nakheel-13.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-int-nakheel-14.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-int-nakheel-15.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-int-nakheel-16.jpg"],
    featured: false
  },
  {
    slug: "int-dallah-namar",
    title: { en: "Dallah Namar Hospital", ar: "مستشفى دلة نمار" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Dallah Namar Hospital", ar: "مستشفى دلة نمار" },
    body: {
      en: ["Service Healthcare Interior Design", "Spaces Reception, Main Lobby, Patient Room"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية", "المساحات الاستقبال، الردهة الرئيسية، غرفة المريض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-01.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-04.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-05.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-07.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-08.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-09.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-10.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-11.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-dallah-namar-12.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-int-namar-12.jpg"],
    featured: false
  },
  {
    slug: "int-fakeeh-psych",
    title: { en: "Dr. Suliman Fakeeh Hospital – Psychiatric Ward", ar: "مستشفى الدكتور سليمان الفقيه – قسم الصحة النفسية" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Dr. Suliman Fakeeh Hospital – Psychiatric Ward", ar: "مستشفى الدكتور سليمان الفقيه – قسم الصحة النفسية" },
    body: {
      en: ["Service Healthcare Interior Design"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-fakeeh-psych-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-fakeeh-psych-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-fakeeh-psych-04.jpg"],
    featured: false
  },
  {
    slug: "int-kingdom",
    title: { en: "Kingdom Hospital", ar: "مستشفى المملكة" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Kingdom Hospital", ar: "مستشفى المملكة" },
    body: {
      en: ["Service Healthcare Interior Design", "Spaces Reception, Patient Room"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية", "المساحات الاستقبال، غرفة المريض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-kingdom-01.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-kingdom-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-kingdom-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-int-kingdom-05.jpg"],
    featured: false
  },
  {
    slug: "int-kkesh",
    title: { en: "King Khalid Eye Specialized Hospital", ar: "مستشفى الملك خالد التخصصي للعيون – التصميم الداخلي" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "King Khalid Eye Specialized Hospital", ar: "مستشفى الملك خالد التخصصي للعيون – التصميم الداخلي" },
    body: {
      en: ["Service Healthcare Interior Design"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-kkesh-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-kkesh-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-kkesh-04.jpg"],
    featured: false
  },
  {
    slug: "int-majesty",
    title: { en: "Majesty Hospital – Interior Design", ar: "مستشفى ماجيستي" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Majesty Hospital – Interior Design", ar: "مستشفى ماجيستي" },
    body: {
      en: ["Service Healthcare Interior Design", "Spaces Main Lobby, Patient Room"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية", "المساحات الردهة الرئيسية، غرفة المريض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-majesty-01.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-majesty-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-majesty-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-majesty-05.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-majesty-06.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-majesty-07.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-majesty-08.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-majesty-09.jpg"],
    featured: false
  },
  {
    slug: "int-mohammed-fagih",
    title: { en: "Dr. Mohammed Fagih Hospital", ar: "مستشفى الدكتور محمد الفقيه – التصميم الداخلي" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Dr. Mohammed Fagih Hospital", ar: "مستشفى الدكتور محمد الفقيه – التصميم الداخلي" },
    body: {
      en: ["Service Healthcare Interior Design", "Spaces VIP Suite, Lobby, Patient Room"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية", "المساحات جناح كبار الشخصيات، الردهة، غرفة المريض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-mohammed-fagih-01.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-mohammed-fagih-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-mohammed-fagih-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-mohammed-fagih-05.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-mohammed-fagih-06.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-mohammed-fagih-07.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-mohammed-fagih-08.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-mohammed-fagih-09.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-mohammed-fagih-10.jpg"],
    featured: false
  },
  {
    slug: "int-prestige",
    title: { en: "Prestige Medical Centre", ar: "سعة المشروع المركز الطبي التجميلي جراحة اليوم الواحد والعيادات الخارجية وغرف العمليات" },
    category: "interior",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Primary Care - KSA", ar: "" },
    area: { en: "Land 1000 m² · Built 3000 m²", ar: "الأرض 1000 m² · المبنية 300 m²" },
    services: { en: "Design and Supervision", ar: "تصميم واشراف" },
    status: { en: "Capacity: Aesthetic Medical Center \"Day Surgery, Outpaitient and Operations Rooms", ar: "السعة: المركز الطبي التجميلي جراحة اليوم الواحد والعيادات الخارجية وغرف العمليات" },
    excerpt: { en: "Aesthetic Medical Center \"Day Surgery, Outpaitient and Operations Rooms · Design and Supervision · Riyadh - KSA", ar: "المركز الطبي التجميلي جراحة اليوم الواحد والعيادات الخارجية وغرف العمليات · تصميم واشراف · الرياض" },
    body: {
      en: ["Client Primary Care - KSA", "Projects Capacity Aesthetic Medical Center \"Day Surgery, Outpaitient and Operations Rooms", "Land Area 1000 m²", "Total Built Area 3000 m²", "Scope Of Work Design and Supervision", "Location Riyadh - KSA"],
      ar: ["مساحة الأرض 1000 m²", "المساحة المبنية 300 m²", "نطاق العمل تصميم واشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-prestige-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-prestige-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-prestige-04.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-7.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-8.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-9.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-1-2.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-2-2.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-3-2.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-4-2.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-5-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-6.jpg"],
    featured: false
  },
  {
    slug: "int-riyadh",
    title: { en: "Riyadh Hospital – Interior Design", ar: "مستشفى الرياض – التصميم الداخلي" },
    category: "interior",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Riyadh Hospital", ar: "مستشفى الرياض" },
    area: { en: "Land 8,733 m² · Built 9,920 m²", ar: "الأرض 8,733 m²" },
    services: { en: "Interior Re-Design", ar: "إعادة التصميم الداخلي" },
    status: { en: "Capacity: 300 Beds", ar: "السعة: 300 سرير" },
    excerpt: { en: "300 Beds · Interior Re-Design · Riyadh - KSA", ar: "300 سرير · إعادة التصميم الداخلي · الرياض" },
    body: {
      en: ["Client Riyadh Hospital", "Projects Capacity 300 Beds", "Land Area 8,733 m²", "Total Built Area 9,920 m²", "Scope Of Work Interior Re-Design", "Location Riyadh - KSA"],
      ar: ["العميل مستشفى الرياض", "سعة المشروع 300 سرير", "مساحة الأرض 8,733 m²", "مساحة الأرض المبنية 9,920 m²", "نطاق العمل إعادة التصميم الداخلي", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/image-2-scaled.jpg", "https://kfoco.com/wp-content/uploads/2026/11/image-1-scaled.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4691.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4699.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4697.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4695.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4693.jpg"],
    featured: false
  },
  {
    slug: "int-sajaya",
    title: { en: "Sajaya Medical Center", ar: "مركز سجايا الطبي" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Sajaya Medical Center", ar: "مركز سجايا الطبي" },
    body: {
      en: ["Service Healthcare Interior Design"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-sajaya-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-sajaya-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-sajaya-04.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-int-sajaya-04.jpg"],
    featured: false
  },
  {
    slug: "int-sanaya-dental",
    title: { en: "Sanaya Dental Care", ar: "سنايا لطب الأسنان" },
    category: "interior",
    location: { en: "", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Sanaya Dental Care", ar: "سنايا لطب الأسنان" },
    body: {
      en: ["Service Healthcare Interior Design", "Spaces Reception"],
      ar: ["الخدمة تصميم داخلي للمنشآت الصحية", "المساحات الاستقبال"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-sanaya-dental-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-sanaya-dental-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-sanaya-dental-04.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-int-sanaya-04.jpg"],
    featured: false
  },
  {
    slug: "int-swiss-neuro",
    title: { en: "Swiss Rehabilitation Center-Robo clinic", ar: "سعة المشروع مركز إعادة التأهيل – عيادات إعادة التأهيل بالروبوت والعلاج الطبيعي" },
    category: "interior",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Majd Medical Company - KSA", ar: "" },
    area: { en: "Land 1000 m² · Built 1500 m²", ar: "الأرض 1000 m² · المبنية 1500 m²" },
    services: { en: "Design and Supervision", ar: "تصميم واشراف" },
    status: { en: "Capacity: Rehabilitation Center- Robotics Rehabilitation clinics and Physical therapy", ar: "السعة: مركز إعادة التأهيل – عيادات إعادة التأهيل بالروبوت والعلاج الطبيعي" },
    excerpt: { en: "Rehabilitation Center- Robotics Rehabilitation clinics and Physical therapy · Design and Supervision · Riyadh - KSA", ar: "مركز إعادة التأهيل – عيادات إعادة التأهيل بالروبوت والعلاج الطبيعي · تصميم واشراف · الرياض" },
    body: {
      en: ["Client Majd Medical Company - KSA", "Projects Capacity Rehabilitation Center- Robotics Rehabilitation clinics and Physical therapy", "Land Area 1000 m²", "Total Built Area 1500 m²", "Scope Of Work Design and Supervision", "Location Riyadh - KSA"],
      ar: ["مساحة الأرض 1000 m²", "المساحة المبنية 1500 m²", "نطاق العمل تصميم واشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-swiss-neuro-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-swiss-neuro-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-int-swiss-neuro-04.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-2.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-3.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-4.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-5.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-6.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-7.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-P-8.jpg"],
    featured: false
  },
  {
    slug: "irad-complex",
    title: { en: "Irad Complex", ar: "مجمع إيراد" },
    category: "healthcare",
    location: { en: "Riyadh, KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Irad Complex", ar: "مجمع إيراد" },
    area: { en: "", ar: "" },
    services: { en: "Master Planning Pre-concept and Infrastructure Design", ar: "المخطط العام (Master Plan) – مرحلة ما قبل المفهوم وتصميم البنية التحتية" },
    status: { en: "", ar: "" },
    excerpt: { en: "Master Planning Pre-concept and Infrastructure Design · Riyadh, KSA", ar: "المخطط العام (Master Plan) – مرحلة ما قبل المفهوم وتصميم البنية التحتية · الرياض" },
    body: {
      en: ["Client Irad Complex", "Sector Environmental and Energy", "Plot Area 500,000 SQM", "GFA 150,000 SQM", "Scope Of Work Master Planning Pre-concept and Infrastructure Design", "Location Riyadh, KSA"],
      ar: ["العميل مجمع إيراد", "القطاع البيئة والطاقة", "مساحة الموقع 500,000 م²", "المساحة الإجمالية للبناء 150,000 م²", "نطاق العمل المخطط العام (Master Plan) – مرحلة ما قبل المفهوم وتصميم البنية التحتية", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-irad-complex-02-street-scaled-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-irad-complex-03-lake-road-scaled-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-irad-complex-04-water-axis-scaled-1.jpg"],
    featured: false
  },
  {
    slug: "jouf-university-hospital-partial-operation-design",
    title: { en: "Jouf University Hospital – Partial Operation Design", ar: "السعة 167 سريراً" },
    category: "healthcare",
    location: { en: "Al Jouf Region, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "STS", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Design (Concept & Schematic Design)", ar: "تصميم (التصميم المفاهيمي والتصميم الابتدائي)" },
    status: { en: "", ar: "" },
    excerpt: { en: "Design (Concept & Schematic Design) · Al Jouf Region, KSA", ar: "تصميم (التصميم المفاهيمي والتصميم الابتدائي)" },
    body: {
      en: ["Client STS", "End User Jouf University", "Location Al Jouf Region, KSA", "Capacity 167 Beds", "Scope Of Work Design (Concept & Schematic Design)"],
      ar: ["نطاق العمل تصميم (التصميم المفاهيمي والتصميم الابتدائي)"]
    },
    images: [assets.categories.healthcare],
    featured: false
  },
  {
    slug: "king-khaled-eye-specialist-hospital",
    title: { en: "King Khaled Eye Specialist Hospital", ar: "مستشفى الملك خالد التخصصي للعيون" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "King Khaled Eye Specialist Hospital", ar: "مستشفى الملك خالد التخصصي للعيون" },
    area: { en: "Land 1,350 m² · Built 2,000 m²", ar: "الأرض 1,350 m²" },
    services: { en: "Design & Supervision", ar: "تصميم وإشراف" },
    status: { en: "", ar: "" },
    excerpt: { en: "Design & Supervision · Riyadh - KSA", ar: "تصميم وإشراف · الرياض" },
    body: {
      en: ["Client King Khaled Eye Specialist Hospital", "Land Area 1,350 m²", "Total Built Area 2,000 m²", "Scope Of Work Design & Supervision", "Location Riyadh - KSA"],
      ar: ["العميل مستشفى الملك خالد التخصصي للعيون", "مساحة الأرض 1,350 m²", "مساحة الأرض المبنية 2,000 m²", "نطاق العمل تصميم وإشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-8-2.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitledss-8.jpg"],
    featured: false
  },
  {
    slug: "kingdom-hospital-renovation-project",
    title: { en: "Kingdom Hospital Renovation Project", ar: "مشروع تجديد مستشفى المملكة" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Kingdom Hospital Renovation Project", ar: "مشروع تجديد مستشفى المملكة" },
    area: { en: "Land 9,920 m² · Built 9,920 m²", ar: "الأرض 9,920 m²" },
    services: { en: "Design, Supervision", ar: "تصميم وإشراف" },
    status: { en: "Capacity: 50 Beds", ar: "السعة: 50 سرير" },
    excerpt: { en: "50 Beds · Design, Supervision · Riyadh - KSA", ar: "50 سرير · تصميم وإشراف · الرياض" },
    body: {
      en: ["Client Kingdom Hospital Renovation Project", "Projects Capacity 50 Beds", "Land Area 9,920 m²", "Total Built Area 9,920 m²", "Scope Of Work Design, Supervision", "Location Riyadh - KSA"],
      ar: ["العميل مشروع تجديد مستشفى المملكة", "سعة المشروع 50 سرير", "مساحة الأرض 9,920 m²", "مساحة الأرض المبنية 9,920 m²", "نطاق العمل تصميم وإشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-2.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-3.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-4.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4714.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4716.jpg"],
    featured: false
  },
  {
    slug: "majesty-hospital-riyadh",
    title: { en: "Majesty Hospital", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Riyadh, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Design and AOR", ar: "" },
    status: { en: "Capacity: 50 Beds", ar: "" },
    excerpt: { en: "50 Beds · Design and AOR · Riyadh, KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Project Type Hospital", "Projects Capacity 50 Beds", "Scope Of Work Design and AOR", "Location Riyadh, KSA"],
      ar: ["تصميم مستشفى يجمع بين الطابع المعماري السلماني ومتطلبات الرعاية الصحية المعاصرة، مع التركيز على راحة المرضى."]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-majesty-hospital.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-01.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-04.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-05.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-06.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-07.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-08.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-09.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-10.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-majesty-11.jpg"],
    featured: false
  },
  {
    slug: "malisa-clinics",
    title: { en: "MALISA Clinics", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Riyadh, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "MALISA Clinics", ar: "" },
    area: { en: "Built 300 m²", ar: "" },
    services: { en: "Design and Supervision", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Design and Supervision · Riyadh, KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Client MALISA Clinics", "Sector cosmetic and plastic surgery", "Total Built Area 300 m²", "Scope Of Work Design and Supervision", "Location Riyadh, KSA"],
      ar: []
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Artboard-3-100-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Artboard-4-100-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-malisa-clinics-02-scaled-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Artboard-5-100-1.jpg"],
    featured: false
  },
  {
    slug: "masharef-hospital",
    title: { en: "Masharef Hospital", ar: "مستشفى مشارف" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Masharef Hospital", ar: "مستشفى مشارف" },
    area: { en: "Land 3,000 m² · Built 14,000 m²", ar: "الأرض 3,000 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: 50 Beds", ar: "السعة: 50 سرير" },
    excerpt: { en: "50 Beds · Design · Riyadh - KSA", ar: "50 سرير · تصميم · الرياض" },
    body: {
      en: ["Client Masharef Hospital", "Projects Capacity 50 Beds", "Land Area 3,000 m²", "Total Built Area 14,000 m²", "Scope Of Work Design", "Location Riyadh - KSA"],
      ar: ["العميل مستشفى مشارف", "سعة المشروع 50 سرير", "مساحة الأرض 3,000 m²", "مساحة الأرض المبنية 14,000 m²", "نطاق العمل تصميم", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-masharef-hospital-hd-scaled-1.jpg"],
    featured: false
  },
  {
    slug: "meena-clinics-subsidiary-of-al-tawuniya",
    title: { en: "MEENA Clinics Subsidiary of Al Tawuniya", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "MEENA Clinics", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Project Management Consultancy, Supervision", ar: "" },
    status: { en: "Capacity: 1 Medical Center and 2 Clinics: MEENA Center 2: 3,544 m², MEENA Clinic 3: 556 m², MEENA Clinic 4: 995 m²", ar: "" },
    excerpt: { en: "1 Medical Center and 2 Clinics: MEENA Center 2: 3,544 m², MEENA Clinic 3: 556 m², MEENA Clinic 4: 995 m² · Project Management Consultancy, Supervision · Riyadh - KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Client MEENA Clinics", "Projects Capacity 1 Medical Center and 2 Clinics: MEENA Center 2: 3,544 m², MEENA Clinic 3: 556 m², MEENA Clinic 4: 995 m²", "Scope Of Work Project Management Consultancy, Supervision", "Location Riyadh - KSA"],
      ar: []
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c2_Main.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c2_01.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c2_02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c2_03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c2_05.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c2_06.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c2_07.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c2_08.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c3_01.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c3_02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c4_01.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-meena_c4_02.jpg"],
    featured: false
  },
  {
    slug: "moh-healthcare-facilities-engineering-specifications-standards",
    title: { en: "Update and Development of Engineering Specifications and Standards for Healthcare Facilities", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Kingdom of Saudi Arabia", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Ministry of Health – Deputy Ministry for Projects & Engineering Affairs", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Update & Development of Engineering Specifications and Standards", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Update & Development of Engineering Specifications and Standards · Kingdom of Saudi Arabia", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Client Ministry of Health – Deputy Ministry for Projects & Engineering Affairs", "Scope Of Work Update & Development of Engineering Specifications and Standards", "Location Kingdom of Saudi Arabia"],
      ar: ["تحويل المواصفات والمعايير الهندسية للمنشآت الصحية لدى وزارة الصحة إلى مرجعية وطنية موحدة تتوافق مع الأنظمة الوطنية والعالمية.", "رفع عدد أبواب المواصفات الفنية الموحدة من 16 إلى 29 باباً، بعد أن لم يُحدَّث أغلبها منذ أكثر من 10 سنوات.", "تحديث المعايير التصميمية لأقسام المنشآت الصحية، مع توحيد المرجعيات والجداول والتصنيفات وجداول الكميات.", "إضافة طبقة رقمية للمستشفى الذكي (أنظمة المباني وإنترنت الأشياء، إدارة الصيانة، تحليل البيانات، الأمن السيبراني، دعم القرار بالذكاء الاصطناعي) ودمج متطلبات الاستدامة وكفاءة الطاقة.", "تطوير المشروع عبر أكثر من 100 اجتماع تنسيقي مع الوزارة وكود البناء السعودي وكفاءة وإكسبرو وهيئة المحتوى المحلي وTAHPI.", "حفل إنجاز المشروع والتكريم"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/moh-logo-square.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-moh-ceremony-2.jpg"],
    featured: false
  },
  {
    slug: "national-blood-and-cancer-center",
    title: { en: "National Blood and Cancer Center", ar: "مركز أمراض الدم والأورام" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "National Blood and Cancer Center", ar: "مركز أمراض الدم والأورام" },
    area: { en: "", ar: "" },
    services: { en: "Re-Design & Authorities Approval of  Day Surgery Radiation Bunkers in addition to other facilities)", ar: "" },
    status: { en: "Capacity: 25 Beds", ar: "السعة: 25 سرير" },
    excerpt: { en: "25 Beds · Re-Design & Authorities Approval of  Day Surgery Radiation Bunkers in addition to other facilities) · Riyadh - KSA", ar: "25 سرير · الرياض" },
    body: {
      en: ["Client National Blood and Cancer Center", "Projects Capacity 25 Beds", "Scope Of Work Re-Design & Authorities Approval of  Day Surgery Radiation Bunkers in addition to other facilities)", "Location Riyadh - KSA"],
      ar: ["العميل مركز أمراض الدم والأورام", "سعة المشروع 25 سرير", "نطاق المشروع إعادة تصميم واعتماد الجهات المختصة لخزانات الإشعاع لجراحة اليوم الواحد بالإضافة إلى المرافق الأخرى", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Undtitled-8.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitleddd-8.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-8s-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-8zd.jpg"],
    featured: false
  },
  {
    slug: "noya-cosmetic-clinic",
    title: { en: "Noya Cosmetic Clinic", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Riyadh, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Noya Clinic", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Interior Design and Construction Supervision", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Interior Design and Construction Supervision · Riyadh, KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Project Type Cosmetic Clinic", "Client Noya Clinic", "Scope Of Work Interior Design and Construction Supervision", "Location Riyadh, KSA"],
      ar: ["عيادة تجميل يتميّز تصميمها بالعمق والدقة والفخامة الهادئة. يبني المفهوم ثقة المراجع عبر تنظيم فراغي واضح ونسب مدروسة وتدرّج مقصود في المساحات، فتصبح الحركة بديهية ويقود العمارة الزائر بدلاً من اللوحات الإرشادية.", "اعتُمد اللون العنابي (الغارنت) لوناً محورياً للعلامة، مع الترافرتين والخشب والمعدن لإضفاء الثقل والعمق والملمس، وإضاءة ناعمة محسوبة. يشمل التصميم الاستقبال والممرات ومنطقة العمليات وغرف ما قبل العملية وما بعدها وصالة الموظفين."]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-noya-clinic-01-reception.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-noya-clinic-02-reception-desk.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-noya-clinic-03-corridor-brand-wall.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-noya-clinic-04-corridor-feature-niche.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-noya-clinic-05-corridor-lounge.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-noya-clinic-06-waiting-nook.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-noya-clinic-07-surgical-scrub-zone.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-7624.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-noya-clinic-09-pre-op-rooms.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-noya-clinic-10-post-op-room.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-noya-clinic-11-staff-lounge.jpg"],
    featured: false
  },
  {
    slug: "odwani-hospital-renovation-repurposing-supervision-jeddah",
    title: { en: "Odwani Hospital – Renovation & Repurposing Supervision, Jeddah", ar: "نطاق العمل الإشراف على التنفيذ" },
    category: "healthcare",
    location: { en: "Jeddah, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Akdital Healthcare Group", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Construction Supervision", ar: "الإشراف على التنفيذ" },
    status: { en: "", ar: "" },
    excerpt: { en: "Construction Supervision · Jeddah, KSA", ar: "الإشراف على التنفيذ" },
    body: {
      en: ["Client Akdital Healthcare Group", "Location Jeddah, KSA", "Scope Of Work Construction Supervision"],
      ar: ["نطاق العمل: الإشراف على التنفيذ."]
    },
    images: [assets.categories.healthcare],
    featured: false
  },
  {
    slug: "outpatient-rehab-building-namar-hospital",
    title: { en: "Design of Outpatient & Rehab Building at Namar Hospital", ar: "تصميم العيادات الخارجية وإعادة التأهيل لمستشفى دله نمار" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Dallah Healthcare Company", ar: "مجموعة دله الصحية" },
    area: { en: "Land 118,704 m² · Built 24,091 m²", ar: "الأرض 118,704 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: 183 Clinics, 136 Beds", ar: "السعة: 183 عيادة و136 سريراً" },
    excerpt: { en: "183 Clinics, 136 Beds · Design · Riyadh - KSA", ar: "183 عيادة و136 سريراً · تصميم · الرياض" },
    body: {
      en: ["Client Dallah Healthcare Company", "Projects Capacity 183 Clinics, 136 Beds", "Land Area 118,704 m²", "Total Built Area 24,091 m²", "Scope Of Work Design", "Location Riyadh - KSA"],
      ar: ["العميل مجموعة دله الصحية", "سعة المشروع 183 عيادة و136 سريراً", "مساحة الأرض 118,704 m²", "مساحة الأرض المبنية 24,091 m²", "نطاق العمل تصميم", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-WhatsApp-Image-2023-11-05-at-11.35.07-1.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-WhatsApp-Image-2023-11-05-at-11.35.07-2.jpg"],
    featured: false
  },
  {
    slug: "pain-management-mc",
    title: { en: "Pain Management (MC)", ar: "العودة إلى المشاريع" },
    category: "healthcare",
    location: { en: "Riyadh, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Pain Management (MC)", ar: "" },
    area: { en: "Land 500 m² · Built 1,803 m²", ar: "" },
    services: { en: "Design and Supervision", ar: "" },
    status: { en: "", ar: "" },
    excerpt: { en: "Design and Supervision · Riyadh, KSA", ar: "العودة إلى المشاريع" },
    body: {
      en: ["Client Pain Management (MC)", "Land Area 500 m²", "Total Built Area 1,803 m²", "Scope Of Work Design and Supervision", "Location Riyadh, KSA"],
      ar: ["جولة في المشروع"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Artboard-5-copy-3-100.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Artboard-5-copy-2-100.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Artboard-3-100-2.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Artboard-2-100.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-pain-01.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-pain-02.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-pain-03.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-pain-04.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-pain-05.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-pain-06.jpg"],
    featured: false
  },
  {
    slug: "residential-building-2",
    title: { en: "Residential Building", ar: "بناء سكني (الروضة)" },
    category: "education",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Residential Building", ar: "بناء سكني (الروضة)" },
    area: { en: "Land 750 m² · Built 1922 m²", ar: "الأرض 750 m²" },
    services: { en: "Design & Supervision", ar: "تصميم وإشراف" },
    status: { en: "Capacity: 11 Units", ar: "السعة: 11 وحدة" },
    excerpt: { en: "11 Units · Design & Supervision · Riyadh - KSA", ar: "11 وحدة · تصميم وإشراف · الرياض" },
    body: {
      en: ["Client Residential Building", "Projects Capacity 11 Units", "Land Area 750 m²", "Total Built Area 1922 m²", "Scope Of Work Design & Supervision", "Location Riyadh - KSA"],
      ar: ["العميل بناء سكني (الروضة)", "سعة المشروع 11 وحدة", "مساحة الأرض 750 m²", "مساحة الأرض المبنية 1922 m²", "نطاق العمل تصميم وإشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-8-10.jpg"],
    featured: false
  },
  {
    slug: "residential-building-3",
    title: { en: "Residential Building", ar: "بناء سكني (الأندلس)" },
    category: "education",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Residential Building", ar: "بناء سكني (الأندلس)" },
    area: { en: "Land 1375 m² · Built 3900 m²", ar: "الأرض 1375 m²" },
    services: { en: "Design & Supervision", ar: "تصميم وإشراف" },
    status: { en: "Capacity: 20 Units", ar: "السعة: 20 وحدة" },
    excerpt: { en: "20 Units · Design & Supervision · Riyadh - KSA", ar: "20 وحدة · تصميم وإشراف · الرياض" },
    body: {
      en: ["Client Residential Building", "Projects Capacity 20 Units", "Land Area 1375 m²", "Total Built Area 3900 m²", "Scope Of Work Design & Supervision", "Location Riyadh - KSA"],
      ar: ["العميل بناء سكني (الأندلس)", "سعة المشروع 20 وحدة", "مساحة الأرض 1375 m²", "مساحة الأرض المبنية 3900 m²", "نطاق العمل تصميم وإشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-8-11.jpg"],
    featured: false
  },
  {
    slug: "residential-building",
    title: { en: "Residential Building", ar: "بناء سكني (النرجس)" },
    category: "education",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Residential Building", ar: "بناء سكني (النرجس)" },
    area: { en: "Land 1138 m² · Built 2883 m²", ar: "الأرض 1138 m²" },
    services: { en: "Design & Supervision", ar: "تصميم وإشراف" },
    status: { en: "Capacity: 13 Units", ar: "السعة: 13 وحدة" },
    excerpt: { en: "13 Units · Design & Supervision · Riyadh - KSA", ar: "13 وحدة · تصميم وإشراف · الرياض" },
    body: {
      en: ["Client Residential Building", "Projects Capacity 13 Units", "Land Area 1138 m²", "Total Built Area 2883 m²", "Scope Of Work Design & Supervision", "Location Riyadh - KSA"],
      ar: ["العميل بناء سكني (النرجس)", "سعة المشروع 13 وحدة", "مساحة الأرض 1138 m²", "مساحة الأرض المبنية 2883 m²", "نطاق العمل تصميم وإشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-8-9.jpg"],
    featured: false
  },
  {
    slug: "riyadh-hospital",
    title: { en: "Riyadh Hospital", ar: "مستشفى الرياض" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Riyadh Hospital", ar: "مستشفى الرياض" },
    area: { en: "Land 8,733 m² · Built 9,920 m²", ar: "الأرض 8,733 m²" },
    services: { en: "Interior Re-Design", ar: "إعادة التصميم الداخلي" },
    status: { en: "Capacity: 300 Beds", ar: "السعة: 300 سرير" },
    excerpt: { en: "300 Beds · Interior Re-Design · Riyadh - KSA", ar: "300 سرير · إعادة التصميم الداخلي · الرياض" },
    body: {
      en: ["Client Riyadh Hospital", "Projects Capacity 300 Beds", "Land Area 8,733 m²", "Total Built Area 9,920 m²", "Scope Of Work Interior Re-Design", "Location Riyadh - KSA"],
      ar: ["العميل مستشفى الرياض", "سعة المشروع 300 سرير", "مساحة الأرض 8,733 m²", "مساحة الأرض المبنية 9,920 m²", "نطاق العمل إعادة التصميم الداخلي", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4691.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4699.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4697.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4695.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-hd-4693.jpg"],
    featured: false
  },
  {
    slug: "riyadh-tower-hospital",
    title: { en: "Riyadh Tower Hospital", ar: "مستشفى برج الرياض" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Riyadh Tower Hospital", ar: "مستشفى برج الرياض" },
    area: { en: "Land 5,500 m² · Built 50,500 m²", ar: "الأرض 5,500 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: 800 Beds", ar: "السعة: 800 سرير" },
    excerpt: { en: "800 Beds · Design · Riyadh - KSA", ar: "800 سرير · تصميم · الرياض" },
    body: {
      en: ["Client Riyadh Tower Hospital", "Projects Capacity 800 Beds", "Land Area 5,500 m²", "Total Built Area 50,500 m²", "Scope Of Work Design", "Location Riyadh - KSA"],
      ar: ["العميل مستشفى برج الرياض", "سعة المشروع 800 سرير", "مساحة الأرض 5,500 m²", "مساحة الأرض المبنية 50,500 m²", "نطاق العمل تصميم", "الموقع الرياض"]
    },
    images: [assets.categories.healthcare],
    featured: false
  },
  {
    slug: "sheikh-abdulrahman-bin-abdulaziz-al-rajhi-hospital-medical-community",
    title: { en: "Sheikh Abdulrahman Bin Abdulaziz Al Rajhi Hospital & Medical Community", ar: "مساحة الموقع ≈ 136,000 م²" },
    category: "healthcare",
    location: { en: "Asfan, Makkah Region, KSA", ar: "" },
    year: { en: "", ar: "" },
    client: { en: "Abdulrahman bin Abdulaziz Al Rajhi Endowments", ar: "" },
    area: { en: "", ar: "" },
    services: { en: "Phase 1 – Master Plan", ar: "المرحلة الأولى – المخطط العام" },
    status: { en: "", ar: "" },
    excerpt: { en: "Phase 1 – Master Plan · Asfan, Makkah Region, KSA", ar: "المرحلة الأولى – المخطط العام" },
    body: {
      en: ["Client Abdulrahman bin Abdulaziz Al Rajhi Endowments", "Location Asfan, Makkah Region, KSA", "Site Area ≈ 136,000 m²", "Capacity 50 Beds (expandable to 150)", "Scope Of Work Phase 1 – Master Plan"],
      ar: ["السعة 50 سريراً (قابلة للتوسع إلى 150)", "نطاق العمل المرحلة الأولى – المخطط العام"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-alrajhi-day-hd.jpg"],
    featured: false
  },
  {
    slug: "supervision-office-for-riyadh-distribution-center",
    title: { en: "Supervision Office For Riyadh Distribution Center", ar: "مكتب الإشراف على مركز توزيع الرياض" },
    category: "education",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Supervision Office For Riyadh Distribution Center", ar: "مكتب الإشراف على مشروع مركز توزيع الرياض (مستودعات الصالحية)" },
    area: { en: "Land 1138 m² · Built 3900 m²", ar: "الأرض 1138 m²" },
    services: { en: "Supervision", ar: "" },
    status: { en: "Capacity: 34,000 Palettes", ar: "السعة: 34,000 لوحة" },
    excerpt: { en: "34,000 Palettes · Supervision · Riyadh - KSA", ar: "34,000 لوحة · الرياض" },
    body: {
      en: ["Client Supervision Office For Riyadh Distribution Center", "Projects Capacity 34,000 Palettes", "Land Area 1138 m²", "Total Built Area 3900 m²", "Scope Of Work Supervision", "Location Riyadh - KSA"],
      ar: ["العميل مكتب الإشراف على مشروع مركز توزيع الرياض (مستودعات الصالحية)", "سعة المشروع 34,000 لوحة", "مساحة الأرض 1138 m²", "مساحة الأرض المبنية 3900 m²", "نطاق المشروع إشراف", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-kfo-salehiya-warehouses-02-scaled-1.jpg"],
    featured: false
  },
  {
    slug: "tabuk-hospital",
    title: { en: "Tabuk Hospital", ar: "مستشفى تبوك" },
    category: "healthcare",
    location: { en: "Tabuk - KSA", ar: "تبوك" },
    year: { en: "", ar: "" },
    client: { en: "Tabuk Hospital", ar: "مستشفى تبوك" },
    area: { en: "Land 6,150 m² · Built 40,500 m²", ar: "الأرض 6,150 m²" },
    services: { en: "Design", ar: "تصميم" },
    status: { en: "Capacity: 120 Beds", ar: "السعة: 120 سرير" },
    excerpt: { en: "120 Beds · Design · Tabuk - KSA", ar: "120 سرير · تصميم · تبوك" },
    body: {
      en: ["Client Tabuk Hospital", "Projects Capacity 120 Beds", "Land Area 6,150 m²", "Total Built Area 40,500 m²", "Scope Of Work Design", "Location Tabuk - KSA"],
      ar: ["العميل مستشفى تبوك", "سعة المشروع 120 سرير", "مساحة الأرض 6,150 m²", "مساحة الأرض المبنية 40,500 m²", "نطاق العمل تصميم", "الموقع تبوك"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitledd-8-1.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitlded-8.png", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-82.png"],
    featured: false
  },
  {
    slug: "thuriah-specialized-ivf-hospital",
    title: { en: "Thuriah Specialized IVF Hospital", ar: "مستشفى ذرية التخصصي" },
    category: "healthcare",
    location: { en: "Riyadh - KSA", ar: "الرياض" },
    year: { en: "", ar: "" },
    client: { en: "Thuriah Specialized IVF Hospital", ar: "مستشفى ذرية التخصصي" },
    area: { en: "Land 2,400 m² · Built 7,920 m²", ar: "الأرض 2,400 m²" },
    services: { en: "Design", ar: "" },
    status: { en: "Capacity: 20 Beds", ar: "السعة: 20 سرير" },
    excerpt: { en: "20 Beds · Design · Riyadh - KSA", ar: "20 سرير · الرياض" },
    body: {
      en: ["Client Thuriah Specialized IVF Hospital​", "Projects Capacity 20 Beds", "Land Area 2,400 m²", "Total Built Area 7,920 m²", "Scope Of Work Design", "Location Riyadh - KSA"],
      ar: ["العميل مستشفى ذرية التخصصي", "سعة المشروع 20 سرير", "مساحة الأرض 2,400 m²", "مساحة الأرض المبنية 7,920 m²", "نطاق المشروع تصميم", "الموقع الرياض"]
    },
    images: ["https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitlexxd-8.jpg", "https://kfoco.com/wp-content/uploads/2026/11/kfo-wm-Untitled-d8.jpg"],
    featured: false
  }
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectsByCategory = (category: string) =>
  projects.filter((p) => p.category === category);

/** Neighbouring projects for the single-project pagination */
export const getAdjacentProjects = (slug: string) => {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0]
  };
};
