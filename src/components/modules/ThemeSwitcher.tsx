import { useTheme } from "../../context";
import { Toggle } from "../kit";

export function ThemeSwitcher(){
    const {theme , toggleTheme} = useTheme()
    return(
        <label className="inline-flex cursor-pointer items-center gap-3">
            <span className="text-sm">Dark Mode</span>
            <Toggle checked={theme === 'dark'} onChange={() => toggleTheme()} />
        </label>
    )
}