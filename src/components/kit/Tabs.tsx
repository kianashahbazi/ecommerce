import type { TabsProps } from '../../types/kit/Tabs'

export default function Tabs({ options, value, onChange, theme = 'light' }: TabsProps) {
  return (
    <div
      className={`inline-flex border ${
        theme === 'light' ? 'border-neutral-400 bg-white' : 'border-neutral-600 bg-black'
      }`}
    >
      {options.map((opt) => {
        const isActive = opt.value === value
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? theme === 'light'
                  ? 'border border-black bg-white text-black'
                  : 'border border-white bg-black text-white'
                : theme === 'light'
                ? 'border border-transparent text-neutral-500 hover:text-black'
                : 'border border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}