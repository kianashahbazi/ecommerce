import type { SliderArrowProps } from '../../types/kit/SliderArrow'
import ArrowLeftIcon from '../../assets/icons/ArrowLeftIcon'
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon'

export default function SliderArrow({
  direction,
  theme = 'light',
  className = '',
  ...props
}: SliderArrowProps) {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
        theme === 'light'
          ? 'border-neutral-light text-black hover:bg-secondary'
          : 'border-border-dark text-white hover:bg-surface-dark'
      } ${className}`}
      aria-label={`Scroll ${direction}`}
      {...props}
    >
      {direction === 'left' ? (
        <ArrowLeftIcon />
      ) : (
        <ArrowRightIcon />
      )}
    </button>
  )
}