import { assets } from './assets';

/**
 * Events / news — ported from the old kfoco.com posts (EN + AR).
 * Dates: taken from the event text where stated, otherwise the old site's post date.
 */
export interface EventPost {
  slug: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  body: { en: string[]; ar: string[] };
  date: string; // ISO
  place: { en: string; ar: string };
  image: string;
  /** Extra photos from the original post */
  gallery: string[];
}

export const events: EventPost[] = [
  {
    slug: "exhibition-of-college-of-architecture-ksu",
    title: { en: "EXHIBITION OF COLLEGE OF ARCHITECTURE – KSU", ar: "معرض كلية الهندسة المعمارية – جامعة الملك سعود" },
    excerpt: { en: "Khalid Al Fagih Engineering Consultancy (KFO) invited Stuff And students for attending an Architectural Exhibition. The exhibition was focused on design and planning of healthcare buildings in the views and light of professionals.", ar: "قامت شركة خالد الفقيه للاستشارات الهندسية (KFO) بدعوة Stuff والطلاب لحضور معرض معماري. وركز المعرض على تصميم وتخطيط مباني الرعاية الصحية في ضوء آراء المتخصصين." },
    body: {
      en: ["Khalid Al Fagih Engineering Consultancy (KFO) invited Stuff And students for attending an Architectural Exhibition. The exhibition was focused on design and planning of healthcare buildings in the views and light of professionals.", "The venue of the exhibition was College of Architecture – KSU scheduled  from 14 th October, 2018 till 18 th October, 2018.", "The fanatical topics were: Healthcare Buildings “Design and Planning”", "in the views of and lighted by Eng. Khaled Alfagih (General Manager) Khaled Alfagih Engineering Consultancy Healthcare Buildings", "Architects Division – Master’s Program in Design Healthcare Buildings", "in the views of and lighted", "by Dr. Ziad Al-Suaidan", "(Professor of Architecture at IAU – Dammam)", "Khaled Alfagih Engineering Consultancy", "Site Visit", "In addition to the above, we also invited all for a site visit at Dr. Mohammed Alfagih Hospital – Riyadh, KSA."],
      ar: ["قامت شركة خالد الفقيه للاستشارات الهندسية (KFO) بدعوة Stuff والطلاب لحضور معرض معماري. وركز المعرض على تصميم وتخطيط مباني الرعاية الصحية في ضوء آراء المتخصصين.", "مكان إقامة المعرض هو كلية الهندسة المعمارية – جامعة الملك سعود المقرر في الفترة من 14 أكتوبر 2018 حتى 18 أكتوبر 2018.", "وكانت المواضيع المتعصبة هي:  مباني الرعاية الصحية “التصميم والتخطيط”", "في مناظر وأضاء المهندس. خالد الفقيه (المدير العام) خالد الفقيه للاستشارات الهندسية مباني الرعاية الصحية", "قسم المهندسين المعماريين – برنامج الماجستير في تصميم مباني الرعاية الصحية", "في مناظر ومضاءة", "بقلم الدكتور زياد السويدان", "(أستاذ الهندسة المعمارية في الجامعة الإسلامية – الدمام)", "خالد الفقيه للإستشارات الهندسية", "بالإضافة إلى ما سبق، قمنا أيضًا بدعوة الجميع لزيارة موقع مستشفى الدكتور محمد الفقيه – الرياض، المملكة العربية السعودية."]
    },
    date: "2018-10-14",
    place: { en: "College of Architecture – KSU", ar: "كلية الهندسة المعمارية – جامعة الملك سعود" },
    image: "https://kfoco.com/wp-content/uploads/2023/10/2954c-001.jpg",
    gallery: ["https://kfoco.com/wp-content/uploads/2023/10/63a65-002.jpg", "https://kfoco.com/wp-content/uploads/2023/10/a3faf-003.jpg", "https://kfoco.com/wp-content/uploads/2023/10/6a173-004.jpg", "https://kfoco.com/wp-content/uploads/2023/10/f10d2-005.jpg"]
  },
  {
    slug: "exhibition-of-college-of-engineering-dau",
    title: { en: "EXHIBITION OF COLLEGE OF ENGINEERING - DAU", ar: "معرض كلية الهندسة - دار العلوم" },
    excerpt: { en: "Khalid A Fagih Engineering Consultancy (KFO) invited Stuff And students for attending an Architectural Exhibition. The exhibition was focused on design and planning of healthcare buildings in the views and light of professionals.", ar: "قام خالد الفقيه للاستشارات الهندسية (KFO) بدعوة شركة Stuff والطلاب لحضور معرض معماري. وركز المعرض على تصميم وتخطيط مباني الرعاية الصحية في ضوء آراء المتخصصين." },
    body: {
      en: ["Khalid A Fagih Engineering Consultancy (KFO) invited Stuff And students for attending an Architectural Exhibition. The exhibition was focused on design and planning of healthcare buildings in the views and light of professionals.", "The venue of the exhibition was College of Engineering – Dar Al Oloom university scheduled  from 8th November, 2018 till 15th November, 2018."],
      ar: ["قام خالد الفقيه للاستشارات الهندسية (KFO) بدعوة شركة Stuff والطلاب لحضور معرض معماري. وركز المعرض على تصميم وتخطيط مباني الرعاية الصحية في ضوء آراء المتخصصين.", "مكان انعقاد المعرض هو كلية الهندسة – جامعة دار العلوم والمقرر في الفترة من 8 نوفمبر 2018 حتى 15 نوفمبر 2018."]
    },
    date: "2018-11-08",
    place: { en: "College of Engineering – Dar Al Oloom University", ar: "كلية الهندسة – جامعة دار العلوم" },
    image: assets.pageHeaders.events,
    gallery: []
  },
  {
    slug: "form-of-design-planning-and-furnishing-hos-and-facility",
    title: { en: "Form of Design Planning and Furnishing Hositals and Facility", ar: "نموذج تخطيط التصميم وتأثيث المستشفيات والمرافق" },
    excerpt: { en: "Form of Design, Planning and Furnishing Hospitals and Facility Management:", ar: "نموذج تصميم وتخطيط وتأثيث المستشفيات وإدارة المرافق:" },
    body: {
      en: ["Form of Design, Planning and Furnishing Hospitals and Facility Management:", "Title: Design Influence on Effective Operation and Facility Management of Health Care Buildings.", "Under Sponsership of Eastren Health Cluster.", "team members", "Eng. Khaled Alfagih", "Saad Saqer Aldumaykh"],
      ar: ["نموذج تصميم وتخطيط وتأثيث المستشفيات وإدارة المرافق:", "العنوان: تأثير التصميم على التشغيل الفعال وإدارة المرافق لمباني الرعاية الصحية.", "تحت رعاية مجموعة الصحة الشرقية.", "أعضاء الفريق", "م. خالد الفقيه", "سعد صقر الدميخ"]
    },
    date: "2023-10-02",
    place: { en: "", ar: "" },
    image: assets.pageHeaders.events,
    gallery: []
  },
  {
    slug: "future-health-projects-forum",
    title: { en: "Future Health Projects Forum", ar: "منتدى المشاريع الصحية المستقبلية" },
    excerpt: { en: "Future of Health Projects Forum, under the patronage of His Royal Highness Prince Dr. Faisal bin Mishal, Emir of the Qassim Region, by participating in a workshop entitled: The Future of Health Projects presented by Engineer Khaled Al-Faqih", ar: "ملتقى مستقبل المشاريع الصحية برعاية صاحب السمو الملكي الأمير الدكتور فيصل بن مشعل أمير منطقة القصيم من خلال المشاركة في ورشة عمل بعنوان: مستقبل المشاريع الصحية يقدمها المهندس خالد الفقيه" },
    body: {
      en: ["Future of Health Projects Forum, under the patronage of His Royal Highness Prince Dr. Faisal bin Mishal, Emir of the Qassim Region, by participating in a workshop entitled: The Future of Health Projects presented by Engineer Khaled Al-Faqih"],
      ar: ["ملتقى مستقبل المشاريع الصحية برعاية صاحب السمو الملكي الأمير الدكتور فيصل بن مشعل أمير منطقة القصيم من خلال المشاركة في ورشة عمل بعنوان: مستقبل المشاريع الصحية يقدمها المهندس خالد الفقيه"]
    },
    date: "2023-10-01",
    place: { en: "Qassim Region", ar: "منطقة القصيم" },
    image: assets.pageHeaders.events,
    gallery: []
  },
  {
    slug: "kfo-participation-in-saudi-hospital-design-build-expo-24-27-february-2025",
    title: { en: "KFO Participation in Saudi Hospital Design & Build Expo | 24 – 27 February 2025", ar: "من مشاركة شركة خالد الفقيه للاستشارات الهندسية في معرض تصميم وبناء المستشفيات السعودي - فبراير" },
    excerpt: { en: "KFO Participation in Saudi Hospital Design & Build Expo | 24 – 27 February 2025", ar: "من مشاركة شركة خالد الفقيه للاستشارات الهندسية في معرض تصميم وبناء المستشفيات السعودي - فبراير" },
    body: {
      en: ["KFO Participation in Saudi Hospital Design & Build Expo | 24 – 27 February 2025"],
      ar: ["من مشاركة شركة خالد الفقيه للاستشارات الهندسية في معرض تصميم وبناء المستشفيات السعودي - فبراير"]
    },
    date: "2025-02-24",
    place: { en: "Saudi Hospital Design & Build Expo", ar: "معرض تصميم وبناء المستشفيات السعودي" },
    image: "https://kfoco.com/wp-content/uploads/2025/03/admin-ajax-8.jpeg",
    gallery: []
  },
  {
    slug: "principles-of-hospital-design",
    title: { en: "Exhibition of College of Architecture – KSU", ar: "معرض كلية الهندسة المعمارية – جامعة الملك سعود" },
    excerpt: { en: "This event was organized by KFO in cooperation with the Directorate of Health Affairs in Riyadh and Omran Society. It started with the speech of Dr. Abdul Aziz Al Dosari, Chairman of the Saudi Society for Architect Sciences.", ar: "وقد نظمت هذه الفعالية منظمة KFO بالتعاون مع مديرية الشؤون الصحية بالرياض وجمعية عمران. بدأت بكلمة الدكتور عبد العزيز الدوسري رئيس الجمعية السعودية للعلوم المعمارية." },
    body: {
      en: ["This event was organized by KFO in cooperation with the Directorate of Health Affairs in Riyadh and Omran Society. It started with the speech of Dr. Abdul Aziz Al Dosari, Chairman of the Saudi Society for Architect Sciences.", "The first Topic in the workshop (principles and foundations of hospital design) was presented by Eng. Khaled Al-Nasser, Deputy Director of the Health Buildings Division at Omran Society.", "The second Topic of the workshop was a lecture titled (principles and foundations of hospital design) presented by Eng. Khaled Al Faqih, G.M. of KFO."],
      ar: ["وقد نظمت هذه الفعالية منظمة KFO بالتعاون مع مديرية الشؤون الصحية بالرياض وجمعية عمران. بدأت بكلمة الدكتور عبد العزيز الدوسري رئيس الجمعية السعودية للعلوم المعمارية.", "وكان الموضوع الأول في الورشة (مبادئ وأسس تصميم المستشفيات) قدمه م. خالد الناصر نائب مدير قسم المباني الصحية بجمعية عمران.", "أما الموضوع الثاني للورشة فكان محاضرة بعنوان (مبادئ وأسس تصميم المستشفيات) قدمها المهندس خالد الفقيه، مدير عام. من مطار كيه إف أو."]
    },
    date: "2023-09-30",
    place: { en: "Directorate of Health Affairs, Riyadh", ar: "مديرية الشؤون الصحية بالرياض" },
    image: assets.pageHeaders.events,
    gallery: []
  },
  {
    slug: "symposium-on-modern-trends-in-hospital-construction",
    title: { en: "Symposium on Modern Trends in Hospital Construction", ar: "ندوة الاتجاهات الحديثة في بناء المستشفيات" },
    excerpt: { en: "A symposium on modern trends in hospital construction is a seminar organized by Umm Al-Qura University, represented by the Faculty of Engineering and Islamic Architecture in cooperation with the Omran Society", ar: "ندوة الاتجاهات الحديثة في بناء المستشفيات هي ندوة تنظمها جامعة أم القرى ممثلة بكلية الهندسة والعمارة الإسلامية بالتعاون مع جمعية العمران" },
    body: {
      en: ["A symposium on modern trends in hospital construction is a seminar organized by Umm Al-Qura University, represented by the Faculty of Engineering and Islamic Architecture in cooperation with the Omran Society", "On Sunday, February 17, 2019", "Dr. Ziad Al-Suwaidan participated in this symposium with a speech entitled “Introduction to Hospital Design”", "Eng. Khaled Al Faqih, General Manager of Khaled Al Faqih Engineering Consulting Office, also participated in a speech entitled “Foundations of Hospital Design”"],
      ar: ["ندوة الاتجاهات الحديثة في بناء المستشفيات هي ندوة تنظمها جامعة أم القرى ممثلة بكلية الهندسة والعمارة الإسلامية بالتعاون مع جمعية العمران", "يوم الأحد الموافق 17 فبراير 2019م", "وقد شارك الدكتور زياد السويدان في هذه الندوة بكلمة بعنوان “مقدمة في تصميم المستشفيات”", "م. كما شارك خالد الفقيه مدير عام مكتب خالد الفقيه للاستشارات الهندسية بكلمة بعنوان “أسس تصميم المستشفيات”"]
    },
    date: "2019-02-17",
    place: { en: "Umm Al-Qura University", ar: "جامعة أم القرى" },
    image: assets.pageHeaders.events,
    gallery: []
  }
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
