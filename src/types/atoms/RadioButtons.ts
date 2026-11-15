import type { InputHTMLAttributes } from 'react'

export type RadioButtonLayout = 'standard' | 'button'

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  layout?: RadioButtonLayout
  label?: string
  prefix?: string
}
