export const buttonVariants = {
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

export const buttonSizes = {
  sm:   'min-h-7 px-3 text-xs',
  md:   'min-h-8 px-4 text-sm',
  lg:   'min-h-10 px-5 text-sm',
  icon: 'size-8',
}