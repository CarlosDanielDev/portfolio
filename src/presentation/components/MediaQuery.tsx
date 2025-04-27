import { ReactNode } from 'react'
import { useResponsive } from '@presentation/hooks/useResponsive'

type MediaQueryProps = {
  children: ReactNode
  mobile?: boolean
  tablet?: boolean
  desktop?: boolean
  notMobile?: boolean
  notTablet?: boolean
  notDesktop?: boolean
}

export function MediaQuery({
  children,
  mobile,
  tablet,
  desktop,
  notMobile,
  notTablet,
  notDesktop
}: MediaQueryProps) {
  const viewport = useResponsive()
  
  const shouldRender = () => {
    if (!mobile && !tablet && !desktop && !notMobile && !notTablet && !notDesktop) {
      return true
    }
    
    if (mobile && viewport.isMobile) return true
    if (tablet && viewport.isTablet) return true
    if (desktop && viewport.isDesktop) return true
    
    if (notMobile && !viewport.isMobile) return true
    if (notTablet && !viewport.isTablet) return true
    if (notDesktop && !viewport.isDesktop) return true
    
    return false
  }
  
  return shouldRender() ? <>{children}</> : null
} 