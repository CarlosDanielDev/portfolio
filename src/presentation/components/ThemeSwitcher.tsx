import { useState, useRef, useEffect } from 'react'
import { useThemeContext } from '@presentation/contexts/ThemeContext'
import './ThemeSwitcher.css'

export function ThemeSwitcher() {
  const { themeName, setTheme, availableThemes } = useThemeContext()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  
  const themeIcons = {
    light: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    ),
    dark: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    ),
    cyberpunk: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  }
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const getCurrentIcon = () => {
    const icon = themeIcons[themeName as keyof typeof themeIcons]
    return icon || themeIcons.light
  }
  
  return (
    <div className="theme-switcher-container" ref={menuRef}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="theme-switcher"
        aria-label="Selecionar tema"
        title="Selecionar tema"
      >
        {getCurrentIcon()}
      </button>
      
      {menuOpen && (
        <div className="theme-menu">
          {availableThemes.map((theme) => (
            <button
              key={theme.getName()}
              className={`theme-menu-item ${theme.getName() === themeName ? 'active' : ''}`}
              onClick={() => {
                setTheme(theme.getName())
                setMenuOpen(false)
              }}
            >
              <span className="theme-icon">
                {themeIcons[theme.getName() as keyof typeof themeIcons] || themeIcons.light}
              </span>
              <span className="theme-name">
                {theme.getName().charAt(0).toUpperCase() + theme.getName().slice(1)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 