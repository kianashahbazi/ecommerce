import type{LinkProps} from '../../../types';
import { useTheme } from '../../../context';
import { linkStyles } from '../../../constants';
export function Link({
    children,
    size = 'base',
    weight ='medium',
    underline = false,
    ...props
}:LinkProps){
    const {theme} = useTheme()
    const underlineStyles = underline
    ? linkStyles.underline.always
    : linkStyles.underline.hover

    return(
        <a {...props} className={`${linkStyles.base} ${linkStyles.sizes[size]} ${linkStyles.weights[weight]} ${linkStyles.theme[theme]} ${underlineStyles}`}>
            {children}
        </a>
    );
}