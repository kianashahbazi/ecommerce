import { tabsStyles } from '../../constants'
import type { TabsProps } from '../../types'
import { useTheme } from '../../context'


export function Tabs({ options, value, onChange, theme : themeProp }: TabsProps) {
  const {theme : contextTheme} = useTheme()
  const resolvedTheme = themeProp ?? contextTheme

  return (
    <div className={`inline-flex border ${tabsStyles.container[resolvedTheme]}`}>
      {options.map((opt) => {
        const isActive = opt.value === value

        return (
          <button
            key={opt.value}
            type='button'
            onClick={() => onChange(opt.value)}
            className={[
              tabsStyles.button,
              isActive ? tabsStyles.active[resolvedTheme] : tabsStyles.inactive[resolvedTheme],
            ].join(' ')}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
