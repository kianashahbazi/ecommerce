import type { FiltersProps } from '../../types/kit/Filters'

export default function Filters({ options, activeValue, onChange, theme = 'light' }: FiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {options.map((opt) => {
        const isActive = opt.value === activeValue
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-3 py-1.5 text-sm transition-colors ${
              isActive
                ? theme === 'light'
                  ? 'border border-border-light bg-surface-light text-black'
                  : 'border border-border-dark bg-surface-dark text-white'
                : theme === 'light'
                ? 'border border-transparent text-neutral hover:text-black'
                : 'border border-transparent text-neutral-light hover:text-white'
            }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}