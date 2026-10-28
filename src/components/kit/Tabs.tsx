import { tabsStyles } from '../../constants'
import type { TabsProps } from '../../types'

export function Tabs({ options, value, onChange, theme = 'light' }: TabsProps) {
  return (
    <div className={`inline-flex border ${tabsStyles.container[theme]}`}>
      {options.map((opt) => {
        const isActive = opt.value === value

        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={[
              tabsStyles.button,
              isActive ? tabsStyles.active[theme] : tabsStyles.inactive[theme],
            ].join(' ')}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
