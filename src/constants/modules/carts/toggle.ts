export const toggleStyles = {
  cursor: {
    enabled: 'cursor-pointer',
    disabled: 'cursor-not-allowed opacity-50',
  },
  switch: {
    base: 'relative h-6 w-11 shrink-0 rounded-full transition-colors peer-checked:[&>span]:translate-x-5',
    theme: {
      light: 'bg-neutral-light peer-checked:bg-primary',
      dark: 'bg-border-dark peer-checked:bg-white',
    },
    knob: {
      base: 'absolute left-0.5 top-0.5 h-5 w-5 rounded-full transition-transform',
      theme: {
        light: 'bg-white',
        dark: 'bg-white peer-checked:bg-black',
      },
    },
  },
  card: {
    wrapper: 'relative flex items-start justify-between gap-4 border p-4 transition-colors',
    theme: {
      light: 'border-border-light bg-surface-light',
      dark: 'border-border-dark bg-surface-dark',
    },
    content: 'flex min-w-0 gap-3 pr-4',
    icon: {
      base: 'mt-0.5 flex shrink-0 items-center justify-center',
      theme: { light: 'text-black', dark: 'text-white' },
    },
    label: { light: 'text-black', dark: 'text-white' },
    description: {
      base: 'mt-1',
      theme: { light: 'text-neutral', dark: 'text-neutral-light' },
    },
  },
  standard: {
    wrapper: 'inline-flex items-center gap-3',
    label: { light: 'text-black', dark: 'text-white' },
  },
} as const
