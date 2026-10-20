import type { InputHTMLAttributes, ReactNode } from 'react'

export type InputTheme = 'light' | 'dark'
export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  theme?: InputTheme
  size?: InputSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  prefix?: string
}