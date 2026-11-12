import { Link } from '@tanstack/react-router';

/**
 * Default fallback for URLs that do not match a route or provide their own not-found component.
 */
export function DefaultNotFoundPage() {
  return (
    <div data-ev-id="ev_3a29346ab3" className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center font-sans text-foreground">
			<p data-ev-id="ev_cddafd5a1d" className="text-sm font-medium text-primary">404</p>
			<h1 data-ev-id="ev_0bfac4fc1d" className="text-4xl font-semibold tracking-tight">Page not found</h1>
			<p data-ev-id="ev_054352d7b6" className="text-muted-foreground">This page doesn’t exist or has moved.</p>
			<Link data-ev-id="ev_7510ca1044"
      to="/"
      className="mt-2 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
        
				Back to portfolio
			</Link>
		</div>);

}