import {tooltipArrowBaseStyles,tooltipArrowStyles,tooltipBubbleStyles,tooltipContainerStyles,tooltipContentStyles,tooltipPositionStyles,} from '../../constants'
import type { TooltipProps } from '../../types'
import { useTheme } from '../../context'

export function Tooltip({
  content,
  children,
  theme : themeProp,
  position = 'top',
  className = '',
}: TooltipProps) {

  const { theme: contextTheme } = useTheme()
  const resolvedTheme = themeProp ?? contextTheme

  return (
    <div className={`${tooltipContainerStyles} ${className}`}>
      {children}
      <div
        className={`${tooltipContentStyles} ${tooltipPositionStyles[position]} ${tooltipBubbleStyles[resolvedTheme]}`}
      >
        {content}
        <div
          className={`${tooltipArrowBaseStyles} ${tooltipArrowStyles[position]} ${tooltipBubbleStyles[resolvedTheme]}`}
        />
      </div>
    </div>
  )
}
