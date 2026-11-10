import { useEffect, useRef, type CSSProperties } from 'react'
import { contact, earlierProjectsTitle, education, profile, projects, research, sections, work, writing, type Project } from './content'
import { BackIcon, PlayIcon, RevealFigure, Stack, TextLink, useActiveSection, useReadingFocus } from './components'
import { navigate, scrollToSection, usePath } from './router'

const sectionIds = sections.map((s) => s.id)
const CV_HREF = '/Sofia_Lindelow_CV.pdf'

const titleName = (slug: string) => ({ viewTransitionName: `title-${slug}` }) as CSSProperties

export default function App() {
  const path = usePath()
  const match = path.match(/^\/projects\/([^/]+)\/?$/)
  const project = match ? projects.find((p) => p.slug === match[1]) : undefined

  useEffect(() => {
    document.title = project ? `${project.title} · ${profile.name}` : profile.name
  }, [project])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollProgress />
      {project ? <ProjectPage project={project} /> : <Home />}
    </>
  )
}

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (ref.current) ref.current.style.transform = `scaleX(${p})`
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame) }
  }, [])
  return <div className="progress" ref={ref} aria-hidden="true" />
}

/* ---------------- home ---------------- */

function Home() {
  const active = useActiveSection(sectionIds, true)

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <div className="home">
      <SiteBar active={active} />
      <main id="main" className="column">
        <Hero />
        <Work />
        <Projects />
        <Research />
        <Writing />
        <Education />
        <Contact />
      </main>
      <footer className="column footer">
        <span>{profile.name}</span>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top</a>
      </footer>
    </div>
  )
}

function SiteBar({ active }: { active: string }) {
  const index = sections.findIndex((s) => s.id === active)
  return (
    <>
      <a className={`mini-name${active ? ' is-on' : ''}`} href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        {profile.name}
      </a>
      <nav className="side-index" aria-label="Sections" style={{ ['--i' as string]: Math.max(index, 0) } as CSSProperties}>
        <span className={`side-marker${index >= 0 ? ' is-on' : ''}`} aria-hidden="true" />
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`/#${s.id}`}
                aria-current={active === s.id ? 'true' : undefined}
                onClick={(e) => { e.preventDefault(); scrollToSection(s.id) }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="top-index" aria-label="Sections">
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`/#${s.id}`} aria-current={active === s.id ? 'true' : undefined} onClick={(e) => { e.preventDefault(); scrollToSection(s.id) }}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

function Hero() {
  return (
    <header className="hero" id="top">
      <h1 className="hero-name" aria-label={profile.name}>
        <span className="line" aria-hidden="true"><span>Sofia</span></span>
        <span className="line" aria-hidden="true"><span>Lindelow</span></span>
      </h1>
      <p className="hero-headline">{profile.headline}</p>
      <p className="hero-statement">{profile.statement}</p>
      <p className="hero-degree">{profile.degree}</p>
      <ul className="hero-links">
        {contact.map((c) => (
          <li key={c.label}><TextLink href={c.href}>{c.label}</TextLink></li>
        ))}
        <li><TextLink href={CV_HREF}>CV</TextLink></li>
      </ul>
    </header>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">{title}</h2>
      {children}
    </section>
  )
}

function Work() {
  const ref = useRef<HTMLDivElement>(null)
  useReadingFocus(ref)
  return (
    <Section id="work" title="Work Experience">
      <div className="focus-list" ref={ref}>
        {work.map((r) => (
          <article key={r.title} className="role" data-focus>
            <h3 className="role-title">{r.title}</h3>
            <p className="meta">{r.meta}</p>
            {r.summary && <p className="role-summary">{r.summary}</p>}
            <ul className="bullets">
              {r.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            {r.stack && <Stack text={r.stack} />}
            {r.link && <p className="role-link"><TextLink href={r.link.href}>{r.link.label}</TextLink></p>}
          </article>
        ))}
      </div>
    </Section>
  )
}

function ProjectVisual({ project, eager = false }: { project: Project; eager?: boolean }) {
  if (project.video) {
    return (
      <a className="video" href={project.video.href} target="_blank" rel="noreferrer" aria-label={`${project.video.alt} on YouTube`}>
        <RevealFigure src={project.video.thumb} alt="" wide eager={eager} />
        <span className="video-play"><PlayIcon /></span>
      </a>
    )
  }
  if (project.figures?.length) return <RevealFigure src={project.figures[0].src} alt={project.figures[0].alt} wide eager={eager} />
  return null
}

function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  useReadingFocus(ref)
  const principal = projects.filter((p) => p.principal)
  const earlier = projects.filter((p) => !p.principal)
  return (
    <Section id="projects" title="Personal Projects">
      <div className="focus-list" ref={ref}>
        {principal.map((p) => (
          <article key={p.slug} className="project" data-focus>
            <h3 className="project-title">
              <a href={`/projects/${p.slug}`} style={titleName(p.slug)} onClick={(e) => { e.preventDefault(); navigate(`/projects/${p.slug}`) }}>
                {p.title}
              </a>
            </h3>
            <p className="meta">{p.subtitle}</p>
            <ProjectVisual project={p} />
            <p className="project-lead">{p.bullets[0]}</p>
            <Stack text={p.stack} />
            <ul className="link-row">
              <li><TextLink href={`/projects/${p.slug}`}>Read the full project</TextLink></li>
              {p.links.map((l) => <li key={l.href}><TextLink href={l.href}>{l.label}</TextLink></li>)}
            </ul>
          </article>
        ))}
        <div className="earlier" data-focus>
          <h3 className="earlier-title">{earlierProjectsTitle}</h3>
          <ul className="earlier-list">
            {earlier.map((p) => (
              <li key={p.slug}>
                <a href={`/projects/${p.slug}`} onClick={(e) => { e.preventDefault(); navigate(`/projects/${p.slug}`) }}>
                  <span className="earlier-name" style={titleName(p.slug)}>{p.title}</span>
                  <span className="earlier-sub">{p.subtitle}</span>
                  <svg className="icon earlier-arrow" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6 H9.5 M6.5 3 L9.5 6 L6.5 9" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Research() {
  const { lab, independent } = research
  return (
    <Section id="research" title="Research">
      <article className="block">
        <h3 className="block-title">{lab.title}</h3>
        <p className="meta">{lab.meta}</p>
        {lab.studies.map((s) => (
          <div key={s.title} className="study">
            <h4 className="study-title">{s.title}</h4>
            <ul className="bullets">{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            {s.stack && <Stack text={s.stack} />}
          </div>
        ))}
      </article>
      <article className="block">
        <h3 className="block-title">{independent.title}</h3>
        <ul className="bullets">
          {independent.items.map((i) => (
            <li key={i.href}><a className="inline-link" href={i.href} target="_blank" rel="noreferrer">{i.label}</a>. {i.text}</li>
          ))}
        </ul>
        <p className="note">{independent.interests}</p>
      </article>
    </Section>
  )
}

function Writing() {
  return (
    <Section id="writing" title="Writing">
      {writing.map((g) => (
        <article key={g.title} className="block">
          <h3 className="block-title">{g.title}</h3>
          <ul className="entries">
            {g.items.map((i) => (
              <li key={i.href}>
                <TextLink href={i.href}>{i.label}</TextLink>
                {i.date && <span className="entry-date">{i.date}</span>}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Section>
  )
}

function Education() {
  return (
    <Section id="education" title="Education">
      {education.map((e) => (
        <article key={e.title} className="block">
          <h3 className="block-title">{e.title}</h3>
          <p className="meta">{e.meta}</p>
          {e.text && <p className="body">{e.text}</p>}
          {e.links && (
            <ul className="link-row">
              {e.links.map((l) => <li key={l.href}><TextLink href={l.href}>{l.label}</TextLink></li>)}
            </ul>
          )}
        </article>
      ))}
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <ul className="contact-list">
        {contact.map((c) => (
          <li key={c.label}><TextLink href={c.href}>{c.label}</TextLink></li>
        ))}
      </ul>
    </Section>
  )
}

/* ---------------- project page ---------------- */

function ProjectPage({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  const extraFigures = project.video ? project.figures ?? [] : (project.figures ?? []).slice(1)

  return (
    <div className="detail">
      <header className="detail-bar column">
        <a className="back" href="/#projects" onClick={(e) => { e.preventDefault(); navigate('/#projects') }}>
          <BackIcon /> <span>All projects</span>
        </a>
        <a className="detail-name" href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>{profile.name}</a>
      </header>
      <main id="main" className="column detail-main">
        <h1 className="detail-title" style={titleName(project.slug)}>{project.title}</h1>
        <p className="detail-sub">{project.subtitle}</p>
        <div className="detail-visual"><ProjectVisual project={project} eager /></div>
        <ul className="bullets detail-bullets">
          {project.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <Stack text={project.stack} />
        {project.links.length > 0 && (
          <ul className="link-row">
            {project.links.map((l) => <li key={l.href}><TextLink href={l.href}>{l.label}</TextLink></li>)}
          </ul>
        )}
        {extraFigures.length > 0 && (
          <div className="figure-grid">
            {extraFigures.map((f) => <RevealFigure key={f.src} src={f.src} alt={f.alt} />)}
          </div>
        )}
        <nav className="next" aria-label="Next project">
          <a href={`/projects/${next.slug}`} onClick={(e) => { e.preventDefault(); navigate(`/projects/${next.slug}`) }}>
            <span className="next-label">Next project</span>
            <span className="next-title">{next.title}</span>
          </a>
        </nav>
      </main>
    </div>
  )
}
