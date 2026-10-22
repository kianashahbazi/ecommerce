import type { SliderArrowProps } from '../../types/kit/SliderArrow'

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
          ? 'border-neutral-400 text-black hover:bg-neutral-100'
          : 'border-neutral-600 text-white hover:bg-neutral-800'
      } ${className}`}
      aria-label={`Scroll ${direction}`}
      {...props}
    >
      {direction === 'left' ? (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  )
}