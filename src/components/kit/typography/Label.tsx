import type { ReactNode } from 'react'
export default function Label({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <span className={`text-sm font-medium ${className}`}>{children}</span>
}