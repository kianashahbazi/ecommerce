import { Card, RadioButton, Label, Text } from '../../kit'
import { cardControlStyles } from '../../../constants'
import type { RadioButtonCardProps } from '../../../types'

export function RadioButtonCard({
  label,
  description,
  icon,
  disabled,
  className = '',
  ...props
}: RadioButtonCardProps) {

  return (
    <Card selectable className={className}>
      <label className='w-full flex items-center justify-between gap-4'>
        <span className={cardControlStyles.content}>
          {icon}
          <span className={cardControlStyles.text}>
            <Label>{label}</Label>
            {description && (
              <Text size="sm" className={cardControlStyles.description.base}>
                {description}
              </Text>
            )}
          </span>
        </span>
        <RadioButton
          disabled={disabled}
          {...props}
        />
      </label>
    </Card>
  )
}