import type { ReactNode } from 'react'
export function Label({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <span className={`text-sm font-medium ${className}`}>{children}</span>
}