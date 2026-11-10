// Site content. Every sentence here is copied word for word from the approved
// manuscript, version 10 (drafts/2026-10-25-personal-website-content.md in
// Sofia's vault). Do not edit wording here without her approval.

export type Link = { label: string; href: string }

export type Figure = { src: string; alt: string; caption?: string }

export const profile = {
  name: 'Sofia Lindelow',
  headline: 'Forward Deployed AI Engineer · McGill University',
  statement:
    'Forward Deployed AI Engineer and psychology student at McGill, building AI applications and conducting research across health psychology, computational neuroscience and molecular modeling.',
  degree: 'BSc Psychology, minor in Interdisciplinary Life Sciences · Expected June 2027 · Montreal',
}

export const contact: Link[] = [
  { label: 'Email', href: 'mailto:sofiaklindelow@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sofia-lindelow/' },
  { label: 'GitHub', href: 'https://github.com/slindelow' },
]

export type Role = {
  title: string
  meta: string
  summary?: string
  bullets: string[]
  stack?: string
  link?: Link
}

export const work: Role[] = [
  {
    title: 'Forward Deployed AI Engineer',
    meta: 'July 2026 to present · Montreal',
    summary:
      'Own assigned AI delivery from workflow discovery and technical scoping through implementation, testing and user handoff.',
    bullets: [
      'Developed Python workflows that translate approved designs into native email drafts through REST APIs. Implemented asset processing, structured manifests, destination-link checks, account validation and saved-output readback; validated draft creation through user testing.',
      'Built and internally validated a Python reporting pipeline that reconciles source data, calculates metrics deterministically and prepares evidence-backed analysis for human review. Added schema, reporting-period and completeness checks so figures remain traceable to their inputs before review.',
      'Developed TypeScript agent and workflow components with Mastra and PostgreSQL-backed execution state. Implemented structured tool contracts, scoped authorization, approval boundaries and recovery checks, including tests for interrupted processes and database restarts, within a pre-release agent runtime.',
      'Implemented Langfuse tracing and evaluation workflows to inspect model calls, timing, token usage, costs and output quality. Verified development experiments through persisted score readback.',
      'Built reproducible verification workflows using Python test harnesses, GitHub Actions and Playwright browser checks; packaged installation, troubleshooting and operator documentation alongside the implementation.',
      'Co-lead internal AI enablement through workshops, practical exercises and reusable skills and plugins, helping colleagues set up development environments, use agent workflows and take over delivered tools.',
    ],
    stack: 'Python · TypeScript · REST APIs · Mastra · PostgreSQL · Langfuse · Playwright · GitHub Actions',
  },
  {
    title: 'Research Assistant',
    meta: 'McGill Health Psychology Lab · 2025 to present · Montreal',
    bullets: [
      'Refine participant instructions and survey measures for a study of readiness for behavior change; test cursor-tracking procedures and contribute intervention protocols and construct-to-question mapping.',
      'Co-lead an umbrella-review protocol examining stage-of-change measurement in health interventions, including search, appraisal and extraction methods.',
    ],
    link: { label: 'Research methods and contributions', href: '/#research' },
  },
  {
    title: 'AI Training Expert',
    meta: 'AfterQuery · November 2025 to February 2026 · Remote',
    bullets: [
      'Produced expert training examples for AI models across scientific research, education and finance; refined evaluation rubrics against domain-specific quality criteria.',
      'Assessed model self-grading and output equivalence across evaluation frameworks, reviewing whether scoring methods captured the quality of generated responses.',
    ],
  },
  {
    title: 'Staff Writer, Science and Technology',
    meta: 'The Tribune · September 2025 to present · Montreal',
    bullets: [
      'Interview researchers and translate findings in neuroscience, physiology, psychology and global health into published research briefs for a general readership.',
      'Report on McGill research and scientific events, explaining study methods, findings and limitations without assuming specialist knowledge.',
    ],
    link: { label: 'Selected articles', href: '/#writing' },
  },
  {
    title: 'Growth and Development Intern',
    meta: 'BetaTown Venture Studio · May to August 2025 · New York',
    bullets: [
      'Built an internal CRM to organize creator and domain-expert outreach, track contacts and support user discovery for early-stage AI media ventures.',
      'Led outreach and market research on AI-assisted publishing, content verification and creator workflows; translated findings into product-strategy work, investor materials and pitch decks.',
    ],
  },
  {
    title: 'Marketing and Strategy Intern',
    meta: 'Doccla · May to August 2024 · London',
    bullets: [
      'Used Google Analytics and traffic analysis to inform SEO, campaign planning and content decisions for a virtual-ward platform.',
      'Produced patient-story videos, newsletters, web copy and partner outreach for programs in geriatric care, COPD and diabetes, translating remote-care services into patient and partner communications.',
    ],
  },
  {
    title: 'Research Intern',
    meta: 'National Institutes of Health · January to August 2023 · Washington, DC',
    bullets: [
      'Collected participant data and maintained consent documentation for clinical research on chronic back pain in active-duty pilots.',
    ],
  },
  {
    title: 'Teaching',
    meta: 'Pilates, barre and yoga · LeanBean Fitness, MVMT Pilates, CorePower Yoga and independent instruction',
    bullets: [
      'Designed and delivered group classes and individual sessions, adapting progressions and cueing to different experience levels.',
      'Recognized as CorePower Yoga Teacher of the Month during the first month at the studio.',
    ],
  },
]

export type Project = {
  slug: string
  title: string
  subtitle: string
  bullets: string[]
  stack: string
  links: Link[]
  figures?: Figure[]
  video?: { href: string; thumb: string; alt: string }
  principal: boolean
}

export const projects: Project[] = [
  {
    slug: 'relay',
    title: 'RELAY',
    subtitle: 'Slack-native customer-success agent',
    principal: true,
    bullets: [
      'Built a customer-support workflow that detects unanswered questions in Slack Connect channels, tracks response deadlines and prepares cited replies for human approval.',
      'Implemented a FastAPI backend with Slack OAuth, event handlers and interactive review controls; used Celery/Redis workers for classification and synchronization, and PostgreSQL/pgvector for question state, embeddings and semantic retrieval.',
      'Connected HubSpot, GitHub and permission-aware Slack search to assemble evidence for drafts. Added an MCP context server, workspace isolation through database row-level security and encrypted connector tokens.',
      'Validated the core loop end to end in a real Slack Connect workspace, from setup and source synchronization through draft review and approved posting. Awarded Second Place in the New Slack Agent category of the 2026 Slack Agent Builder Challenge.',
    ],
    stack: 'Python · FastAPI · Slack Bolt · PostgreSQL/pgvector · SQLAlchemy · Celery/Redis · OAuth · MCP',
    links: [
      { label: 'Code', href: 'https://github.com/slindelow/relay-slack-agent' },
      { label: 'Demo', href: 'https://youtu.be/vvf3aMxv6k8' },
    ],
    video: {
      href: 'https://youtu.be/vvf3aMxv6k8',
      thumb: 'https://i.ytimg.com/vi/vvf3aMxv6k8/maxresdefault.jpg',
      alt: 'RELAY demo video',
    },
  },
  {
    slug: 'crystal-graph-neural-network',
    title: 'Crystal Graph Neural Network',
    subtitle: 'Guided CaMML modeling project',
    principal: true,
    bullets: [
      'Implemented a crystal-property prediction model in PyTorch, using atom and bond features as graph inputs. Built gated message-passing layers, residual updates, crystal-level mean pooling and a regression head.',
      'Wrote batched training and evaluation loops with gradient-based optimization, loss and mean absolute error tracking, and prediction plots; completed a 40-epoch CPU training run.',
      'Compared convolution depth and embedding size in separate validation sweeps, which favored four convolution layers and 128-dimensional embeddings respectively. Kept these findings separate because the combined configuration had not been tested.',
    ],
    stack: 'Python · PyTorch · Graph neural networks · Tensor operations · Regression · Model evaluation',
    links: [],
  },
  {
    slug: 'eeg-memory',
    title: 'EEG and Subsequent-Memory Prediction',
    subtitle: 'Independent exploratory research',
    principal: true,
    bullets: [
      'Defined the research question of whether study-period EEG adds predictive information about later recall beyond behavioral context; directed AI-assisted development of a reproducible analysis pipeline using real PEERS data.',
      'Built the analysis around item-level recall labels, EEG preprocessing and epoching, 128 spectral features, and behavioral, EEG-only and combined logistic-regression models. Required train-only normalization, session-out predictions for the combined model and a held-session evaluation for each participant.',
      'Locked trial and split manifests and bound outputs to provenance records to make comparisons reproducible. Across 38 participants, the selected EEG representation showed no detectable incremental predictive value beyond the behavioral baseline in this exploratory within-participant analysis.',
    ],
    stack: 'Python · MNE · NumPy/pandas/SciPy · scikit-learn · Spectral analysis · Logistic regression · Bootstrap evaluation',
    links: [{ label: 'Code and research report', href: 'https://github.com/slindelow/neuroai-eeg-memory' }],
    figures: [
      { src: '/neuroai/model-auc-comparison.png', alt: 'EEG project figure: model AUC comparison' },
      { src: '/neuroai/neuroai-methods-pipeline.png', alt: 'EEG project figure: methods pipeline' },
      { src: '/neuroai/primary-increment.png', alt: 'EEG project figure: primary increment' },
      { src: '/neuroai/neuroai-leakage-controls.png', alt: 'EEG project figure: leakage controls' },
      { src: '/neuroai/serial-position-curve.png', alt: 'EEG project figure: serial position curve' },
    ],
  },
  {
    slug: 'kinase-ligand-affinity',
    title: 'Kinase-Ligand Affinity Prediction',
    subtitle: 'Protein representations and molecular screening',
    principal: true,
    bullets: [
      'Led AI-assisted development of an affinity-prediction and retrospective screening tool using DAVIS and KIBA, requiring frozen source data, saved evaluation splits and metrics generated directly from code.',
      'Compared RDKit fingerprint-only baselines with models adding amino-acid/dipeptide composition or frozen ESM-2 embeddings; evaluated gradient-boosted models and a Chemprop directed message-passing neural network across the original experiments.',
      'Examined scaffold and protein holdouts, then used MMseqs2 sequence clusters for a stronger DAVIS test. At 40% sequence identity, the composition-feature gradient booster showed no detectable pooled rank-correlation gain over the ligand-only baseline in the primary comparison, qualifying the earlier protein-ID result.',
    ],
    stack: 'Python · RDKit · scikit-learn · Chemprop/PyTorch · ESM-2 · MMseqs2 · Reproducible evaluation',
    links: [{ label: 'Code and results', href: 'https://github.com/slindelow/receptor-protein-classification' }],
    figures: [
      {
        src: 'https://raw.githubusercontent.com/slindelow/receptor-protein-classification/main/figures/kinase-binding-figures.png',
        alt: 'Kinase-ligand project figure: kinase binding figures',
      },
    ],
  },
  {
    slug: 'sales-development-workflows',
    title: 'Sales Development Workflows',
    subtitle: 'Inbound and outbound prospecting prototypes',
    principal: false,
    bullets: [
      'Built Python pipelines for inbox ingestion, lead enrichment, urgency scoring, outreach preparation and reply classification, separating model-generated language from deterministic routing and record updates.',
      'Implemented Gmail, Google Sheets and campaign-service integrations to produce prioritized lead queues, pre-call briefs, personalized drafts and structured prospect records.',
    ],
    stack: 'Python · REST APIs · Gmail · Google Sheets · Anthropic API · Structured JSON',
    links: [
      { label: 'Inbound', href: 'https://github.com/slindelow/inbound-leads-agent' },
      { label: 'Outbound', href: 'https://github.com/slindelow/outbound-leads-agent' },
    ],
  },
  {
    slug: 'hipaa-guard',
    title: 'HIPAA-Guard',
    subtitle: 'Healthcare-code review package',
    principal: false,
    bullets: [
      'Built a multi-agent code-review pipeline combining deterministic Python regex and AST checks with AI analysis, proposed fixes, adversarial review and verification by rescanning.',
      'Implemented redaction before model analysis and packaged the workflow as a CLI with pre-commit integration; published the installable package on PyPI.',
    ],
    stack: 'Python · AST analysis · Multi-agent orchestration · CLI tooling · Pre-commit hooks · PyPI',
    links: [
      { label: 'Code', href: 'https://github.com/slindelow/hipaa-guard' },
      { label: 'Package', href: 'https://pypi.org/project/hipaa-guard/' },
    ],
  },
  {
    slug: 'cart-intent-classifier',
    title: 'Cart Intent Classifier',
    subtitle: 'Intent-based recovery-email prototype',
    principal: false,
    bullets: [
      'Developed an Anthropic-powered classifier that combines purchase history, email engagement and browsing signals into structured intent, confidence, reasoning and proposed email-flow assignments.',
      'Implemented FastAPI webhook endpoints, Redis session storage and Shopify/Klaviyo API clients. Demonstrated the classification workflow with sample customer profiles, returning proposed recovery-email assignments with reasons for each classification.',
    ],
    stack: 'Python · FastAPI · Anthropic API · Redis · Webhooks · Shopify/Klaviyo APIs',
    links: [{ label: 'Code', href: 'https://github.com/slindelow/cart-intent-classifier' }],
  },
  {
    slug: 'growth-and-referral-agent',
    title: 'Growth and Referral Agent',
    subtitle: 'Product-led growth workflow prototype',
    principal: false,
    bullets: [
      'Built Python pipelines that score product-qualified leads, detect usage anomalies and identify referral candidates, with AI-generated messaging layered over deterministic scoring and selection rules.',
      'Demonstrated conversion and referral workflows with synthetic user data, producing segmented messages, structured reports and spreadsheet exports; implemented HTTP and reporting integrations for downstream delivery.',
    ],
    stack: 'Python · Deterministic scoring · AI orchestration · Google Sheets · HTTP integrations',
    links: [{ label: 'Code', href: 'https://github.com/slindelow/growth-agent' }],
  },
  {
    slug: 'competitive-intelligence-agent',
    title: 'Competitive Intelligence Agent',
    subtitle: 'Source-backed competitor research',
    principal: false,
    bullets: [
      'Developed a pipeline that collects pricing, product, review, hiring and funding signals, then organizes the evidence into structured competitor analysis.',
      'Combined source retrieval and AI synthesis to produce HTML and spreadsheet reports with supporting references, making the underlying observations available for review.',
    ],
    stack: 'Python · Source retrieval · Structured model outputs · HTML reporting · Google Sheets',
    links: [{ label: 'Code', href: 'https://github.com/slindelow/competitor-analysis-agent' }],
  },
]

export const earlierProjectsTitle = 'Earlier Agent Projects'

export const research = {
  lab: {
    title: 'McGill Health Psychology Lab',
    meta: 'Research Assistant · 2025 to present',
    studies: [
      {
        title: 'Readiness for Behavior Change',
        bullets: [
          'Refined participant instructions and survey measures; tested cursor-tracking procedures for a study of uncertainty in self-reported readiness for change.',
          'Contributed a four-week intervention protocol, selection of validated questionnaires and construct-to-question mapping; supported sampling, preregistration and ethics preparation.',
        ],
        stack: 'Behavioral study design · Qualtrics · Prolific · Cursor tracking',
      },
      {
        title: 'Stage-of-Change Measurement',
        bullets: [
          'Co-lead an umbrella-review protocol examining how systematic reviews and meta-analyses report stage-of-change measurement and its relationship to intervention outcomes.',
          'Develop search, appraisal and extraction methods to support a structured synthesis of measurement fidelity.',
        ],
      },
    ],
  },
  independent: {
    title: 'Independent Computational Research',
    items: [
      {
        label: 'EEG and memory',
        href: 'https://github.com/slindelow/neuroai-eeg-memory',
        text: 'Evaluated whether spectral EEG adds predictive information beyond behavior, using held-session comparisons and reproducible analysis.',
      },
      {
        label: 'Protein-affinity modeling',
        href: 'https://github.com/slindelow/receptor-protein-classification',
        text: 'Examined whether protein-feature gains survive stronger generalization tests, including sequence-cluster holdouts.',
      },
    ],
    interests:
      'Research interests include behavioral measurement, learning and memory, computational neuroscience and AI applications in health.',
  },
}

export type WritingGroup = { title: string; items: { label: string; href: string; date?: string }[] }

export const writing: WritingGroup[] = [
  {
    title: 'Learning Blog',
    items: [
      {
        label: 'How to Set Up an Agentic Workspace for Ecommerce',
        href: 'https://lakehousegrp.com/en/learn/how-to-set-up-an-agentic-workspace-for-ecommerce/',
        date: 'September 2026',
      },
      { label: 'Browse the learning blog', href: 'https://lakehousegrp.com/en/learn/' },
    ],
  },
  {
    title: 'The Tribune',
    items: [
      {
        label: 'Advances and Challenges in Viral Diseases and Their Emerging Therapies',
        href: 'https://www.thetribune.ca/sci-tech/advances-and-challenges-in-viral-diseases-and-their-emerging-therapies-11112025/',
        date: 'November 2025',
      },
      {
        label: 'Sex-Specific Autonomic Signatures of Tonic Pain',
        href: 'https://www.thetribune.ca/sci-tech/sex-specific-autonomic-signatures-of-tonic-pain-04112025/',
        date: 'November 2025',
      },
      {
        label: 'Designing Culturally Safe Interventions in Obstetrics',
        href: 'https://www.thetribune.ca/sci-tech/designing-culturally-safe-interventions-in-obstetrics-30092025/',
        date: 'September 2025',
      },
    ],
  },
  {
    title: 'Substack',
    items: [{ label: 'Independent writing', href: 'https://substack.com/@sofialindelow' }],
  },
]

export const education = [
  {
    title: 'McGill University',
    meta: 'BSc, Psychology major and Interdisciplinary Life Sciences minor · Expected June 2027',
    text: 'Coursework includes neuroscience, cognition, statistics, experimental design, Python programming and physiology.',
  },
  {
    title: 'University of New South Wales',
    meta: 'Semester abroad · 2026',
    text: 'Cognitive science, social and developmental psychology, creative entrepreneurship and criminal psychology.',
  },
  {
    title: 'Additional Learning',
    meta: 'Anthropic · July 2026',
    links: [
      { label: 'Claude Code 101', href: 'https://verify.skilljar.com/c/2cqmhwi98e3y' },
      { label: 'AI Fluency for Students', href: 'https://verify.skilljar.com/c/6sist5uhqouv' },
      { label: 'MCP Advanced Topics', href: 'https://verify.skilljar.com/c/m3orwpue39jw' },
    ],
  },
]

export const sections = [
  { id: 'work', label: 'Work Experience' },
  { id: 'projects', label: 'Personal Projects' },
  { id: 'research', label: 'Research' },
  { id: 'writing', label: 'Writing' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const
