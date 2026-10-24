import type { ReactNode } from 'react'
export default function Heading2({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <h2 className={`text-[2.25rem] md:text-[3rem] leading-[1.2] font-bold text-neutral-darkest ${className}`}>{children}</h2>
}