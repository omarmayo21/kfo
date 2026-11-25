/**
 * Services — the 4 service lines from the live site.
 * TODO: expand descriptions with the client's official scope of services.
 */
export interface Service {
  id: string;
  number: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

export const services: Service[] = [
  {
    id: 'planning',
    number: '01',
    title: { en: 'Planning', ar: 'التخطيط' },
    description: {
      en: 'Feasibility studies, master planning and functional briefs that translate the client vision into a clear, buildable framework.',
      ar: 'دراسات الجدوى والتخطيط العام والبرامج الوظيفية التي تحوّل رؤية العميل إلى إطار عملي واضح قابل للتنفيذ.'
    }
  },
  {
    id: 'expert-engineers',
    number: '02',
    title: { en: 'Expert Engineers', ar: 'المهندسون الخبراء' },
    description: {
      en: 'A multidisciplinary team of senior engineers with deep healthcare and building expertise, working as one integrated unit.',
      ar: 'فريق متعدد التخصصات من المهندسين ذوي الخبرة العميقة في المرافق الصحية والمباني، يعمل كوحدة متكاملة.'
    }
  },
  {
    id: 'renovation',
    number: '03',
    title: { en: 'Renovation', ar: 'التجديد والتطوير' },
    description: {
      en: 'Expansion, rehabilitation and modernization of existing facilities — planned to keep operations running and value growing.',
      ar: 'التوسعة والتأهيل وتحديث المرافق القائمة — بتخطيط يحافظ على استمرارية التشغيل ويضيف قيمة للمستثمر.'
    }
  },
  {
    id: 'designing-supervision',
    number: '04',
    title: { en: 'Designing & Supervision', ar: 'التصميم والإشراف' },
    description: {
      en: 'Architecture and engineering design, execution supervision and project management — from first sketch to handover.',
      ar: 'التصميم المعماري والهندسي، والإشراف على التنفيذ، وإدارة المشاريع — من الرسم الأول حتى التسليم.'
    }
  }
];

/** The 8 services listed on the old site's Services page (EN + AR). */
export const serviceList: Service[] = [
  {
    id: "engineering-consultancy",
    number: '01',
    title: { en: "Engineering Consultancy", ar: "الاستشارات الهندسية" },
    description: {
      en: "Independent technical advice and feasibility studies that guide sound project decisions.",
      ar: "استشارات فنية مستقلة ودراسات جدوى تدعم اتخاذ قرارات المشروع."
    }
  },
  {
    id: "construction-supervision",
    number: '02',
    title: { en: "Construction Supervision", ar: "الإشراف على التنفيذ" },
    description: {
      en: "On-site supervision that keeps the works aligned with approved designs, quality and schedule.",
      ar: "إشراف ميداني يضمن مطابقة الأعمال للتصاميم المعتمدة والجودة والجدول الزمني."
    }
  },
  {
    id: "design-services",
    number: '03',
    title: { en: "Design Services", ar: "خدمات التصميم" },
    description: {
      en: "Integrated multidisciplinary design, from concept through tender and construction documents.",
      ar: "تصميم متكامل متعدد التخصصات من المفهوم حتى مستندات الطرح والتنفيذ."
    }
  },
  {
    id: "project-management",
    number: '04',
    title: { en: "Project Management", ar: "إدارة المشروع" },
    description: {
      en: "Planning, cost and schedule control, and coordination from inception to handover.",
      ar: "تخطيط ومتابعة للتكلفة والجدول الزمني وتنسيق شامل حتى التسليم."
    }
  },
  {
    id: "architectural-design",
    number: '05',
    title: { en: "Architectural Design", ar: "التصميم المعماري" },
    description: {
      en: "Functional, code-compliant architecture tailored to healthcare and other facilities.",
      ar: "تصاميم معمارية وظيفية مطابقة للاشتراطات للمنشآت الصحية وغيرها."
    }
  },
  {
    id: "medical-planning",
    number: '06',
    title: { en: "Medical Planning", ar: "تخطيط الرعاية الصحية" },
    description: {
      en: "Space programming and clinical workflow planning for efficient healthcare facilities.",
      ar: "برمجة المساحات وتخطيط المسارات السريرية لمنشآت صحية أعلى كفاءة."
    }
  },
  {
    id: "interior-design",
    number: '07',
    title: { en: "Interior Design", ar: "التصميم الداخلي" },
    description: {
      en: "Practical, healing interiors for healthcare environments, including finishes and furniture.",
      ar: "تصميم داخلي عملي يدعم بيئة العلاج ويشمل التشطيبات والأثاث."
    }
  },
  {
    id: "repurposing-renovation",
    number: '08',
    title: { en: "Repurposing & Renovation", ar: "التجديد وإعادة الاستخدام" },
    description: {
      en: "Upgrading and converting existing buildings to new uses with minimal disruption.",
      ar: "تطوير المباني القائمة وتحويل استخدامها بأقل تعطيل ممكن."
    }
  }
];

/** Process steps for the Services page */
export interface ProcessStep {
  id: string;
  number: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

export const processSteps: ProcessStep[] = [
  {
    id: 'plan',
    number: '01',
    title: { en: 'Planning', ar: 'التخطيط' },
    description: {
      en: 'Understanding requirements, studying the site and defining the functional program.',
      ar: 'فهم المتطلبات، ودراسة الموقع، وتحديد البرنامج الوظيفي.'
    }
  },
  {
    id: 'design',
    number: '02',
    title: { en: 'Design', ar: 'التصميم' },
    description: {
      en: 'Concept through detailed design, coordinated across all engineering disciplines.',
      ar: 'من الفكرة إلى التصميم التفصيلي، بتنسيق كامل بين التخصصات الهندسية.'
    }
  },
  {
    id: 'supervision',
    number: '03',
    title: { en: 'Supervision', ar: 'الإشراف' },
    description: {
      en: 'Execution supervision that protects design quality on site, step by step.',
      ar: 'إشراف على التنفيذ يحافظ على جودة التصميم في الموقع، خطوة بخطوة.'
    }
  },
  {
    id: 'handover',
    number: '04',
    title: { en: 'Handover', ar: 'التسليم' },
    description: {
      en: 'Closing out documentation and delivering a project ready for operation.',
      ar: 'استكمال الوثائق وتسليم مشروع جاهز للتشغيل.'
    }
  }
];
