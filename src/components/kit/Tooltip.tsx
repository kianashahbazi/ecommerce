import type { TooltipProps } from '../../types/kit/Tooltip'

export default function Tooltip({
  content,
  children,
  theme = 'light',
  position = 'top',
  className = '',
}: TooltipProps) {
  const isLight = theme === 'light'
  const bubbleStyles = isLight 
    ? 'bg-primary text-white' 
    : 'bg-surface-light text-primary'

  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
    left: 'right-full top-1/2 -translate-y-1/2 mr-3',
    right: 'left-full top-1/2 -translate-y-1/2 ml-3',
  }

  const arrowStyles = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2',
    left: 'right-[-4px] top-1/2 -translate-y-1/2',
    right: 'left-[-4px] top-1/2 -translate-y-1/2',
  }

  return (
    <div className={`group relative inline-flex items-center justify-center ${className}`}>
      {children}
      <div
        className={`absolute z-50 invisible opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 ${positionStyles[position]} ${bubbleStyles} shadow-tooltip`}
      >
        {content}
        <div
          className={`absolute h-2 w-2 rotate-45 ${arrowStyles[position]} ${bubbleStyles}`}
        />
      </div>
    </div>
  )
}