import type { AnchorHTMLAttributes } from "react";
export type LinkSize = 'sm' | 'base' | 'lg'
export type LinkWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>,'className' | 'style'> & {
    size?:LinkSize
    weight?:LinkWeight
    underline?:boolean
}