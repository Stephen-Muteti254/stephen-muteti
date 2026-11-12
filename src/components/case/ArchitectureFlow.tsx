import { ArrowDown, ArrowRight } from 'lucide-react';
import { Fragment } from 'react';

interface ArchitectureFlowProps {
  caption: string;
  nodes: {name: string;detail: string;}[];
}

export function ArchitectureFlow({ caption, nodes }: ArchitectureFlowProps) {
  return (
    <figure data-ev-id="ev_805032eb37" className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-5 sm:p-8">
			<div data-ev-id="ev_a7cdcc89b6" className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
				{nodes.map((n, i) =>
        <Fragment key={n.name}>
						<div data-ev-id="ev_b8e7171c14"
          className={`flex flex-1 flex-col gap-1.5 rounded-lg border p-4 ${
          i === 0 || i === nodes.length - 1 ? 'border-border bg-background' : 'border-primary/30 bg-primary/5'}`
          }>
            
							<p data-ev-id="ev_14a7e40374" className="text-sm font-semibold">{n.name}</p>
							<p data-ev-id="ev_bbb0a1cdd8" className="text-xs leading-relaxed text-muted-foreground">{n.detail}</p>
						</div>
						{i < nodes.length - 1 ?
          <div data-ev-id="ev_385f738bf4" className="flex justify-center text-primary" aria-hidden="true">
								<ArrowDown className="size-4 lg:hidden" />
								<ArrowRight className="hidden size-4 lg:block" />
							</div> :
          null}
					</Fragment>
        )}
			</div>
			<figcaption data-ev-id="ev_ba30df4cc8" className="text-sm text-muted-foreground">{caption}</figcaption>
		</figure>);

}