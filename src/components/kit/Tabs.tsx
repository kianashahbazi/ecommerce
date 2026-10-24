import type { TabsProps } from '../../types/kit/Tabs'

export default function Tabs({ options, value, onChange, theme = 'light' }: TabsProps) {
  return (
    <div className={`inline-flex border ${theme === 'light' ? 'border-border-light bg-surface-light' : 'border-border-dark bg-surface-dark'}`}>
      {options.map((opt) => {
        const isActive = opt.value === value
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? theme === 'light'
                  ? 'border border-primary bg-primary text-white'
                  : 'border border-white bg-white text-black'
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