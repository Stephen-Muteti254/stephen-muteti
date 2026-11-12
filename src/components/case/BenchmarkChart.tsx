import { useState } from 'react';

import { BENCHMARK } from '@/data/cases';

function formatMs(v: number) {
  if (v >= 1000) return `${(v / 1000).toFixed(2)} s`;
  if (v >= 100) return `${Math.round(v)} ms`;
  return `${v.toFixed(v < 10 ? 2 : 1)} ms`;
}

export function BenchmarkChart() {
  const [sizeIndex, setSizeIndex] = useState(3);
  const values = BENCHMARK.rows.map((r) => r.values[sizeIndex] ?? 0);
  const max = Math.max(...values);
  const min = Math.min(...values);
  // Log scale keeps the fast strategies readable next to the trie.
  const logMax = Math.log10(max * 1.2);
  const logMin = Math.log10(min / 2);
  const width = (v: number) => (Math.log10(v) - logMin) / (logMax - logMin) * 100;

  return (
    <figure data-ev-id="ev_4d28f0d713" className="flex flex-col gap-6 rounded-xl border border-border bg-surface p-5 sm:p-8">
			<div data-ev-id="ev_07520bca2d" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div data-ev-id="ev_62b5059c0a" className="flex flex-col gap-1">
					<p data-ev-id="ev_adbea8bc1f" className="font-semibold">Average query time by strategy</p>
					<p data-ev-id="ev_dae9c93bf0" className="text-sm text-muted-foreground">File re-read on every query · log scale · lower is better</p>
				</div>
				<div data-ev-id="ev_2f63e653ac" className="flex gap-1 rounded-md border border-border bg-background p-1" role="group" aria-label="File size">
					{BENCHMARK.sizes.map((s, i) =>
          <button data-ev-id="ev_187ed4f17c"
          key={s}
          type="button"
          onClick={() => setSizeIndex(i)}
          aria-pressed={sizeIndex === i}
          className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
          sizeIndex === i ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
          }>
            
							{s} lines
						</button>
          )}
				</div>
			</div>

			<ul data-ev-id="ev_e36a7afcd7" className="flex flex-col gap-3">
				{BENCHMARK.rows.map((r, i) => {
          const v = r.values[sizeIndex] ?? 0;
          const best = i === 0;
          return (
            <li data-ev-id="ev_787d03fe02" key={r.name} className="grid grid-cols-[7.5rem_1fr] items-center gap-3 sm:grid-cols-[9rem_1fr]">
							<span data-ev-id="ev_c0f2adce93" className={`text-sm ${best ? 'font-semibold text-primary' : 'text-muted-foreground'}`}>{r.name}</span>
							<div data-ev-id="ev_8aa162dacf" className="flex items-center gap-3">
								<div data-ev-id="ev_4321572024" className="h-7 flex-1 overflow-hidden rounded bg-background">
									<div data-ev-id="ev_0b18deee83"
                  className={`h-full rounded transition-[width] duration-500 ${best ? 'bg-primary' : 'bg-accent/40'}`}
                  style={{ width: `${Math.max(width(v), 2)}%` }} />
                  
								</div>
								<span data-ev-id="ev_9f3a90004b" className="w-16 text-right font-mono text-xs tabular-nums sm:w-20 sm:text-sm">{formatMs(v)}</span>
							</div>
						</li>);

        })}
			</ul>

			<figcaption data-ev-id="ev_648c54f767" className="text-sm leading-relaxed text-muted-foreground">
				At {BENCHMARK.sizes[sizeIndex]} lines, memory-mapped search is{' '}
				<span data-ev-id="ev_e4bbb3401d" className="font-semibold text-foreground">
					{((BENCHMARK.rows[2]?.values[sizeIndex] ?? 0) / (BENCHMARK.rows[0]?.values[sizeIndex] ?? 1)).toFixed(1)}×
				</span>{' '}
				faster than a line-by-line scan, with no extra memory. Data from the project’s benchmark harness.
			</figcaption>
		</figure>);

}