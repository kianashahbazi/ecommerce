import type { ButtonHTMLAttributes } from 'react'

export interface SliderArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right'
  theme?: 'light' | 'dark'
}