export { Breakpoints } from '@presentation/styles/Breakpoints'
export { MediaQuery } from '@presentation/components/MediaQuery'
export { useResponsive } from '@presentation/hooks/useResponsive'
export { ResponsiveInfo } from '@presentation/components/ResponsiveInfo'

export const DeviceTypes = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop'
} as const

export class TouchInteraction {

  static isTouchDevice(): boolean {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-expect-error - Propriedade específica do Internet Explorer
      (navigator.msMaxTouchPoints !== undefined && navigator.msMaxTouchPoints > 0)
    )
  }

  static getAppropriateEvent(): 'click' | 'mouseenter' {
    return TouchInteraction.isTouchDevice() ? 'click' : 'mouseenter'
  }
} 