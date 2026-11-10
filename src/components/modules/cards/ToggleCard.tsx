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

  return (
    <Card selectable className={className}>
      <label className={`flex w-full items-start justify-between gap-4 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
        <span className={cardControlStyles.content}>
          {icon && (
            <span className={cardControlStyles.icon}>
              {icon}
            </span>
          )}
          <span className={cardControlStyles.text}>

            <Label>
              {label}
            </Label>

            {description && (
              <Text
                size="sm"
                className={cardControlStyles.description.base}
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

      </label>
    </Card>
  )
}