import { tagThemes } from '../../constants'
import type { TagProps } from '../../types'
import { useTheme } from '../../context'


const baseStyles =
  'inline-flex items-center justify-center gap-2 border px-3 py-1.5 text-xs font-medium transition-colors'

export function Tag({
  theme : themeProp,
  icon,
  children,
  className = '',
  ...props
}: TagProps) {
  const { theme: contextTheme } = useTheme()
  const resolvedTheme = themeProp ?? contextTheme

  return (
    <span className={`${baseStyles} ${tagThemes[resolvedTheme]} ${className}`.trim()} {...props}>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </span>
  )
}
