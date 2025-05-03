import { Theme } from '@presentation/themes/Theme'
import { createDarkTheme } from '@presentation/themes/custom/DarkTheme'
import { createLightTheme } from '@presentation/themes/custom/LightTheme'
import { createCyberpunkTheme } from '@presentation/themes/custom/CyberpunkTheme'
import { createDosTheme } from '@presentation/themes/custom/DosTheme'

export type ThemeChangeListener = (theme: Theme) => void

export class ThemeManager {
  private static instance: ThemeManager | null = null
  
  private currentTheme: Theme

  private registeredThemes: Map<string, Theme>

  private listeners: Set<ThemeChangeListener>

  private storageKey = 'portfolio-theme'
  
  private constructor() {
    this.registeredThemes = new Map()
    this.listeners = new Set()
    
    this.registerTheme(createDarkTheme())
    this.registerTheme(createLightTheme())
    this.registerTheme(createCyberpunkTheme())
    this.registerTheme(createDosTheme())
    
    const savedTheme = this.loadSavedTheme()
    this.currentTheme = savedTheme || this.getTheme('dos')
  }
  
  static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager()
    }
    return ThemeManager.instance
  }
  
  registerTheme(theme: Theme): void {
    this.registeredThemes.set(theme.getName(), theme)
  }
  
  getTheme(name: string): Theme {
    const theme = this.registeredThemes.get(name)
    if (!theme) {
      throw new Error(`Theme ${name} not found`)
    }
    return theme
  }
  
  getCurrentTheme(): Theme {
    return this.currentTheme
  }
  
  getAvailableThemes(): Theme[] {
    return Array.from(this.registeredThemes.values())
  }
  
  setTheme(name: string): void {
    const theme = this.getTheme(name)
    
    if (theme.getName() !== this.currentTheme.getName()) {
      this.currentTheme = theme
      
      theme.applyToDocument()
      
      this.saveThemePreference(name)
      
      this.notifyListeners()
    }
  }
  
  addChangeListener(listener: ThemeChangeListener): void {
    this.listeners.add(listener)
  }
  
  removeChangeListener(listener: ThemeChangeListener): void {
    this.listeners.delete(listener)
  }
  
  private notifyListeners(): void {
    this.listeners.forEach(listener => {
      listener(this.currentTheme)
    })
  }
  
  private loadSavedTheme(): Theme | null {
    try {
      const savedThemeName = localStorage.getItem(this.storageKey)
      
      if (savedThemeName && this.registeredThemes.has(savedThemeName)) {
        return this.registeredThemes.get(savedThemeName) || null
      }
      
      return null
    } catch (error) {
      console.error('Failed to load saved theme preference:', error)
      return null
    }
  }
  
  private saveThemePreference(themeName: string): void {
    try {
      localStorage.setItem(this.storageKey, themeName)
    } catch (error) {
      console.error('Failed to save theme preference:', error)
    }
  }
  
  initialize(): void {
    this.currentTheme.applyToDocument()
  }
  
  toggleTheme(): void {
    const currentName = this.currentTheme.getName()
    const newName = currentName === 'dos' ? 'dark' : 'dos'
    
    this.setTheme(newName)
  }
} 