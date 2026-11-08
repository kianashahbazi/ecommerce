import { selectDisabledStyles, selectThemes } from '../../constants'
import { ChevronDownIcon } from '../../assets'
import type { SelectProps } from '../../types'
import { useTheme } from '../../context'

const baseStyles =
  'flex w-full items-center border transition-colors duration-200 focus-within:outline-none'

export function Select({
  leftIcon,
  className = '',
  disabled,
  children,
  theme: themeProp,
  ...props
}: SelectProps) {
  const { theme: contextTheme } = useTheme()

  const resolvedTheme = themeProp ?? contextTheme

  return (
    <div
      className={[
        baseStyles,
        selectThemes[resolvedTheme],
        disabled
          ? selectDisabledStyles[resolvedTheme]
          : '',
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
        className={`h-10 w-full appearance-none bg-transparent px-3 text-sm outline-none disabled:cursor-not-allowed ${
          leftIcon ? 'pl-2' : ''
        }`}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>

      <div className="flex shrink-0 items-center justify-center pr-3">
        <ChevronDownIcon
          className={`w-4 h-4 ${
            resolvedTheme === 'dark'
              ? 'text-neutral-light'
              : 'text-neutral'
          }`}
        />
      </div>
    </div>
  )
}