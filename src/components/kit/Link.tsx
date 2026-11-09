import type{LinkProps} from '../../types';
export function Link({
    children,
    className = '',
    ...props
}:LinkProps){
    return(
        <a {...props} className={`font-medium transition-colors hover:underline ${className}`}>
            {children}
        </a>
    );
}