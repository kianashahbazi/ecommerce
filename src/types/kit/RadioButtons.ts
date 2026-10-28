import type { InputHTMLAttributes, ReactNode } from 'react'

export type RadioButtonTheme = 'light' | 'dark'
export type RadioButtonLayout = 'standard' | 'card' | 'button'

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  theme?: RadioButtonTheme
  layout?: RadioButtonLayout
  label?: string
  description?: string
  icon?: ReactNode
  prefix?: string
}
