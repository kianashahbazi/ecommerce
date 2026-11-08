import type { ReactNode } from 'react'
import { useTheme } from '../../../context'

interface Heading4Props{
  children:ReactNode
  className?:string
}

export function Heading4({ children, className = '' }:Heading4Props) { 
  const {theme} = useTheme()
  const themeStyles = theme === 'dark' ? 'text-white' : 'text-neutral-darkest'

  return (
  <h4 className={`text-[1.5rem] md:text-[2rem] leading-[1.4] font-bold ${className} ${themeStyles}`}>{children}</h4>
  )
}