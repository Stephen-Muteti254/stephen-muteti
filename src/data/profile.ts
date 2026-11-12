export const PROFILE = {
	name: 'Stephen Muteti',
	title: 'Backend & Systems Engineer',
	location: 'Nairobi, Kenya · UTC+3',
	email: 'stephenmuteti09@gmail.com',
	phone: '+254 723 616462',
	phoneHref: 'tel:+254723616462',
	github: 'https://github.com/Stephen-Muteti',
	leetcode: 'https://leetcode.com/u/Stephen_Muteti/',
	linkedin: 'https://www.linkedin.com/in/stephen-muteti/',
	resume: 'https://docs.google.com/document/d/1yAWJ50VpLLkqoy1CgebXYv0vkSZPBe-Du4z3QAk8SU8/export?format=pdf',
};

export const IMPACT = [
	{ value: '10k TPS', label: 'Mobile-money architecture', context: 'M-Pesa 2.0 design, multi-AZ on Huawei Cloud Stack' },
	{ value: '99.999%', label: 'Platform uptime', context: 'ScholarDesk, AssessDesk & AuditDesk services' },
	{ value: '−40%', label: 'Mean time to resolution', context: 'ELK, Prometheus & Grafana observability' },
	{ value: '14.5×', label: 'Faster search at 1M lines', context: 'mmap vs. line scan, 25 ms vs. 364 ms' },
];

export const EXPERIENCE = [
	{
		company: 'ITNest',
		role: 'Backend Software Engineer',
		period: 'Jul 2024 — Present',
		location: 'Kenya',
		summary:
			'Own the backend architecture for three production products: a managed expert marketplace, an enterprise security and compliance suite, and an AI assessment tool.',
		bullets: [
			'Architected and scaled the core backend for ScholarDesk, AssessDesk and AuditDesk Suite with Python (Flask), SQLAlchemy, PostgreSQL and AWS, sustaining 99.999% uptime under high transaction throughput.',
			'Designed ScholarDesk’s API as 16 domain modules serving four separately deployed apps (auth, customer, expert, admin), with role-scoped access, cookie-based JWT with CSRF protection and OTP sign-in.',
			'Built a single payment-webhook dispatcher that routes Paystack events by product, powering approval-gated escrow checkout for ScholarDesk and credit purchases for AssessDesk.',
			'Engineered low-latency event pipelines with Apache Kafka and WebSockets for notifications, live state sync and telemetry across services.',
			'Built AssessDesk’s AI engine: screen capture → layout-aware OCR → model routing by question type → streamed answers in 2–6 s, plus preparation roadmaps and metered credit billing.',
			'Integrated AuditDesk Suite (SIEM, log management, APM, DAM, PIM/PAM) with Prometheus, Grafana and ELK, delivering 100% data traceability and cutting MTTR by 40%.',
		],
		stack: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Kafka', 'WebSockets', 'AWS', 'Paystack', 'ELK', 'Prometheus', 'Grafana'],
		cases: ['scholardesk', 'auditdesk', 'assessdesk'],
	},
	{
		company: 'Huawei',
		role: 'Backend Software Engineer · Mobile Money Solutions',
		period: 'Mar 2023 — Dec 2023',
		location: 'Kenya',
		summary:
			'Worked on the Huawei Mobile Money 2.0 solution for Safaricom Kenya (M-Pesa 2.0), from architecture and security controls through to audit and observability tooling.',
		bullets: [
			'Contributed to the M-Pesa 2.0 technical proposal for Safaricom, designing a high-throughput architecture for 10,000 TPS with multi-AZ deployment on Huawei Cloud Stack.',
			'Engineered a custom Python GaussDB audit-log parser and Database Activity Monitoring engine for real-time audit processing, reducing compliance processing overhead by 35% and third-party licensing costs.',
			'Built an Anti-Money Laundering detection engine over transaction audit trails, and planned the PIM, centralized logging and DAM production deployment.',
			'Defined API security controls for the ISCP delivery platform: PIN and password authentication, encrypted credentials in transit, failure audit logging, strict input validation and HTTPS over TLS.',
			'Stood up a centralized ELK pipeline for high-volume log ingestion and troubleshooting, improving MTTR by 40%.',
			'Automated provisioning and configuration of production Linux environments with Ansible and Bash.',
		],
		stack: ['Python', 'GaussDB', 'Huawei Cloud Stack', 'ELK', 'Ansible', 'Bash', 'Linux', 'TLS'],
		cases: ['mpesa'],
	},
	{
		company: 'Algorithmic Sciences',
		role: 'Software Engineer · Backend & Infrastructure',
		period: 'Jun 2022 — Dec 2022',
		location: 'United States · Remote',
		summary:
			'Built and benchmarked a secure, multithreaded search server for latency-sensitive lookups across very large datasets.',
		bullets: [
			'Developed a multithreaded Linux search server in C++ and Python, tuning concurrency, thread affinity and filesystem I/O to cut query latency by 30%.',
			'Benchmarked seven search strategies across 10k–1M line files; memory-mapped search answered in 25 ms at 1M lines, 14.5× faster than a line scan.',
			'Removed concurrency bottlenecks in latency-sensitive data structures, raising execution throughput by 25%.',
			'Secured the transport with mutual TLS and shipped the service as a systemd daemon with documented SSL setup.',
			'Wired Pytest suites (search correctness, TLS handshakes, timeouts) into Jenkins CI, keeping coverage above 85%.',
		],
		stack: ['C++', 'Python', 'Linux', 'mmap', 'mTLS', 'systemd', 'Pytest', 'Jenkins'],
		cases: ['search-daemon'],
	},
];

export const SKILLS = [
	{ group: 'Languages', items: ['Python', 'C++', 'Java', 'SQL', 'TypeScript', 'Bash'] },
	{
		group: 'Distributed systems',
		items: ['Apache Kafka', 'Event-driven architecture', 'Microservices', 'WebSockets', 'REST APIs', 'Redis'],
	},
	{
		group: 'Systems & performance',
		items: ['Multithreading & concurrency', 'Linux internals', 'Profiling', 'Low-latency (DPDK, RDMA, FPGA)', 'Data structures & algorithms'],
	},
	{
		group: 'Data & storage',
		items: ['PostgreSQL', 'MySQL', 'GaussDB', 'Elasticsearch', 'SQLAlchemy', 'Indexing & caching'],
	},
	{
		group: 'Observability & security',
		items: ['ELK stack', 'Prometheus', 'Grafana', 'DAM', 'PIM/PAM', 'OAuth2', 'mTLS'],
	},
	{
		group: 'Cloud & delivery',
		items: ['AWS', 'Huawei Cloud Stack', 'Docker', 'Kubernetes', 'Ansible', 'GitHub Actions', 'Jenkins'],
	},
];

export const TESTIMONIALS = [
	{
		quote:
			'Stephen’s expertise in Python, system design, and performance optimization was instrumental to our secure file search engine. His thoughtful architecture and rigorous testing significantly boosted system efficiency and reliability.',
		name: 'Ben Racz',
		role: 'Engineering Manager, Algorithmic Sciences',
	},
	{
		quote:
			'Stephen excelled in designing secure microservices and integrating enterprise-level PIM and DAM solutions. His clear documentation and security-driven approach greatly enhanced system robustness and team collaboration.',
		name: 'Chen Zhihao',
		role: 'Technical Director, Huawei',
	},
	{
		quote:
			'Stephen transformed our platform’s architecture with scalable, secure microservices and full-stack expertise. His work on authentication and system resilience directly improved platform performance and reliability.',
		name: 'Dickson Wafula',
		role: 'CTO, Ozonelead',
	},
];

export const HONORS = [
	{ title: 'Excellence Award, Fintech System Architecture', year: '2026' },
	{ title: 'Participant, International Computer Science Challenge', year: '2026' },
	{ title: 'Certifications: Project Management, Cybersecurity', year: '2026' },
];

export const OTHER_BUILDS = [
	{
		title: 'RETH Bank',
		description: 'Desktop banking workflow engine with automated audit logging and RBAC; cut teller auditing overhead by 40%.',
		href: null,
	},
	{
		title: 'UTIBU Health',
		description: 'Cloud healthcare management system for medication tracking, patient records and secure health-data storage. Flask, PostgreSQL, AWS S3, Docker.',
		href: 'https://github.com/Stephen-Muteti/UTIBU_HEALTH/tree/master',
	},
	{
		title: 'BlazeAlert',
		description: 'Fire-brigade dispatch system that optimizes resource allocation and tracks incidents in real time to minimize response times.',
		href: 'https://github.com/Stephen-Muteti/Blazealert',
	},
	{
		title: 'Smart Home',
		description: 'IoT home-automation platform with real-time streaming over WebSockets and MQTT, device management and secure appliance APIs.',
		href: 'https://github.com/Stephen-Muteti/Smart-Home',
	},
];
