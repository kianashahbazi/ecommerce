import type { InputHTMLAttributes } from 'react'

export type RadioButtonTheme = 'light' | 'dark'
export type RadioButtonLayout = 'standard' | 'button'

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  theme?: RadioButtonTheme
  layout?: RadioButtonLayout
  label?: string
  prefix?: string
}
