import { Toggle } from "../kit";
import { useTheme } from "../../context";

export function Header(){
    const {theme , setTheme} = useTheme();
    
    return(
        <header className="absolute inset-x-0 top-3 flex items-center justify-center">
            <span className="select-none text-2xl font-bold text-inherit" style={{fontFamily:"'Dancing Script' , cursive"}}>
                Logo
            </span>
            <div className="absolute right-6 top-3 flex items-center gap-3">
                <span className="text-sm">Dark Mode</span>
                <Toggle checked={theme === 'dark'} onChange={(event) => {
                    setTheme(event.currentTarget.checked ? 'dark' : 'light');
                    }}>

                </Toggle>
            </div>
        </header>
    );
}