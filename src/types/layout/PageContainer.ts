import type { ReactNode } from "react";
export type PageContainerVariant = 'wide' | 'narrow' | 'full'
export interface PageContainerProps{
    children:ReactNode
    variant?:PageContainerVariant
    className?:string
}