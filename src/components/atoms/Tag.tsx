import { tagThemes } from '../../constants'
import type { TagProps } from '../../types'
import { useTheme } from '../../context'


const baseStyles =
  'inline-flex items-center justify-center gap-2 border px-3 py-1.5 text-xs font-medium transition-colors'

export function Tag({
  icon,
  children,
  className = '',
  ...props
}: TagProps) {
  const { theme} = useTheme()

  return (
    <span className={`${baseStyles} ${tagThemes[theme]} ${className}`.trim()} {...props}>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </span>
  )
}
