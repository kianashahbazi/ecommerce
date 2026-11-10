import { sliderArrowStyles } from '../../constants'
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets'
import type { SliderArrowProps } from '../../types'
import { useTheme } from '../../context'

export function SliderArrow({
  direction,
  className = '',
  ...props
}: SliderArrowProps) {

  const {theme} = useTheme()

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
