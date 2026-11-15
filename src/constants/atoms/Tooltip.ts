export const tooltipBubbleStyles = {
  light: 'bg-primary text-white',
  dark: 'bg-surface-light text-primary',
}

export const tooltipPositionStyles = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
  left: 'right-full top-1/2 -translate-y-1/2 mr-3',
  right: 'left-full top-1/2 -translate-y-1/2 ml-3',
}

export const tooltipArrowStyles = {
  top: 'bottom-[-4px] left-1/2 -translate-x-1/2',
  bottom: 'top-[-4px] left-1/2 -translate-x-1/2',
  left: 'right-[-4px] top-1/2 -translate-y-1/2',
  right: 'left-[-4px] top-1/2 -translate-y-1/2',
}

export const tooltipContainerStyles =
  'group relative inline-flex items-center justify-center'
export const tooltipContentStyles =
  'absolute z-50 invisible opacity-0 transition-all duration-200 shadow-tooltip group-hover:visible group-hover:opacity-100'
export const tooltipArrowBaseStyles = 'absolute h-2 w-2 rotate-45'
