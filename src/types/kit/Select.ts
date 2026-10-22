import type { SelectHTMLAttributes, ReactNode } from 'react'

export type SelectTheme = 'light' | 'dark'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  theme?: SelectTheme
  leftIcon?: ReactNode
}