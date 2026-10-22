export interface FilterOption {
  label: string
  value: string
}

export interface FiltersProps {
  options: FilterOption[]
  activeValue: string
  onChange: (value: string) => void
  theme?: 'light' | 'dark'
}