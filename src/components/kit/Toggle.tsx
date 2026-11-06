import { toggleStyles } from '../../constants'
import type { ToggleProps } from '../../types'
import { useTheme } from '../../context'

export function Toggle({
  className = '',
  disabled,
  ...props
}: ToggleProps) {
  const {theme} = useTheme()
  return (
    <label
      className={`${toggleStyles.wrapper.base} ${
        disabled
          ? toggleStyles.wrapper.disabled
          : toggleStyles.wrapper.enabled
      } ${className}`}
    >
      <input
        type="checkbox"
        className="peer sr-only"
        disabled={disabled}
        {...props}
      />

      <span
        aria-hidden="true"
        className={`${toggleStyles.switch.base} ${toggleStyles.switch.theme[theme]}`}
      >
        <span
          className={`${toggleStyles.switch.knob.base} ${toggleStyles.switch.knob.theme[theme]}`}
        />
      </span>
    </label>
  )
}