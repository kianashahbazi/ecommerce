export const radioButtonStyles = {
  cursor: {
    enabled: 'cursor-pointer',
    disabled: 'cursor-not-allowed opacity-50',
  },
  button: {
    wrapper: 'inline-flex',
    control: 'flex items-center gap-3 border px-3 py-1.5 text-sm transition-colors',
    theme: {
      light: 'border-border-light bg-surface-light text-black peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white',
      dark: 'border-border-dark bg-surface-dark text-white peer-checked:border-white peer-checked:bg-white peer-checked:text-black',
    },
    checkedIcon: 'peer-checked:[&>svg]:opacity-100',
    prefix: 'flex h-6 w-6 items-center justify-center border text-xs font-bold',
    checkIcon: {
      base: 'h-3 w-3 opacity-0',
      theme: { light: 'text-white', dark: 'text-black' },
    },
  },
  card: {
    wrapper: 'relative flex items-start gap-4 border p-4 transition-colors',
    theme: {
      light: 'border-border-light bg-surface-light has-[:checked]:border-primary',
      dark: 'border-border-dark bg-surface-dark has-[:checked]:border-white',
    },
    content: 'flex min-w-0 flex-1 gap-3 pr-6',
    icon: {
      base: 'mt-0.5 flex shrink-0 items-center justify-center',
      theme: { light: 'text-black', dark: 'text-white' },
    },
    label: { light: 'text-black', dark: 'text-white' },
    description: {
      base: 'mt-1',
      theme: { light: 'text-neutral', dark: 'text-neutral-light' },
    },
    indicator: {
      base: 'absolute right-4 top-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors',
      theme: {
        light: 'border-neutral-light bg-surface-light peer-checked:border-primary peer-checked:bg-primary',
        dark: 'border-border-dark bg-surface-dark peer-checked:border-white peer-checked:bg-white',
      },
      checkedIcon: 'peer-checked:[&>svg]:opacity-100',
    },
    checkIcon: {
      base: 'h-3 w-3 opacity-0',
      theme: { light: 'text-white', dark: 'text-black' },
    },
  },
  standard: {
    wrapper: 'inline-flex items-start gap-3',
    indicator: {
      base: 'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors',
      theme: {
        light: 'border-neutral-light bg-surface-light peer-checked:border-primary peer-checked:bg-primary',
        dark: 'border-border-dark bg-surface-dark peer-checked:border-white peer-checked:bg-white',
      },
      checkedDot: 'peer-checked:[&>span]:opacity-100',
    },
    dot: {
      base: 'h-2 w-2 rounded-full opacity-0',
      theme: { light: 'bg-white', dark: 'bg-black' },
    },
    label: { light: 'text-black', dark: 'text-white' },
  },
} as const
