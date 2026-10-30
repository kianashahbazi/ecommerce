import type { InputHTMLAttributes } from 'react'

export type CheckboxTheme = 'light' | 'dark'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  theme?: CheckboxTheme
}
