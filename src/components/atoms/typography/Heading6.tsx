import type { ReactNode } from 'react'
import { useTheme } from '../../../context'

interface Heading6Props {
  children: ReactNode
  className?: string
}
export function Heading6({ children, className = '' }: Heading6Props) {
  const { theme } = useTheme()
  const themeStyles =
    theme === 'dark'
      ? 'text-white'
      : 'text-neutral-darkest'

  return (
    <h6 className={`text-[1.125rem] md:text-[1.25rem] leading-[1.4] font-bold ${className} ${themeStyles}`}>{children}</h6>
  )
}