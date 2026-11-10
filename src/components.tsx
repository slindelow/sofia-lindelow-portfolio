import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react'
import { navigate } from './router'

/* ---------- icons (authored SVG, one stroke weight) ---------- */

export function ArrowIcon({ external = false }: { external?: boolean }) {
  return (
    <svg className="icon" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      {external ? (
        <path d="M3.5 8.5 L8.5 3.5 M4.5 3.5 H8.5 V7.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M2 6 H9.5 M6.5 3 L9.5 6 L6.5 9" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

export function BackIcon() {
  return (
    <svg className="icon" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M10 6 H2.5 M5.5 3 L2.5 6 L5.5 9" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M6 4.2 L14 9 L6 13.8 Z" fill="currentColor" />
    </svg>
  )
}

/* ---------- links ---------- */

export function TextLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  const external = /^https?:/.test(href)
  const mail = href.startsWith('mailto:')
  const file = href.endsWith('.pdf')
  const internal = !external && !mail && !file
  return (
    <a
      className={`text-link ${className}`}
      href={href}
      target={external || file ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={internal ? (e) => { e.preventDefault(); navigate(href) } : undefined}
    >
      <span className="text-link-label">{children}</span>
      {!mail && <ArrowIcon external={external || file} />}
    </a>
  )
}

/* ---------- scroll helpers ---------- */

/** The section whose top has most recently passed the upper third of the viewport. */
export function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState<string>('')
  useEffect(() => {
    if (!enabled) return
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return
    let frame = 0
    const measure = () => {
      frame = 0
      const line = window.innerHeight * 0.33
      let current = ''
      for (const el of els) if (el.getBoundingClientRect().top <= line) current = el.id
      // at the very bottom the last, short section can never reach the line
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      if (atBottom && current) current = els[els.length - 1].id
      setActive(current)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure) }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame) }
  }, [ids, enabled])
  return active
}

/** Marks the [data-focus] item nearest the reading line with data-current, so CSS can dim the rest. */
export function useReadingFocus(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const items = [...root.querySelectorAll<HTMLElement>('[data-focus]')]
    let frame = 0
    const measure = () => {
      frame = 0
      const line = window.innerHeight * 0.42
      let best: HTMLElement | null = null
      let bestDist = Infinity
      for (const el of items) {
        const r = el.getBoundingClientRect()
        const d = r.top > line ? r.top - line : r.bottom < line ? line - r.bottom : 0
        if (d < bestDist) { bestDist = d; best = el }
      }
      const box = root.getBoundingClientRect()
      root.toggleAttribute('data-engaged', box.top < line && box.bottom > line)
      for (const el of items) el.toggleAttribute('data-current', el === best)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure) }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame) }
  }, [containerRef])
}

/** Adds data-shown once the element enters the viewport (used for figure reveals). */
export function useRevealOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) { el.setAttribute('data-shown', ''); io.disconnect() }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

export function RevealFigure({ src, alt, wide = false, eager = false }: { src: string; alt: string; wide?: boolean; eager?: boolean }) {
  const ref = useRevealOnce<HTMLElement>()
  return (
    <figure ref={ref} className={`figure${wide ? ' figure-wide' : ''}`}>
      <div className="figure-frame">
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    </figure>
  )
}

export function Stack({ text }: { text: string }) {
  return (
    <ul className="stack" aria-label="Tools and methods">
      {text.split(' · ').map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}
