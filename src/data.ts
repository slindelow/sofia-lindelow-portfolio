export const experience = [
  {
    period: 'Jul 2026 to present',
    role: 'Forward Deployed AI Engineer',
    organization: 'Lake House Group',
    location: 'Montreal, Canada',
    summary: 'Lead assigned AI work from workflow discovery and technical design through implementation, testing, documentation, demonstrations, and user adoption. Co-lead internal AI enablement through workshops, reusable tools, and deployment guidance.',
  },
  {
    period: 'Apr 2025 to present',
    role: 'Research Assistant',
    organization: 'McGill Health Psychology Lab',
    location: 'Montreal, Canada',
    summary: 'Develop behavioral study methods and co-lead a JBI-compliant umbrella review on stage-of-change measurement in health interventions.',
  },
  {
    period: 'Sep 2025 to present',
    role: 'Staff Writer, Science and Technology',
    organization: 'The Tribune',
    location: 'Montreal, Canada',
    summary: 'Interview researchers and report on work across neuroscience, physiology, psychology, and global health for a general readership.',
  },
  {
    period: 'Nov 2025 to Feb 2026',
    role: 'AI Training Expert',
    organization: 'AfterQuery',
    location: 'Remote',
    summary: 'Produced expert training data and evaluated model rubrics across scientific research, education, and finance.',
  },
  {
    period: 'May to Aug 2025',
    role: 'Growth and Development Intern',
    organization: 'BetaTown Venture Studio',
    location: 'New York, United States',
    summary: 'Supported product strategy, market research, creator outreach, and operational systems for early-stage AI media ventures.',
  },
  {
    period: 'May to Aug 2024',
    role: 'Marketing and Strategy Intern',
    organization: 'Doccla',
    location: 'London, United Kingdom',
    summary: 'Supported digital strategy and patient communications for a virtual-ward platform across geriatric care, COPD, and diabetes programs.',
  },
  {
    period: 'Jan to Aug 2023',
    role: 'Research Intern',
    organization: 'National Institutes of Health',
    location: 'Washington, DC',
    summary: 'Supported clinical research on chronic back pain in active-duty pilots, including participant data collection and consent documentation.',
  },
]

export const research = [
  {
    label: 'Laboratory research',
    title: 'Health-risk behavior and readiness for change',
    organization: 'McGill Health Psychology Lab',
    period: '2025 to present',
    description: 'Developing a pilot study that uses cursor-tracking methods to assess readiness for health-behavior change. Work includes methodology, questionnaires, experimental protocols, behavioral measurement, and a JBI-compliant umbrella review.',
    methods: ['Behavioral study design', 'Cursor tracking', 'Evidence synthesis', 'JBI methods'],
  },
  {
    label: 'Independent research project',
    title: 'NeuroAI: EEG and subsequent memory',
    organization: 'Independent',
    period: '2026',
    description: 'Built a leakage-safe pipeline using real PEERS EEG data to test whether study-period spectral features added held-session predictive information about later recall beyond behavioral predictors. The exploratory result did not show detectable incremental value from the selected EEG representation.',
    methods: ['EEG spectral features', 'Held-session evaluation', 'Logistic regression', 'Reproducible analysis'],
    link: 'https://github.com/slindelow/neuroai-eeg-memory',
  },
  {
    label: 'Independent research project',
    title: 'Kinase binding-affinity ranking',
    organization: 'Independent',
    period: '2026',
    description: 'Binding-affinity ranking, not protein folding. A protein drug target goes in; the model ranks candidate molecules by predicted binding. Protein sequence features raised rank correlation on unseen kinases. Cold-protein HistGBM, amino-acid composition plus dipeptide vs ligand-only: Spearman difference 0.0500 (95% interval 0.0271 to 0.0720, two-sided p = 0.001). Enrichment at 1% difference 1.7930 (interval -0.2624 to 3.2468, p = 0.091, includes 0). A cold library screen of SLK did not beat ligand-only overall (top 1% 8/17 vs 7/17; top 500 10/17 vs 12/17). DAVIS has only 68 ligands. Scores are public lab labels, not wet-lab hits. After the opening summary, the repository includes the comparison figure and links for the DAVIS Dataverse file, the DeepDTA KIBA mirror, and the MoleculeNet HIV library.',
    methods: ['HistGBM', 'Amino-acid composition', 'Dipeptide composition', 'Cold-protein holdout'],
    link: 'https://github.com/slindelow/receptor-protein-classification',
  },
]

export const projects = [
  {
    name: 'RELAY',
    category: 'AI systems',
    description: 'Slack-native customer-success agent with source retrieval, SLA tracking, evidence-backed drafting, and human approval before posting.',
    link: 'https://github.com/slindelow/relay-slack-agent',
    tags: ['Python', 'FastAPI', 'Slack'],
  },
  {
    name: 'HIPAA Guard',
    category: 'Health technology',
    description: 'Healthcare compliance scanner combining deterministic checks, AI analysis, proposed fixes, adversarial review, verification, and regulatory citations.',
    link: 'https://github.com/slindelow/hipaa-guard',
    tags: ['Python', 'Multi-agent', 'PyPI'],
  },
  {
    name: 'skill-compass',
    category: 'Developer tools',
    description: 'Capability router that audits installed agent skills and plugins, resolves overlaps, and generates portable routing context across AI coding environments.',
    link: 'https://github.com/slindelow/skill-compass',
    tags: ['Agent systems', 'Routing', 'Open source'],
  },
  {
    name: 'SafetyNet',
    category: 'Software safety',
    description: 'GitLab Duo agent that checks MISRA C deviation records for completeness under ISO 26262 before human safety review.',
    link: 'https://github.com/slindelow/safetynet-agent',
    tags: ['GitLab Duo', 'ISO 26262', 'Validation'],
  },
  {
    name: 'Growth Agent',
    category: 'Applied AI',
    description: 'Product-led growth pipelines for scoring, outreach, referrals, anomaly detection, and structured reporting.',
    link: 'https://github.com/slindelow/growth-agent',
    tags: ['Python', 'Automation', 'Analytics'],
  },
  {
    name: 'Patient Lifecycle Agent',
    category: 'Health technology',
    description: 'Synthetic-data triage engine that scores risk, routes patients, recommends actions and channels, and flags human escalation.',
    link: 'https://github.com/slindelow/patient-lifecycle-agent',
    tags: ['Triage', 'Human escalation', 'Synthetic data'],
  },
  {
    name: 'Market Intelligence Agent',
    category: 'Applied AI',
    description: 'Opportunity-discovery engine that maps markets, identifies urgency signals, profiles organizations, and ranks leads with explicit reasons.',
    link: 'https://github.com/slindelow/market-intel-agent',
    tags: ['Research', 'Ranking', 'Reason codes'],
  },
  {
    name: 'Inbound Leads Agent',
    category: 'Applied AI',
    description: 'Lead-triage pipeline with inbox scanning, enrichment, SLA scoring, response drafting, prioritized queues, and pre-call briefs.',
    link: 'https://github.com/slindelow/inbound-leads-agent',
    tags: ['Triage', 'Enrichment', 'Workflow'],
  },
  {
    name: 'Outbound Leads Agent',
    category: 'Applied AI',
    description: 'Prospecting workflow for sourcing and enriching leads, bounded personalization, campaign routing, and reply monitoring.',
    link: 'https://github.com/slindelow/outbound-leads-agent',
    tags: ['Prospecting', 'Automation', 'Monitoring'],
  },
  {
    name: 'Cart Intent Classifier',
    category: 'Machine learning',
    description: 'Classifier that routes cart abandoners into intent-based email recovery flows.',
    link: 'https://github.com/slindelow/cart-intent-classifier',
    tags: ['Classification', 'Lifecycle', 'Ecommerce'],
  },
  {
    name: 'Competitor Analysis Agent',
    category: 'Applied AI',
    description: 'Agent for structured competitor and market analysis.',
    link: 'https://github.com/slindelow/competitor-analysis-agent',
    tags: ['Research', 'Analysis', 'Agents'],
  },
]

export const writing = [
  {
    title: 'Sofia Lindelow on Substack',
    topic: 'Independent writing',
    link: 'https://substack.com/@sofialindelow',
  },
  {
    title: 'Advances and Challenges in Viral Diseases and Their Emerging Therapies',
    topic: 'Virology and emerging therapies',
    link: 'https://www.thetribune.ca/sci-tech/advances-and-challenges-in-viral-diseases-and-their-emerging-therapies-11112025/',
  },
  {
    title: 'Sex-Specific Autonomic Signatures of Tonic Pain',
    topic: 'Pain physiology',
    link: 'https://www.thetribune.ca/sci-tech/sex-specific-autonomic-signatures-of-tonic-pain-04112025/',
  },
  {
    title: 'Designing Culturally Safe Interventions in Obstetrics',
    topic: 'Global health and maternal care',
    link: 'https://www.thetribune.ca/sci-tech/designing-culturally-safe-interventions-in-obstetrics-30092025/',
  },
]

export const credentials = [
  {
    title: 'Certificate of completion: Claude code 101',
    issuer: 'Anthropic',
    issued: 'July 2026',
    id: '2cqmhwi98e3y',
    link: 'https://verify.skilljar.com/c/2cqmhwi98e3y',
  },
  {
    title: 'Certificate of completion: AI Fluency for students',
    issuer: 'Anthropic',
    issued: 'July 2026',
    id: '6sist5uhqouv',
    link: 'https://verify.skilljar.com/c/6sist5uhqouv',
  },
  {
    title: 'Model Context Protocol: Advanced Topics',
    issuer: 'Anthropic',
    issued: 'July 2026',
    id: 'm3orwpue39jw',
    link: 'https://verify.skilljar.com/c/m3orwpue39jw',
  },
]
