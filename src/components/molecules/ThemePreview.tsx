import { ThemeProvider } from '../../context'
import type { ThemePreviewProps } from '../../types'

export function ThemePreview({
  theme,
  children,
}: ThemePreviewProps) {

  return (
    <ThemeProvider defaultTheme={theme}>
      {children}
    </ThemeProvider>
  )
}