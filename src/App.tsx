import { PortfolioProvider } from '@presentation/contexts/PortfolioContext';
import { Header } from '@presentation/components/Header';
import { CompanyList } from '@presentation/components/CompanyList';
import { SkillsList } from '@presentation/components/SkillsList';
import { Terminal } from '@presentation/components/Terminal';
import { Footer } from '@presentation/components/Footer';
import { ThemeProvider } from '@presentation/contexts/ThemeContext';
import { ResponsiveInfo } from '@presentation/components/ResponsiveInfo';
import './App.css';

const SHOW_RESPONSIVE_INFO = import.meta.env.DEV;

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <div className="app">
          <Header />
          
          <main className="main-content container">
            <section id="experience" className="section">
              <h2 className="section-title">Experience & Skills</h2>
              <div className="content-grid">
                <div className="content-left">
                  <CompanyList />
                </div>
                <div className="content-right">
                  <SkillsList />
                </div>
              </div>
            </section>
            
            <section id="terminal" className="section">
              <h2 className="section-title">Interactive Terminal</h2>
              <p className="section-description">
                Try out some commands in the terminal below to explore my experience and skills.
                Type <code>help</code> to see available commands.
              </p>
              <Terminal />
            </section>
          </main>
          
          <div id="contact">
            <Footer />
          </div>
          
          <ResponsiveInfo show={SHOW_RESPONSIVE_INFO} />
        </div>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
