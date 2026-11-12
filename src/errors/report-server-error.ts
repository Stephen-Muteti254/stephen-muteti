import { isNotFound, isRedirect } from '@tanstack/react-router';

export function reportServerError(error: unknown) {
	if (isRedirect(error) || isNotFound(error)) {
		return;
	}

	console.error(error);
}
