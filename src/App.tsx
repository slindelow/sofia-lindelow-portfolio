import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { credentials, experience, projects, research, writing } from './data'

const tabs = [
  { id: 'profile', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

type TabId = (typeof tabs)[number]['id']

function isTabId(value: string): value is TabId {
  return tabs.some((tab) => tab.id === value)
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children}<span aria-hidden="true"> ↗</span>
    </a>
  )
}

function PageHeader({ index, title, note }: { index: string; title: string; note: string }) {
  return (
    <header className="page-head">
      <div>
        <p className="page-kicker">File {index}</p>
        <h1>{title}</h1>
      </div>
      <p className="page-note">{note}</p>
    </header>
  )
}

function ProfilePanel({ openTab }: { openTab: (tab: TabId) => void }) {
  return (
    <section aria-labelledby="profile-title">
      <PageHeader index="01" title="Sofia Lindelow" note="Montreal, Canada" />
      <div className="profile-grid">
        <div>
          <p className="role-line">Forward Deployed Engineer and AI Architect at Lake House Group</p>
          <h2 id="profile-title" className="profile-headline">
            Currently working in applied AI and technological adoption, passionate about health innovation and neuroscience, and driven to continuously learn and innovate.
          </h2>
          <div className="profile-actions">
            <button type="button" onClick={() => openTab('projects')}>View projects</button>
            <button type="button" onClick={() => openTab('research')}>View research</button>
            <a href="/Sofia_Lindelow_CV.pdf" target="_blank" rel="noreferrer">Open CV</a>
          </div>
        </div>
        <aside className="index-card" aria-label="Profile summary">
          <p className="card-label">Current record</p>
          <dl>
            <div><dt>Role</dt><dd>Forward Deployed AI Engineer</dd></div>
            <div><dt>Research</dt><dd>Health psychology and neuroscience</dd></div>
            <div><dt>Education</dt><dd>McGill BSc, expected 2027</dd></div>
            <div><dt>Focus</dt><dd>Applied AI and health innovation</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  )
}

function ExperiencePanel() {
  return (
    <section aria-labelledby="experience-title">
      <PageHeader index="02" title="Experience" note="Selected professional record" />
      <h2 id="experience-title" className="sr-only">Professional experience</h2>
      <div className="record-list">
        {experience.map((item) => (
          <article className="record-row" key={`${item.organization}-${item.role}`}>
            <p className="record-date">{item.period}</p>
            <div>
              <h3>{item.role}</h3>
              <p className="record-org">{item.organization} · {item.location}</p>
            </div>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ResearchPanel() {
  return (
    <section aria-labelledby="research-title">
      <PageHeader index="03" title="Research" note="Laboratory and independent work" />
      <h2 id="research-title" className="sr-only">Research experience</h2>
      <div className="research-list">
        {research.map((item) => (
          <article className="research-file" key={item.title}>
            <div className="research-meta">
              <p className="card-label">{item.label}</p>
              <p>{item.period}</p>
            </div>
            <h3>{item.title}</h3>
            <p className="record-org">{item.organization}</p>
            <p>{item.description}</p>
            <ul className="tag-list" aria-label="Methods">
              {item.methods.map((method) => <li key={method}>{method}</li>)}
            </ul>
            {item.link && <ExternalLink href={item.link}>Repository and report</ExternalLink>}
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectsPanel() {
  return (
    <section aria-labelledby="projects-title">
      <PageHeader index="04" title="Projects" note={`${projects.length} public repositories`} />
      <h2 id="projects-title" className="sr-only">Selected projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <a className="project-file" href={project.link} target="_blank" rel="noreferrer" key={project.name}>
            <div className="project-file-top">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{project.category}</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <span className="open-record">Open repository <span aria-hidden="true">↗</span></span>
          </a>
        ))}
      </div>
    </section>
  )
}

function WritingPanel() {
  return (
    <section aria-labelledby="writing-title">
      <PageHeader index="05" title="Writing" note="Independent and published work" />
      <h2 id="writing-title" className="sr-only">Selected writing</h2>
      <div className="writing-list">
        {writing.map((piece, index) => (
          <a className="writing-record" href={piece.link} target="_blank" rel="noreferrer" key={piece.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p className="card-label">{piece.topic}</p>
              <h3>{piece.title}</h3>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function EducationPanel() {
  return (
    <section aria-labelledby="education-title">
      <PageHeader index="06" title="Education" note="Academic record and credentials" />
      <h2 id="education-title" className="sr-only">Education and credentials</h2>
      <div className="education-grid">
        <article className="education-record">
          <p className="card-label">Expected 2027 · Montreal, Canada</p>
          <h3>McGill University</h3>
          <p>Bachelor of Science, Major in Psychology and Minor in Interdisciplinary Life Sciences</p>
          <p className="detail">Coursework includes integrative and behavioral neuroscience, cognition, statistics, physiology, programming, global health, and research methods.</p>
        </article>
        <article className="education-record">
          <p className="card-label">2026 · Sydney, Australia</p>
          <h3>University of New South Wales</h3>
          <p>Semester abroad</p>
          <p className="detail">Coursework in cognitive science, social and developmental psychology, creative entrepreneurship, and criminal psychology.</p>
        </article>
      </div>
      <div className="credential-section">
        <div className="subsection-head">
          <p className="page-kicker">Verified credentials</p>
          <p>Issued by Anthropic · July 2026</p>
        </div>
        <div className="credential-list">
          {credentials.map((credential) => (
            <a className="credential-record" href={credential.link} target="_blank" rel="noreferrer" key={credential.id}>
              <span className="credential-mark" aria-hidden="true">AI</span>
              <span>
                <strong>{credential.title}</strong>
                <small>{credential.issuer} · Credential ID {credential.id}</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPanel() {
  return (
    <section aria-labelledby="contact-title">
      <PageHeader index="07" title="Contact" note="Professional links" />
      <div className="contact-grid">
        <div>
          <h2 id="contact-title">Sofia Eva Kuttner Lindelow</h2>
          <p>Forward Deployed Engineer and AI Architect based in Montreal.</p>
        </div>
        <address>
          <a href="mailto:sofiaklindelow@gmail.com">sofiaklindelow@gmail.com</a>
          <a href="https://www.linkedin.com/in/sofia-lindelow/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/slindelow" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="/Sofia_Lindelow_CV.pdf" target="_blank" rel="noreferrer">Curriculum vitae ↗</a>
        </address>
      </div>
    </section>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    const hash = window.location.hash.slice(1)
    return isTabId(hash) ? hash : 'profile'
  })
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1)
      if (isTabId(hash)) setActiveTab(hash)
    }
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  const openTab = (tab: TabId) => {
    setActiveTab(tab)
    window.history.replaceState(null, '', `#${tab}`)
  }

  const handleTabKey = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let next = index
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = tabs.length - 1
    openTab(tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  const panels: Record<TabId, React.ReactNode> = {
    profile: <ProfilePanel openTab={openTab} />,
    experience: <ExperiencePanel />,
    research: <ResearchPanel />,
    projects: <ProjectsPanel />,
    writing: <WritingPanel />,
    education: <EducationPanel />,
    contact: <ContactPanel />,
  }

  return (
    <main className="desk">
      <header className="deskbar">
        <a href="#profile" className="nameplate" onClick={() => openTab('profile')}>
          <strong>Sofia Lindelow</strong>
          <span>Portfolio index · 2026</span>
        </a>
        <div className="deskbar-actions">
          <span className="status">Forward Deployed Engineer · AI Architect</span>
          <a className="cv-link" href="/Sofia_Lindelow_CV.pdf" target="_blank" rel="noreferrer">CV</a>
        </div>
      </header>

      <div className="cabinet">
        <nav className="tabs" role="tablist" aria-label="Portfolio sections">
          {tabs.map((tab, index) => (
            <motion.button
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls="portfolio-panel"
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`tab tab-${tab.id}`}
              key={tab.id}
              ref={(node) => { tabRefs.current[index] = node }}
              onClick={() => openTab(tab.id)}
              onKeyDown={(event) => handleTabKey(event, index)}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { y: 0 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </nav>

        <div className={`folder folder-${activeTab}`}>
          <div className="folder-crease" aria-hidden="true" />
          <div
            className="sheet"
            id="portfolio-panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                {panels[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <footer className="desk-footer">
        <span>Selected professional, research, and technical work</span>
        <span>Montreal · 2026</span>
      </footer>
    </main>
  )
}

export default App
