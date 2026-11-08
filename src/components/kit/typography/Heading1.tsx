import type { ReactNode } from 'react'
import { useTheme } from '../../../context'

interface Heading1Props{
  children:ReactNode
  className?:string
}

export function Heading1({ children, className = '' }:Heading1Props) { 
  const {theme} = useTheme()
  const themeStyles = theme === 'dark' ? 'text-white' : 'text-neutral-darkest'
  return(
    <h1 className={`text-[2.5rem] md:text-[3.5rem] leading-1.2 font-bold ${className} ${themeStyles}`}>{children}</h1>
  )
} 
