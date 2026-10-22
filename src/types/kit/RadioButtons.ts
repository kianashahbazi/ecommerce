import type { InputHTMLAttributes, ReactNode } from 'react'

export type RadioTheme = 'light' | 'dark'
export type RadioLayout = 'standard' | 'card' | 'button'

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  theme?: RadioTheme
  layout?: RadioLayout
  label?: string
  description?: string
  icon?: ReactNode
  prefix?: string
}