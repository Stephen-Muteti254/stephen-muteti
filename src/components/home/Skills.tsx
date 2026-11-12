import { Boxes, Cloud, Code2, Cpu, Database, ShieldCheck } from 'lucide-react';

import { SectionHeading } from '@/components/SectionHeading';
import { SKILLS } from '@/data/profile';

const ICONS = [Code2, Boxes, Cpu, Database, ShieldCheck, Cloud];

export function Skills() {
  return (
    <section data-ev-id="ev_c9d6b4fef8" id="skills" className="scroll-mt-20 border-b border-border">
			<div data-ev-id="ev_af6c9bcafe" className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-20 sm:px-8 lg:py-28">
				<SectionHeading
          label="Toolkit"
          title="What I reach for, and have run in production"
          description="Grouped by the problems they solve rather than a wall of logos." />
        
				<div data-ev-id="ev_c52bd37461" className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
					{SKILLS.map((g, i) => {
            const Icon = ICONS[i % ICONS.length] ?? Code2;
            return (
              <div data-ev-id="ev_c2d57e1002" key={g.group} className="flex flex-col gap-5 bg-background p-6">
								<div data-ev-id="ev_dc2b69d8c3" className="flex items-center gap-3">
									<span data-ev-id="ev_fe58c06113" className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary">
										<Icon className="size-4" aria-hidden="true" />
									</span>
									<h3 data-ev-id="ev_1d115584a1" className="font-semibold">{g.group}</h3>
								</div>
								<ul data-ev-id="ev_4e646814dd" className="flex flex-wrap gap-2">
									{g.items.map((s) =>
                  <li data-ev-id="ev_6396bab933" key={s} className="rounded-md bg-secondary px-2.5 py-1 text-sm text-foreground/85">
											{s}
										</li>
                  )}
								</ul>
							</div>);

          })}
				</div>
			</div>
		</section>);

}