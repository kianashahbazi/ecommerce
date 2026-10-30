import { radioButtonStyles } from '../../constants'
import { CheckIcon } from '../../assets'
import { Label } from './typography'
import type { RadioButtonProps } from '../../types'

export function RadioButton({
  theme = 'light',
  layout = 'standard',
  label,
  prefix,
  className = '',
  disabled,
  ...props
}: RadioButtonProps) {
  const input = (
    <input
      type="radio"
      className="peer sr-only"
      disabled={disabled}
      {...props}
    />
  )


if (layout === 'button') {
  return (
    <label
      className={`${radioButtonStyles.button.wrapper} ${
        disabled
          ? radioButtonStyles.cursor.disabled
          : radioButtonStyles.cursor.enabled
      } ${className}`}
    >
      {input}

      <span
        className={`${radioButtonStyles.button.control} ${radioButtonStyles.button.theme[theme]} ${radioButtonStyles.button.checkedIcon}`}
      >
        {prefix && (
          <span className={radioButtonStyles.button.prefix}>
            {prefix}
          </span>
        )}

        {label && <Label>{label}</Label>}

        <CheckIcon
          className={`${radioButtonStyles.button.checkIcon.base} ${radioButtonStyles.button.checkIcon.theme[theme]}`}
        />
      </span>
    </label>
  )
}


  return (
    <span className={`${radioButtonStyles.standard.wrapper} ${className}`}>
      {input}

      <span
        className={`${radioButtonStyles.standard.indicator.base} ${radioButtonStyles.standard.indicator.theme[theme]} ${radioButtonStyles.standard.indicator.checkedDot}`}
      >
        <span
          className={`${radioButtonStyles.standard.dot.base} ${radioButtonStyles.standard.dot.theme[theme]}`}
        />
      </span>

      {label && (
        <Label className={radioButtonStyles.standard.label[theme]}>
          {label}
        </Label>
      )}
    </span>
  )
}
