interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div data-ev-id="ev_e78b83108b" className="flex max-w-2xl flex-col gap-3">
			<p data-ev-id="ev_8165ddcba9" className="flex items-center gap-2 text-sm font-medium text-primary">
				<span data-ev-id="ev_fdf7c1a877" className="h-px w-6 bg-primary" aria-hidden="true" />
				{label}
			</p>
			<h2 data-ev-id="ev_a4d259f16e" className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
			{description ? <p data-ev-id="ev_91010cf60b" className="text-base leading-relaxed text-muted-foreground text-pretty">{description}</p> : null}
		</div>);

}