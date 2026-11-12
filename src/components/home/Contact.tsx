import { ArrowUpRight, Download, Mail, Phone } from 'lucide-react';

import { GithubIcon, LeetcodeIcon, LinkedinIcon } from '@/components/icons';
import { PROFILE } from '@/data/profile';

const CHANNELS = [
{ label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, Icon: Mail },
{ label: 'Phone', value: PROFILE.phone, href: PROFILE.phoneHref, Icon: Phone },
{ label: 'LinkedIn', value: 'in/stephen-muteti', href: PROFILE.linkedin, Icon: LinkedinIcon },
{ label: 'GitHub', value: 'Stephen-Muteti', href: PROFILE.github, Icon: GithubIcon },
{ label: 'LeetCode', value: 'Stephen_Muteti', href: PROFILE.leetcode, Icon: LeetcodeIcon }];


export function Contact() {
  return (
    <section data-ev-id="ev_ad4320763b" id="contact" className="scroll-mt-20">
			<div data-ev-id="ev_2ae407ad09" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
				<div data-ev-id="ev_88529d03a8" className="grid gap-10 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-surface to-surface p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
					<div data-ev-id="ev_5b599a86da" className="flex flex-col gap-5">
						<p data-ev-id="ev_0e113b078b" className="text-sm font-medium text-primary">Contact</p>
						<h2 data-ev-id="ev_cfba353e99" className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
							Hiring for backend, platform or fintech infrastructure?
						</h2>
						<p data-ev-id="ev_e8386db251" className="max-w-lg leading-relaxed text-muted-foreground text-pretty">
							I’m open to senior and lead roles, remote or on-site. Send a note and I’ll reply within a day.
						</p>
						<div data-ev-id="ev_431c8938ab" className="flex flex-wrap gap-3 pt-2">
							<a data-ev-id="ev_a06905177e"
              href={`mailto:${PROFILE.email}?subject=Role%20opportunity`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                
								<Mail className="size-4" aria-hidden="true" />
								Email me
							</a>
							<a data-ev-id="ev_6ca609faab"
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary">
                
								<Download className="size-4" aria-hidden="true" />
								Résumé (PDF)
							</a>
						</div>
					</div>

					<ul data-ev-id="ev_494ef26e69" className="flex flex-col divide-y divide-border rounded-xl border border-border bg-background/60">
						{CHANNELS.map(({ label, value, href, Icon }) => {
              const external = href.startsWith('http');
              return (
                <li data-ev-id="ev_a9f94becf9" key={label}>
									<a data-ev-id="ev_ba39975b4c"
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-secondary/60">
                    
										<Icon className="size-4 text-muted-foreground group-hover:text-primary" />
										<span data-ev-id="ev_ac41cfa98b" className="flex min-w-0 flex-1 flex-col">
											<span data-ev-id="ev_7c80bf1463" className="text-xs text-muted-foreground">{label}</span>
											<span data-ev-id="ev_564fc39919" className="truncate text-sm font-medium">{value}</span>
										</span>
										<ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
									</a>
								</li>);

            })}
					</ul>
				</div>
			</div>
		</section>);

}