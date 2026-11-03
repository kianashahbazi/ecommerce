import { Card, RadioButton, Label, Text } from '../../kit'
import { cardControlStyles } from '../../../constants'
import type { RadioButtonCardProps } from '../../../types'

export function RadioButtonCard({
  theme = 'light',
  label,
  description,
  icon,
  disabled,
  className = '',
  ...props
}: RadioButtonCardProps) {
  return (
    <label className={disabled ? 'block cursor-not-allowed opacity-50' : 'block cursor-pointer'}>
      <Card
        theme={theme}
        className={`${cardControlStyles.selected[theme]} ${className}`}
      >
        <span className={cardControlStyles.content}>

          {icon && (
            <span className={cardControlStyles.icon}>
              {icon}
            </span>
          )}

          <span className={cardControlStyles.text}>
            <Label className={cardControlStyles.label[theme]}>
              {label}
            </Label>

            {description && (
              <Text size="sm" className={`${cardControlStyles.description.base} ${cardControlStyles.description.theme[theme]}`}>
                {description}
              </Text>
            )}
          </span>

        </span>

        <RadioButton
          theme={theme}
          disabled={disabled}
          {...props}
        />

      </Card>
    </label>
  )
}