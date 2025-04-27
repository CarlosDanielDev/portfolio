import { useResponsive } from '@presentation/hooks/useResponsive';
import '@presentation/styles/ResponsiveInfo.css';

export function ResponsiveInfo({ show = false }: { show?: boolean }) {
  const { width, height, isMobile, isTablet } = useResponsive();
  
  if (!show) return null;
  
  return (
    <div className="responsive-info">
      <div className="responsive-info-content">
        <p>
          <strong>Viewport:</strong> {width}x{height}px
        </p>
        <p>
          <strong>Device:</strong>{' '}
          {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}
        </p>
        <p className="responsive-type">
          <span className="mobile-only">MOBILE</span>
          <span className="tablet-only">TABLET</span>
          <span className="desktop-only">DESKTOP</span>
        </p>
      </div>
    </div>
  );
} 