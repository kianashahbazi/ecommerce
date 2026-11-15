export const toggleStyles = {
  wrapper: {
    base: 'relative inline-flex shrink-0',
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
}