import { Link } from '@tanstack/react-router';
import { ArrowRight, Download, MapPin } from 'lucide-react';

import datacenterImg from '@/assets/generated/datacenter.webp';
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from '@/components/icons';
import { SocialLink } from '@/components/SiteFooter';
import { IMPACT, PROFILE } from '@/data/profile';

const FACTS = [
{ label: 'Now', value: 'Backend Software Engineer, ITNest' },
{ label: 'Before', value: 'Huawei (M-Pesa 2.0) · Algorithmic Sciences' },
{ label: 'Focus', value: 'Distributed systems, fintech, observability' },
{ label: 'Core stack', value: 'Python, C++, PostgreSQL, Kafka, AWS' }];


export function Hero() {
  return (
    <section data-ev-id="ev_ee4d92a115" className="relative overflow-hidden border-b border-border">
			<div data-ev-id="ev_2d027788bd" className="pointer-events-none absolute inset-0" aria-hidden="true">
				<img data-ev-id="ev_3725e23ff6"
        src={datacenterImg}
        alt=""
        width={1792}
        height={1024}
        className="h-full w-full object-cover opacity-35"
        fetchPriority="high" />
        
				<div data-ev-id="ev_99c56a97f2" className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
				<div data-ev-id="ev_125ec9d531" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
			</div>

			<div data-ev-id="ev_89ce8a82d7" className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-14 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:pt-24 lg:pb-20">
				<div data-ev-id="ev_3ffb6aae5c" className="flex flex-col gap-7">
					<p data-ev-id="ev_c9b744dd90" className="inline-flex w-fit items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm text-primary">
						<span data-ev-id="ev_d806b8ee94" className="relative flex size-2">
							<span data-ev-id="ev_902d0f2cbd" className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
							<span data-ev-id="ev_4f95e666f4" className="relative inline-flex size-2 rounded-full bg-primary" />
						</span>
						Open to senior backend & platform roles
					</p>

					<div data-ev-id="ev_8113635bd7" className="flex flex-col gap-4">
						<p data-ev-id="ev_105644b7ae" className="text-lg font-medium text-muted-foreground">
							{PROFILE.name} — {PROFILE.title}
						</p>
						<h1 data-ev-id="ev_accfcd7daf" className="text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
							I build the backend systems that <span data-ev-id="ev_1a734b466d" className="text-primary">payments, compliance</span> and real-time
							products run on.
						</h1>
						<p data-ev-id="ev_9def72793b" className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
							From mobile-money architecture for M-Pesa 2.0 at Huawei, to low-latency search at Algorithmic Sciences, to
							three production platforms I architect and run at ITNest: ScholarDesk, AuditDesk and AssessDesk.
						</p>
					</div>

					<div data-ev-id="ev_aa90237fb4" className="flex flex-wrap items-center gap-3">
						<Link data-ev-id="ev_635bdb50cf"
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              
							See selected work
							<ArrowRight className="size-4" aria-hidden="true" />
						</Link>
						<a data-ev-id="ev_6d072d05f4"
            href={PROFILE.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary">
              
							<Download className="size-4" aria-hidden="true" />
							Download résumé
						</a>
						<div data-ev-id="ev_16035aff6c" className="flex items-center gap-2">
							<SocialLink href={PROFILE.github} label="GitHub">
								<GithubIcon />
							</SocialLink>
							<SocialLink href={PROFILE.linkedin} label="LinkedIn">
								<LinkedinIcon />
							</SocialLink>
							<SocialLink href={PROFILE.leetcode} label="LeetCode">
								<LeetcodeIcon />
							</SocialLink>
						</div>
					</div>
				</div>

				<aside data-ev-id="ev_2d4d0114a5" className="rounded-xl border border-border bg-surface/80 p-6 backdrop-blur-sm">
					<div data-ev-id="ev_be7971cef3" className="flex items-center justify-between border-b border-border pb-4">
						<p data-ev-id="ev_ccb758ac53" className="text-sm font-semibold">At a glance</p>
						<p data-ev-id="ev_95faa66d78" className="flex items-center gap-1.5 text-xs text-muted-foreground">
							<MapPin className="size-3.5" aria-hidden="true" />
							{PROFILE.location}
						</p>
					</div>
					<dl data-ev-id="ev_593c30b4fe" className="flex flex-col divide-y divide-border">
						{FACTS.map((f) =>
            <div data-ev-id="ev_6fb0654409" key={f.label} className="grid grid-cols-[6rem_1fr] gap-3 py-3.5">
								<dt data-ev-id="ev_1b54abfdbc" className="text-sm text-muted-foreground">{f.label}</dt>
								<dd data-ev-id="ev_a3b9f922f5" className="text-sm font-medium">{f.value}</dd>
							</div>
            )}
					</dl>
					<p data-ev-id="ev_aef10a0364" className="mt-2 rounded-md bg-secondary/70 px-3 py-2.5 text-xs leading-relaxed text-muted-foreground">
						B.Eng Software Engineering, Moi University · Excellence Award, Fintech System Architecture (2026)
					</p>
				</aside>
			</div>

			<div data-ev-id="ev_30b137b486" className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8">
				<dl data-ev-id="ev_81ed6a45e4" className="grid grid-cols-2 overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
					{IMPACT.map((m) =>
          <div data-ev-id="ev_ccc1038269" key={m.label} className="flex flex-col gap-1.5 bg-surface p-5 sm:p-6">
							<dt data-ev-id="ev_d6962cc98d" className="order-2 text-sm font-medium">{m.label}</dt>
							<dd data-ev-id="ev_29e1555a50" className="order-1 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{m.value}</dd>
							<p data-ev-id="ev_61789ad6a2" className="order-3 text-xs leading-relaxed text-muted-foreground">{m.context}</p>
						</div>
          )}
				</dl>
				<div data-ev-id="ev_e05e597520" className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
					<span data-ev-id="ev_a3c2ce16a9">Shipped at</span>
					{['Huawei', 'Safaricom M-Pesa 2.0', 'Algorithmic Sciences', 'ITNest'].map((c) =>
          <span data-ev-id="ev_58627e436d" key={c} className="text-base font-semibold tracking-tight text-foreground/80">
							{c}
						</span>
          )}
				</div>
			</div>
		</section>);

}