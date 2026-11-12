import type { AnyRouteMatch } from '@tanstack/react-router';

// Rendered by `__root.tsx` as the lang and dir attributes of <html>.
export const HTML_LANG = 'en';
export const HTML_DIR: 'ltr' | 'rtl' = 'ltr';

// Typed with the router's head entries so literals such as `crossOrigin: 'anonymous'` are not widened to `string`.
interface AppHead {
	meta: NonNullable<AnyRouteMatch['meta']>;
	links: NonNullable<AnyRouteMatch['links']>;
}

export const SITE_URL = 'https://stephen.itnest.org';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const TITLE = 'Stephen Muteti — Software Engineer | Backend & Systems Engineer, Nairobi';
const DESCRIPTION =
	'Stephen Muteti is a software engineer in Nairobi, Kenya specialising in backend, fintech, distributed and real-time systems: M-Pesa 2.0 at Huawei, ScholarDesk, AuditDesk and AssessDesk at ITNest.';

export function getAppHead(): AppHead {
	return {
		meta: [
			{ charSet: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'theme-color', content: '#0a0b0d' },
			{ title: TITLE },
			{ name: 'description', content: DESCRIPTION },
			{ name: 'author', content: 'Stephen Muteti' },
			{ property: 'og:title', content: TITLE },
			{ property: 'og:description', content: DESCRIPTION },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:site_name', content: 'Stephen Muteti — Software Engineer' },
			{ property: 'og:locale', content: 'en_KE' },
			{ name: 'robots', content: 'index, follow, max-image-preview:large' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:title', content: TITLE },
			{ name: 'twitter:description', content: DESCRIPTION },
		],
		links: [
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon.png' },
			{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap',
			},
		],
	};
}
