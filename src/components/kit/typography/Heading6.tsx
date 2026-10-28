import type { ReactNode } from 'react'
export function Heading6({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <h6 className={`text-[1.125rem] md:text-[1.25rem] leading-[1.4] font-bold text-neutral-darkest ${className}`}>{children}</h6>
}