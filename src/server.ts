import { renderUnavailablePage } from '@/errors/render-unavailable-page';
import handler, { createServerEntry } from '@tanstack/react-start/server-entry';

export default createServerEntry({
	async fetch(request): Promise<Response> {
		try {
			const response = await handler.fetch(request);
			return replaceUnhandledDocumentError(request, response);
		} catch (error) {
			if (!isDocumentRequest(request)) {
				throw error;
			}

			console.error(error);

			return createUnavailablePageResponse();
		}
	},
});

function replaceUnhandledDocumentError(request: Request, response: Response): Response {
	if (!isDocumentRequest(request) || response.status < 500 || !response.headers.get('content-type')?.includes('application/json')) {
		return response;
	}

	console.error(new Error('The document request returned an unhandled JSON error'));

	return createUnavailablePageResponse();
}

function isDocumentRequest(request: Request): boolean {
	return request.headers.get('sec-fetch-dest') === 'document' || request.headers.get('accept')?.includes('text/html') === true;
}

function createUnavailablePageResponse(): Response {
	return new Response(renderUnavailablePage(), {
		status: 500,
		headers: {
			'cache-control': 'no-store',
			'content-type': 'text/html; charset=utf-8',
		},
	});
}
