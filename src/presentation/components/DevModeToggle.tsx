import { useDevMode } from '@presentation/contexts/DevModeContext';
import './DevModeToggle.css';

export function DevModeToggle() {
  const { isDevMode, toggleDevMode } = useDevMode();

  return (
    <button
      className={`dev-mode-toggle ${isDevMode ? 'active' : ''}`}
      onClick={toggleDevMode}
      aria-label={isDevMode ? 'Disable Dev Mode' : 'Enable Dev Mode'}
      title={isDevMode ? 'Disable Dev Mode' : 'Enable Dev Mode'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 18l6-6-6-6"></path>
        <path d="M8 6l-6 6 6 6"></path>
        <line x1="12" y1="2" x2="12" y2="22"></line>
      </svg>
    </button>
  );
} 