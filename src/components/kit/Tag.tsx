import type { TagProps } from '../../types/kit/Tag'

const baseStyles =
  'inline-flex items-center justify-center gap-2 border px-3 py-1.5 text-xs font-medium transition-colors'

const themes = {
  light: 'border-neutral-200 bg-neutral-100 text-black',
  dark: 'border-neutral-700 bg-neutral-800 text-white',
}

export default function Tag({
  theme = 'light',
  icon,
  children,
  className = '',
  ...props
}: TagProps) {
  return (
    <span
      className={`${baseStyles} ${themes[theme]} ${className}`.trim()}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </span>
  )
}