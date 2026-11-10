import {Card,Checkbox,Label,Text} from '../../kit'
import { cardControlStyles } from '../../../constants'
import type { CheckboxCardProps } from '../../../types'

export function CheckboxCard({
    label,
    description,
    icon,
    disabled,
    className = '',
    ...props
}:CheckboxCardProps){

    return(
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
          <Checkbox
            disabled={disabled}
            {...props}
          />
        </label>
      </Card>
    )
}