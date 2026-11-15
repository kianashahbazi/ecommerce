import { tabsStyles } from '../../constants'
import type { TabsProps } from '../../types'
import { useTheme } from '../../context'


export function Tabs({ options, value, onChange, }: TabsProps) {
  const {theme} = useTheme()

  return (
    <div className={`inline-flex border ${tabsStyles.container[theme]}`}>
      {options.map((opt) => {
        const isActive = opt.value === value

        return (
          <button
            key={opt.value}
            type='button'
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
