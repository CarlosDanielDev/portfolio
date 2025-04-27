import { ThemeTokens } from '@presentation/themes/ThemeTokens'

export class Theme {
  constructor(
    private readonly name: string,
    private readonly tokens: ThemeTokens
  ) {}
  
  getName(): string {
    return this.name
  }
  
  getTokens(): ThemeTokens {
    return this.tokens
  }
  
  toCssVariables(): Record<string, string> {
    return this.flattenTokens(this.tokens as unknown as Record<string, unknown>)
  }

  applyToDocument(): void {
    const variables = this.toCssVariables()
    
    Object.entries(variables).forEach(([name, value]) => {
      document.documentElement.style.setProperty(`--${name}`, value)
    })
    
    document.documentElement.setAttribute('data-theme', this.name)
  }
  
  private flattenTokens(
    obj: Record<string, unknown>, 
    prefix = '', 
    result: Record<string, string> = {}
  ): Record<string, string> {
    for (const key in obj) {
      const value = obj[key]
      const newKey = prefix ? `${prefix}-${key}` : key
      
      if (value && typeof value === 'object' && value.toString === Object.prototype.toString) {
        this.flattenTokens(value as Record<string, unknown>, newKey, result)
      } else {
        result[newKey] = value?.toString() || ''
      }
    }
    
    return result
  }
} 