import type { SelectHTMLAttributes, ReactNode } from 'react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  leftIcon?: ReactNode
}