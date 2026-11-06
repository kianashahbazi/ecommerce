import { Card, RadioButton, Label, Text } from '../../kit'
import { cardControlStyles } from '../../../constants'
import type { RadioButtonCardProps } from '../../../types'
import { useTheme } from '../../../context'

export function RadioButtonCard({
  label,
  description,
  icon,
  disabled,
  className = '',
  ...props
}: RadioButtonCardProps) {
  const {theme} = useTheme()
  return (
    <label className={disabled ? 'block cursor-not-allowed opacity-50' : 'block cursor-pointer'}>
      <Card
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
          disabled={disabled}
          {...props}
        />

      </Card>
    </label>
  )
}