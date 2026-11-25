import { ThemeSwitcher } from "../molecules";
export function Header(){
    
    return(
        <div className="flex justify-end">
            <ThemeSwitcher />
        </div>
    );
}