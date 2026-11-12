import { createFileRoute } from '@tanstack/react-router';

import { About } from '@/components/home/About';
import { Contact } from '@/components/home/Contact';
import { Experience } from '@/components/home/Experience';
import { Hero } from '@/components/home/Hero';
import { SelectedWork } from '@/components/home/SelectedWork';
import { Skills } from '@/components/home/Skills';
import { Testimonials } from '@/components/home/Testimonials';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { OG_IMAGE, SITE_URL } from '@/config/app-head';
import { PROFILE } from '@/data/profile';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: PROFILE.name,
  url: SITE_URL,
  image: OG_IMAGE,
  description:
  'Software engineer specialising in backend, fintech, distributed systems and real-time platforms.',
  knowsAbout: ['Software Engineering', 'Backend Engineering', 'Systems Engineering', 'Distributed Systems', 'Fintech', 'Mobile Money', 'Python', 'Flask', 'PostgreSQL', 'Apache Kafka', 'AWS', 'Observability', 'Cloud Architecture'],
  hasOccupation: { '@type': 'Occupation', name: 'Software Engineer', occupationLocation: { '@type': 'City', name: 'Nairobi' } },
  jobTitle: PROFILE.title,
  email: `mailto:${PROFILE.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
  alumniOf: 'Moi University',
  worksFor: { '@type': 'Organization', name: 'ITNest' },
  sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.leetcode]
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: SITE_URL,
  name: 'Stephen Muteti — Software Engineer Portfolio',
  mainEntity: { '@id': `${SITE_URL}/#person` }
};

const TITLE = 'Stephen Muteti — Software Engineer | Backend & Systems Engineer, Nairobi';
const DESCRIPTION =
'Hire Stephen Muteti, a software engineer in Nairobi, Kenya: backend, fintech and distributed systems behind M-Pesa 2.0 at Huawei, ScholarDesk, AuditDesk and AssessDesk.';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
    { title: TITLE },
    { name: 'description', content: DESCRIPTION },
    { name: 'keywords', content: 'software engineer, software engineer Kenya, software engineer Nairobi, backend engineer, systems engineer, fintech engineer, Python engineer, distributed systems, hire software engineer, Stephen Muteti' },
    { property: 'og:title', content: TITLE },
    { property: 'og:description', content: DESCRIPTION },
    { property: 'og:type', content: 'profile' },
    { property: 'og:url', content: `${SITE_URL}/` },
    { property: 'og:image', content: OG_IMAGE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:title', content: TITLE },
    { name: 'twitter:description', content: DESCRIPTION },
    { name: 'twitter:image', content: OG_IMAGE }],

    links: [{ rel: 'canonical', href: `${SITE_URL}/` }],
    scripts: [
    { type: 'application/ld+json', children: JSON.stringify(personJsonLd) },
    { type: 'application/ld+json', children: JSON.stringify(websiteJsonLd) }]
  }),
  component: Index
});

function Index() {
  return (
    <div data-ev-id="ev_5f172e6caa" className="min-h-screen bg-background font-sans text-foreground antialiased">
			<SiteHeader />
			<main data-ev-id="ev_af176df844">
				<Hero />
				<SelectedWork />
				<Experience />
				<Skills />
				<About />
				<Testimonials />
				<Contact />
			</main>
			<SiteFooter />
		</div>);

}