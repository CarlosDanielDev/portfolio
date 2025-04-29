import { Theme } from '@presentation/themes/Theme'
import { Color, FontFamily, Size, ThemeTokens } from '@presentation/themes/ThemeTokens'

export function createLightTheme(): Theme {
  const tokens: ThemeTokens = {
    colors: {
      primary: new Color('#3498db'),
      secondary: new Color('#2ecc71'),
      background: new Color('#ffffff'),
      surface: new Color('#f8f9fa'),
      text: {
        primary: new Color('#333333'),
        secondary: new Color('#666666')
      },
      success: new Color('#2ecc71'),
      error: new Color('#e74c3c'),
      warning: new Color('#f39c12'),
      info: new Color('#3498db')
    },
    typography: {
      fontFamily: new FontFamily('Inter, system-ui, sans-serif'),
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
      small: new Size('0.25rem'),
      medium: new Size('0.5rem'),
      large: new Size('1rem'),
      round: new Size('50%')
    },
    shadows: {
      small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)',
      medium: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)',
      large: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.1)'
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

  return new Theme('light', tokens)
} 