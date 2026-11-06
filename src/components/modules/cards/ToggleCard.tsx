import { useTheme } from '../../../context'
import { Card, Toggle, Label, Text } from '../../kit'
import { cardControlStyles } from '../../../constants'
import type { ToggleCardProps } from '../../../types'

export function ToggleCard({
  label,
  description,
  icon,
  disabled,
  className = '',
  ...props
}: ToggleCardProps) {

  const { theme } = useTheme()

  return (
    <label
      className={
        disabled
          ? 'block cursor-not-allowed opacity-50'
          : 'block cursor-pointer'
      }
    >
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
              <Text
                size="sm"
                className={`${cardControlStyles.description.base} ${cardControlStyles.description.theme[theme]}`}
              >
                {description}
              </Text>
            )}
          </span>

        </span>

        <Toggle
          disabled={disabled}
          {...props}
        />

      </Card>
    </label>
  )
}