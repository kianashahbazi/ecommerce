import type { ReactNode } from 'react'
import type { RadioButtonProps } from '../../atoms'

export interface RadioButtonCardProps
  extends Omit<RadioButtonProps, 'layout' | 'label' | 'prefix' | 'className'> {
  label: string
  description?: string
  icon?: ReactNode
  className?: string
}