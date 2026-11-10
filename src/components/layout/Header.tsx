import { ThemeSwitcher } from "../modules/ThemeSwitcher";
export function Header(){
    
    return(
        <div className="absolute right-6 top-3">
            <ThemeSwitcher />
        </div>
    );
}