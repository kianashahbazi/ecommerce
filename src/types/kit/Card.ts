import type {HTMLAttributes } from 'react'

export type CardTheme = 'light' | 'dark'
export interface CardProps extends HTMLAttributes<HTMLDivElement>{
    theme?: CardTheme
}