import { sliderArrowStyles } from '../../constants'
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets'
import type { SliderArrowProps } from '../../types'
import { useTheme } from '../../context'

export function SliderArrow({
  direction,
  theme :themeProp,
  className = '',
  ...props
}: SliderArrowProps) {

  const {theme: contextTheme} = useTheme()
  const resolvedTheme = themeProp ?? contextTheme

  return (
    <button
      className={`${sliderArrowStyles.base} ${sliderArrowStyles.theme[resolvedTheme]} ${className}`.trim()}
      aria-label={`Scroll ${direction}`}
      {...props}
    >
      {direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </button>
  )
}
