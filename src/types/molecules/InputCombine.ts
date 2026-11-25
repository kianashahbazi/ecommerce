import type { ReactNode } from "react";
import type { InputProps } from "../atoms";
export interface InputCombineProps extends InputProps{
    label:string
    link?:ReactNode
}