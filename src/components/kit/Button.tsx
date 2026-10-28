import type { ButtonProps } from '../../types'
import { buttonSizes, buttonVariants } from '../../constants'


const baseStyles =
  'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-50'



export function Button({
  variant = 'solid',
  size = 'md',
  theme = 'light',
  icon,
  iconPosition = 'left',
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const isIconOnly = size === 'icon'

  return (
    <button
      {...props}
      type={type}
      className={[
        baseStyles,
        buttonVariants[theme][variant],
        buttonSizes[size],
        isIconOnly ? '' : 'rounded-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {icon && iconPosition === 'left' && (
        <span className="inline-flex shrink-0 items-center">{icon}</span>
      )}
      {!isIconOnly && children != null ? children : null}
      {icon && iconPosition === 'right' && (
        <span className="inline-flex shrink-0 items-center">{icon}</span>
      )}
    </button>
  )
}