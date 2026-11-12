import type { ErrorInfo } from 'react';

const MAX_REPORTED_ERRORS = 50;
const PLATFORM_RUNTIME_ERROR_EVENT = 'platform:runtime-error';
const PLATFORM_RUNTIME_ERRORS_KEY = '__PLATFORM_RUNTIME_ERRORS__';

interface ReportedRuntimeError {
	error: unknown;
	componentStack: string | null;
}

type SandboxWindow = Window & {
	[PLATFORM_RUNTIME_ERRORS_KEY]?: unknown;
};

export function reportRuntimeError(error: unknown, errorInfo: ErrorInfo) {
	if (!import.meta.env.DEV) {
		return;
	}

	if (typeof window === 'undefined') {
		return;
	}

	const sandboxWindow = window as SandboxWindow;

	const queuedErrors = sandboxWindow[PLATFORM_RUNTIME_ERRORS_KEY];
	const reportedErrors: unknown[] = Array.isArray(queuedErrors) ? queuedErrors : [];
	const reportedError: ReportedRuntimeError = {
		error,
		componentStack: errorInfo.componentStack ?? null,
	};

	reportedErrors.push(reportedError);

	sandboxWindow[PLATFORM_RUNTIME_ERRORS_KEY] = reportedErrors.slice(-MAX_REPORTED_ERRORS);

	window.dispatchEvent(new Event(PLATFORM_RUNTIME_ERROR_EVENT));
}
