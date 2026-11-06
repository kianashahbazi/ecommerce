import type { TextProps } from '../../../types'
import { useTheme } from '../../../context'

export function Text ({
  children,
  size = 'base',
  weight = 'normal',
  className =''
} : TextProps){
  const {theme} = useTheme()
  
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
  const textColor = theme === 'dark' ? 'text-neutral-light' : 'text-neutral'

  return (
    <p className={`${sizes[size]} ${weights[weight]} ${textColor} ${className}`}>
      {children}
    </p>
  )
}