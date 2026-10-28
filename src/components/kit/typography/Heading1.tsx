import type { ReactNode } from 'react'

export function Heading1({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <h1 className={`text-[2.5rem] md:text-[3.5rem] leading-[1.2] font-bold text-neutral-darkest ${className}`}>{children}</h1>
}