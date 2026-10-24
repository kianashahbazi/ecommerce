import type { SelectProps } from '../../types/kit/Select'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon' 

const baseStyles =
  'flex w-full items-center border transition-colors duration-200 focus-within:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

const themes = {
  light: 'border-border-light bg-surface-light text-black focus-within:border-primary',
  dark: 'border-border-dark bg-surface-dark text-white focus-within:border-white',
}

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
      className={[baseStyles, themes[theme], disabled ? 'cursor-not-allowed bg-neutral-lightest dark:bg-neutral-darker' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {leftIcon && <div className="flex shrink-0 items-center justify-center pl-3">{leftIcon}</div>}
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
        <ChevronDownIcon className="w-4 h-4 text-neutral" />
      </div>
    </div>
  )
}