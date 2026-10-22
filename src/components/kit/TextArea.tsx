import type { TextAreaProps } from '../../types/kit/TextArea'

const baseStyles =
  'w-full border p-3 text-sm transition-colors outline-none resize disabled:opacity-50 disabled:cursor-not-allowed'

const themes = {
  light: 
    'border-neutral-300 bg-white text-black placeholder:text-neutral-400 focus:border-black',
  dark: 
    'border-neutral-700 bg-black text-white placeholder:text-neutral-500 focus:border-white',
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