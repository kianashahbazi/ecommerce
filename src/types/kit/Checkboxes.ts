import type { InputHTMLAttributes, ReactNode } from 'react'

export type CheckboxTheme = 'light' | 'dark'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  theme?: CheckboxTheme
  label?: string
  description?: string
  icon?: ReactNode
  isCard?: boolean
}