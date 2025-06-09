import { ThemeProvider } from '@presentation/contexts/ThemeContext';
import { PortfolioProvider } from '@presentation/contexts/PortfolioContext';
import { Header } from './Header';
import { Terminal } from './Terminal';
import { Timeline } from './Timeline';
import { Footer } from './Footer';
import { useDevMode } from '@presentation/contexts/DevModeContext';
import './Main.css';

function MainContent() {
  const { isDevMode } = useDevMode();
  
  return (
    <main className="main-content">
      <Timeline />
      {isDevMode && <Terminal />}
    </main>
  );
}

function AppContent() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <AppContent />
      </PortfolioProvider>
    </ThemeProvider>
  );
} 