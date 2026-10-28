import { sliderArrowStyles } from '../../constants'
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets'
import type { SliderArrowProps } from '../../types'

export function SliderArrow({
  direction,
  theme = 'light',
  className = '',
  ...props
}: SliderArrowProps) {
  return (
    <button
      className={`${sliderArrowStyles.base} ${sliderArrowStyles.theme[theme]} ${className}`.trim()}
      aria-label={`Scroll ${direction}`}
      {...props}
    >
      {direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </button>
  )
}
