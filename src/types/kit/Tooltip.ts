import type { ReactNode } from 'react'

export type TooltipTheme = 'light' | 'dark'
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  content: ReactNode
  children: ReactNode
  theme?: TooltipTheme
  position?: TooltipPosition
  className?: string
}