import type { ReactNode } from 'react'
import type { ToggleProps, ToggleTheme } from '../../kit'

export interface ToggleCardProps extends Omit<ToggleProps,'theme' | 'className'> {
  theme?: ToggleTheme
  label: string
  description?: string
  icon?: ReactNode
  className?: string
}