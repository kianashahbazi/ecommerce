import { inputSizes, inputThemes } from '../../constants'
import type { InputProps } from '../../types'

const baseStyles =
  'flex w-full items-center border transition-colors duration-200 focus-within:outline-none disabled:opacity-50'

export function Input({
  theme = 'light',
  size = 'md',
  leftIcon,
  rightIcon,
  prefix,
  className = '',
  disabled,
  ...props
}: InputProps) {
  const currentTheme = inputThemes[theme]

  return (
    <div
      className={[baseStyles, currentTheme.wrapper, inputSizes[size], disabled ? 'cursor-not-allowed opacity-50' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {prefix && (
        <div className={`flex h-full items-center border-r px-3 font-medium ${currentTheme.prefix}`}>
          {prefix}
        </div>
      )}
      {leftIcon && <div className="flex shrink-0 items-center justify-center pl-3">{leftIcon}</div>}
      <input
        className={`h-full w-full flex-1 bg-transparent px-3 outline-none disabled:cursor-not-allowed ${currentTheme.input}`}
        disabled={disabled}
        {...props}
      />
      {rightIcon && <div className="flex shrink-0 items-center justify-center pr-3">{rightIcon}</div>}
    </div>
  )
}
