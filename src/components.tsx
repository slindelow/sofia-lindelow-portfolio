import type { PropsWithChildren, ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export function Reveal({ children, className = '', delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

export function ArrowLink({ href, children, className = '', download }: PropsWithChildren<{ href: string; className?: string; download?: boolean }>) {
  const external = href.startsWith('http')
  return (
    <a className={`arrow-link ${className}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} download={download}>
      <span>{children}</span>
      <span aria-hidden="true">{external ? '↗' : '→'}</span>
    </a>
  )
}
