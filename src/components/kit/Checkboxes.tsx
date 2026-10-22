import type { CheckboxProps } from '../../types/kit/Checkboxes'

const CheckIcon = () => (
  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const CheckIconDark = () => (
  <svg className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

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
          ? 'border-neutral-200 bg-white'
          : 'border-neutral-800 bg-black'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`
    : `inline-flex items-start gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`

  return (
    <label className={wrapperStyles}>
      {}
      <input
        type="checkbox"
        className="peer sr-only"
        disabled={disabled}
        {...props}
      />

      {}
      <div
        className={`flex mt-0.5 h-5 w-5 shrink-0 items-center justify-center border transition-colors
          ${isCard ? 'order-last ml-auto' : ''}
          ${
            theme === 'light'
              ? 'border-neutral-400 bg-white peer-checked:border-black peer-checked:bg-black'
              : 'border-neutral-600 bg-black peer-checked:border-white peer-checked:bg-white'
          }
        `}
      >
        {}
        <div className="hidden peer-checked:block">
          {theme === 'light' ? <CheckIcon /> : <CheckIconDark />}
        </div>
      </div>

      {}
      {(label || description || icon) && (
        <div className="flex flex-1 gap-3">
          {icon && (
            <div className={`flex shrink-0 items-center justify-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {icon}
            </div>
          )}
          <div className="flex flex-col">
            {label && (
              <span className={`text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                {label}
              </span>
            )}
            {description && (
              <span className={`mt-1 text-xs ${theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {description}
              </span>
            )}
          </div>
        </div>
      )}
    </label>
  )
}