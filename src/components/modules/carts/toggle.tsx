import { toggleStyles } from '../../../constants'
import { Label, Text } from '../../kit'
import type { ToggleProps } from '../../../types'

export function Toggle({
  theme = 'light',
  layout = 'standard',
  label,
  description,
  icon,
  className = '',
  disabled,
  ...props
}: ToggleProps) {
  const switchElement = (
    <span
      aria-hidden="true"
      className={`${toggleStyles.switch.base} ${toggleStyles.switch.theme[theme]}`}
    >
      <span className={`${toggleStyles.switch.knob.base} ${toggleStyles.switch.knob.theme[theme]}`} />
    </span>
  )

  if (layout === 'card') {
    return (
      <label
        className={`${toggleStyles.card.wrapper} ${toggleStyles.card.theme[theme]} ${disabled ? toggleStyles.cursor.disabled : toggleStyles.cursor.enabled} ${className}`}
      >
        <input type="checkbox" className="peer sr-only" disabled={disabled} {...props} />
        <span className={toggleStyles.card.content}>
          {icon && (
            <span className={`${toggleStyles.card.icon.base} ${toggleStyles.card.icon.theme[theme]}`}>
              {icon}
            </span>
          )}
          <span className="flex min-w-0 flex-col">
            {label && <Label className={toggleStyles.card.label[theme]}>{label}</Label>}
            {description && (
              <Text className={`${toggleStyles.card.description.base} ${toggleStyles.card.description.theme[theme]}`}>
                {description}
              </Text>
            )}
          </span>
        </span>
        {switchElement}
      </label>
    )
  }

  return (
    <label className={`${toggleStyles.standard.wrapper} ${disabled ? toggleStyles.cursor.disabled : toggleStyles.cursor.enabled} ${className}`}>
      <input type="checkbox" className="peer sr-only" disabled={disabled} {...props} />
      {switchElement}
      {label && <Label className={toggleStyles.standard.label[theme]}>{label}</Label>}
    </label>
  )
}
