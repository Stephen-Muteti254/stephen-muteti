import { Mail } from 'lucide-react';

import { GithubIcon, LeetcodeIcon, LinkedinIcon } from '@/components/icons';
import { PROFILE } from '@/data/profile';

export function SiteFooter() {
  return (
    <footer data-ev-id="ev_fb9b3781bd" className="border-t border-border">
			<div data-ev-id="ev_1031ae81ee" className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
				<div data-ev-id="ev_79a1115493" className="flex flex-col gap-1">
					<p data-ev-id="ev_e228cb5452" className="text-sm font-semibold">{PROFILE.name}</p>
					<p data-ev-id="ev_5b461b4ebc" className="text-sm text-muted-foreground">
						{PROFILE.title} · {PROFILE.location}
					</p>
				</div>
				<div data-ev-id="ev_4d992269d1" className="flex items-center gap-2">
					<SocialLink href={`mailto:${PROFILE.email}`} label="Email">
						<Mail className="size-4" />
					</SocialLink>
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
		</footer>);

}

export function SocialLink({ href, label, children }: {href: string;label: string;children: React.ReactNode;}) {
  const external = href.startsWith('http');
  return (
    <a data-ev-id="ev_2cb4f2352e"
    href={href}
    aria-label={label}
    title={label}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
    className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary">
      
			{children}
		</a>);

}