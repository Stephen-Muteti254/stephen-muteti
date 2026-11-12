import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Check } from 'lucide-react';

import { SectionHeading } from '@/components/SectionHeading';
import { getCase } from '@/data/cases';
import { EXPERIENCE } from '@/data/profile';

export function Experience() {
  return (
    <section data-ev-id="ev_342595b94c" id="experience" className="scroll-mt-20 border-b border-border bg-surface/40">
			<div data-ev-id="ev_f5927ea2d9" className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 sm:px-8 lg:py-28">
				<SectionHeading
          label="Experience"
          title="Four years across fintech, security and high-performance systems"
          description="Roles where I owned architecture, not just tickets." />
        

				<ol data-ev-id="ev_a9b0be26bd" className="flex flex-col">
					{EXPERIENCE.map((job, i) =>
          <li data-ev-id="ev_a3d440f14a"
          key={job.company}
          className={`grid gap-6 py-10 lg:grid-cols-[16rem_1fr] lg:gap-12 ${i > 0 ? 'border-t border-border' : 'pt-0'}`}>
            
							<div data-ev-id="ev_5509df3f75" className="flex flex-col gap-1.5 lg:sticky lg:top-24 lg:self-start">
								<p data-ev-id="ev_3f267fa12d" className="text-2xl font-semibold tracking-tight">{job.company}</p>
								<p data-ev-id="ev_822c2ed521" className="text-sm text-primary">{job.period}</p>
								<p data-ev-id="ev_abf5e7d6d5" className="text-sm text-muted-foreground">{job.location}</p>
							</div>

							<div data-ev-id="ev_b1c1b1993f" className="flex flex-col gap-5">
								<div data-ev-id="ev_276649e383" className="flex flex-col gap-2">
									<h3 data-ev-id="ev_3bc50bc15f" className="text-xl font-semibold">{job.role}</h3>
									<p data-ev-id="ev_0f9811448d" className="leading-relaxed text-muted-foreground text-pretty">{job.summary}</p>
								</div>

								<ul data-ev-id="ev_e9ec01c320" className="flex flex-col gap-3">
									{job.bullets.map((b) =>
                <li data-ev-id="ev_c09c9a09ef" key={b} className="flex gap-3 text-[0.95rem] leading-relaxed text-foreground/90">
											<Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
											<span data-ev-id="ev_03096e2125" className="text-pretty">{b}</span>
										</li>
                )}
								</ul>

								<ul data-ev-id="ev_2aea5c845d" className="flex flex-wrap gap-2" aria-label="Technologies">
									{job.stack.map((s) =>
                <li data-ev-id="ev_de5ffea599" key={s} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
											{s}
										</li>
                )}
								</ul>

								<div data-ev-id="ev_2f64bb1a78" className="flex flex-wrap gap-3 pt-1">
									{job.cases.map((slug) => {
                  const c = getCase(slug);
                  if (!c) return null;
                  return (
                    <Link data-ev-id="ev_1658b98b00"
                    key={slug}
                    to="/work/$slug"
                    params={{ slug }}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline">
                      
												{c.title} case study
												<ArrowUpRight className="size-3.5" aria-hidden="true" />
											</Link>);

                })}
								</div>
							</div>
						</li>
          )}
				</ol>
			</div>
		</section>);

}