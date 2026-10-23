import type { ReactNode } from 'react'
export default function Text({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <p className={`text-xs leading-relaxed text-neutral-500 ${className}`}>{children}</p>
}