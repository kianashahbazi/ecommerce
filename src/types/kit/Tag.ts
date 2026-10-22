import type { HTMLAttributes, ReactNode } from 'react'

export type TagTheme = 'light' | 'dark'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  theme?: TagTheme
  icon?: ReactNode
}