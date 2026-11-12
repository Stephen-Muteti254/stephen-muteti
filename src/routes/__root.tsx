import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';

import { getAppHead, HTML_DIR, HTML_LANG } from '@/config/app-head';
// CSS is linked as a stylesheet URL so it's in <head> on first SSR paint.
// @tailwindcss/vite processes it at build/dev time; the URL is stable across HMR.
import indexCss from '@/index.css?url';
import { AppProviders } from '@/providers/AppProviders';

export const Route = createRootRoute({
	head: () => {
		const appHead = getAppHead();

		return {
			...appHead,
			links: [...appHead.links, { rel: 'stylesheet', href: indexCss }],
		};
	},
	shellComponent: RootDocument,
	component: RootComponent,
});

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang={HTML_LANG} dir={HTML_DIR}>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}

function RootComponent() {
	return (
		<AppProviders>
			{/* Child pages render here; without <Outlet /> no route below the root is shown. */}
			<Outlet />
		</AppProviders>
	);
}
