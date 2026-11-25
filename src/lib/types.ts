export type L = { en: string; ar: string };

export interface Category { slug: string; title: L; caption: L; image: string; emphasis?: boolean }
export interface Project {
  slug: string; title: L; category: string; location: L; year: L; client: L; area: L; services: L;
  status: L; excerpt: L; body: { en: string[]; ar: string[] }; images: string[]; featured: boolean;
}
export interface Client { id: string; src: string; name: string }
export interface TeamMember {
  name: string; role: string; experience?: string; certificate?: string; projects?: string[];
  bio?: string[]; previous?: string[]; email: string;
}
export interface Article {
  slug: string; title: L; category: L; excerpt: L; date: string; readTime: L; type: 'article' | 'download';
}
export interface EventPost {
  slug: string; title: L; excerpt: L; body: { en: string[]; ar: string[] }; date: string; place: L;
  image: string; gallery: string[];
}
export interface Service { id: string; number: string; title: L; description: L }
export type ProcessStep = Service;
export interface Stat { id: string; value: number; suffix: L; label: L; isOrdinal?: boolean }
export interface Milestone { year: string; title: L; text: L }
export interface Qualification { id: string; image: string; title: L }
export type SocialId = 'youtube' | 'twitter' | 'linkedin' | 'instagram' | 'pinterest';

export interface Site {
  name: L; shortName: L; phone: string; phoneHref: string; whatsapp: string; whatsappHref: string;
  email: string; emailHref: string; address: L; city: L;
  socials: { id: SocialId; label: string; href: string }[];
}
export interface Assets {
  logo: string; companyProfilePdf: string;
  hero: { slide1: string; slide2: string; slide3: string };
  about: { main: string }; cta: { background: string }; map: { placeholder: string };
  pageHeaders: Record<'about' | 'services' | 'projects' | 'clients' | 'knowledge' | 'events' | 'contact', string>;
}

/** Small content needed by client components (kept light on purpose). */
export interface SharedContent {
  site: Site; assets: Assets; categories: Category[]; qualifications: Qualification[];
  stats: Stat[]; services: Service[]; processSteps: ProcessStep[]; timeline: Milestone[];
  clientsRowA: Client[]; clientsRowB: Client[];
}
export interface Content extends SharedContent {
  projects: Project[]; clients: Client[]; team: TeamMember[]; articles: Article[]; events: EventPost[];
  serviceList: Service[]; knowledgeVideos: string[];
  messages: { en: Record<string, unknown>; ar: Record<string, unknown> };
}
