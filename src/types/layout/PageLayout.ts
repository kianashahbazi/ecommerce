import type { ReactNode } from "react";
export type PageLayoutVariant = 'centered' | 'content'
export interface PageLayoutProps{
    children:ReactNode
    variant?: PageLayoutVariant
    className?:string
}