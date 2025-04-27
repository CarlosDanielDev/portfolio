import { useState, useEffect } from 'react';
import { ThemeSwitcher } from '@presentation/components/ThemeSwitcher';
import { useResponsive } from '@presentation/hooks/useResponsive';
import '@presentation/styles/Header.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile } = useResponsive();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
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
    <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <h1>{import.meta.env.VITE_APP_AUTHOR || 'Your Name'}</h1>
          <p className="header-tagline">Portfolio</p>
        </div>
        
        <div className="header-actions">
          <ThemeSwitcher />
          
          <button 
            className="mobile-menu-toggle" 
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} 
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
                href="#experience" 
                className="header-nav-link" 
                onClick={handleNavLinkClick}
              >
                Experience
              </a>
            </li>
            <li className="header-nav-item">
              <a 
                href="#skills" 
                className="header-nav-link" 
                onClick={handleNavLinkClick}
              >
                Skills
              </a>
            </li>
            <li className="header-nav-item">
              <a 
                href="#terminal" 
                className="header-nav-link" 
                onClick={handleNavLinkClick}
              >
                Terminal
              </a>
            </li>
            <li className="header-nav-item">
              <a 
                href="#contact" 
                className="header-nav-link" 
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 