import type { ReactNode } from 'react'
import type { Theme } from '../../context'

export interface ThemePreviewProps {
  theme: Theme
  children: ReactNode
}