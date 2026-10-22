import type { TextareaHTMLAttributes } from 'react'

export type TextAreaTheme = 'light' | 'dark'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme?: TextAreaTheme
}