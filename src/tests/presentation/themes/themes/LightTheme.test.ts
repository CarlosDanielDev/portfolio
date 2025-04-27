import { createLightTheme } from '@presentation/themes/themes/LightTheme';
import { Theme } from '@presentation/themes/Theme';

describe('LightTheme', () => {
  let theme: Theme;
  
  beforeEach(() => {
    theme = createLightTheme();
  });
  
  it('should create a theme instance with name "light"', () => {
    expect(theme).toBeInstanceOf(Theme);
    expect(theme.getName()).toBe('light');
  });
  
  it('should have the correct primary color', () => {
    const tokens = theme.getTokens();
    expect(tokens.colors.primary.toString()).toBe('#3498db');
  });
  
  it('should have the correct background color', () => {
    const tokens = theme.getTokens();
    expect(tokens.colors.background.toString()).toBe('#ffffff');
  });
  
  it('should have light text colors', () => {
    const tokens = theme.getTokens();
    expect(tokens.colors.text.primary.toString()).toBe('#333333');
    expect(tokens.colors.text.secondary.toString()).toBe('#666666');
  });
  
  it('should have correct typography settings', () => {
    const tokens = theme.getTokens();
    expect(tokens.typography.fontFamily.toString()).toContain('Inter');
    expect(tokens.typography.fontSize.medium.toString()).toBe('1rem');
  });
  
  it('should have correct spacing values', () => {
    const tokens = theme.getTokens();
    expect(tokens.spacing.medium.toString()).toBe('1rem');
  });
}); 