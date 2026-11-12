import { Link } from '@tanstack/react-router';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

import { PROFILE } from '@/data/profile';

const NAV = [
{ label: 'Work', hash: 'work' },
{ label: 'Experience', hash: 'experience' },
{ label: 'Skills', hash: 'skills' },
{ label: 'About', hash: 'about' },
{ label: 'Contact', hash: 'contact' }];


export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header data-ev-id="ev_af7c597e44" className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
			<div data-ev-id="ev_397809ea36" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
				<Link data-ev-id="ev_a3cda0d8c5" to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
					<span data-ev-id="ev_0ca6ac7eca" className="grid size-8 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
						SM
					</span>
					<span data-ev-id="ev_4484c779db" className="text-sm font-semibold tracking-tight">{PROFILE.name}</span>
				</Link>

				<nav data-ev-id="ev_f45e2418cd" className="hidden items-center gap-1 md:flex" aria-label="Main">
					{NAV.map((item) =>
          <Link data-ev-id="ev_b34c1179d3"
          key={item.hash}
          to="/"
          hash={item.hash}
          className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            
							{item.label}
						</Link>
          )}
				</nav>

				<div data-ev-id="ev_080fad40b5" className="flex items-center gap-2">
					<a data-ev-id="ev_f082ccb7a5"
          href={PROFILE.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary sm:inline-flex">
            
						<Download className="size-4" aria-hidden="true" />
						Résumé
					</a>
					<button data-ev-id="ev_9a861f8691"
          type="button"
          className="grid size-10 place-items-center rounded-md border border-border md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}>
            
						{open ? <X className="size-5" /> : <Menu className="size-5" />}
					</button>
				</div>
			</div>

			{open ?
      <nav data-ev-id="ev_8f5374a3fd" className="border-t border-border bg-background md:hidden" aria-label="Mobile">
					<div data-ev-id="ev_38ec74aa36" className="mx-auto flex max-w-6xl flex-col px-5 py-3">
						{NAV.map((item) =>
          <Link data-ev-id="ev_8aa45a456d"
          key={item.hash}
          to="/"
          hash={item.hash}
          onClick={() => setOpen(false)}
          className="rounded-md px-2 py-3 text-base text-muted-foreground hover:text-foreground">
            
								{item.label}
							</Link>
          )}
						<a data-ev-id="ev_df1f8dcbbc"
          href={PROFILE.resume}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
            
							<Download className="size-4" aria-hidden="true" />
							Download résumé
						</a>
					</div>
				</nav> :
      null}
		</header>);

}