import { Quote } from 'lucide-react';

import { SectionHeading } from '@/components/SectionHeading';
import { TESTIMONIALS } from '@/data/profile';

export function Testimonials() {
  return (
    <section data-ev-id="ev_071443b9d4" className="border-b border-border">
			<div data-ev-id="ev_27e9027774" className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 sm:px-8 lg:py-28">
				<SectionHeading label="References" title="What the people I’ve built with say" />
				<div data-ev-id="ev_1cdad3d304" className="grid gap-6 lg:grid-cols-3">
					{TESTIMONIALS.map((t) =>
          <figure data-ev-id="ev_2d8b1dce42" key={t.name} className="flex flex-col gap-6 rounded-xl border border-border bg-surface p-6">
							<Quote className="size-6 text-primary" aria-hidden="true" />
							<blockquote data-ev-id="ev_40defd475a" className="flex-1 leading-relaxed text-foreground/90 text-pretty">{t.quote}</blockquote>
							<figcaption data-ev-id="ev_2f901cdbe5" className="flex items-center gap-3 border-t border-border pt-5">
								<span data-ev-id="ev_37684dfd3b" className="grid size-10 place-items-center rounded-md bg-secondary text-sm font-semibold">
									{t.name.
                split(' ').
                map((n) => n[0]).
                join('')}
								</span>
								<span data-ev-id="ev_94b5eec3bf" className="flex flex-col">
									<span data-ev-id="ev_304d14a7ac" className="text-sm font-semibold">{t.name}</span>
									<span data-ev-id="ev_f468bc5254" className="text-xs text-muted-foreground">{t.role}</span>
								</span>
							</figcaption>
						</figure>
          )}
				</div>
			</div>
		</section>);

}