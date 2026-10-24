import type { ReactNode } from 'react'
export default function Heading4({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <h4 className={`text-[1.5rem] md:text-[2rem] leading-[1.4] font-bold text-neutral-darkest ${className}`}>{children}</h4>
}