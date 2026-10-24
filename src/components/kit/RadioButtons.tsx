import Label from './typography/Label'
import Text from './typography/Text'
import type { RadioProps } from '../../types/kit/RadioButtons'
import CheckIcon from '../../assets/icons/CheckIcon'; 

const RadioDot = ({ theme }: { theme: 'light' | 'dark' }) => (
  <div
    className={`hidden h-2.5 w-2.5 rounded-full peer-checked:block ${
      theme === 'light' ? 'bg-white' : 'bg-black'
    }`}
  />
)


export default function Radio({
  theme = 'light',
  layout = 'standard',
  label,
  description,
  icon,
  prefix,
  className = '',
  disabled,
  ...props
}: RadioProps) {
  const isDisabled = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  if (layout === 'button') {
    return (
      <label className={`inline-block ${isDisabled} ${className}`}>
        <input type="radio" className="peer sr-only" disabled={disabled} {...props} />
        <div
          className={`flex items-center gap-3 border px-3 py-1.5 text-sm transition-colors ${
            theme === 'light'
              ? 'border-border-light bg-surface-light text-black peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white'
              : 'border-border-dark bg-surface-dark text-white peer-checked:border-white peer-checked:bg-white peer-checked:text-black'
          }`}
        >
          {prefix && (
            <div
              className={`flex h-6 w-6 items-center justify-center border text-xs font-bold ${
                theme === 'light'
                  ? 'border-border-light bg-surface-light text-black peer-checked:border-white peer-checked:bg-primary peer-checked:text-white'
                  : 'border-border-dark bg-surface-dark text-white peer-checked:border-black peer-checked:bg-white peer-checked:text-black'
              }`}
            >
              {prefix}
            </div>
          )}
          <Label>{label}</Label>
        </div>
      </label>
    )
  }

  if (layout === 'card') {
    return (
      <label
        className={`relative flex items-start gap-4 border p-4 transition-colors ${isDisabled} ${className} ${
          theme === 'light' 
            ? 'border-border-light bg-surface-light peer-checked:border-primary' 
            : 'border-border-dark bg-surface-dark peer-checked:border-white'
        }`}
      >
        <input type="radio" className="peer sr-only" disabled={disabled} {...props} />

        <div className="flex gap-3 pr-6">
          {icon && (
            <div className={`mt-0.5 flex shrink-0 items-center justify-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {icon}
            </div>
          )}
          <div className="flex flex-col">
            <Label className={theme === 'light' ? 'text-black' : 'text-white'}>
              {label}
            </Label>
            {description && (
              <Text className={`mt-1 ${theme === 'light' ? 'text-neutral' : 'text-neutral-light'}`}>
                {description}
              </Text>
            )}
          </div>
        </div>

        <div
          className={`absolute right-4 top-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
            theme === 'light'
              ? 'border-neutral-light bg-surface-light peer-checked:border-primary peer-checked:bg-primary'
              : 'border-border-dark bg-surface-dark peer-checked:border-white peer-checked:bg-white'
          }`}
        >
          <CheckIcon className={`w-3 h-3 ${theme === 'light' ? 'text-white' : 'text-black'}`} />
        </div>
      </label>
    )
  }

  return (
    <label className={`inline-flex items-start gap-3 ${isDisabled} ${className}`}>
      <input type="radio" className="peer sr-only" disabled={disabled} {...props} />
      
      <div
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
          theme === 'light'
            ? 'border-neutral-light bg-surface-light peer-checked:border-primary peer-checked:bg-primary'
            : 'border-border-dark bg-surface-dark peer-checked:border-white peer-checked:bg-white'
        }`}
      >
        <RadioDot theme={theme} />
      </div>

      <div className="flex flex-col">
        {label && (
          <Label className={theme === 'light' ? 'text-black' : 'text-white'}>
            {label}
          </Label>
        )}
      </div>
    </label>
  )
}