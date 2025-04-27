import { renderHook, act } from '@testing-library/react';
import { useTheme } from '@presentation/hooks/useTheme';
import { jest } from '@jest/globals';

jest.mock('@presentation/themes/ThemeManager');

describe('useTheme hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('should provide theme and theme controls', () => {
    const { result } = renderHook(() => useTheme());
    
    expect(result.current.currentTheme).toBeDefined();
    expect(result.current.themeName).toBeDefined();
    expect(typeof result.current.setTheme).toBe('function');
    expect(typeof result.current.toggleTheme).toBe('function');
    expect(result.current.availableThemes).toBeDefined();
    
    act(() => {
      result.current.setTheme('dark');
      result.current.toggleTheme();
    });
  });
}); 