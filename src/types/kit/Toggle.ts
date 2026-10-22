import type { InputHTMLAttributes, ReactNode } from 'react'

export type ToggleTheme = 'light' | 'dark'
export type ToggleLayout = 'standard' | 'card'

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  theme?: ToggleTheme
  layout?: ToggleLayout
  label?: string
  description?: string
  icon?: ReactNode
}