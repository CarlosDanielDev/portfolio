import { useState, useEffect } from 'react';
import { ThemeSwitcher } from '@presentation/components/ThemeSwitcher';
import { DevModeToggle } from '@presentation/components/DevModeToggle';
import { useResponsive } from '@presentation/hooks/useResponsive';
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile } = useResponsive();
  
  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);
  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleNavLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };
  
  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <h1>{import.meta.env.VITE_APP_AUTHOR || 'Carlos Daniel'}</h1>
          <p className="header-tagline">Software Developer</p>
        </div>
        
        <div className="header-actions">
          <DevModeToggle />
          <ThemeSwitcher />
          
          <button 
            className="mobile-menu-toggle" 
            aria-label={menuOpen ? 'Close menu' : 'Open menu'} 
            onClick={toggleMenu}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-icon">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>
        
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <ul className="header-nav-list">
            
            <li className="header-nav-item">
              <a 
                href="#contact" 
                className="header-nav-link" 
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
            <li className="header-nav-item">
              <a 
                href="https://drive.google.com/file/d/1HBCS6VhHUH8tCcfILjqYdXDkFFLqlEcx/view?usp=sharing" 
                className="header-nav-link" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavLinkClick}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 
