import {tooltipArrowBaseStyles,tooltipArrowStyles,tooltipBubbleStyles,tooltipContainerStyles,tooltipContentStyles,tooltipPositionStyles,} from '../../constants'
import type { TooltipProps } from '../../types'

export function Tooltip({
  content,
  children,
  theme = 'light',
  position = 'top',
  className = '',
}: TooltipProps) {
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
