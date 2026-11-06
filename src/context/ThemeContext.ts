import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextValue {
    theme: Theme
    toggleTheme: () => void
    setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)