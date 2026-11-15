import type { HTMLAttributes, ReactNode } from 'react'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: ReactNode
}