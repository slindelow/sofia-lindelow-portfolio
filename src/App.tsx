import { useEffect, useState, type ReactNode } from 'react'
import { featured, profile, projectGroups, research, sections, writing, type SectionId } from './data'

function isSectionId(value: string): value is SectionId {
  return sections.some((section) => section.id === value)
}

function External({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer noopener">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}

function App() {
  const [current, setCurrent] = useState<SectionId | ''>(() => {
    const hash = window.location.hash.slice(1)
    return isSectionId(hash) ? hash : ''
  })

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        const next = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (next?.target.id && isSectionId(next.target.id)) setCurrent(next.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4, 0.7] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="shell">
      <a className="skip" href="#work">
        Skip to work
      </a>
      <header className="identity">
        <div className="identity-intro">
          <p className="location">{profile.location}</p>
          <h1>
            <span>{profile.givenName}</span>
            {profile.familyName}
          </h1>
          <p className="about">{profile.about}</p>
          <p className="role">{profile.role}</p>
        </div>
        <div className="identity-foot">
          <nav aria-label="On this page">
            <ul>
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={current === section.id ? 'true' : undefined}
                    onClick={() => setCurrent(section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <address>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <External href={profile.linkedin}>LinkedIn</External>
            <External href={profile.github}>GitHub</External>
            <External href={profile.cv}>Curriculum vitae</External>
          </address>
        </div>
      </header>

      <main>
        <section id="work" aria-labelledby="work-title">
          <h2 id="work-title">Selected work</h2>
          <div className="featured">
            {featured.map((project, index) => (
              <External
                key={project.name}
                href={project.link}
                className={index === 0 ? 'feature feature-lead' : 'feature'}
              >
                <p className="category">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="feature-foot">
                  <Tags tags={project.tags} />
                  <span className="go">
                    Repository <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </External>
            ))}
          </div>

          <div className="indexed">
            <h3 className="indexed-title">Other public repositories</h3>
            {projectGroups.map((group) => (
              <div className="group" key={group.category}>
                <h4>{group.category}</h4>
                <ul>
                  {group.projects.map((project) => (
                    <li key={project.name}>
                      <External href={project.link} className="repo">
                        <span className="repo-name">
                          {project.name}
                          <span aria-hidden="true"> ↗</span>
                        </span>
                        <span className="repo-copy">
                          {project.description}
                          <Tags tags={project.tags} />
                        </span>
                      </External>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="research" aria-labelledby="research-title">
          <div className="research-copy">
            <h2 id="research-title">Research</h2>
            <p className="category">
              {research.label} · {research.period}
            </p>
            <h3>{research.title}</h3>
            <p className="organization">{research.organization}</p>
            <p>{research.description}</p>
            <ul className="methods" aria-label="Methods">
              {research.methods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
            <External className="text-link" href={research.link}>
              Repository and report
              <span aria-hidden="true"> ↗</span>
            </External>
          </div>
        </section>

        <section id="writing" aria-labelledby="writing-title">
          <h2 id="writing-title">Writing</h2>
          <ul className="writing">
            {writing.map((piece) => (
              <li key={piece.title}>
                <External href={piece.link}>
                  <p className="byline">
                    <span>{piece.outlet}</span>
                    <span>{piece.topic}</span>
                  </p>
                  <h3>{piece.title}</h3>
                </External>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="closing" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <p className="contact-name">{profile.fullName}</p>
          <p>{profile.contactLine}</p>
          <a className="email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="closing-links">
            <li>
              <External href={profile.linkedin}>LinkedIn</External>
            </li>
            <li>
              <External href={profile.github}>GitHub</External>
            </li>
            <li>
              <External href={profile.cv}>Curriculum vitae</External>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
