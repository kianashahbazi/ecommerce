import type { ReactNode } from 'react'
import { useTheme } from '../../../context'

interface Heading2Props{
  children:ReactNode
  className?:string
}

export function Heading2({ children, className = '' }:Heading2Props) { 
  const {theme} = useTheme()
  const themeStyles = theme === 'dark' ? 'text-white' : 'text-neutral-darkest'
  
  return (
  <h2 className={`text-[2.25rem] md:text-[3rem] leading-[1.2] font-bold ${className} ${themeStyles}`}>{children}</h2>
  )
}