import type { HTMLAttributes, ReactNode } from 'react'

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
export type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?: TypographyVariant
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div'
  children: ReactNode
}