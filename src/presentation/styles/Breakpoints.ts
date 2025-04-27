export class Breakpoints {
  static readonly sizes = {
    mobile: 0,
    tablet: 576,
    desktop: 768,
    largeDesktop: 1024,
    extraLarge: 1440
  } as const;
  
  static min(key: keyof typeof Breakpoints.sizes): string {
    return `@media (min-width: ${Breakpoints.sizes[key]}px)`;
  }
  
  static max(key: keyof typeof Breakpoints.sizes): string {
    const size = Breakpoints.getNextBreakpointSize(key);
    return `@media (max-width: ${size - 1}px)`;
  }
  
  static between(minKey: keyof typeof Breakpoints.sizes, maxKey: keyof typeof Breakpoints.sizes): string {
    const maxSize = Breakpoints.getNextBreakpointSize(maxKey);
    return `@media (min-width: ${Breakpoints.sizes[minKey]}px) and (max-width: ${maxSize - 1}px)`;
  }
  
  private static getNextBreakpointSize(key: keyof typeof Breakpoints.sizes): number {
    const keys = Object.keys(Breakpoints.sizes) as Array<keyof typeof Breakpoints.sizes>;
    const currentIndex = keys.indexOf(key);
    const nextIndex = currentIndex + 1;
    
    if (nextIndex >= keys.length) {
      return 9999; 
    }
    
    return Breakpoints.sizes[keys[nextIndex]];
  }
  
  static isMobileView(): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < Breakpoints.sizes.desktop;
  }
  
  static isDesktopView(): boolean {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= Breakpoints.sizes.desktop;
  }
} 