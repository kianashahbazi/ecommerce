import type { SelectProps } from '../../types/kit/Select'

const baseStyles =
  'flex w-full items-center border transition-colors duration-200 focus-within:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

const themes = {
  light: 'border-neutral-300 bg-white text-black focus-within:border-black',
  dark: 'border-neutral-700 bg-black text-white focus-within:border-white',
}

const ChevronDown = () => (
  <svg className="h-4 w-4 shrink-0 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

export default function Select({
  theme = 'light',
  leftIcon,
  className = '',
  disabled,
  children,
  ...props
}: SelectProps) {
  return (
    <div
      className={[
        baseStyles,
        themes[theme],
        disabled ? 'cursor-not-allowed bg-neutral-100 dark:bg-neutral-900' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {leftIcon && (
        <div className="flex shrink-0 items-center justify-center pl-3">
          {leftIcon}
        </div>
      )}

      <select
        className={`h-10 w-full appearance-none bg-transparent px-3 text-sm outline-none ${
          leftIcon ? 'pl-2' : ''
        }`}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>

      <div className="flex shrink-0 items-center justify-center pr-3">
        <ChevronDown />
      </div>
    </div>
  )
}