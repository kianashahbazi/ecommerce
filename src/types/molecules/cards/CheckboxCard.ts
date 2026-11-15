import type { ReactNode } from 'react'
import type { CheckboxProps } from '../../atoms'

export interface CheckboxCardProps
  extends Omit<CheckboxProps, 'className'> {
    
  label: string
  description?: string
  icon?: ReactNode
  className?: string
}