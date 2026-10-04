export const profile = {
  givenName: 'Sofia',
  familyName: 'Lindelow',
  fullName: 'Sofia Eva Kuttner Lindelow',
  location: 'Montreal, Canada',
  role: 'Forward Deployed Engineer and AI Architect',
  about:
    'Currently working in applied AI and technological adoption, passionate about health innovation and neuroscience, and driven to continuously learn and innovate.',
  contactLine: 'Forward Deployed Engineer and AI Architect based in Montreal.',
  email: 'sofiaklindelow@gmail.com',
  cv: '/Sofia_Lindelow_CV.pdf',
  linkedin: 'https://www.linkedin.com/in/sofia-lindelow/',
  github: 'https://github.com/slindelow',
} as const

export type Project = {
  name: string
  category: string
  description: string
  link: string
  tags: readonly string[]
}

export const featured: readonly Project[] = [
  {
    name: 'RELAY',
    category: 'AI systems',
    description:
      'Slack-native customer-success agent with source retrieval, SLA tracking, evidence-backed drafting, and human approval before posting.',
    link: 'https://github.com/slindelow/relay-slack-agent',
    tags: ['Python', 'FastAPI', 'Slack'],
  },
  {
    name: 'HIPAA Guard',
    category: 'Health technology',
    description:
      'Healthcare compliance scanner combining deterministic checks, AI analysis, proposed fixes, adversarial review, verification, and regulatory citations.',
    link: 'https://github.com/slindelow/hipaa-guard',
    tags: ['Python', 'Multi-agent', 'PyPI'],
  },
  {
    name: 'skill-compass',
    category: 'Developer tools',
    description:
      'Capability router that audits installed agent skills and plugins, resolves overlaps, and generates portable routing context across AI coding environments.',
    link: 'https://github.com/slindelow/skill-compass',
    tags: ['Agent systems', 'Routing', 'Open source'],
  },
]

export const projectGroups: readonly { category: string; projects: readonly Project[] }[] = [
  {
    category: 'Health technology',
    projects: [
      {
        name: 'Patient Lifecycle Agent',
        category: 'Health technology',
        description:
          'Synthetic-data triage engine that scores risk, routes patients, recommends actions and channels, and flags human escalation.',
        link: 'https://github.com/slindelow/patient-lifecycle-agent',
        tags: ['Triage', 'Human escalation', 'Synthetic data'],
      },
    ],
  },
  {
    category: 'Software safety',
    projects: [
      {
        name: 'SafetyNet',
        category: 'Software safety',
        description:
          'GitLab Duo agent that checks MISRA C deviation records for completeness under ISO 26262 before human safety review.',
        link: 'https://github.com/slindelow/safetynet-agent',
        tags: ['GitLab Duo', 'ISO 26262', 'Validation'],
      },
    ],
  },
  {
    category: 'Applied AI',
    projects: [
      {
        name: 'Growth Agent',
        category: 'Applied AI',
        description:
          'Product-led growth pipelines for scoring, outreach, referrals, anomaly detection, and structured reporting.',
        link: 'https://github.com/slindelow/growth-agent',
        tags: ['Python', 'Automation', 'Analytics'],
      },
      {
        name: 'Market Intelligence Agent',
        category: 'Applied AI',
        description:
          'Opportunity-discovery engine that maps markets, identifies urgency signals, profiles organizations, and ranks leads with explicit reasons.',
        link: 'https://github.com/slindelow/market-intel-agent',
        tags: ['Research', 'Ranking', 'Reason codes'],
      },
      {
        name: 'Inbound Leads Agent',
        category: 'Applied AI',
        description:
          'Lead-triage pipeline with inbox scanning, enrichment, SLA scoring, response drafting, prioritized queues, and pre-call briefs.',
        link: 'https://github.com/slindelow/inbound-leads-agent',
        tags: ['Triage', 'Enrichment', 'Workflow'],
      },
      {
        name: 'Outbound Leads Agent',
        category: 'Applied AI',
        description:
          'Prospecting workflow for sourcing and enriching leads, bounded personalization, campaign routing, and reply monitoring.',
        link: 'https://github.com/slindelow/outbound-leads-agent',
        tags: ['Prospecting', 'Automation', 'Monitoring'],
      },
      {
        name: 'Competitor Analysis Agent',
        category: 'Applied AI',
        description: 'Agent for structured competitor and market analysis.',
        link: 'https://github.com/slindelow/competitor-analysis-agent',
        tags: ['Research', 'Analysis', 'Agents'],
      },
    ],
  },
  {
    category: 'Machine learning',
    projects: [
      {
        name: 'Cart Intent Classifier',
        category: 'Machine learning',
        description: 'Classifier that routes cart abandoners into intent-based email recovery flows.',
        link: 'https://github.com/slindelow/cart-intent-classifier',
        tags: ['Classification', 'Lifecycle', 'Ecommerce'],
      },
    ],
  },
]

export const research = {
  label: 'Independent research project',
  title: 'NeuroAI: EEG and subsequent memory',
  organization: 'Independent',
  period: '2026',
  description:
    'Built a leakage-safe pipeline using real PEERS EEG data to test whether study-period spectral features added held-session predictive information about later recall beyond behavioral predictors. The exploratory result did not show detectable incremental value from the selected EEG representation.',
  methods: ['EEG spectral features', 'Held-session evaluation', 'Logistic regression', 'Reproducible analysis'],
  link: 'https://github.com/slindelow/neuroai-eeg-memory',
} as const

export const writing: readonly { title: string; topic: string; outlet: string; link: string }[] = [
  {
    title: 'Sofia Lindelow on Substack',
    topic: 'Independent writing',
    outlet: 'Substack',
    link: 'https://substack.com/@sofialindelow',
  },
  {
    title: 'Advances and Challenges in Viral Diseases and Their Emerging Therapies',
    topic: 'Virology and emerging therapies',
    outlet: 'The Tribune',
    link: 'https://www.thetribune.ca/sci-tech/advances-and-challenges-in-viral-diseases-and-their-emerging-therapies-11112025/',
  },
  {
    title: 'Sex-Specific Autonomic Signatures of Tonic Pain',
    topic: 'Pain physiology',
    outlet: 'The Tribune',
    link: 'https://www.thetribune.ca/sci-tech/sex-specific-autonomic-signatures-of-tonic-pain-04112025/',
  },
  {
    title: 'Designing Culturally Safe Interventions in Obstetrics',
    topic: 'Global health and maternal care',
    outlet: 'The Tribune',
    link: 'https://www.thetribune.ca/sci-tech/designing-culturally-safe-interventions-in-obstetrics-30092025/',
  },
]

export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof sections)[number]['id']
