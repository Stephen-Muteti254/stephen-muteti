import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';

import { SectionHeading } from '@/components/SectionHeading';
import { CASES, type CaseStudy } from '@/data/cases';

export function SelectedWork() {
  const [first, second, ...rest] = CASES as [CaseStudy, CaseStudy, ...CaseStudy[]];

  return (
    <section data-ev-id="ev_3d3cfc875f" id="work" className="scroll-mt-20 border-b border-border">
			<div data-ev-id="ev_531c58a04c" className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 sm:px-8 lg:py-28">
				<SectionHeading
          label="Selected work"
          title="Products and systems I’ve architected"
          description="Each case study covers the problem, what I built, how it’s put together and the result." />
        
				<div data-ev-id="ev_8e571a26b1" className="grid gap-6 md:grid-cols-2">
					<WorkCard item={first} large />
					<WorkCard item={second} large />
				</div>
				<div data-ev-id="ev_30311ff72f" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{rest.map((c) =>
          <WorkCard key={c.slug} item={c} />
          )}
				</div>
			</div>
		</section>);

}

function WorkCard({ item, large = false }: {item: CaseStudy;large?: boolean;}) {
  return (
    <Link data-ev-id="ev_89556ae5c7"
    to="/work/$slug"
    params={{ slug: item.slug }}
    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/50">
      
			<div data-ev-id="ev_8f6ae9563d" className={`relative overflow-hidden ${large ? 'aspect-[16/9]' : 'aspect-[3/2]'}`}>
				<img data-ev-id="ev_67abcdb73e"
        src={item.image}
        alt={item.imageAlt}
        width={1536}
        height={1024}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        
				<div data-ev-id="ev_b8da9e3caf" className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
				<span data-ev-id="ev_7b84fc805d" className="absolute top-4 left-4 rounded-md bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur">
					{item.category}
				</span>
			</div>
			<div data-ev-id="ev_2af5f06624" className="flex flex-1 flex-col gap-4 p-6">
				<div data-ev-id="ev_30a606bdd7" className="flex items-start justify-between gap-4">
					<div data-ev-id="ev_3d1b531489" className="flex flex-col gap-1">
						<p data-ev-id="ev_32d3256a05" className="text-xs text-muted-foreground">
							{item.company} · {item.period}
						</p>
						<h3 data-ev-id="ev_a2e43f3ec3" className={`font-semibold tracking-tight ${large ? 'text-2xl' : 'text-xl'}`}>{item.title}</h3>
					</div>
					<span data-ev-id="ev_2a87ebbaec" className="grid size-9 shrink-0 place-items-center rounded-md border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
						<ArrowUpRight className="size-4" aria-hidden="true" />
					</span>
				</div>
				<p data-ev-id="ev_3d3d3fa0c9" className="text-sm leading-relaxed text-muted-foreground text-pretty">{item.tagline}</p>
				<dl data-ev-id="ev_e9af335b20" className="mt-auto grid grid-cols-3 gap-3 border-t border-border pt-4">
					{item.metrics.map((m) =>
          <div data-ev-id="ev_4822f52006" key={m.label} className="flex flex-col gap-0.5">
							<dd data-ev-id="ev_854ba7f24e" className="text-lg font-semibold text-foreground">{m.value}</dd>
							<dt data-ev-id="ev_fb92a9fdcd" className="text-xs leading-snug text-muted-foreground">{m.label}</dt>
						</div>
          )}
				</dl>
			</div>
		</Link>);

}