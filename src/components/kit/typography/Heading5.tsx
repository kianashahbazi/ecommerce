import type { ReactNode } from 'react'

export default function Heading5({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <h5 className={`text-[1.25rem] md:text-[1.5rem] leading-[1.4] font-bold text-neutral-darkest ${className}`}>{children}</h5>
}