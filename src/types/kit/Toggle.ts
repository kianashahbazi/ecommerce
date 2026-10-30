import type { InputHTMLAttributes } from 'react'

export type ToggleTheme = 'light' | 'dark'

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  theme?: ToggleTheme
}
