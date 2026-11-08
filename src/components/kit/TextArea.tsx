import { textAreaThemes } from '../../constants'
import type { TextAreaProps } from '../../types'
import { useTheme } from '../../context'

const baseStyles =
  'w-full border p-3 text-sm transition-colors duration-200 outline-none resize disabled:opacity-50 disabled:cursor-not-allowed'

export function TextArea({ theme  : themeProp , className = '', ...props }: TextAreaProps) {

  const { theme: contextTheme } = useTheme()
  const resolvedTheme = themeProp ?? contextTheme

  return <textarea className={`${baseStyles} ${textAreaThemes[resolvedTheme]} ${className}`.trim()} {...props} />
}
