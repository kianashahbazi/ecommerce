import type { TextAreaProps } from '../../types/kit/TextArea'

const baseStyles =
  'w-full border p-3 text-sm transition-colors duration-200 outline-none resize disabled:opacity-50 disabled:cursor-not-allowed'

const themes = {
  light: 
    'border-border-light bg-surface-light text-black placeholder:text-neutral-light focus:border-primary',
  dark: 
    'border-border-dark bg-surface-dark text-white placeholder:text-neutral focus:border-white',
}

export default function TextArea({
  theme = 'light',
  className = '',
  ...props
}: TextAreaProps) {
  return (
    <textarea
      className={`${baseStyles} ${themes[theme]} ${className}`.trim()}
      {...props}
    />
  )
}