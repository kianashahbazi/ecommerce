import type { ReactNode } from 'react'
import type { CheckboxProps, CheckboxTheme } from '../../kit'

export interface CheckboxCardProps
  extends Omit<CheckboxProps,'theme' | 'className'> {
    
  theme?: CheckboxTheme
  label: string
  description?: string
  icon?: ReactNode
  className?: string
}