import assessdeskImg from '@/assets/generated/assessdesk.webp';
import auditdeskImg from '@/assets/generated/auditdesk.webp';
import mpesaImg from '@/assets/generated/mpesa.webp';
import scholardeskImg from '@/assets/generated/scholardesk.webp';
import searchImg from '@/assets/generated/search-daemon.webp';

export interface CaseStudy {
	slug: string;
	title: string;
	company: string;
	period: string;
	role: string;
	category: string;
	tagline: string;
	summary: string;
	image: string;
	imageAlt: string;
	metrics: { value: string; label: string }[];
	stack: string[];
	context: string;
	challenge: string;
	contributions: { title: string; body: string }[];
	architecture: { caption: string; nodes: { name: string; detail: string }[] };
	outcomes: string[];
	links?: { label: string; href: string }[];
	note?: string;
	benchmark?: boolean;
}

export const CASES: CaseStudy[] = [
	{
		slug: 'scholardesk',
		title: 'ScholarDesk',
		company: 'ITNest',
		period: '2024 — Present',
		role: 'Backend architect & lead engineer',
		category: 'Marketplace platform',
		tagline: 'A managed expert marketplace where every order is matched, tracked and paid only on approval.',
		summary:
			'ScholarDesk connects students and professionals with vetted subject experts for academic work, professional documents, research and assessment preparation. I designed and built the backend that runs the whole order lifecycle, from brief to escrowed payment to expert payout.',
		image: scholardeskImg,
		imageAlt: 'Laptop showing an order-tracking dashboard on a desk at night',
		metrics: [
			{ value: '4', label: 'Apps on one API' },
			{ value: '16', label: 'Domain modules' },
			{ value: '99.999%', label: 'Uptime' },
		],
		stack: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Marshmallow', 'JWT', 'Paystack', 'Kafka', 'WebSockets', 'Gunicorn', 'AWS'],
		context:
			'The product promise is accountability: tasks go to an expert verified in the exact subject, the brief, files, drafts and revisions live in one order thread, and the customer’s money is held until they approve the delivery. Three very different users (customers, experts, admins) share the same data, each through their own app.',
		challenge:
			'Build one backend that safely serves four separately deployed front ends, enforces role boundaries on every request, holds funds until approval, and keeps a defensible record of every order, delivery and payout.',
		contributions: [
			{
				title: 'Domain-modular API',
				body: 'A single Flask application factory registers 16 feature domains (orders, payments, submissions, integrity reports, expert applications, support chat, analytics and more), each with its own routes, services and schemas.',
			},
			{
				title: 'One API, four apps',
				body: 'Auth, customer portal, expert portal and admin console are deployed on separate subdomains. Credentialed CORS, cookie-based JWT with CSRF tokens and OTP sign-in keep sessions secure across all of them.',
			},
			{
				title: 'Canonical role model',
				body: 'Customer, expert, admin and super-admin roles are normalized in one place and enforced per endpoint, so a request can only ever touch the data its role owns.',
			},
			{
				title: 'Approval-gated payments',
				body: 'Checkout funds are held until the customer approves completion. One Paystack webhook dispatcher routes every transaction by product, fulfilling ScholarDesk orders and AssessDesk credit purchases from a single verified entry point.',
			},
			{
				title: 'Expert supply pipeline',
				body: 'Applications, credential review, approval and deposit confirmation, then matched assignment, protected scope, admin-released submissions and earnings payouts.',
			},
			{
				title: 'Real-time and integrity',
				body: 'Kafka-backed events and WebSockets push order updates and support messages live; every delivery carries an originality report before it reaches the customer.',
			},
		],
		architecture: {
			caption: 'Request path from any of the four apps to settled payment.',
			nodes: [
				{ name: 'Client apps', detail: 'Auth · Customer · Expert · Admin SPAs' },
				{ name: 'Flask API', detail: 'JWT cookies, CSRF, role guards, 16 blueprints' },
				{ name: 'Event layer', detail: 'Kafka topics + WebSocket fan-out' },
				{ name: 'PostgreSQL', detail: 'SQLAlchemy models, TLS verify-full' },
				{ name: 'Payments', detail: 'Paystack escrow + webhook dispatcher' },
			],
		},
		outcomes: [
			'One backend serving every role, with no duplicated business logic across apps.',
			'Payments released only after customer approval, with a full audit trail per order.',
			'The same platform hosts AssessDesk accounts, credits and purchases.',
		],
		links: [{ label: 'scholardesk.pro', href: 'https://scholardesk.pro' }],
	},
	{
		slug: 'auditdesk',
		title: 'AuditDesk Suite',
		company: 'ITNest',
		period: '2024 — Present',
		role: 'Security & observability lead',
		category: 'Enterprise security',
		tagline: 'SIEM, log management, database activity monitoring and privileged access, in one evidence pipeline.',
		summary:
			'AuditDesk helps regulated enterprises in Kenya and East Africa see every signal and prove every action, so they can investigate faster and evidence ODPC and CBK obligations without a scramble. I architected the pipeline and integrated its four modules with the observability stack.',
		image: auditdeskImg,
		imageAlt: 'Security operations workstation with monitors streaming logs and latency graphs',
		metrics: [
			{ value: '500+', label: 'Log source parsers' },
			{ value: '7 yr', label: 'Hash-chained retention' },
			{ value: '−40%', label: 'MTTR' },
		],
		stack: ['Python', 'Kafka', 'Elasticsearch', 'Logstash', 'Kibana', 'Prometheus', 'Grafana', 'PostgreSQL', 'MITRE ATT&CK'],
		context:
			'Banks, SACCOs, insurers, telcos, payment providers and government agencies are the organisations most accountable for their data, and the last to be served by the tools meant to protect it. They need data residency, local regulatory evidence and investigations that hold up months later.',
		challenge:
			'Own every layer between a raw log line on a server and an auditor who has to trust it later, so nothing is lost at a handoff and every action is attributable.',
		contributions: [
			{
				title: 'Log management & SIEM',
				body: 'Syslog, Kafka, REST, webhooks and Windows Event Log parsed into one schema; correlation rules mapped to MITRE ATT&CK; case management with assignment and resolution history.',
			},
			{
				title: 'Database Activity Monitoring',
				body: 'Agentless, statement-level auditing across Oracle, SQL Server, PostgreSQL, MySQL and MongoDB, with PII column alerts and bulk-export thresholds.',
			},
			{
				title: 'PIM / PAM',
				body: 'Zero standing privileges: just-in-time grants, MFA-backed approvals, SSH, RDP and database session replay, and vaulted credentials with automatic rotation.',
			},
			{
				title: 'Observability & APM',
				body: 'p50 / p95 / p99 service latency, in-country synthetic uptime probes and noise-reduced alert routing on Prometheus and Grafana.',
			},
		],
		architecture: {
			caption: 'Five layers from raw signal to defensible evidence.',
			nodes: [
				{ name: 'Collect', detail: 'Syslog, Kafka, REST, agents, DB engines' },
				{ name: 'Normalise', detail: 'Shared schema, identity resolution, PII tags' },
				{ name: 'Correlate', detail: '318 rules aligned to MITRE ATT&CK' },
				{ name: 'Retain', detail: 'SHA-256 hash chain, 7-year TTL, region-locked' },
				{ name: 'Serve', detail: 'Role-scoped, time-boxed auditor access' },
			],
		},
		outcomes: [
			'100% data traceability across monitored systems.',
			'Mean time to resolution down 40% after the ELK, Prometheus and Grafana rollout.',
			'Private-cloud (Kenya), on-premise and hybrid deployment models with an in-country residency option.',
		],
	},
	{
		slug: 'assessdesk',
		title: 'AssessDesk',
		company: 'ITNest',
		period: '2024 — Present',
		role: 'Lead backend engineer',
		category: 'AI product',
		tagline: 'An AI assessment engine that turns any on-screen question into a structured answer in seconds.',
		summary:
			'AssessDesk helps students and professionals prepare for technical interviews, certification exams and formal tests. I built the AI evaluation engine, the desktop client pipeline and the metered credit system behind it.',
		image: assessdeskImg,
		imageAlt: 'Hands on a keyboard in front of a coding challenge with an AI explanation panel',
		metrics: [
			{ value: '2–6 s', label: 'Capture to answer' },
			{ value: '40+', label: 'Languages' },
			{ value: '3', label: 'Modes: exam, study, live' },
		],
		stack: ['Python', 'PySide6', 'ONNX Runtime OCR', 'Flask', 'PostgreSQL', 'LLM streaming', 'WebSockets', 'Paystack'],
		context:
			'Candidates practise under realistic conditions: maths notation, multi-part programming questions, essays and live technical interviews. The tool has to read questions exactly as rendered and respond fast enough to stay out of the way.',
		challenge:
			'Deliver a keyboard-only loop from capture to a correct, well-formatted answer in a few seconds, and bill it fairly per question without trusting the client.',
		contributions: [
			{
				title: 'Capture & OCR pipeline',
				body: 'Hotkey region capture feeds layout-aware OCR (ONNX Runtime) that reconstructs stems, options, notation and tables in under a second.',
			},
			{
				title: 'Model routing & streaming',
				body: 'Each question is routed to a reasoning model by type and difficulty and streamed back answer-first, with the working underneath.',
			},
			{
				title: 'Live interview mode',
				body: 'System-audio transcription with session heartbeat, pause and end controls, and a report generated at the end of each session.',
			},
			{
				title: 'Metered credits & sessions',
				body: 'Server-side credit ledger priced by type, subject, difficulty and level; rotating device sessions (15-min access, 30-day refresh, max three devices) and offline debit queuing.',
			},
			{
				title: 'Preparation roadmaps',
				body: 'Curated study paths and concept explanations so candidates close gaps before the real assessment.',
			},
		],
		architecture: {
			caption: 'From keystroke to streamed answer.',
			nodes: [
				{ name: 'Capture', detail: 'Hotkey region select, desktop client' },
				{ name: 'OCR', detail: 'Layout-aware, under a second' },
				{ name: 'Router', detail: 'Model chosen by type & difficulty' },
				{ name: 'Stream', detail: 'Answer-first tokens to overlay panel' },
				{ name: 'Ledger', detail: 'Credit debit, device sessions' },
			],
		},
		outcomes: [
			'Typical multiple-choice loop under five seconds end to end.',
			'Shares accounts, payments and support with ScholarDesk through one backend.',
			'Runs on Windows and macOS.',
		],
	},
	{
		slug: 'mpesa',
		title: 'M-Pesa 2.0 Mobile Money',
		company: 'Huawei × Safaricom',
		period: '2023',
		role: 'Mobile Money Solutions engineer',
		category: 'Fintech infrastructure',
		tagline: 'High-availability architecture and audit tooling for Kenya’s next-generation mobile money platform.',
		summary:
			'At Huawei I worked on the Mobile Money 2.0 solution proposed to Safaricom Kenya. My work spanned the high-throughput architecture, API security controls, and the audit, DAM, PIM and logging tooling that keeps a regulated payment system accountable.',
		image: mpesaImg,
		imageAlt: 'Hand holding a phone making a mobile money payment at a Nairobi market at dusk',
		metrics: [
			{ value: '10k', label: 'TPS design target' },
			{ value: '−35%', label: 'Compliance overhead' },
			{ value: '−40%', label: 'MTTR' },
		],
		stack: ['Huawei Cloud Stack', 'GaussDB', 'Python', 'ELK', 'Ansible', 'Bash', 'TLS', 'Linux'],
		context:
			'M-Pesa moves a large share of Kenya’s economy. The 2.0 technical proposal was organized around security, reliability, openness, transparency, efficient operation and flexibility, all non-negotiable for a national payment rail.',
		challenge:
			'Sustain 10,000 transactions per second with no single point of failure, while every database action and API call stays auditable for regulators and fraud teams.',
		contributions: [
			{
				title: 'High-throughput architecture',
				body: 'Designed for 10k TPS workloads with multi-AZ deployment models on Huawei Cloud Stack for high availability.',
			},
			{
				title: 'GaussDB audit parser & DAM',
				body: 'A custom Python parser and Database Activity Monitoring engine that processes GaussDB audit trails in real time, replacing licensed tooling.',
			},
			{
				title: 'AML detection',
				body: 'An anti-money-laundering engine over transaction audit trails to surface suspicious patterns for compliance teams.',
			},
			{
				title: 'API security controls',
				body: 'For the ISCP delivery platform: PIN and password auth, encrypted credentials in transit, failure audit logs, strict input validation and HTTPS over TLS, verified with negative tests like wrong PINs, invalid amounts and PIN reuse.',
			},
			{
				title: 'PIM, logging & DAM rollout',
				body: 'Planned and documented the privileged identity, centralized log and DAM deployment, with an ELK pipeline for operational troubleshooting.',
			},
			{
				title: 'Infrastructure automation',
				body: 'Ansible playbooks and Bash for repeatable provisioning and configuration across production Linux hosts.',
			},
		],
		architecture: {
			caption: 'Simplified view. Proprietary details are left out.',
			nodes: [
				{ name: 'Channels', detail: 'USSD, app and partner APIs' },
				{ name: 'API security', detail: 'Auth, validation, TLS, failure audit' },
				{ name: 'Transaction core', detail: 'Multi-AZ services, 10k TPS' },
				{ name: 'GaussDB', detail: 'Audit trails → DAM parser & AML' },
				{ name: 'Observability', detail: 'ELK ingestion, PIM-governed access' },
			],
		},
		outcomes: [
			'Compliance processing overhead down 35% with in-house audit parsing.',
			'Lower third-party licensing costs for database monitoring.',
			'MTTR improved 40% through centralized log analytics.',
		],
		note: 'Work done under NDA. Figures and diagrams are generalised.',
	},
	{
		slug: 'search-daemon',
		title: 'High-Performance Search Daemon',
		company: 'Algorithmic Sciences',
		period: '2022',
		role: 'Core architect',
		category: 'Systems & performance',
		tagline: 'A multithreaded, mutually authenticated TCP search server benchmarked across seven algorithms.',
		summary:
			'A Linux daemon that answers exact-match queries against files of a million lines and more, over TCP with mutual TLS. I built the server, the pluggable search layer and the benchmark harness, then picked the strategy with data.',
		image: searchImg,
		imageAlt: 'Macro shot of server hardware with light tracing along circuit paths',
		metrics: [
			{ value: '25 ms', label: 'Query at 1M lines' },
			{ value: '−30%', label: 'Query latency' },
			{ value: '85%+', label: 'Test coverage' },
		],
		stack: ['C++', 'Python', 'TCP sockets', 'mmap', 'mTLS', 'YAML', 'systemd', 'Pytest', 'Jenkins'],
		context:
			'Clients need a definitive “exists or not” answer for a string in a very large file, sometimes while that file is being rewritten, with many concurrent connections and trading-grade latency expectations.',
		challenge:
			'Keep lookups fast whether the file is re-read on every query or cached, stay safe under parallel load, and authenticate both ends of every connection.',
		contributions: [
			{
				title: 'Concurrent server',
				body: 'Accept loop with a worker thread per connection, lock-guarded client registry, graceful SIGTERM shutdown and double-fork daemonization when systemd is absent.',
			},
			{
				title: 'Pluggable search strategies',
				body: 'Seven interchangeable searchers behind one protocol, selected by config, with a REREAD_ON_QUERY flag toggling between fresh reads and cached lookups.',
			},
			{
				title: 'Mutual TLS',
				body: 'Server and client certificates verified against a CA bundle; invalid certificates rejected, with the SSL setup documented for operators.',
			},
			{
				title: 'Benchmarks & load tests',
				body: 'Time and memory profiled at 10k, 100k, 500k and 1M lines; latency and error rates measured against rising QPS to find throughput thresholds.',
			},
			{
				title: 'Tested & shippable',
				body: 'Pytest suites for search correctness, TLS handshake success and failure, timeouts and client behaviour, in Jenkins CI; packaged as a systemd unit.',
			},
		],
		architecture: {
			caption: 'One request through the daemon.',
			nodes: [
				{ name: 'Client', detail: 'Presents certificate, sends query' },
				{ name: 'mTLS listener', detail: 'CA-verified handshake' },
				{ name: 'Worker thread', detail: 'One per connection' },
				{ name: 'Searcher', detail: 'Strategy picked from config' },
				{ name: 'Response', detail: 'STRING EXISTS / NOT FOUND + timing' },
			],
		},
		outcomes: [
			'mmap search: 25 ms at 1M lines vs. 364 ms for a line scan and 6 s for a trie rebuild.',
			'Query latency down 30% and throughput up 25% after concurrency tuning.',
			'85%+ coverage enforced in CI.',
		],
		links: [{ label: 'GitHub profile', href: 'https://github.com/Stephen-Muteti' }],
		benchmark: true,
	},
];

export function getCase(slug: string) {
	return CASES.find((c) => c.slug === slug);
}

// Avg query time (ms) from the benchmark CSV, re-read on every query.
export const BENCHMARK = {
	sizes: ['10k', '100k', '500k', '1M'],
	rows: [
		{ name: 'mmap', values: [0.67, 3.0, 11.68, 25.04] },
		{ name: 'Buffered chunk', values: [2.67, 27.98, 178.93, 352.47] },
		{ name: 'Line by line', values: [3.66, 40.31, 150.32, 363.65] },
		{ name: 'Cached lines', values: [3.33, 37.09, 207.05, 405.07] },
		{ name: 'Set lookup', values: [5.33, 68.96, 327.39, 632.23] },
		{ name: 'Regex', values: [6.67, 72.89, 457.91, 1010.91] },
		{ name: 'Trie', values: [38.64, 727.86, 2849.27, 6026.34] },
	],
};
