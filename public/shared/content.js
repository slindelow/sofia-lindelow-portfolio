/* Approved v11 copy, word for word, from drafts/2026-11-12-personal-website-content-v11.md. */
window.CONTENT = {
  profile: {
    name: 'Sofia Lindelow',
    role: 'Forward Deployed AI Engineer · McGill University',
    statement: 'Forward Deployed AI Engineer and psychology student at McGill, building AI applications and conducting research across health psychology, computational neuroscience and molecular modeling. Builds agent workflows with tests, tracing, evals and human approval.',
    education: 'BSc Psychology, minor in Interdisciplinary Life Sciences · Expected June 2027 · Montreal',
    cv: '/Sofia_Lindelow_CV.pdf'
  },

  work: [
    {
      id: 'fde',
      title: 'Forward Deployed AI Engineer',
      meta: 'Lake House Group · July 2026 to present · Montreal',
      lede: 'Own assigned AI delivery from workflow discovery and technical scoping through implementation, testing and user handoff.',
      bullets: [
        'Lead for Telos, Lake House Group\'s AI ecommerce manager for Shopify merchants, since October 2026. Set the beta scope and product specification, sequenced the client rollout, and approve each production release after automated release checks.',
        'Directed the beta architecture, in which one agent answers for multiple client stores, each isolated by its Slack channel, and questions that name another client are refused before the model runs. The beta answers store questions in Slack for two client stores in an internal pilot.',
        'Run development through parallel AI coding agents, where each code change passes automated checks and an independent review before merge and failed reviews are rebuilt. Set the first client launch bar at 90% accuracy on 16 core store questions, and count work as done only once it is seen working in production.',
        'Developed Python workflows that translate approved designs into native email drafts through REST APIs. Implemented asset processing, structured manifests, destination-link checks, account validation and saved-output readback; validated draft creation through user testing.',
        'Built and internally validated a Python reporting pipeline that reconciles source data, calculates metrics deterministically and prepares evidence-backed analysis for human review. Added schema, reporting-period and completeness checks so figures remain traceable to their inputs before review.',
        'Developed TypeScript agent and workflow components with Mastra and PostgreSQL-backed execution state. Implemented structured tool contracts, scoped authorization, approval boundaries and recovery checks, including tests for interrupted processes and database restarts, within a pre-release agent runtime.',
        'Implemented Langfuse tracing and evaluation workflows to inspect model calls, timing, token usage, costs and output quality. Verified development experiments through persisted score readback.',
        'Built reproducible verification workflows using Python test harnesses, GitHub Actions and Playwright browser checks; packaged installation, troubleshooting and operator documentation alongside the implementation.',
        'Co-lead internal AI enablement through workshops, practical exercises and reusable skills and plugins, helping colleagues set up development environments, use agent workflows and take over delivered tools.'
      ],
      tags: 'Python · TypeScript · REST APIs · Mastra · PostgreSQL · Langfuse · Playwright · GitHub Actions'
    },
    {
      id: 'ra',
      title: 'Research Assistant',
      meta: 'McGill Health Psychology Lab · 2025 to present · Montreal',
      bullets: [
        'Refine participant instructions and survey measures for a study of readiness for behavior change; test cursor-tracking procedures and contribute intervention protocols and construct-to-question mapping.',
        'Co-lead an umbrella-review protocol examining stage-of-change measurement in health interventions, including search, appraisal and extraction methods.'
      ],
      link: { label: 'Research methods and contributions', href: '#research' }
    },
    {
      id: 'afterquery',
      title: 'AI Training Expert',
      meta: 'AfterQuery · November 2025 to February 2026 · Remote',
      bullets: [
        'Produced expert training examples for AI models across scientific research, education and finance; refined evaluation rubrics against domain-specific quality criteria.',
        'Assessed model self-grading and output equivalence across evaluation frameworks, reviewing whether scoring methods captured the quality of generated responses.'
      ]
    },
    {
      id: 'tribune',
      title: 'Staff Writer, Science and Technology',
      meta: 'The Tribune · September 2025 to present · Montreal',
      bullets: [
        'Interview researchers and translate findings in neuroscience, physiology, psychology and global health into published research briefs for a general readership.',
        'Report on McGill research and scientific events, explaining study methods, findings and limitations without assuming specialist knowledge.'
      ],
      link: { label: 'Selected articles', href: '#writing' }
    },
    {
      id: 'betatown',
      title: 'Growth and Development Intern',
      meta: 'BetaTown Venture Studio · May to August 2025 · New York',
      bullets: [
        'Built an internal CRM to organize creator and domain-expert outreach, track contacts and support user discovery for early-stage AI media ventures.',
        'Led outreach and market research on AI-assisted publishing, content verification and creator workflows; translated findings into product-strategy work, investor materials and pitch decks.'
      ]
    },
    {
      id: 'doccla',
      title: 'Marketing and Strategy Intern',
      meta: 'Doccla · May to August 2024 · London',
      bullets: [
        'Used Google Analytics and traffic analysis to inform SEO, campaign planning and content decisions for a virtual-ward platform.',
        'Produced patient-story videos, newsletters, web copy and partner outreach for programs in geriatric care, COPD and diabetes, translating remote-care services into patient and partner communications.'
      ]
    },
    {
      id: 'nih',
      title: 'Research Intern',
      meta: 'National Institutes of Health · January to August 2023 · Washington, DC',
      bullets: [
        'Collected participant data and maintained consent documentation for clinical research on chronic back pain in active-duty pilots.'
      ]
    },
    {
      id: 'teaching',
      title: 'Teaching',
      meta: 'Pilates, barre and yoga · LeanBean Fitness, MVMT Pilates, CorePower Yoga and independent instruction',
      bullets: [
        'Designed and delivered group classes and individual sessions, adapting progressions and cueing to different experience levels.',
        'Recognized as CorePower Yoga Teacher of the Month during the first month at the studio.'
      ]
    }
  ],

  projects: [
    {
      id: 'relay',
      title: 'RELAY',
      sub: 'Slack-native customer-success agent · Second Place in the New Slack Agent category of the 2026 Slack Agent Builder Challenge',
      bullets: [
        'Built a customer-support workflow that detects unanswered questions in Slack Connect channels, tracks response deadlines and prepares cited replies for human approval.',
        'Implemented a FastAPI backend with Slack OAuth, event handlers and interactive review controls; used Celery/Redis workers for classification and synchronization, and PostgreSQL/pgvector for question state, embeddings and semantic retrieval.',
        'Connected HubSpot, GitHub and permission-aware Slack search to assemble evidence for drafts. Added an MCP context server, workspace isolation through database row-level security and encrypted connector tokens.',
        'Validated the core loop end to end in a real Slack Connect workspace, from setup and source synchronization through draft review and approved posting.'
      ],
      tags: 'Python · FastAPI · Slack Bolt · PostgreSQL/pgvector · SQLAlchemy · Celery/Redis · OAuth · MCP',
      links: [
        { label: 'Code', href: 'https://github.com/slindelow/relay-slack-agent' },
        { label: 'Demo', href: 'https://youtu.be/vvf3aMxv6k8' }
      ],
      award: 'Second Place',
      figures: []
    },
    {
      id: 'cgnn',
      title: 'Crystal Graph Neural Network',
      sub: 'Guided CaMML modeling project',
      bullets: [
        'Implemented a crystal-property prediction model in PyTorch, using atom and bond features as graph inputs. Built gated message-passing layers, residual updates, crystal-level mean pooling and a regression head.',
        'Wrote batched training and evaluation loops with gradient-based optimization, loss and mean absolute error tracking, and prediction plots; completed a 40-epoch CPU training run.',
        'Compared convolution depth and embedding size in separate validation sweeps, which favored four convolution layers and 128-dimensional embeddings respectively. Kept these findings separate because the combined configuration had not been tested.'
      ],
      tags: 'Python · PyTorch · Graph neural networks · Tensor operations · Regression · Model evaluation',
      links: [{ label: 'Code', href: 'https://github.com/slindelow/cgcnn' }],
      figures: []
    },
    {
      id: 'eeg',
      title: 'EEG and Subsequent-Memory Prediction',
      sub: 'Independent exploratory research',
      bullets: [
        'Defined the research question of whether study-period EEG adds predictive information about later recall beyond behavioral context; directed AI-assisted development of a reproducible analysis pipeline using real PEERS data.',
        'Built the analysis around item-level recall labels, EEG preprocessing and epoching, 128 spectral features, and behavioral, EEG-only and combined logistic-regression models. Required train-only normalization, session-out predictions for the combined model and a held-session evaluation for each participant.',
        'Locked trial and split manifests and bound outputs to provenance records to make comparisons reproducible. Across 38 participants, the selected EEG representation showed no detectable incremental predictive value beyond the behavioral baseline in this exploratory within-participant analysis (mean change in AUC -0.0044, 95% participant-bootstrap interval -0.0121 to 0.0033).'
      ],
      tags: 'Python · MNE · NumPy/pandas/SciPy · scikit-learn · Spectral analysis · Logistic regression · Bootstrap evaluation',
      links: [{ label: 'Code and research report', href: 'https://github.com/slindelow/neuroai-eeg-memory' }],
      figures: [
        { src: '/media/eeg-model-auc.png', w: 1700, h: 1124, caption: 'Figure · Model AUC comparison' },
        { src: '/media/eeg-methods-pipeline.png', w: 1600, h: 900, caption: 'Figure · Methods pipeline' },
        { src: '/media/eeg-primary-increment.png', w: 1878, h: 1124, caption: 'Figure · Primary increment' }
      ]
    },
    {
      id: 'kinase',
      title: 'Kinase-Ligand Affinity Prediction',
      sub: 'Protein representations and molecular screening',
      bullets: [
        'Led AI-assisted development of an affinity-prediction and retrospective screening tool using DAVIS and KIBA, requiring frozen source data, saved evaluation splits and metrics generated directly from code.',
        'Compared RDKit fingerprint-only baselines with models adding amino-acid/dipeptide composition or frozen ESM-2 embeddings; evaluated gradient-boosted models and a Chemprop directed message-passing neural network across the original experiments.',
        'Examined scaffold and protein holdouts, then used MMseqs2 sequence clusters for a stronger DAVIS test. At 40% sequence identity, adding composition features changed the Spearman correlation by -0.0024 (95% interval -0.0277 to 0.0236) relative to the ligand-only baseline, so the earlier protein-ID gain was not detectable under the stronger test.'
      ],
      tags: 'Python · RDKit · scikit-learn · Chemprop/PyTorch · ESM-2 · MMseqs2 · Reproducible evaluation',
      links: [{ label: 'Code and results', href: 'https://github.com/slindelow/receptor-protein-classification' }],
      figures: []
    },
    {
      id: 'tooling',
      title: 'Agent Tooling',
      sub: 'Tools for running AI coding agents across projects',
      bullets: [
        'Built skill-compass, which audits the skills, plugins and MCP servers installed in an agent harness, groups overlapping capabilities by job and generates a routing table, so Claude Code, Codex and Gemini CLI choose tools consistently.',
        'Built Hemingway Bridge, a skill, tested script and two session hooks that leave each project with a validated next step, owner and open questions at the end of every agent session, so the next session continues without being told what to do.'
      ],
      tags: 'Python · Claude Code · Codex · Gemini CLI · Hooks · MCP',
      links: [{ label: 'skill-compass', href: 'https://github.com/slindelow/skill-compass' }],
      figures: []
    },
    {
      id: 'agents',
      title: 'Earlier Agent Projects',
      sub: 'Sales Development Workflows · HIPAA-Guard · Cart Intent Classifier · Growth and Referral Agent · Competitive Intelligence Agent',
      children: [
        {
          title: 'Sales Development Workflows',
          sub: 'Inbound and outbound prospecting prototypes',
          bullets: [
            'Built Python pipelines for inbox ingestion, lead enrichment, urgency scoring, outreach preparation and reply classification, separating model-generated language from deterministic routing and record updates.',
            'Implemented Gmail, Google Sheets and campaign-service integrations to produce prioritized lead queues, pre-call briefs, personalized drafts and structured prospect records.'
          ],
          tags: 'Python · REST APIs · Gmail · Google Sheets · Anthropic API · Structured JSON',
          links: [
            { label: 'Inbound', href: 'https://github.com/slindelow/inbound-leads-agent' },
            { label: 'Outbound', href: 'https://github.com/slindelow/outbound-leads-agent' }
          ]
        },
        {
          title: 'HIPAA-Guard',
          sub: 'Healthcare-code review package',
          bullets: [
            'Built a multi-agent code-review pipeline combining deterministic Python regex and AST checks with AI analysis, proposed fixes, adversarial review and verification by rescanning.',
            'Implemented redaction before model analysis and packaged the workflow as a CLI with pre-commit integration; published the installable package on PyPI.'
          ],
          tags: 'Python · AST analysis · Multi-agent orchestration · CLI tooling · Pre-commit hooks · PyPI',
          links: [
            { label: 'Code', href: 'https://github.com/slindelow/hipaa-guard' },
            { label: 'Package', href: 'https://pypi.org/project/hipaa-guard/' }
          ]
        },
        {
          title: 'Cart Intent Classifier',
          sub: 'Intent-based recovery-email prototype',
          bullets: [
            'Developed an Anthropic-powered classifier that combines purchase history, email engagement and browsing signals into structured intent, confidence, reasoning and proposed email-flow assignments.',
            'Implemented FastAPI webhook endpoints, Redis session storage and Shopify/Klaviyo API clients. Demonstrated the classification workflow with sample customer profiles, returning proposed recovery-email assignments with reasons for each classification.'
          ],
          tags: 'Python · FastAPI · Anthropic API · Redis · Webhooks · Shopify/Klaviyo APIs',
          links: [{ label: 'Code', href: 'https://github.com/slindelow/cart-intent-classifier' }]
        },
        {
          title: 'Growth and Referral Agent',
          sub: 'Product-led growth workflow prototype',
          bullets: [
            'Built Python pipelines that score product-qualified leads, detect usage anomalies and identify referral candidates, with AI-generated messaging layered over deterministic scoring and selection rules.',
            'Demonstrated conversion and referral workflows with synthetic user data, producing segmented messages, structured reports and spreadsheet exports; implemented HTTP and reporting integrations for downstream delivery.'
          ],
          tags: 'Python · Deterministic scoring · AI orchestration · Google Sheets · HTTP integrations',
          links: [{ label: 'Code', href: 'https://github.com/slindelow/growth-agent' }]
        },
        {
          title: 'Competitive Intelligence Agent',
          sub: 'Source-backed competitor research',
          bullets: [
            'Developed a pipeline that collects pricing, product, review, hiring and funding signals, then organizes the evidence into structured competitor analysis.',
            'Combined source retrieval and AI synthesis to produce HTML and spreadsheet reports with supporting references, making the underlying observations available for review.'
          ],
          tags: 'Python · Source retrieval · Structured model outputs · HTML reporting · Google Sheets',
          links: [{ label: 'Code', href: 'https://github.com/slindelow/competitor-analysis-agent' }]
        }
      ],
      figures: []
    }
  ],

  research: {
    lab: {
      title: 'McGill Health Psychology Lab',
      meta: 'Research Assistant · 2025 to present',
      studies: [
        {
          title: 'Readiness for Behavior Change',
          bullets: [
            'Refined participant instructions and survey measures; tested cursor-tracking procedures for a study of uncertainty in self-reported readiness for change.',
            'Contributed a four-week intervention protocol, selection of validated questionnaires and construct-to-question mapping; supported sampling, preregistration and ethics preparation.'
          ],
          tags: 'Behavioral study design · Qualtrics · Prolific · Cursor tracking'
        },
        {
          title: 'Stage-of-Change Measurement',
          bullets: [
            'Co-lead an umbrella-review protocol examining how systematic reviews and meta-analyses report stage-of-change measurement and its relationship to intervention outcomes.',
            'Develop search, appraisal and extraction methods to support a structured synthesis of measurement fidelity.'
          ]
        }
      ]
    },
    independent: {
      title: 'Independent Computational Research',
      items: [
        { label: 'EEG and memory', href: 'https://github.com/slindelow/neuroai-eeg-memory', text: 'Evaluated whether spectral EEG adds predictive information beyond behavior, using held-session comparisons and reproducible analysis.' },
        { label: 'Protein-affinity modeling', href: 'https://github.com/slindelow/receptor-protein-classification', text: 'Examined whether protein-feature gains survive stronger generalization tests, including sequence-cluster holdouts.' }
      ]
    },
    interests: 'Research interests include behavioral measurement, learning and memory, computational neuroscience and AI applications in health.'
  },

  writing: [
    {
      title: 'Lake House Group Learning Blog',
      items: [
        { label: 'How to Set Up an Agentic Workspace for Ecommerce', href: 'https://lakehousegrp.com/en/learn/how-to-set-up-an-agentic-workspace-for-ecommerce/', date: 'September 2026' },
        { label: 'Browse the learning blog', href: 'https://lakehousegrp.com/en/learn/' }
      ]
    },
    {
      title: 'The Tribune',
      items: [
        { label: 'Advances and Challenges in Viral Diseases and Their Emerging Therapies', href: 'https://www.thetribune.ca/sci-tech/advances-and-challenges-in-viral-diseases-and-their-emerging-therapies-11112025/', date: 'November 2025' },
        { label: 'Sex-Specific Autonomic Signatures of Tonic Pain', href: 'https://www.thetribune.ca/sci-tech/sex-specific-autonomic-signatures-of-tonic-pain-04112025/', date: 'November 2025' },
        { label: 'Designing Culturally Safe Interventions in Obstetrics', href: 'https://www.thetribune.ca/sci-tech/designing-culturally-safe-interventions-in-obstetrics-30092025/', date: 'September 2025' }
      ]
    },
    {
      title: 'Substack',
      items: [{ label: 'Independent writing', href: 'https://substack.com/@sofialindelow' }]
    }
  ],

  education: [
    {
      title: 'McGill University',
      meta: 'BSc, Psychology major and Interdisciplinary Life Sciences minor · Expected June 2027',
      text: 'Coursework includes neuroscience, cognition, statistics, experimental design, Python programming and physiology.'
    },
    {
      title: 'University of New South Wales',
      meta: 'Semester abroad · 2026',
      text: 'Cognitive science, social and developmental psychology, creative entrepreneurship and criminal psychology.'
    },
    {
      title: 'Additional Learning',
      meta: 'Anthropic · July 2026',
      links: [
        { label: 'Claude Code 101', href: 'https://verify.skilljar.com/c/2cqmhwi98e3y' },
        { label: 'AI Fluency for Students', href: 'https://verify.skilljar.com/c/6sist5uhqouv' },
        { label: 'MCP Advanced Topics', href: 'https://verify.skilljar.com/c/m3orwpue39jw' }
      ]
    }
  ],

  contact: [
    { label: 'Email', href: 'mailto:sofiaklindelow@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sofia-lindelow/' },
    { label: 'GitHub', href: 'https://github.com/slindelow' }
  ]
};
