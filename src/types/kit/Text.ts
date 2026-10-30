import type { ReactNode } from "react";
export type TextSize = 'sm' | 'base' | 'lg'
export type TextWeight = 'light' | 'normal'| 'medium' | 'semibold' | 'bold'
export interface TextProps{
    children : ReactNode
    size?:TextSize
    weight?:TextWeight
    className?: string
}