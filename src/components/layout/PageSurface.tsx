import { useTheme } from "../../context";
import { pageSurfaceStyles } from "../../constants";
import type { PageSurfaceProps } from "../../types";
export function PageSurface({
    children,
    className = '',
}:PageSurfaceProps){
    const {theme} = useTheme()
    return(
        <div className={`${pageSurfaceStyles.base} ${pageSurfaceStyles.theme[theme]} ${className}`}>{children}</div>
    )
}