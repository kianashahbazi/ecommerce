import { pageContainerStyles } from "../../constants";
import type { PageContainerProps } from "../../types";
export function PageContainer({
    children,
    variant = 'wide',
    className = '',
}:PageContainerProps){
    return(
        <div className={`${pageContainerStyles.base} ${pageContainerStyles.variants[variant]} ${className}`}>{children}</div>
    )
}