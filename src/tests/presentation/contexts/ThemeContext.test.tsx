import { render, screen, cleanup } from '@testing-library/react'
import { ThemeProvider, useThemeContext } from '@presentation/contexts/ThemeContext'
import { jest } from '@jest/globals'

describe('ThemeContext', () => {
  beforeEach(() => {
    cleanup()
  })

  test('ThemeProvider should provide theme values to its children', () => {
    const TestComponent = () => {
      const { themeName } = useThemeContext()
      return <div data-testid="theme-name">{themeName}</div>
    }

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const themeNameElement = screen.getByTestId('theme-name')
    expect(themeNameElement).toBeInTheDocument()
    expect(themeNameElement.textContent).toBeTruthy()
  })

  test('useThemeContext should throw an error when used outside of the ThemeProvider', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      const ErrorComponent = () => {
        useThemeContext()
        return null
      }
      
      render(<ErrorComponent />)
    }).toThrow('useThemeContext must be used within a ThemeProvider')
    
    jest.restoreAllMocks()
  })

  test('ThemeProvider should apply the theme to the body', () => {
    render(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>
    )
    
    expect(document.body.dataset.theme).toBeTruthy()
  })
}) 