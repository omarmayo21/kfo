'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';
import { projectId, dataset } from './src/sanity/env';

const singletons = ['siteSettings'];

export default defineConfig({
  name: 'kfoco-dashboard',
  title: 'KFOCO dashboard',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('KFOCO content')
          .items([
            S.listItem()
              .title('Site settings & contact info')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            ...S.documentTypeListItems().filter((i) => !singletons.includes(i.getId() as string))
          ])
    })
  ],
  schema: {
    types: schemaTypes,
    templates: (t) => t.filter((x) => !singletons.includes(x.schemaType))
  },
  document: {
    actions: (prev, ctx) =>
      singletons.includes(ctx.schemaType)
        ? prev.filter((a) => a.action !== 'delete' && a.action !== 'duplicate')
        : prev
  }
});
