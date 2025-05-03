import { ThemeManager } from '@presentation/themes/ThemeManager';
import { Theme } from '@presentation/themes/Theme';
import { jest } from '@jest/globals';

describe('ThemeManager', () => {
  let themeManager: ThemeManager;
  
  const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
      getItem: jest.fn((key: string) => store[key] || null),
      setItem: jest.fn((key: string, value: string) => {
        store[key] = value.toString();
      }),
      clear: () => {
        store = {};
      }
    };
  })();
  
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
  });
  
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
    
    document.documentElement.style.setProperty = jest.fn();
    document.documentElement.setAttribute = jest.fn();
    
    themeManager = ThemeManager.getInstance();
  });
  
  it('should get singleton instance', () => {
    const instance1 = ThemeManager.getInstance();
    const instance2 = ThemeManager.getInstance();
    
    expect(instance1).toBe(instance2);
  });
  
  it('should have default themes registered', () => {
    const availableThemes = themeManager.getAvailableThemes();
    
    expect(availableThemes.length).toBeGreaterThanOrEqual(3);
    
    const themeNames = availableThemes.map(theme => theme.getName());
    expect(themeNames).toContain('light');
    expect(themeNames).toContain('dark');
    expect(themeNames).toContain('dos');
  });
  
  it('should get theme by name', () => {
    const lightTheme = themeManager.getTheme('light');
    expect(lightTheme).toBeInstanceOf(Theme);
    expect(lightTheme.getName()).toBe('light');
    
    const darkTheme = themeManager.getTheme('dark');
    expect(darkTheme).toBeInstanceOf(Theme);
    expect(darkTheme.getName()).toBe('dark');
  });
  
  it('should throw error for non-existent theme', () => {
    expect(() => {
      themeManager.getTheme('non-existent-theme');
    }).toThrow('Theme non-existent-theme not found');
  });
  
  it('should set current theme', () => {
    themeManager.setTheme('dark');
    expect(themeManager.getCurrentTheme().getName()).toBe('dark');
    
    expect(document.documentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('portfolio-theme', 'dark');
  });
  
  it('should toggle between dos and dark themes', () => {
    themeManager.setTheme('dos');
    expect(themeManager.getCurrentTheme().getName()).toBe('dos');
    
    themeManager.toggleTheme();
    expect(themeManager.getCurrentTheme().getName()).toBe('dark');
    
    themeManager.toggleTheme();
    expect(themeManager.getCurrentTheme().getName()).toBe('dos');
  });
  
  it('should notify listeners when theme changes', () => {
    const listener = jest.fn();
    themeManager.addChangeListener(listener);
    
    themeManager.setTheme('dark');
    expect(listener).toHaveBeenCalledWith(themeManager.getCurrentTheme());
    
    themeManager.removeChangeListener(listener);
    listener.mockClear();
    
    themeManager.setTheme('light');
    expect(listener).not.toHaveBeenCalled();
  });
  
  it('should initialize with saved theme from localStorage', () => {
    localStorageMock.setItem('portfolio-theme', 'dark');
    
    Object.defineProperty(ThemeManager, 'instance', {
      value: null,
      writable: true
    });
    
    const manager = ThemeManager.getInstance();
    expect(manager.getCurrentTheme().getName()).toBe('dark');
  });
}); 