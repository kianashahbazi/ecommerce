import type { CheckboxTheme } from '../../../types'

type CheckboxStyleOptions = {
  theme: CheckboxTheme
  isCard: boolean
  disabled?: boolean
  className: string
}

export const checkboxStyles = {
  cursor: {
    enabled: 'cursor-pointer',
    disabled: 'cursor-not-allowed opacity-50',
  },
  wrapper: {
    standard: 'inline-flex items-start gap-3',
    card: 'flex gap-4 border p-4 transition-colors',
    cardTheme: {
      light: 'border-border-light bg-surface-light',
      dark: 'border-border-dark bg-surface-dark text-white',
    },
  },
  indicator: {
    base: 'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors',
    cardPosition: 'order-last ml-auto',
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
  content: 'flex min-w-0 flex-1 gap-3',
  contentIcon: {
    base: 'flex shrink-0 items-center justify-center',
    theme: {
      light: 'text-primary',
      dark: 'text-white',
    },
  },
  label: {
    light: 'text-primary',
    dark: 'text-white',
  },
  description: {
    base: 'mt-1',
    theme: {
      light: 'text-neutral',
      dark: 'text-neutral-light',
    },
  },
} as const

export function getCheckboxWrapperStyles({
  theme,
  isCard,
  disabled,
  className,
}: CheckboxStyleOptions): string {
  const cursor = disabled ? checkboxStyles.cursor.disabled : checkboxStyles.cursor.enabled
  const wrapper = isCard
    ? [checkboxStyles.wrapper.card, checkboxStyles.wrapper.cardTheme[theme], cursor, className]
    : [checkboxStyles.wrapper.standard, cursor, className]

  return wrapper.filter(Boolean).join(' ')
}

export function getCheckboxIndicatorStyles(theme: CheckboxTheme, isCard: boolean): string {
  return [
    checkboxStyles.indicator.base,
    isCard ? checkboxStyles.indicator.cardPosition : '',
    checkboxStyles.indicator.theme[theme],
    checkboxStyles.indicator.checkedIcon,
  ]
    .filter(Boolean)
    .join(' ')
}
