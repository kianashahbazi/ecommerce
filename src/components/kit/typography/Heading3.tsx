import type { ReactNode } from 'react'
import { useTheme } from '../../../context'
interface Heading3Props{
  children:ReactNode
  className?: string
}
export function Heading3({ children, className = ''}:Heading3Props){
  const {theme} = useTheme()
  const themeStyles =
  theme === 'dark' ? 'text-white' : 'text-neutral-darkest'
  return (<h3 className={`text-[2rem] md:text-[2.5rem] leading-[1.2] font-bold ${className} ${themeStyles}`}>{children}</h3>
)
}


