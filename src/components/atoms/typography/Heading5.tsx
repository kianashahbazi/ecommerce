import type { ReactNode } from 'react'
import { useTheme } from '../../../context'

interface Heading5Props {
  children: ReactNode
  className?: string
}
export function Heading5({ children, className = '' }: Heading5Props){
  const { theme } = useTheme()

  const themeStyles =
    theme === 'dark'
      ? 'text-white'
      : 'text-neutral-darkest'

  return (
    <h5 className={`text-[1.25rem] md:text-[1.5rem] leading-[1.4] font-bold ${className} ${themeStyles}`}>{children}</h5>
  )
}