import { ArrowUpRight, Award, GraduationCap } from 'lucide-react';

import { SectionHeading } from '@/components/SectionHeading';
import { HONORS, OTHER_BUILDS } from '@/data/profile';

const PRINCIPLES = [
{ title: 'Design for the failure case', body: 'Multi-AZ, idempotent webhooks, graceful shutdown. Systems should degrade, not fall over.' },
{ title: 'Make it observable', body: 'If it isn’t logged, traced and alertable, it isn’t done. MTTR is a product metric.' },
{ title: 'Measure, then optimize', body: 'Benchmarks over hunches: I picked mmap search after testing seven strategies.' },
{ title: 'Security is a default', body: 'Role-scoped access, mTLS, audit trails and least privilege from the first commit.' }];


export function About() {
  return (
    <section data-ev-id="ev_a77aef4c74" id="about" className="scroll-mt-20 border-b border-border bg-surface/40">
			<div data-ev-id="ev_9c643a7649" className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-20 sm:px-8 lg:py-28">
				<div data-ev-id="ev_6b246beca3" className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
					<div data-ev-id="ev_6ea67083fc" className="flex flex-col gap-6">
						<SectionHeading label="About" title="An engineer who thinks like a product owner" />
						<div data-ev-id="ev_ed164299e2" className="flex flex-col gap-4 leading-relaxed text-muted-foreground text-pretty">
							<p data-ev-id="ev_ec0e4dc863">
								I’m a backend and systems engineer based in Nairobi. I design secure, scalable platforms for fintech,
								mobile money and regulated industries, and I care just as much about why a system exists as how it’s
								built.
							</p>
							<p data-ev-id="ev_3406b0fe5d">
								At ITNest I don’t just write services. I shape how ScholarDesk holds money until customers approve, how
								AuditDesk turns raw logs into evidence a regulator will accept, and how AssessDesk answers a question in a
								few seconds. Before that I worked on M-Pesa 2.0 at Huawei and squeezed latency out of search systems at
								Algorithmic Sciences.
							</p>
						</div>
					</div>

					<ul data-ev-id="ev_caa6a7edf7" className="grid gap-4 sm:grid-cols-2">
						{PRINCIPLES.map((p) =>
            <li data-ev-id="ev_a56684d1ee" key={p.title} className="flex flex-col gap-2 rounded-xl border border-border bg-background p-5">
								<h3 data-ev-id="ev_ba4b2a7fcf" className="font-semibold">{p.title}</h3>
								<p data-ev-id="ev_4b90ec2d77" className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
							</li>
            )}
					</ul>
				</div>

				<div data-ev-id="ev_e3a22b8ca2" className="grid gap-6 lg:grid-cols-3">
					<div data-ev-id="ev_95008d0c42" className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6">
						<div data-ev-id="ev_6cd88a2ba4" className="flex items-center gap-3">
							<GraduationCap className="size-5 text-primary" aria-hidden="true" />
							<h3 data-ev-id="ev_328ab2bd7f" className="font-semibold">Education</h3>
						</div>
						<div data-ev-id="ev_3d692a7735" className="flex flex-col gap-1">
							<p data-ev-id="ev_9296160e83" className="font-medium">B.Eng, Software Engineering</p>
							<p data-ev-id="ev_080b3f6c3a" className="text-sm text-muted-foreground">Moi University · 2019 — 2023</p>
						</div>
						<p data-ev-id="ev_e57cad84b4" className="text-sm leading-relaxed text-muted-foreground">
							Data structures & algorithms, operating systems, database design & administration, Java OOP, probability &
							statistics, engineering mathematics, project management.
						</p>
					</div>

					<div data-ev-id="ev_322f8d91b0" className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6">
						<div data-ev-id="ev_03466c6a92" className="flex items-center gap-3">
							<Award className="size-5 text-primary" aria-hidden="true" />
							<h3 data-ev-id="ev_26bf93ae18" className="font-semibold">Honors & certifications</h3>
						</div>
						<ul data-ev-id="ev_f30cb0d853" className="flex flex-col gap-3">
							{HONORS.map((h) =>
              <li data-ev-id="ev_6028b39857" key={h.title} className="flex items-start justify-between gap-4 text-sm">
									<span data-ev-id="ev_9d17bade2f" className="text-foreground/90">{h.title}</span>
									<span data-ev-id="ev_52eba64fe7" className="shrink-0 text-muted-foreground">{h.year}</span>
								</li>
              )}
						</ul>
					</div>

					<div data-ev-id="ev_790ebc093f" className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6">
						<h3 data-ev-id="ev_a6eccebf86" className="font-semibold">Earlier builds</h3>
						<ul data-ev-id="ev_02ed7c7180" className="flex flex-col gap-4">
							{OTHER_BUILDS.map((b) =>
              <li data-ev-id="ev_78e93579ff" key={b.title} className="flex flex-col gap-1">
									{b.href ?
                <a data-ev-id="ev_d7f9d00ae1"
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-1 text-sm font-medium hover:text-primary">
                  
											{b.title}
											<ArrowUpRight className="size-3.5" aria-hidden="true" />
										</a> :

                <span data-ev-id="ev_33838c017f" className="text-sm font-medium">{b.title}</span>
                }
									<p data-ev-id="ev_e2089bcbbe" className="text-xs leading-relaxed text-muted-foreground">{b.description}</p>
								</li>
              )}
						</ul>
					</div>
				</div>
			</div>
		</section>);

}