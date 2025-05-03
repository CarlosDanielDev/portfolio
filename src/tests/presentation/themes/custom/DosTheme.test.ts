import { createDosTheme } from '@presentation/themes/custom/DosTheme';

describe('DosTheme', () => {
  it('should create a DOS theme with the correct name', () => {
    const theme = createDosTheme();
    
    expect(theme.getName()).toBe('dos');
  });
  
  it('should have the correct primary and background colors', () => {
    const theme = createDosTheme();
    const tokens = theme.getTokens();
    
    expect(tokens.colors.primary.toString()).toBe('#00ff00');
    expect(tokens.colors.background.toString()).toBe('#000000');
  });
  
  it('should use the correct font family', () => {
    const theme = createDosTheme();
    const tokens = theme.getTokens();
    
    expect(tokens.typography.fontFamily.toString()).toBe('"VT323", "Courier New", "Lucida Console", monospace');
  });
  
  it('should have zero border radius for retro DOS style', () => {
    const theme = createDosTheme();
    const tokens = theme.getTokens();
    
    expect(tokens.borderRadius.small.toString()).toBe('0');
    expect(tokens.borderRadius.medium.toString()).toBe('0');
    expect(tokens.borderRadius.large.toString()).toBe('0');
  });
  
  it('should correctly convert to CSS variables', () => {
    const theme = createDosTheme();
    const cssVars = theme.toCssVariables();
    
    expect(cssVars['colors-primary']).toBe('#00ff00');
    expect(cssVars['colors-background']).toBe('#000000');
    expect(cssVars['typography-fontFamily']).toBe('"VT323", "Courier New", "Lucida Console", monospace');
    expect(cssVars['borderRadius-small']).toBe('0');
  });
}); 