import type { TypographyProps } from '../../types/kit/Typography'
import { createElement } from 'react'

const variants = {
  h1: 'text-[2.5rem] leading-[1.2] md:text-[3.5rem]',       
  h2: 'text-[2.25rem] leading-[1.2] md:text-[3rem]',        
  h3: 'text-[2rem] leading-[1.2] md:text-[2.5rem]',        
  h4: 'text-[1.5rem] leading-[1.4] md:text-[2rem]',        
  h5: 'text-[1.25rem] leading-[1.4] md:text-[1.5rem]',     
}

export default function Typography({
  variant = 'h1',
  as,
  children,
  className = '',
  ...props
}: TypographyProps) {
  const Component = as || variant

  return createElement(
    Component,
    {
      className: `text-black font-bold ${variants[variant]} ${className}`.trim(),
      ...props,
    },
    children
  )
}