import { ReactNode, createContext, useContext, useEffect } from 'react'
import { Theme } from '@presentation/themes/Theme'
import { useTheme } from '@presentation/hooks/useTheme'

interface ThemeContextType {
  currentTheme: Theme
  themeName: string
  setTheme: (themeName: string) => void
  toggleTheme: () => void
  availableThemes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const themeState = useTheme()
  
  useEffect(() => {
    document.body.dataset.theme = themeState.themeName
  }, [themeState.themeName])
  
  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  
  return context
} 