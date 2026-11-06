import type { ReactNode } from 'react'
import type { ToggleProps } from '../../kit'

export interface ToggleCardProps extends Omit<ToggleProps, 'className'> {
  label: string
  description?: string
  icon?: ReactNode
  className?: string
}