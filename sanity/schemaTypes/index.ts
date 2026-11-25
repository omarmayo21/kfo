import { defineField, defineType } from 'sanity';

/* ---------- reusable objects ---------- */
export const localizedString = defineType({
  name: 'localizedString',
  title: 'Text (EN / AR)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'string' }),
    defineField({ name: 'ar', title: 'العربية', type: 'string' })
  ]
});

export const localizedText = defineType({
  name: 'localizedText',
  title: 'Long text (EN / AR)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'text', rows: 4 }),
    defineField({ name: 'ar', title: 'العربية', type: 'text', rows: 4 })
  ]
});

export const localizedParagraphs = defineType({
  name: 'localizedParagraphs',
  title: 'Paragraphs / lines (EN / AR)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'array', of: [{ type: 'text', rows: 3 }] }),
    defineField({ name: 'ar', title: 'العربية', type: 'array', of: [{ type: 'text', rows: 3 }] })
  ]
});

const loc = (name: string, title: string, type = 'localizedString') =>
  defineField({ name, title, type });
const slug = defineField({
  name: 'slug',
  title: 'URL slug',
  type: 'slug',
  options: { source: 'title.en', maxLength: 120 },
  validation: (r) => r.required()
});
const order = defineField({
  name: 'order',
  title: 'Order (lower = first)',
  type: 'number'
});
const img = (name: string, title: string) =>
  defineField({ name, title, type: 'image', options: { hotspot: true } });

/* ---------- documents ---------- */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings & contact info',
  type: 'document',
  fields: [
    loc('name', 'Company name'),
    loc('shortName', 'Short name'),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp number', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    loc('address', 'Address'),
    loc('city', 'City'),
    defineField({
      name: 'socials',
      title: 'Social links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'Network',
              type: 'string',
              options: { list: ['youtube', 'twitter', 'linkedin', 'instagram', 'pinterest'] }
            }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'URL', type: 'url' })
          ],
          preview: { select: { title: 'label', subtitle: 'href' } }
        }
      ]
    }),
    img('logo', 'Logo (dark, for light backgrounds)'),
    defineField({ name: 'companyProfilePdf', title: 'Company profile PDF', type: 'file' }),
    defineField({
      name: 'heroSlides',
      title: 'Home hero slides',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    img('aboutImage', 'Home "About" image'),
    img('ctaBackground', 'Call-to-action banner background'),
    img('mapImage', 'Contact page map image'),
    defineField({
      name: 'pageHeaders',
      title: 'Page header images',
      type: 'object',
      fields: ['about', 'services', 'projects', 'clients', 'knowledge', 'events', 'contact'].map(
        (k) => img(k, k)
      )
    })
  ],
  preview: { prepare: () => ({ title: 'Site settings & contact info' }) }
});

export const category = defineType({
  name: 'category',
  title: 'Project category',
  type: 'document',
  fields: [
    slug,
    loc('title', 'Title'),
    loc('caption', 'Caption'),
    img('image', 'Tile image'),
    defineField({ name: 'emphasis', title: 'Large tile', type: 'boolean' }),
    order
  ],
  orderings: [{ title: 'Order', name: 'o', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title.en', subtitle: 'title.ar', media: 'image' } }
});

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    slug,
    loc('title', 'Title'),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (r) => r.required()
    }),
    loc('location', 'Location'),
    loc('year', 'Year'),
    loc('client', 'Client'),
    loc('area', 'Area'),
    loc('services', 'Scope of work'),
    loc('status', 'Status / capacity'),
    loc('excerpt', 'Short summary'),
    defineField({ name: 'body', title: 'Details (lines)', type: 'localizedParagraphs' }),
    defineField({
      name: 'images',
      title: 'Gallery images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({ name: 'featured', title: 'Featured on home', type: 'boolean' }),
    order
  ],
  preview: { select: { title: 'title.en', subtitle: 'title.ar', media: 'images.0' } }
});

const simpleItem = (name: string, title: string, extra: any[] = []) =>
  defineType({
    name,
    title,
    type: 'document',
    fields: [
      defineField({ name: 'itemId', title: 'ID', type: 'string' }),
      defineField({ name: 'number', title: 'Number', type: 'string' }),
      loc('title', 'Title'),
      loc('description', 'Description', 'localizedText'),
      ...extra,
      order
    ],
    preview: { select: { title: 'title.en', subtitle: 'title.ar' } }
  });

export const service = simpleItem('service', 'Service (Services page)');
export const homeService = simpleItem('homeService', 'Service (Home page)');
export const processStep = simpleItem('processStep', 'Process step');

export const event = defineType({
  name: 'event',
  title: 'Event / News',
  type: 'document',
  fields: [
    slug,
    loc('title', 'Title'),
    loc('excerpt', 'Summary', 'localizedText'),
    defineField({ name: 'body', title: 'Body (paragraphs)', type: 'localizedParagraphs' }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    loc('place', 'Place'),
    img('image', 'Main image'),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    })
  ],
  orderings: [{ title: 'Date', name: 'd', by: [{ field: 'date', direction: 'desc' }] }],
  preview: { select: { title: 'title.en', subtitle: 'date', media: 'image' } }
});

export const article = defineType({
  name: 'article',
  title: 'Knowledge Center article / download',
  type: 'document',
  fields: [
    slug,
    loc('title', 'Title'),
    loc('category', 'Category'),
    loc('excerpt', 'Summary', 'localizedText'),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    loc('readTime', 'Read time'),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['article', 'download'] }
    })
  ],
  preview: { select: { title: 'title.en', subtitle: 'title.ar' } }
});

export const knowledgeVideo = defineType({
  name: 'knowledgeVideo',
  title: 'Knowledge Center video title',
  type: 'document',
  fields: [defineField({ name: 'title', title: 'Title', type: 'string' }), order],
  preview: { select: { title: 'title' } }
});

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'experience', title: 'Experience', type: 'string' }),
    defineField({ name: 'certificate', title: 'Certificate', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio paragraphs', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'projects', title: 'Projects', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'previous', title: 'Previous experience', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    order
  ],
  preview: { select: { title: 'name', subtitle: 'role' } }
});

export const client = defineType({
  name: 'client',
  title: 'Client logo',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Client name (alt text)', type: 'string' }),
    img('logo', 'Logo'),
    order
  ],
  preview: { select: { title: 'name', media: 'logo' } }
});

export const qualification = defineType({
  name: 'qualification',
  title: 'Qualification / certificate',
  type: 'document',
  fields: [loc('title', 'Title'), img('image', 'Image'), order],
  preview: { select: { title: 'title.en', media: 'image' } }
});

export const stat = defineType({
  name: 'stat',
  title: 'Statistic',
  type: 'document',
  fields: [
    defineField({ name: 'itemId', title: 'ID', type: 'string' }),
    defineField({ name: 'value', title: 'Number', type: 'number' }),
    loc('suffix', 'Suffix (e.g. +)'),
    loc('label', 'Label'),
    defineField({ name: 'isOrdinal', title: 'Is ordinal (2nd)', type: 'boolean' }),
    order
  ],
  preview: { select: { title: 'label.en', subtitle: 'value' } }
});

export const milestone = defineType({
  name: 'milestone',
  title: 'Timeline milestone (About page)',
  type: 'document',
  fields: [
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    loc('title', 'Title'),
    loc('text', 'Text', 'localizedText'),
    order
  ],
  preview: { select: { title: 'year', subtitle: 'title.en' } }
});

export const uiTextGroup = defineType({
  name: 'uiTextGroup',
  title: 'Page text group (headings, labels, buttons, SEO)',
  type: 'document',
  fields: [
    defineField({ name: 'group', title: 'Group key', type: 'string', readOnly: true }),
    defineField({
      name: 'items',
      title: 'Texts',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'uiText',
          fields: [
            defineField({ name: 'key', title: 'Key (do not change)', type: 'string', readOnly: true }),
            defineField({ name: 'en', title: 'English', type: 'text', rows: 2 }),
            defineField({ name: 'ar', title: 'العربية', type: 'text', rows: 2 })
          ],
          preview: { select: { title: 'key', subtitle: 'en' } }
        }
      ]
    })
  ],
  preview: { select: { title: 'group' } }
});

export const schemaTypes = [
  localizedString,
  localizedText,
  localizedParagraphs,
  siteSettings,
  category,
  project,
  service,
  homeService,
  processStep,
  event,
  article,
  knowledgeVideo,
  teamMember,
  client,
  qualification,
  stat,
  milestone,
  uiTextGroup
];
