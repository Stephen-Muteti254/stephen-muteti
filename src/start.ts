import { reportServerError } from '@/errors/report-server-error';
import { createCsrfMiddleware, createMiddleware, createStart } from '@tanstack/react-start';

const csrfMiddleware = createCsrfMiddleware({
	filter: (context) => context.handlerType === 'serverFn',
});

// TanStack serializes server-function errors before they reach the outer server entry.
// Forward the original error to the shared reporter, then preserve the response behavior.
const logServerFunctionErrors = createMiddleware({ type: 'function' }).server(async ({ next }) => {
	try {
		return await next();
	} catch (error) {
		reportServerError(error);

		throw error;
	}
});

export const startInstance = createStart(() => ({
	functionMiddleware: [logServerFunctionErrors],
	requestMiddleware: [csrfMiddleware],
}));
