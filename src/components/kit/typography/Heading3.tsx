import type { ReactNode } from 'react'
export default function Heading3({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <h3 className={`text-[2rem] md:text-[2.5rem] leading-[1.2] font-bold ${className}`}>{children}</h3>
}