export interface TabOption {
  label: string
  value: string
}

export interface TabsProps {
  options: TabOption[]
  value: string
  onChange: (value: string) => void
  theme?: 'light' | 'dark'
}