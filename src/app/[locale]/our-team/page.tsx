import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import { getContent } from '@/lib/content';

/**
 * Our Team — ported from the old site's (unlinked) /our-team page.
 * Not in the main navigation, same as on the old site. English only, as on the old site.
 */
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildMetadata({
    locale,
    title: 'Our Team',
    description: 'Meet the KFO team of engineers and managers.',
    path: '/our-team'
  });
}

export default async function OurTeamPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const { assets, team } = await getContent();
  return (
    <>
      <PageHeader image={assets.pageHeaders.about} label="OUR TEAM" title="Our Team" crumbs={[{ label: 'Our Team' }]} />
      <section className="bg-white py-20">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3" dir="ltr">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.08}>
              <article className="h-full border border-ink/10 bg-offwhite p-7">
                <h2 className="font-display text-xl font-medium text-ink">{m.name}</h2>
                <p className="mt-1 text-sm text-steel-shade">{m.role}</p>
                <dl className="mt-4 space-y-1 text-sm text-textc-muted">
                  {m.certificate && <div>Certificate: {m.certificate}</div>}
                  {m.experience && <div>Experience: {m.experience}</div>}
                </dl>
                {m.bio?.map((p) => (
                  <p key={p} className="mt-3 text-sm leading-relaxed text-textc-muted">{p}</p>
                ))}
                {m.projects && (
                  <>
                    <p className="mt-4 text-[11px] uppercase tracking-wider text-textc-muted">Projects</p>
                    <ul className="mt-2 list-disc space-y-1 ps-5 text-sm text-textc-muted">
                      {m.projects.map((p) => (<li key={p}>{p}</li>))}
                    </ul>
                  </>
                )}
                {m.previous && (
                  <>
                    <p className="mt-4 text-[11px] uppercase tracking-wider text-textc-muted">Previous experience</p>
                    <ul className="mt-2 list-disc space-y-1 ps-5 text-sm text-textc-muted">
                      {m.previous.map((p) => (<li key={p}>{p}</li>))}
                    </ul>
                  </>
                )}
                <a href={`mailto:${m.email}`} className="mt-4 inline-block text-sm text-ink hover:text-steel-shade">{m.email}</a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
