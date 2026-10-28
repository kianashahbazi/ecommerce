import { filtersStyles } from '../../constants'
import type { FiltersProps } from '../../types'

export function Filters({ options, activeValue, onChange, theme = 'light' }: FiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {options.map((opt) => {
        const isActive = opt.value === activeValue

        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={[
              filtersStyles.button,
              isActive ? filtersStyles.active[theme] : filtersStyles.inactive[theme],
            ].join(' ')}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
