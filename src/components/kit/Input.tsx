import type { InputProps } from '../../types/kit/Input'

const baseStyles =
  'flex w-full items-center border transition-colors duration-200 focus-within:outline-none disabled:opacity-50'

const themes = {
  light: {
    wrapper: 'border-neutral-300 bg-white text-black focus-within:border-black',
    prefix: 'border-neutral-300 bg-neutral-50 text-neutral-600',
    input: 'placeholder:text-neutral-400',
  },
  dark: {
    wrapper: 'border-neutral-700 bg-black text-white focus-within:border-white',
    prefix: 'border-neutral-700 bg-neutral-900 text-neutral-400',
    input: 'placeholder:text-neutral-500',
  },
}

const sizes = {
  sm: 'h-8 text-xs',
  md: 'h-10 text-sm',
  lg: 'h-12 text-base',
}

export default function Input({
  theme = 'light',
  size = 'md',
  leftIcon,
  rightIcon,
  prefix,
  className = '',
  disabled,
  ...props
}: InputProps) {
  const currentTheme = themes[theme]

  return (
    <div
      className={[
        baseStyles,
        currentTheme.wrapper,
        sizes[size],
        disabled ? 'cursor-not-allowed opacity-50' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {}
      {prefix && (
        <div
          className={`flex h-full items-center border-r px-3 font-medium ${currentTheme.prefix}`}
        >
          {prefix}
        </div>
      )}

      {}
      {leftIcon && (
        <div className="flex shrink-0 items-center justify-center pl-3">
          {leftIcon}
        </div>
      )}

      {}
      <input
        className={`h-full w-full flex-1 bg-transparent px-3 outline-none disabled:cursor-not-allowed ${currentTheme.input}`}
        disabled={disabled}
        {...props}
      />

      {}
      {rightIcon && (
        <div className="flex shrink-0 items-center justify-center pr-3">
          {rightIcon}
        </div>
      )}
    </div>
  )
}