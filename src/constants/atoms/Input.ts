export const inputThemes = {
  light: {
    wrapper: 'border-border-light bg-surface-light text-black focus-within:border-primary',
    prefix: 'border-border-light bg-secondary text-neutral',
    input: 'placeholder:text-neutral-light',
  },
  dark: {
    wrapper: 'border-border-dark bg-surface-dark text-white focus-within:border-white',
    prefix: 'border-border-dark bg-neutral-darker text-neutral-light',
    input: 'placeholder:text-neutral',
  },
} as const

export const inputSizes = {
  sm: 'h-8 text-xs',
  md: 'h-10 text-sm',
  lg: 'h-12 text-base',
}
