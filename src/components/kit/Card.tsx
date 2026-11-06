import type { CardProps } from '../../types'
import { cardStyles } from '../../constants'
import { useTheme } from '../../context'

export function Card({
    children,
    className = '',
    ...props
}: CardProps){
    const {theme} = useTheme()
    return(
        <div className={`${cardStyles.base} ${cardStyles.theme[theme]} ${className}`}
        {...props}>{children}</div>
    )
}