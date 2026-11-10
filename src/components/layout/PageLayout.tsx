import { pageLayoutStyles } from "../../constants";
import type { PageLayoutProps } from "../../types";

export function PageLayout({
    children,
    variant = 'content',
    className='',
}:PageLayoutProps){

    return(

        <div className={`${pageLayoutStyles.base} ${pageLayoutStyles.variants[variant]} ${className}`}>{children}</div>
    )
}