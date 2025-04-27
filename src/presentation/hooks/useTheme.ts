import { useCallback, useEffect, useState } from 'react'
import { ThemeManager } from '@presentation/themes/ThemeManager'
import { Theme } from '@presentation/themes/Theme'

export function useTheme() {
  const themeManager = ThemeManager.getInstance()
  const [currentTheme, setCurrentTheme] = useState<Theme>(themeManager.getCurrentTheme())
  
  useEffect(() => {
    const handleThemeChange = (theme: Theme) => {
      setCurrentTheme(theme)
    }
    
    themeManager.addChangeListener(handleThemeChange)
    
    themeManager.initialize()
    
    return () => {
      themeManager.removeChangeListener(handleThemeChange)
    }
  }, [themeManager])
  
  const setTheme = useCallback(
    (themeName: string) => {
      themeManager.setTheme(themeName)
    },
    [themeManager]
  )
  
  const toggleTheme = useCallback(() => {
    themeManager.toggleTheme()
  }, [themeManager])
  
  const availableThemes = themeManager.getAvailableThemes()
  
  return {
    currentTheme,
    themeName: currentTheme.getName(),
    setTheme,
    toggleTheme,
    availableThemes
  }
} 