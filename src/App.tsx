import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { ArrowLink, Eyebrow, Reveal } from './components'
import { experience, projects, writing } from './data'

const email = 'sofiaklindelow@gmail.com'

function Navigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Sofia Lindelow, back to top">
        <span>Sofia</span>
        <span>Lindelow</span>
      </a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((current) => !current)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#research">Research</a>
        <a href="/Sofia_Lindelow_CV.pdf" target="_blank" rel="noreferrer">CV</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.25 })

  return (
    <div id="top">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Navigation />

      <main>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Forward Deployed AI Engineer at Lake House Group
          </div>
          <div className="hero-grid">
            <div>
              <motion.h1 id="hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                I build AI systems, test ideas with real data, and document what the evidence says.
              </motion.h1>
            </div>
            <motion.div className="hero-aside" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.75 }}>
              <p>
                I work across AI engineering, behavioral research, and health technology. My focus is the full path
                from a messy question to a tested system that another person can understand and use.
              </p>
              <div className="hero-links">
                <ArrowLink href="#work">See selected work</ArrowLink>
                <ArrowLink href="/Sofia_Lindelow_CV.pdf">Read my full CV</ArrowLink>
                <ArrowLink href={`mailto:${email}`}>Start a conversation</ArrowLink>
              </div>
            </motion.div>
          </div>
          <div className="hero-index" aria-label="At a glance">
            <span>Montreal, Canada</span>
            <span>McGill BSc Psychology</span>
            <span>AI systems and research</span>
            <span>Expected graduation 2027</span>
          </div>
        </section>

        <section id="work" className="case-study section-shell" aria-labelledby="neuroai-title">
          <Reveal className="section-heading">
            <Eyebrow>01 / Flagship research build</Eyebrow>
            <h2 id="neuroai-title">NeuroAI</h2>
            <p className="section-lede">
              A leakage-safe EEG subsequent-memory project built to answer a narrow question honestly: does brain
              activity recorded while a person studies a word add held-session predictive information about later
              recall beyond what the word and its position already predict?
            </p>
          </Reveal>

          <Reveal className="case-hero-card">
            <div className="case-hero-copy">
              <span className="case-label">Research question to reproducible model</span>
              <h3>The work was the point.</h3>
              <p>
                I worked with real PEERS EEG data, defined item-level recall outcomes, built the behavioral and EEG
                models, controlled leakage across held sessions, recorded scientific decisions, and reproduced the
                full analysis from a clean root before opening the result.
              </p>
              <div className="metric-row" aria-label="Project facts">
                <span><b>38</b> participants</span>
                <span><b>3</b> linked models</span>
                <span><b>370</b> portable tests</span>
              </div>
            </div>
            <div className="case-visual paper-frame">
              <img src="/neuroai/neuroai-methods-pipeline.png" alt="Diagram showing the behavioral B3 model, EEG M1 model, and stacked M3 comparison" width="1600" height="900" />
            </div>
          </Reveal>

          <div className="model-grid" aria-label="NeuroAI models">
            {[
              {
                label: 'B3',
                title: 'Behavioral baseline',
                copy: 'Predicts recall without EEG using serial position, session and list context, word length, frequency, and leakage-safe memorability.',
              },
              {
                label: 'M1',
                title: 'EEG model',
                copy: 'Summarizes 300 to 1600 ms of study-period EEG as spectral power across fixed frequencies, time bins, and scalp regions.',
              },
              {
                label: 'M3',
                title: 'Incremental test',
                copy: 'Combines session-out B3 and M1 probabilities to test whether EEG changes held-session discrimination beyond behavior.',
              },
            ].map((model, index) => (
              <Reveal className="model-card" delay={index * 0.08} key={model.label}>
                <span className="model-code">{model.label}</span>
                <h3>{model.title}</h3>
                <p>{model.copy}</p>
              </Reveal>
            ))}
          </div>

          <div className="research-process" id="research">
            <Reveal className="process-copy">
              <Eyebrow>Research process</Eyebrow>
              <h3>Designed to make the result difficult to overstate.</h3>
              <p>
                The highest eligible session for each participant stayed outside model fitting, EEG normalization,
                and hyperparameter selection. M3 learned from session-out predictions rather than predictions made
                on rows a model had already fitted. The current analysis remains exploratory because labeled
                same-cohort findings influenced part of M1's design.
              </p>
              <ol className="process-list">
                <li><span>01</span>Audit the dataset and construct exact item-level labels.</li>
                <li><span>02</span>Build the behavioral benchmark before adding EEG.</li>
                <li><span>03</span>Freeze the feature, split, learner, and claim contracts.</li>
                <li><span>04</span>Run held-session B3, M1, and M3 evaluation.</li>
                <li><span>05</span>Verify provenance and reproduce from a clean root.</li>
              </ol>
            </Reveal>
            <Reveal className="paper-frame process-visual">
              <img src="/neuroai/neuroai-leakage-controls.png" alt="Diagram showing held-session and inner training boundaries used to prevent leakage" width="1600" height="900" loading="lazy" />
            </Reveal>
          </div>

          <div className="evidence-gallery">
            <Reveal>
              <figure className="evidence-figure">
                <div className="paper-frame">
                  <img
                    src="/neuroai/serial-position-curve.png"
                    alt="Recall probability across each of the 16 serial positions in a study list"
                    width="1050"
                    height="675"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>Behavioral evidence</span>
                  Recall changed across the list, showing why serial position belonged in B3 before EEG could claim
                  added value.
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.08}>
              <figure className="evidence-figure">
                <div className="paper-frame">
                  <img
                    src="/neuroai/model-auc-comparison.png"
                    alt="Held-session AUC distributions for the behavioral B3, EEG M1, and combined M3 models"
                    width="1700"
                    height="1124"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>Model comparison</span>
                  The behavioral model discriminated recalled from forgotten words better than the selected EEG
                  representation. M3 did not improve on B3.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="result-grid">
            <Reveal className="paper-frame result-visual">
              <img src="/neuroai/primary-increment.png" alt="Participant-level change in AUC between the combined M3 model and behavioral B3 baseline" width="1878" height="1124" loading="lazy" />
            </Reveal>
            <Reveal className="result-copy">
              <Eyebrow>Primary result</Eyebrow>
              <p className="big-number">-0.0044</p>
              <p className="metric-label">mean participant change in AUC</p>
              <p>
                In this prespecified exploratory pipeline, the selected study-period EEG features did not add
                detectable held-session predictive information about later recall beyond the behavioral baseline.
                This does not prove that EEG cannot help. It defines what this representation and evaluation did not
                demonstrate.
              </p>
              <div className="result-boundary">95% participant-bootstrap interval: [-0.0121, 0.0033]</div>
            </Reveal>
          </div>

          <div className="case-actions">
            <ArrowLink href="https://github.com/slindelow/neuroai-eeg-memory">Explore the code and full report</ArrowLink>
          </div>
        </section>

        <section className="project-section section-shell" aria-labelledby="projects-title">
          <Reveal className="section-heading compact-heading">
            <Eyebrow>02 to 05 / Selected systems</Eyebrow>
            <h2 id="projects-title">Built end to end</h2>
            <p className="section-lede">
              Each project separates deterministic operations from model reasoning, makes risky actions visible, and
              leaves enough documentation for another person to operate the system.
            </p>
          </Reveal>
          <div className="project-list">
            {projects.map((project) => (
              <Reveal key={project.name}>
                <a className="project-row" href={project.link} target="_blank" rel="noreferrer">
                  <span className="project-number">{project.number}</span>
                  <span className="project-main">
                    <span className="project-name">{project.name}</span>
                    <span className="project-type">{project.type}</span>
                  </span>
                  <span className="project-description">{project.description}</span>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                  <span className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section section-shell" aria-labelledby="experience-title">
          <Reveal className="section-heading compact-heading">
            <Eyebrow>Experience</Eyebrow>
            <h2 id="experience-title">Across the full problem</h2>
            <p className="section-lede">
              My work sits between technical implementation, research judgment, and the people who have to use the
              result.
            </p>
          </Reveal>
          <div className="experience-list">
            {experience.map((item) => (
              <Reveal className="experience-row" key={`${item.organization}-${item.role}`}>
                <span className="experience-period">{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-org">{item.organization}</p>
                </div>
                <div>
                  <p>{item.summary}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="writing-section section-shell" aria-labelledby="writing-title">
          <Reveal className="section-heading compact-heading">
            <Eyebrow>Science writing</Eyebrow>
            <h2 id="writing-title">Make the complex legible</h2>
          </Reveal>
          <div className="writing-grid">
            {writing.map((piece, index) => (
              <Reveal delay={index * 0.08} key={piece.title}>
                <a className="writing-card" href={piece.link} target="_blank" rel="noreferrer">
                  <span className="writing-topic">{piece.topic}</span>
                  <h3>{piece.title}</h3>
                  <span className="read-link">Read at The Tribune <span aria-hidden="true">↗</span></span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h2 id="contact-title">Bring me a real problem.</h2>
            <p>I am most interested in work where research, AI systems, and human judgment have to fit together.</p>
            <div className="contact-links">
              <ArrowLink href={`mailto:${email}`} className="contact-primary">Email me</ArrowLink>
              <ArrowLink href="https://www.linkedin.com/in/sofia-lindelow/">LinkedIn</ArrowLink>
              <ArrowLink href="https://github.com/slindelow">GitHub</ArrowLink>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <span>Sofia Eva Kuttner Lindelow</span>
        <span>Built with evidence, curiosity, and careful iteration.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
