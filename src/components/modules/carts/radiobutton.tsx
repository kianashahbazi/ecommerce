import { radioButtonStyles } from '../../../constants'
import { CheckIcon } from '../../../assets'
import { Label, Text } from '../../kit/typography'
import type { RadioButtonProps } from '../../../types'

export function RadioButton({
  theme = 'light',
  layout = 'standard',
  label,
  description,
  icon,
  prefix,
  className = '',
  disabled,
  ...props
}: RadioButtonProps) {
  if (layout === 'button') {
    return (
      <label className={`${radioButtonStyles.button.wrapper} ${disabled ? radioButtonStyles.cursor.disabled : radioButtonStyles.cursor.enabled} ${className}`}>
        <input type="radio" className="peer sr-only" disabled={disabled} {...props} />
        <span
          className={`${radioButtonStyles.button.control} ${radioButtonStyles.button.theme[theme]} ${radioButtonStyles.button.checkedIcon}`}
        >
          {prefix && (
            <span className={radioButtonStyles.button.prefix} aria-hidden="true">
              {prefix}
            </span>
          )}
          <Label>{label}</Label>
          <CheckIcon
            className={`${radioButtonStyles.button.checkIcon.base} ${radioButtonStyles.button.checkIcon.theme[theme]}`}
          />
        </span>
      </label>
    )
  }

  if (layout === 'card') {
    return (
      <label
        className={`${radioButtonStyles.card.wrapper} ${radioButtonStyles.card.theme[theme]} ${disabled ? radioButtonStyles.cursor.disabled : radioButtonStyles.cursor.enabled} ${className}`}
      >
        <input type="radio" className="peer sr-only" disabled={disabled} {...props} />

        <span className={radioButtonStyles.card.content}>
          {icon && (
            <span className={`${radioButtonStyles.card.icon.base} ${radioButtonStyles.card.icon.theme[theme]}`}>
              {icon}
            </span>
          )}
          <span className="flex min-w-0 flex-col">
            {label && <Label className={radioButtonStyles.card.label[theme]}>{label}</Label>}
            {description && (
              <Text className={`${radioButtonStyles.card.description.base} ${radioButtonStyles.card.description.theme[theme]}`}>
                {description}
              </Text>
            )}
          </span>
        </span>

        <span
          className={`${radioButtonStyles.card.indicator.base} ${radioButtonStyles.card.indicator.theme[theme]} ${radioButtonStyles.card.indicator.checkedIcon}`}
          aria-hidden="true"
        >
          <CheckIcon
            className={`${radioButtonStyles.card.checkIcon.base} ${radioButtonStyles.card.checkIcon.theme[theme]}`}
          />
        </span>
      </label>
    )
  }

  return (
    <label className={`${radioButtonStyles.standard.wrapper} ${disabled ? radioButtonStyles.cursor.disabled : radioButtonStyles.cursor.enabled} ${className}`}>
      <input type="radio" className="peer sr-only" disabled={disabled} {...props} />
      <span
        className={`${radioButtonStyles.standard.indicator.base} ${radioButtonStyles.standard.indicator.theme[theme]} ${radioButtonStyles.standard.indicator.checkedDot}`}
        aria-hidden="true"
      >
        <span className={`${radioButtonStyles.standard.dot.base} ${radioButtonStyles.standard.dot.theme[theme]}`} />
      </span>
      {label && <Label className={radioButtonStyles.standard.label[theme]}>{label}</Label>}
    </label>
  )
}
