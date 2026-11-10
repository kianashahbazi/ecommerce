import type { CardProps } from '../../types'
import { cardStyles } from '../../constants'
import { useTheme } from '../../context'

export function Card({
    children,
    className = '',
    selectable = false,
    ...props
}: CardProps){
    const {theme} = useTheme()
    const selectedStyle = selectable ? cardStyles.selected[theme] : ''
    return(
        <div className={`${cardStyles.base} ${cardStyles.theme[theme]} ${selectedStyle} ${className}`}
        {...props}>{children}</div>
    )
}