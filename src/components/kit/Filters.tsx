import { filtersStyles } from '../../constants'
import type { FiltersProps } from '../../types'
import { useTheme } from '../../context'

export function Filters({ options, activeValue, onChange, theme : themeProp, }: FiltersProps) {

  const {theme:contextTheme} = useTheme()
  const resolvedTheme = themeProp ?? contextTheme
  
  return (
    <div className="flex flex-wrap items-center gap-2">
      {options.map((opt) => {
        const isActive = opt.value === activeValue

        return (
          <button
            key={opt.value}
            type='button'
            onClick={() => onChange(opt.value)}
            className={[
              filtersStyles.button,
              isActive ? filtersStyles.active[resolvedTheme] : filtersStyles.inactive[resolvedTheme],
            ].join(' ')}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
