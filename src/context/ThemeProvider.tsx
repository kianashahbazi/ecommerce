import { useCallback , useMemo , useState , type ReactNode } from "react";
import {ThemeContext , type Theme} from './ThemeContext';

interface ThemeProviderProps{
    children : ReactNode
    defaultTheme?: Theme
}

export function ThemeProvider({
    children,
    defaultTheme = 'light',
}:ThemeProviderProps){

    const [theme , setTheme] = useState <Theme>(defaultTheme)

    const toggleTheme = useCallback(() => {
        setTheme((currentTheme) =>
        currentTheme === 'light' ? 'dark' : 'light'
    )
    },[])

    const contextValue = useMemo(() => ({
        theme,
        toggleTheme,
        setTheme,
    }) , [theme,toggleTheme])
    
    return(
        <ThemeContext.Provider value = {contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}