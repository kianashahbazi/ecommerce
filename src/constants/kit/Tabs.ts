export const tabsStyles = {
  container: {
    light: 'border-border-light bg-surface-light',
    dark: 'border-border-dark bg-surface-dark',
  },
  button: 'px-4 py-2 text-sm font-medium transition-colors',
  active: {
    light: 'border border-primary bg-primary text-white',
    dark: 'border border-white bg-white text-black',
  },
  inactive: {
    light: 'border border-transparent text-neutral hover:text-black',
    dark: 'border border-transparent text-neutral-light hover:text-white',
  },
} as const
