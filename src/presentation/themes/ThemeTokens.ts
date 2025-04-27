export class Color {
  constructor(private readonly value: string) {
    if (!Color.isValid(value)) {
      throw new Error(`Invalid color format: ${value}`)
    }
  }

  toString(): string {
    return this.value
  }

  private static isValid(value: string): boolean {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$|^rgba\(\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*(0|1|0\.\d+)\)$/.test(value)
  }
}

export class Size {
  constructor(private readonly value: string) {
    if (!Size.isValid(value)) {
      throw new Error(`Invalid size format: ${value}`)
    }
  }

  toString(): string {
    return this.value
  }

  private static isValid(value: string): boolean {
    return /^(\d+(\.\d+)?)$|^(\d+(\.\d+)?)(px|rem|em|vh|vw|%|pt)$/.test(value)
  }
}

export class FontFamily {
  constructor(private readonly value: string) {
    if (!value || value.trim() === '') {
      throw new Error('Font family cannot be empty')
    }
  }

  toString(): string {
    return this.value
  }
}

export interface ThemeTokens {
  colors: {
    primary: Color
    secondary: Color
    background: Color
    surface: Color
    text: {
      primary: Color
      secondary: Color
    }
    success: Color
    error: Color
    warning: Color
    info: Color
  }
  typography: {
    fontFamily: FontFamily
    fontSize: {
      small: Size
      medium: Size
      large: Size
      xlarge: Size
    }
    fontWeight: {
      regular: number
      medium: number
      bold: number
    }
    lineHeight: {
      small: Size
      medium: Size
      large: Size
    }
  }
  spacing: {
    xsmall: Size
    small: Size
    medium: Size
    large: Size
    xlarge: Size
  }
  borderRadius: {
    small: Size
    medium: Size
    large: Size
    round: Size
  }
  shadows: {
    small: string
    medium: string
    large: string
  }
  breakpoints: {
    mobile: Size
    tablet: Size
    desktop: Size
    largeDesktop: Size
  }
  transitions: {
    fast: string
    medium: string
    slow: string
  }
} 