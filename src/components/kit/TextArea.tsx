import { textAreaThemes } from '../../constants'
import type { TextAreaProps } from '../../types'

const baseStyles =
  'w-full border p-3 text-sm transition-colors duration-200 outline-none resize disabled:opacity-50 disabled:cursor-not-allowed'

export function TextArea({ theme = 'light', className = '', ...props }: TextAreaProps) {
  return <textarea className={`${baseStyles} ${textAreaThemes[theme]} ${className}`.trim()} {...props} />
}
