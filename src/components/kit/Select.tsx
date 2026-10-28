import { selectDisabledStyles, selectThemes } from '../../constants'
import { ChevronDownIcon } from '../../assets'
import type { SelectProps } from '../../types'

const baseStyles =
  'flex w-full items-center border transition-colors duration-200 focus-within:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

export function Select({
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
        selectThemes[theme],
        disabled ? selectDisabledStyles : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {leftIcon && <div className="flex shrink-0 items-center justify-center pl-3">{leftIcon}</div>}
      <select
        className={`h-10 w-full appearance-none bg-transparent px-3 text-sm outline-none ${leftIcon ? 'pl-2' : ''}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
      <div className="flex shrink-0 items-center justify-center pr-3">
        <ChevronDownIcon className="w-4 h-4 text-neutral" />
      </div>
    </div>
  )
}
