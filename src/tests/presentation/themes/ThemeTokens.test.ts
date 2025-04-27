import { Color, FontFamily, Size } from '@presentation/themes/ThemeTokens';

describe('Color', () => {
  it('should create a valid color with hex format', () => {
    const color = new Color('#3498db');
    expect(color.toString()).toBe('#3498db');
  });
  
  it('should create a valid color with rgb format', () => {
    const color = new Color('rgb(52, 152, 219)');
    expect(color.toString()).toBe('rgb(52, 152, 219)');
  });
  
  it('should create a valid color with rgba format', () => {
    const color = new Color('rgba(52, 152, 219, 0.5)');
    expect(color.toString()).toBe('rgba(52, 152, 219, 0.5)');
  });
  
  it('should throw an error for invalid color format', () => {
    expect(() => new Color('invalid-color')).toThrow();
    expect(() => new Color('notrgb(255, 0, 0)')).toThrow();
    expect(() => new Color('#12')).toThrow(); 
  });
});

describe('Size', () => {
  it('should create a valid size with rem unit', () => {
    const size = new Size('1.5rem');
    expect(size.toString()).toBe('1.5rem');
  });
  
  it('should create a valid size with px unit', () => {
    const size = new Size('24px');
    expect(size.toString()).toBe('24px');
  });
  
  it('should create a valid size with % unit', () => {
    const size = new Size('100%');
    expect(size.toString()).toBe('100%');
  });
  
  it('should create a valid size with number only (for unitless values)', () => {
    const size = new Size('1.2');
    expect(size.toString()).toBe('1.2');
  });
  
  it('should throw an error for invalid size format', () => {
    expect(() => new Size('not-a-size')).toThrow();
    expect(() => new Size('10meters')).toThrow();
    expect(() => new Size('rem')).toThrow();
  });
});

describe('FontFamily', () => {
  it('should create a valid font family', () => {
    const font = new FontFamily('Inter, system-ui, sans-serif');
    expect(font.toString()).toBe('Inter, system-ui, sans-serif');
  });
  
  it('should throw an error for empty font family', () => {
    expect(() => new FontFamily('')).toThrow('Font family cannot be empty');
    expect(() => new FontFamily('   ')).toThrow('Font family cannot be empty');
  });
}); 