import { renderHook, act } from '@testing-library/react';
import { useResponsive } from '@presentation/hooks/useResponsive';
import { jest } from '@jest/globals';

const originalWindow = { ...window };
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

jest.mock('@presentation/styles/Breakpoints', () => ({
  Breakpoints: {
    sizes: {
      mobile: 0,
      tablet: 576,
      desktop: 768,
      largeDesktop: 1024,
      extraLarge: 1440
    }
  }
}));

describe('useResponsive hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true });
    
    window.addEventListener = mockAddEventListener;
    window.removeEventListener = mockRemoveEventListener;
  });
  
  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', { 
      value: originalWindow.innerWidth,
      writable: true
    });
    Object.defineProperty(window, 'innerHeight', { 
      value: originalWindow.innerHeight,
      writable: true 
    });
    
    window.addEventListener = originalWindow.addEventListener;
    window.removeEventListener = originalWindow.removeEventListener;
  });
  
  it('should initialize with correct viewport size', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
    
    const { result } = renderHook(() => useResponsive());
    
    expect(result.current.width).toBe(1200);
    expect(result.current.height).toBe(800);
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(true);
    
    expect(mockAddEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
  });
  
  it('should detect mobile viewport', () => {
    Object.defineProperty(window, 'innerWidth', { value: 500, writable: true });
    
    const { result } = renderHook(() => useResponsive());
    
    expect(result.current.width).toBe(500);
    expect(result.current.isMobile).toBe(true);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(false);
  });
  
  it('should detect tablet viewport', () => {
    Object.defineProperty(window, 'innerWidth', { value: 600, writable: true });
    
    const { result } = renderHook(() => useResponsive());
    
    expect(result.current.width).toBe(600);
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isDesktop).toBe(false);
  });
  
  it('should update on window resize', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
    
    const { result } = renderHook(() => useResponsive());
    
    expect(result.current.isDesktop).toBe(true);
    
    const resizeHandler = mockAddEventListener.mock.calls[0][1] as EventListener;
    
    Object.defineProperty(window, 'innerWidth', { value: 500, writable: true });
    
    act(() => {
      resizeHandler(new Event('resize'));
    });
    
    expect(result.current.width).toBe(500);
    expect(result.current.isMobile).toBe(true);
    expect(result.current.isDesktop).toBe(false);
  });
  
  it('should remove event listener on unmount', () => {
    const { unmount } = renderHook(() => useResponsive());
    
    unmount();
    
    expect(mockRemoveEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
  });
}); 