import type { ReactNode } from 'react'
import type { RadioButtonProps, RadioButtonTheme } from '../../kit'

export interface RadioButtonCardProps
  extends Omit<RadioButtonProps, 'theme' | 'layout' | 'label' | 'prefix' | 'className'> {
  theme?: RadioButtonTheme
  label: string
  description?: string
  icon?: ReactNode
  className?: string
}