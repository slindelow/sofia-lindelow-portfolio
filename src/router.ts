import { useSyncExternalStore } from 'react'
import { flushSync } from 'react-dom'

// A tiny path router. Navigations run inside a view transition when the
// browser supports it, so the project title can move between the list and
// its page. Netlify already rewrites every path to index.html.

type Listener = () => void
const listeners = new Set<Listener>()
const scrollMemory = new Map<string, number>()

function emit() {
  for (const l of listeners) l()
}

function subscribe(l: Listener) {
  listeners.add(l)
  const onPop = () => runTransition(() => { emit(); restoreScroll() })
  window.addEventListener('popstate', onPop)
  return () => { listeners.delete(l); window.removeEventListener('popstate', onPop) }
}

function getPath() {
  return window.location.pathname
}

export function usePath() {
  return useSyncExternalStore(subscribe, getPath, getPath)
}

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function runTransition(update: () => void) {
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown }
  if (!doc.startViewTransition || reducedMotion()) { update(); return }
  doc.startViewTransition(() => flushSync(update))
}

function restoreScroll() {
  const y = scrollMemory.get(window.location.pathname + window.location.hash)
  if (window.location.hash) {
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
  } else {
    window.scrollTo(0, y ?? 0)
  }
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' })
  history.replaceState(null, '', `/#${id}`)
}

/** Navigate to "/projects/slug", "/" or "/#section". */
export function navigate(to: string) {
  const url = new URL(to, window.location.origin)
  const samePath = url.pathname === window.location.pathname
  if (samePath && url.hash) { scrollToSection(url.hash.slice(1)); return }
  scrollMemory.set(window.location.pathname + window.location.hash, window.scrollY)
  runTransition(() => {
    history.pushState(null, '', url.pathname + url.hash)
    emit()
    if (url.hash) document.getElementById(url.hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, url.pathname === '/' ? (scrollMemory.get('/') ?? 0) : 0)
  })
}
