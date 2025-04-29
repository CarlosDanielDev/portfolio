import { Theme } from '@presentation/themes/Theme'
import { Color, FontFamily, Size, ThemeTokens } from '@presentation/themes/ThemeTokens'

export function createCyberpunkTheme(): Theme {
  const tokens: ThemeTokens = {
    colors: {
      primary: new Color('#ff2a6d'),
      secondary: new Color('#05d9e8'),
      background: new Color('#0d0221'),
      surface: new Color('#1a1040'),
      text: {
        primary: new Color('#d1f7ff'),
        secondary: new Color('#ceb1ff')
      },
      success: new Color('#01ffc3'),
      error: new Color('#ff2a6d'),
      warning: new Color('#ffe619'),
      info: new Color('#05d9e8')
    },
    typography: {
      fontFamily: new FontFamily('Orbitron, "Blade Runner", "Eurostile", monospace'),
      fontSize: {
        small: new Size('0.875rem'),
        medium: new Size('1rem'),
        large: new Size('1.25rem'),
        xlarge: new Size('1.5rem')
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700
      },
      lineHeight: {
        small: new Size('1.2'),
        medium: new Size('1.5'),
        large: new Size('1.8')
      }
    },
    spacing: {
      xsmall: new Size('0.25rem'),
      small: new Size('0.5rem'),
      medium: new Size('1rem'),
      large: new Size('1.5rem'),
      xlarge: new Size('2rem')
    },
    borderRadius: {
      small: new Size('0'),
      medium: new Size('4px'),
      large: new Size('8px'),
      round: new Size('50%')
    },
    shadows: {
      small: '0 0 4px rgba(255, 42, 109, 0.5)',
      medium: '0 0 8px rgba(255, 42, 109, 0.6), 0 0 12px rgba(5, 217, 232, 0.4)',
      large: '0 0 16px rgba(255, 42, 109, 0.7), 0 0 24px rgba(5, 217, 232, 0.5)'
    },
    breakpoints: {
      mobile: new Size('576px'),
      tablet: new Size('768px'),
      desktop: new Size('1024px'),
      largeDesktop: new Size('1440px')
    },
    transitions: {
      fast: '150ms ease-in-out',
      medium: '300ms ease-in-out',
      slow: '500ms ease-in-out'
    }
  }

  return new Theme('cyberpunk', tokens)
} 