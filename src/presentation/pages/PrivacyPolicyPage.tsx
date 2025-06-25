import { useState, useEffect } from 'react';
import { usePrivacyPolicy } from '@presentation/hooks/usePrivacyPolicy';
import './PrivacyPolicyPage.css';

export function PrivacyPolicyPage() {
  const { privacyPolicy, isLoading, error } = usePrivacyPolicy();
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    if (privacyPolicy && privacyPolicy.sections.length > 0) {
      setActiveSection(privacyPolicy.sections[0].id);
    }
  }, [privacyPolicy]);

  if (isLoading) {
    return (
      <div className="privacy-policy-page">
        <div className="privacy-loading">
          <div className="loading-spinner"></div>
          <p>Loading privacy policy...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="privacy-policy-page">
        <div className="privacy-error">
          <h2>Error Loading Privacy Policy</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!privacyPolicy) {
    return (
      <div className="privacy-policy-page">
        <div className="privacy-error">
          <h2>Privacy Policy Not Found</h2>
          <p>The privacy policy could not be loaded.</p>
        </div>
      </div>
    );
  }

  const activeSectionData = privacyPolicy.sections.find(
    section => section.id === activeSection
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="privacy-policy-page">
      <header className="privacy-header">
        <div className="privacy-header-content">
          <h1 className="privacy-title">{privacyPolicy.title}</h1>
          <div className="privacy-meta">
            <span className="privacy-version">Version {privacyPolicy.version}</span>
            <span className="privacy-date">Last Updated: {privacyPolicy.lastUpdated}</span>
          </div>
        </div>
      </header>

      <div className="privacy-container">
        <nav className="privacy-navigation">
          <h3>Table of Contents</h3>
          <ul className="privacy-nav-list">
            {privacyPolicy.sections
              .sort((a, b) => a.order - b.order)
              .map((section) => (
                <li key={section.id} className="privacy-nav-item">
                  <button
                    className={`privacy-nav-link ${
                      activeSection === section.id ? 'active' : ''
                    }`}
                    onClick={() => {
                      setActiveSection(section.id);
                      scrollToTop();
                    }}
                  >
                    <span className="privacy-nav-number">{section.order}</span>
                    <span className="privacy-nav-title">{section.title}</span>
                  </button>
                </li>
              ))}
          </ul>
        </nav>

        <main className="privacy-content">
          {activeSectionData && (
            <article className="privacy-section">
              <header className="privacy-section-header">
                <h2 className="privacy-section-title">
                  {activeSectionData.order}. {activeSectionData.title}
                </h2>
              </header>
              <div className="privacy-section-content">
                {activeSectionData.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.trim().startsWith('•') || paragraph.trim().includes('•')) {
                    // Handle bullet points
                    const lines = paragraph.split('\n');
                    return (
                      <ul key={index} className="privacy-list">
                        {lines.map((line, lineIndex) => {
                          if (line.trim().startsWith('•')) {
                            return (
                              <li key={lineIndex} className="privacy-list-item">
                                {line.replace('•', '').trim()}
                              </li>
                            );
                          } else if (line.trim() && !line.includes(':') && !line.endsWith(':')) {
                            return (
                              <li key={lineIndex} className="privacy-list-item">
                                {line.trim()}
                              </li>
                            );
                          } else if (line.trim()) {
                            return (
                              <h4 key={lineIndex} className="privacy-subsection">
                                {line.trim()}
                              </h4>
                            );
                          }
                          return null;
                        })}
                      </ul>
                    );
                  } else if (paragraph.trim().endsWith(':') && paragraph.trim().length < 50) {
                    // Handle section headers
                    return (
                      <h4 key={index} className="privacy-subsection">
                        {paragraph.trim()}
                      </h4>
                    );
                  } else if (paragraph.trim()) {
                    // Handle regular paragraphs
                    return (
                      <p key={index} className="privacy-paragraph">
                        {paragraph.trim()}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </article>
          )}

          <div className="privacy-navigation-buttons">
            {privacyPolicy.sections
              .sort((a, b) => a.order - b.order)
              .map((section, index, sortedSections) => {
                if (section.id === activeSection) {
                  return (
                    <div key={section.id} className="privacy-nav-buttons">
                      {index > 0 && (
                        <button
                          className="privacy-nav-button privacy-nav-prev"
                          onClick={() => {
                            setActiveSection(sortedSections[index - 1].id);
                            scrollToTop();
                          }}
                        >
                          ← Previous: {sortedSections[index - 1].title}
                        </button>
                      )}
                      {index < sortedSections.length - 1 && (
                        <button
                          className="privacy-nav-button privacy-nav-next"
                          onClick={() => {
                            setActiveSection(sortedSections[index + 1].id);
                            scrollToTop();
                          }}
                        >
                          Next: {sortedSections[index + 1].title} →
                        </button>
                      )}
                    </div>
                  );
                }
                return null;
              })}
          </div>
        </main>
      </div>

      <footer className="privacy-footer">
        <div className="privacy-footer-content">
          <p>
            This privacy policy is effective as of {privacyPolicy.lastUpdated} and applies to the BlockZero mobile application.
          </p>
          <p>
            For questions about this privacy policy, please contact us at{' '}
            <a href="mailto:carlosdanieldev@gmail.com" className="privacy-footer-link">
              carlosdanieldev@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
} 