import type { CardProps } from '../../types'
import { cardStyles } from '../../constants'

export function Card({
    children,
    theme = 'light',
    className = '',
    ...props
}: CardProps){
    return(
        <div className={`${cardStyles.base} ${cardStyles.theme[theme]} ${className}`}
        {...props}>{children}</div>
    )
}