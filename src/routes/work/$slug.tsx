import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Info } from 'lucide-react';

import { ArchitectureFlow } from '@/components/case/ArchitectureFlow';
import { BenchmarkChart } from '@/components/case/BenchmarkChart';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { SITE_URL } from '@/config/app-head';
import { CASES, getCase } from '@/data/cases';

export const Route = createFileRoute('/work/$slug')({
  loader: ({ params }) => {
    const item = getCase(params.slug);
    if (!item) throw notFound();
    return { slug: item.slug };
  },
  head: ({ loaderData }) => {
    const item = loaderData ? getCase(loaderData.slug) : undefined;
    if (!item) return { meta: [{ title: 'Case study unavailable — Stephen Muteti' }, { name: 'robots', content: 'noindex' }] };
    const title = `${item.title} case study — Stephen Muteti, Software Engineer`;
    const url = `${SITE_URL}/work/${item.slug}`;
    return {
      meta: [
      { title: title.length > 60 ? `${item.title} — Stephen Muteti` : title },
      { name: 'description', content: item.tagline },
      { property: 'og:title', content: title },
      { property: 'og:description', content: item.tagline },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: item.tagline }],

      links: [{ rel: 'canonical', href: url }],
      scripts: [{
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${item.title} — ${item.tagline}`,
          url,
          author: { '@type': 'Person', name: 'Stephen Muteti', url: SITE_URL, jobTitle: 'Software Engineer' },
          about: item.category
        })
      }, {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Stephen Muteti', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: item.title, item: url }]

        })
      }]
    };
  },
  component: CaseStudyPage
});

function CaseStudyPage() {
  const { slug } = Route.useLoaderData();
  const item = getCase(slug)!;
  const index = CASES.findIndex((c) => c.slug === slug);
  const next = CASES[(index + 1) % CASES.length] ?? CASES[0]!;

  return (
    <div data-ev-id="ev_ba371941d2" className="min-h-screen bg-background font-sans text-foreground antialiased">
			<SiteHeader />
			<main data-ev-id="ev_4d5fd3ec38">
				<section data-ev-id="ev_6d077a527a" className="border-b border-border">
					<div data-ev-id="ev_ffffc553db" className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pt-10 pb-14 sm:px-8 lg:pt-14">
						<Link data-ev-id="ev_17d9cdeb6d"
            to="/"
            hash="work"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              
							<ArrowLeft className="size-4" aria-hidden="true" />
							All work
						</Link>

						<div data-ev-id="ev_98c5bb9a4b" className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
							<div data-ev-id="ev_4e92d37f3a" className="flex flex-col gap-5">
								<p data-ev-id="ev_8a5569496f" className="text-sm font-medium text-primary">{item.category}</p>
								<h1 data-ev-id="ev_700bbfc548" className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{item.title}</h1>
								<p data-ev-id="ev_390cc2eb94" className="text-xl leading-relaxed text-foreground/85 text-pretty">{item.tagline}</p>
							</div>
							<dl data-ev-id="ev_bd53e84969" className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-xl border border-border bg-surface p-5">
								<Meta label="Company" value={item.company} />
								<Meta label="Timeline" value={item.period} />
								<div data-ev-id="ev_ac91232dbc" className="col-span-2">
									<Meta label="My role" value={item.role} />
								</div>
								{item.links?.length ?
                <div data-ev-id="ev_6bac45e05c" className="col-span-2 flex flex-wrap gap-3 border-t border-border pt-4">
										{item.links.map((l) =>
                  <a data-ev-id="ev_1d56326ea3"
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                    
												{l.label}
												<ArrowUpRight className="size-3.5" aria-hidden="true" />
											</a>
                  )}
									</div> :
                null}
							</dl>
						</div>

						<div data-ev-id="ev_f80d25ede4" className="overflow-hidden rounded-xl border border-border">
							<img data-ev-id="ev_ed39f4bc56"
              src={item.image}
              alt={item.imageAlt}
              width={1536}
              height={1024}
              className="aspect-[21/9] w-full object-cover"
              fetchPriority="high" />
              
						</div>

						<dl data-ev-id="ev_aedeeaf1a4" className="grid grid-cols-3 overflow-hidden rounded-xl border border-border bg-border">
							{item.metrics.map((m) =>
              <div data-ev-id="ev_cf9061ea89" key={m.label} className="flex flex-col gap-1 bg-surface p-4 sm:p-6">
									<dt data-ev-id="ev_cc0ac0577c" className="order-2 text-xs text-muted-foreground sm:text-sm">{m.label}</dt>
									<dd data-ev-id="ev_88efc8d89a" className="order-1 text-2xl font-semibold tracking-tight text-primary sm:text-4xl">{m.value}</dd>
								</div>
              )}
						</dl>
					</div>
				</section>

				<div data-ev-id="ev_67eec132d9" className="mx-auto flex max-w-6xl flex-col gap-20 px-5 py-16 sm:px-8 lg:py-24">
					<section data-ev-id="ev_4704bd32d5" className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-12">
						<h2 data-ev-id="ev_8dea0f0374" className="text-sm font-semibold text-muted-foreground">Overview</h2>
						<div data-ev-id="ev_4a6372a50c" className="flex flex-col gap-8">
							<p data-ev-id="ev_c21f3001b6" className="text-lg leading-relaxed text-pretty">{item.summary}</p>
							<div data-ev-id="ev_38be988066" className="grid gap-6 md:grid-cols-2">
								<div data-ev-id="ev_e1a903da7f" className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-6">
									<h3 data-ev-id="ev_870c324879" className="font-semibold">Context</h3>
									<p data-ev-id="ev_30af99576f" className="text-sm leading-relaxed text-muted-foreground text-pretty">{item.context}</p>
								</div>
								<div data-ev-id="ev_3eda38f721" className="flex flex-col gap-2 rounded-xl border border-primary/30 bg-primary/5 p-6">
									<h3 data-ev-id="ev_cf7cbeb6a7" className="font-semibold">The engineering challenge</h3>
									<p data-ev-id="ev_725a94749c" className="text-sm leading-relaxed text-muted-foreground text-pretty">{item.challenge}</p>
								</div>
							</div>
						</div>
					</section>

					<section data-ev-id="ev_0a91d7bab4" className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-12">
						<h2 data-ev-id="ev_1156f0ab86" className="text-sm font-semibold text-muted-foreground">What I built</h2>
						<ul data-ev-id="ev_9120407252" className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
							{item.contributions.map((c) =>
              <li data-ev-id="ev_0253384b08" key={c.title} className="flex flex-col gap-2 bg-background p-6">
									<h3 data-ev-id="ev_0df65dd408" className="font-semibold">{c.title}</h3>
									<p data-ev-id="ev_a798277884" className="text-sm leading-relaxed text-muted-foreground text-pretty">{c.body}</p>
								</li>
              )}
						</ul>
					</section>

					<section data-ev-id="ev_c8587480c0" className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-12">
						<h2 data-ev-id="ev_2f4b007cda" className="text-sm font-semibold text-muted-foreground">Architecture</h2>
						<div data-ev-id="ev_28f4e787ef" className="flex flex-col gap-6">
							<ArchitectureFlow caption={item.architecture.caption} nodes={item.architecture.nodes} />
							{item.benchmark ? <BenchmarkChart /> : null}
						</div>
					</section>

					<section data-ev-id="ev_fc2bb8f78a" className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-12">
						<h2 data-ev-id="ev_5581040e63" className="text-sm font-semibold text-muted-foreground">Outcomes</h2>
						<div data-ev-id="ev_6118a1f48f" className="flex flex-col gap-8">
							<ul data-ev-id="ev_da65ec837b" className="flex flex-col gap-3">
								{item.outcomes.map((o) =>
                <li data-ev-id="ev_74c2fc7acf" key={o} className="flex gap-3 text-lg leading-relaxed">
										<Check className="mt-1.5 size-5 shrink-0 text-primary" aria-hidden="true" />
										<span data-ev-id="ev_68bff346cb" className="text-pretty">{o}</span>
									</li>
                )}
							</ul>
							<div data-ev-id="ev_243d2a4aea" className="flex flex-col gap-3">
								<h3 data-ev-id="ev_df3c7854f7" className="text-sm font-semibold text-muted-foreground">Stack</h3>
								<ul data-ev-id="ev_eb5e17d88f" className="flex flex-wrap gap-2">
									{item.stack.map((s) =>
                  <li data-ev-id="ev_f1a3b80440" key={s} className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm">
											{s}
										</li>
                  )}
								</ul>
							</div>
							{item.note ?
              <p data-ev-id="ev_0bd342ccf0" className="flex items-start gap-2 text-sm text-muted-foreground">
									<Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
									{item.note}
								</p> :
              null}
						</div>
					</section>

					<Link data-ev-id="ev_86bd15da02"
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/50 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            
						<div data-ev-id="ev_22d7a968bf" className="flex flex-col gap-1">
							<span data-ev-id="ev_c55635a631" className="text-sm text-muted-foreground">Next case study</span>
							<span data-ev-id="ev_510b2015b9" className="text-2xl font-semibold tracking-tight">{next.title}</span>
							<span data-ev-id="ev_a1804d6c7a" className="text-sm text-muted-foreground">{next.tagline}</span>
						</div>
						<span data-ev-id="ev_4388fcd99a" className="grid size-12 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
							<ArrowRight className="size-5" aria-hidden="true" />
						</span>
					</Link>
				</div>
			</main>
			<SiteFooter />
		</div>);

}

function Meta({ label, value }: {label: string;value: string;}) {
  return (
    <div data-ev-id="ev_392995d389" className="flex flex-col gap-1">
			<dt data-ev-id="ev_bdf8eb210c" className="text-xs text-muted-foreground">{label}</dt>
			<dd data-ev-id="ev_ef932ecd28" className="text-sm font-medium">{value}</dd>
		</div>);

}