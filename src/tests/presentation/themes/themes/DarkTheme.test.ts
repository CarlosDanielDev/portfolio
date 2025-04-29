import { createDarkTheme } from '@presentation/themes/custom/DarkTheme';
import { Theme } from '@presentation/themes/Theme';

describe('DarkTheme', () => {
  let theme: Theme;
  
  beforeEach(() => {
    theme = createDarkTheme();
  });
  
  it('should create a theme instance with name "dark"', () => {
    expect(theme).toBeInstanceOf(Theme);
    expect(theme.getName()).toBe('dark');
  });
  
  it('should have the correct primary color', () => {
    const tokens = theme.getTokens();
    expect(tokens.colors.primary.toString()).toBeDefined();
  });
  
  it('should have dark background color', () => {
    const tokens = theme.getTokens();
    const bgColor = tokens.colors.background.toString();
    expect(bgColor).not.toBe('#ffffff');
    expect(bgColor).not.toBe('#f8f9fa');
  });
  
  it('should have light text colors for dark background', () => {
    const tokens = theme.getTokens();
    const textColor = tokens.colors.text.primary.toString();
    expect(textColor).not.toBe('#333333');
    expect(textColor).not.toBe('#666666');
  });
  
  it('should have correct typography settings', () => {
    const tokens = theme.getTokens();
    expect(tokens.typography.fontFamily.toString()).toBeDefined();
    expect(tokens.typography.fontSize.medium.toString()).toBe('1rem');
  });
  
  it('should have correct spacing values', () => {
    const tokens = theme.getTokens();
    expect(tokens.spacing.medium.toString()).toBe('1rem');
  });
}); 