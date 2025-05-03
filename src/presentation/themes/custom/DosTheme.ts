import { Theme } from '@presentation/themes/Theme'
import { Color, FontFamily, Size, ThemeTokens } from '@presentation/themes/ThemeTokens'

export function createDosTheme(): Theme {
  const tokens: ThemeTokens = {
    colors: {
      primary: new Color('#00ff00'),       
      secondary: new Color('#008000'),    
      background: new Color('#000000'),    
      surface: new Color('#101010'),      
      text: {
        primary: new Color('#00ff00'),     
        secondary: new Color('#00cc00')    
      },
      success: new Color('#00ff00'),       
      error: new Color('#ff0000'),        
      warning: new Color('#ffff00'),       
      info: new Color('#00ffff')          
    },
    typography: {
      fontFamily: new FontFamily('"VT323", "Courier New", "Lucida Console", monospace'),
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
      medium: new Size('0'),        
      large: new Size('0'),          
      round: new Size('50%')         
    },
    shadows: {
      small: '0 0 5px rgba(0, 255, 0, 0.5)',
      medium: '0 0 10px rgba(0, 255, 0, 0.6)',
      large: '0 0 15px rgba(0, 255, 0, 0.7)'
    },
    breakpoints: {
      mobile: new Size('576px'),
      tablet: new Size('768px'),
      desktop: new Size('1024px'),
      largeDesktop: new Size('1440px')
    },
    transitions: {
      fast: '100ms step-end',       
      medium: '200ms step-end',     
      slow: '300ms step-end'        
    }
  }

  return new Theme('dos', tokens)
} 