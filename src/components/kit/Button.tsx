import type { ButtonProps } from '../../types/kit/Button'

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-50'

const variants = {
  light: {
    solid: 'border border-primary bg-primary text-white hover:bg-primary-hover',
    secondary: 'border border-border-light bg-secondary text-black hover:bg-secondary-hover',
    outline: 'border border-border-light bg-transparent text-black hover:bg-secondary',
    ghost: 'border border-transparent bg-transparent text-black hover:bg-secondary',
    danger: 'border border-danger bg-danger text-white hover:bg-danger-hover',
  },
  dark: {
    solid: 'border border-white bg-white text-black hover:bg-secondary',
    secondary: 'border border-border-dark bg-surface-dark text-white hover:bg-border-dark',
    outline: 'border border-border-dark bg-transparent text-white hover:bg-white/10',
    ghost: 'border border-transparent bg-transparent text-white hover:bg-white/10',
    danger: 'border border-danger bg-danger text-white hover:bg-danger-hover',
  },
}

const sizes = {
  sm:   'min-h-7 px-3 text-xs',
  md:   'min-h-8 px-4 text-sm',
  lg:   'min-h-10 px-5 text-sm',
  icon: 'size-8',
}

export default function Button({
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
        variants[theme][variant],
        sizes[size],
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