import { checkboxStyles, getCheckboxIndicatorStyles, getCheckboxWrapperStyles } from '../../../constants'
import { CheckIcon } from '../../../assets/icons'
import { Label, Text } from '../../kit/typography'
import type { CheckboxProps } from '../../../types'

export function Checkbox({
  theme = 'light',
  label,
  description,
  icon,
  isCard = false,
  className = '',
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <label className={getCheckboxWrapperStyles({ theme, isCard, disabled, className })}>
      <input type="checkbox" className="peer sr-only" disabled={disabled} {...props} />

      <span className={getCheckboxIndicatorStyles(theme, isCard)} aria-hidden="true">
        <CheckIcon className={`${checkboxStyles.checkIcon.base} ${checkboxStyles.checkIcon.theme[theme]}`} />
      </span>

      {(label || description || icon) && (
        <span className={checkboxStyles.content}>
          {icon && (
            <span className={`${checkboxStyles.contentIcon.base} ${checkboxStyles.contentIcon.theme[theme]}`}>
              {icon}
            </span>
          )}
          <span className="flex min-w-0 flex-col">
            {label && <Label className={checkboxStyles.label[theme]}>{label}</Label>}
            {description && (
              <Text className={`${checkboxStyles.description.base} ${checkboxStyles.description.theme[theme]}`}>
                {description}
              </Text>
            )}
          </span>
        </span>
      )}
    </label>
  )
}
