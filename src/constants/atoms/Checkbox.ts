export const checkboxStyles = {
  indicator: {
    base: 'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors',
    theme: {
      light: 'border-neutral-light bg-surface-light peer-checked:border-primary peer-checked:bg-primary',
      dark: 'border-border-dark bg-surface-dark peer-checked:border-white peer-checked:bg-white',
    },
    checkedIcon: 'peer-checked:[&>svg]:opacity-100',
  },

  checkIcon: {
    base: 'h-3 w-3 opacity-0',
    theme: {
      light: 'text-white',
      dark: 'text-black',
    },
  },
}