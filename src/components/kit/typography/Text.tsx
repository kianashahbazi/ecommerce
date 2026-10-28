import type { ReactNode } from 'react'

export function Text({ 
  children, 
  size = 'base', 
  weight = 'normal',
  className = '' 
}: { 
  children: ReactNode, 
  size?: 'sm' | 'base' | 'lg', 
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold',
  className?: string 
}) {
  const sizes = {
    sm: 'text-[0.75rem] leading-[1.5]', 
    base: 'text-[1rem] leading-[1.5]',  
    lg: 'text-[1.25rem] leading-[1.5]', 
  }

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }

  return (
    <p className={`${sizes[size]} ${weights[weight]} text-neutral ${className}`}>
      {children}
    </p>
  )
}