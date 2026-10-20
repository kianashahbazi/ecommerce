import type { ButtonProps } from "../../types"

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-50'

const variants: Record<
  NonNullable<ButtonProps['theme']>,
  Record<NonNullable<ButtonProps['variant']>, string>
> = {
  light: {
    solid:     'border border-black bg-black text-white hover:bg-neutral-800',
    secondary: 'border border-neutral-200 bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
    outline:   'border border-neutral-500 bg-transparent text-black hover:bg-neutral-100',
    ghost:     'border border-transparent bg-transparent text-black hover:bg-neutral-100',
    danger:    'border border-red-600 bg-red-600 text-white hover:bg-red-700',
  },
  dark: {
    solid:     'border border-white bg-white text-black hover:bg-neutral-200',
    secondary: 'border border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700',
    outline:   'border border-neutral-500 bg-transparent text-white hover:bg-white/10',
    ghost:     'border border-transparent bg-transparent text-white hover:bg-white/10',
    danger:    'border border-red-600 bg-red-600 text-white hover:bg-red-500',
  },
}

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
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