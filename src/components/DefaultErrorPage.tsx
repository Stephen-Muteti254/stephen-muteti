import { Link, useRouter } from '@tanstack/react-router';

/**
 * Default fallback for route failures that do not provide their own error component.
 * Keep visitor-facing content generic and never render raw internal error details.
 */
export function DefaultErrorPage() {
	const router = useRouter();

	const recoverPage = () => {
		void router.invalidate();
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h1 className="text-4xl font-bold">This page is temporarily unavailable</h1>
			<p className="text-muted-foreground">Try loading the page again or return to the homepage.</p>
			<div className="flex items-center gap-4">
				<button className="underline" type="button" onClick={recoverPage}>
					Try again
				</button>
				<Link to="/" className="underline">
					Return home
				</Link>
			</div>
		</div>
	);
}
