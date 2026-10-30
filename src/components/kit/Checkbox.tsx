import { checkboxStyles } from '../../constants'
import { CheckIcon } from '../../assets'
import type { CheckboxProps } from '../../types'

export function Checkbox({
  theme = 'light',
  className = '',
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <span className={`relative inline-flex h-5 w-5 shrink-0 ${className}`}>
      <input
        type="checkbox"
        className="peer absolute inset-0 z-10 h-5 w-5 cursor-pointer opacity-0"
        disabled={disabled}
        {...props}
      />

      <span
        aria-hidden="true"
        className={`${checkboxStyles.indicator.base} ${checkboxStyles.indicator.theme[theme]} ${checkboxStyles.indicator.checkedIcon} peer-focus-visible:ring-2 peer-focus-visible:ring-primary ${disabled ? 'opacity-50' : ''}`}
      >
        <CheckIcon
          className={`${checkboxStyles.checkIcon.base} ${checkboxStyles.checkIcon.theme[theme]}`}
        />
      </span>
    </span>
  )
}
