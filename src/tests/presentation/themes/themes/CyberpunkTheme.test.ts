import { createCyberpunkTheme } from '@presentation/themes/custom/CyberpunkTheme';
import { Theme } from '@presentation/themes/Theme';

describe('CyberpunkTheme', () => {
  let theme: Theme;
  
  beforeEach(() => {
    theme = createCyberpunkTheme();
  });
  
  it('should create a theme instance with name "cyberpunk"', () => {
    expect(theme).toBeInstanceOf(Theme);
    expect(theme.getName()).toBe('cyberpunk');
  });
  
  it('should have defined colors', () => {
    const tokens = theme.getTokens();
    expect(tokens.colors.primary.toString()).toBeDefined();
    expect(tokens.colors.secondary.toString()).toBeDefined();
    expect(tokens.colors.background.toString()).toBeDefined();
  });
  
  it('should have correct typography settings', () => {
    const tokens = theme.getTokens();
    expect(tokens.typography.fontFamily.toString()).toBeDefined();
    expect(tokens.typography.fontSize.medium.toString()).toBeDefined();
    expect(tokens.typography.fontWeight.bold).toBeGreaterThan(600);
  });
  
  it('should have correct spacing values', () => {
    const tokens = theme.getTokens();
    expect(tokens.spacing.medium.toString()).toBeDefined();
  });
  
  it('should have defined shadow values', () => {
    const tokens = theme.getTokens();
    expect(tokens.shadows.small).toBeDefined();
    expect(tokens.shadows.medium).toBeDefined();
    expect(tokens.shadows.large).toBeDefined();
  });
  
  it('should have defined transition values', () => {
    const tokens = theme.getTokens();
    expect(tokens.transitions.fast).toBeDefined();
    expect(tokens.transitions.medium).toBeDefined();
    expect(tokens.transitions.slow).toBeDefined();
  });
}); 