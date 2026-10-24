import Label from './typography/Label'
import Text from './typography/Text'
import type { CheckboxProps } from '../../types/kit/Checkboxes'
import CheckIcon from '../../assets/icons/CheckIcon';

export default function Checkbox({
  theme = 'light',
  label,
  description,
  icon,
  isCard = false,
  className = '',
  disabled,
  ...props
}: CheckboxProps) {

  const wrapperStyles = isCard
    ? `flex gap-4 p-4 border transition-colors ${
        theme === 'light'
          ? 'border-border-light bg-surface-light'
          : 'border-border-dark bg-surface-dark text-white'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`
    : `inline-flex items-start gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`

  return (
    <label className={wrapperStyles}>
      <input
        type="checkbox"
        className="peer sr-only"
        disabled={disabled}
        {...props}
      />

      <div
        className={`flex mt-0.5 h-5 w-5 shrink-0 items-center justify-center border transition-colors
          ${isCard ? 'order-last ml-auto' : ''}
          ${
            theme === 'light'
              ? 'border-neutral-light bg-surface-light peer-checked:border-primary peer-checked:bg-primary'
              : 'border-border-dark bg-surface-dark peer-checked:border-white peer-checked:bg-white'
          }
        `}
      >
        <div className="hidden peer-checked:block">
          <CheckIcon className={`w-3 h-3 ${theme === 'light' ? 'text-white' : 'text-black'}`} />
        </div>
      </div>

      {(label || description || icon) && (
        <div className="flex flex-1 gap-3">
          {icon && (
            <div className={`flex shrink-0 items-center justify-center ${theme === 'light' ? 'text-primary' : 'text-white'}`}>
              {icon}
            </div>
          )}
          <div className="flex flex-col">
            {label && (
              <Label className={theme === 'light' ? 'text-primary' : 'text-white'}>
                {label}
              </Label>
            )}
            {description && (
              <Text className={`mt-1 ${theme === 'light' ? 'text-neutral' : 'text-neutral-light'}`}>
                {description}
              </Text>
            )}
          </div>
        </div>
      )}
    </label>
  )
}