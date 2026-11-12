import { DefaultErrorPage } from '@/components/DefaultErrorPage';
import { DefaultNotFoundPage } from '@/components/DefaultNotFoundPage';
import { reportRuntimeError } from '@/errors/report-runtime-error';
import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export function getRouter() {
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: DefaultErrorPage,
		defaultNotFoundComponent: DefaultNotFoundPage,
		defaultOnCatch: reportRuntimeError,
	});

	return router;
}

declare module '@tanstack/react-router' {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
