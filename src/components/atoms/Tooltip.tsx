import {tooltipArrowBaseStyles,tooltipArrowStyles,tooltipBubbleStyles,tooltipContainerStyles,tooltipContentStyles,tooltipPositionStyles,} from '../../constants'
import type { TooltipProps } from '../../types'
import { useTheme } from '../../context'

export function Tooltip({
  content,
  children,
  position = 'top',
  className = '',
}: TooltipProps) {

  const { theme} = useTheme()

  return (
    <div className={`${tooltipContainerStyles} ${className}`}>
      {children}
      <div
        className={`${tooltipContentStyles} ${tooltipPositionStyles[position]} ${tooltipBubbleStyles[theme]}`}
      >
        {content}
        <div
          className={`${tooltipArrowBaseStyles} ${tooltipArrowStyles[position]} ${tooltipBubbleStyles[theme]}`}
        />
      </div>
    </div>
  )
}
