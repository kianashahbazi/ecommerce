import type { ToggleProps } from '../../types/kit/Toggle'

export default function Toggle({
  theme = 'light',
  layout = 'standard',
  label,
  description,
  icon,
  className = '',
  disabled,
  ...props
}: ToggleProps) {
  const isDisabled = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  const switchElement = (
    <div
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors peer-checked:[&>span]:translate-x-5 ${
        theme === 'light'
          ? 'bg-neutral-300 peer-checked:bg-black'
          : 'bg-neutral-700 peer-checked:bg-white peer-checked:[&>span]:bg-black'
      }`}
    >
      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform" />
    </div>
  )

  if (layout === 'card') {
    return (
      <label
        className={`relative flex items-start justify-between gap-4 border p-4 transition-colors ${isDisabled} ${className} ${
          theme === 'light' ? 'border-neutral-200 bg-white' : 'border-neutral-800 bg-black'
        }`}
      >
        <input type="checkbox" className="peer sr-only" disabled={disabled} {...props} />

        <div className="flex gap-3 pr-4">
          {icon && (
            <div className={`mt-0.5 flex shrink-0 items-center justify-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {icon}
            </div>
          )}
          <div className="flex flex-col">
            <span className={`text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {label}
            </span>
            {description && (
              <span className={`mt-1 text-xs leading-relaxed ${theme === 'light' ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {description}
              </span>
            )}
          </div>
        </div>

        {switchElement}
      </label>
    )
  }

  return (
    <label className={`inline-flex items-center gap-3 ${isDisabled} ${className}`}>
      <input type="checkbox" className="peer sr-only" disabled={disabled} {...props} />
      
      {switchElement}

      {label && (
        <span className={`text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          {label}
        </span>
      )}
    </label>
  )
}