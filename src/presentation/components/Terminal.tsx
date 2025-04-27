import { useState, useRef, useEffect } from 'react';
import { usePortfolio } from '@presentation/contexts/PortfolioContext';
import '@presentation/styles/Terminal.css';

interface TerminalOutput {
  id: string;
  content: string;
  isCommand: boolean;
}

export function Terminal() {
  const { companies, selectedCompany, selectCompany } = usePortfolio();
  const [input, setInput] = useState('');
  const [outputs, setOutputs] = useState<TerminalOutput[]>([
    { id: '1', content: 'Welcome to the Portfolio CLI!', isCommand: false },
    { id: '2', content: 'Type "help" to see available commands.', isCommand: false }
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      processCommand(input.trim());
      setInput('');
    }
  };

  const processCommand = (command: string) => {
    const newOutput: TerminalOutput = {
      id: Date.now().toString(),
      content: command,
      isCommand: true
    };

    let responseOutput: TerminalOutput | null = null;
    
    const commandLower = command.toLowerCase();
    
    if (commandLower === 'help') {
      responseOutput = {
        id: `${Date.now()}-response`,
        content: `
Available commands:
  help - Show this help message
  ls - List all companies
  cd <company_name> - Select a company
  skills - Show skills for the current company
  clear - Clear the terminal
  about - About me
  contact - Contact information
`.trim(),
        isCommand: false
      };
    } else if (commandLower === 'ls') {
      if (companies.length === 0) {
        responseOutput = {
          id: `${Date.now()}-response`,
          content: 'No companies found.',
          isCommand: false
        };
      } else {
        responseOutput = {
          id: `${Date.now()}-response`,
          content: companies.map(c => c.name).join('\n'),
          isCommand: false
        };
      }
    } else if (commandLower.startsWith('cd ')) {
      const companyName = command.substring(3).trim();
      const company = companies.find(c => 
        c.name.toLowerCase() === companyName.toLowerCase()
      );
      
      if (company) {
        selectCompany(company.id);
        responseOutput = {
          id: `${Date.now()}-response`,
          content: `Switched to ${company.name}.`,
          isCommand: false
        };
      } else {
        responseOutput = {
          id: `${Date.now()}-response`,
          content: `Company "${companyName}" not found. Use "ls" to see available companies.`,
          isCommand: false
        };
      }
    } else if (commandLower === 'skills') {
      if (!selectedCompany) {
        responseOutput = {
          id: `${Date.now()}-response`,
          content: 'No company selected. Use "cd <company_name>" to select a company.',
          isCommand: false
        };
      } else {
        const skillsOutput = selectedCompany.skills.map(skill => 
          `${skill.name} (${skill.level}) - ${skill.description}`
        ).join('\n');
        
        responseOutput = {
          id: `${Date.now()}-response`,
          content: skillsOutput || 'No skills found for this company.',
          isCommand: false
        };
      }
    } else if (commandLower === 'clear') {
      setOutputs([]);
      return;
    } else if (commandLower === 'about') {
      responseOutput = {
        id: `${Date.now()}-response`,
        content: 'I am a software developer with expertise in web development, focusing on modern JavaScript frameworks and TypeScript.',
        isCommand: false
      };
    } else if (commandLower === 'contact') {
      responseOutput = {
        id: `${Date.now()}-response`,
        content: `
Email: ${import.meta.env.VITE_APP_EMAIL || 'your.email@example.com'}
GitHub: https://github.com/yourusername
LinkedIn: https://linkedin.com/in/yourprofile
`.trim(),
        isCommand: false
      };
    } else {
      responseOutput = {
        id: `${Date.now()}-response`,
        content: `Command not found: ${command}. Type "help" to see available commands.`,
        isCommand: false
      };
    }

    const newOutputs = [...outputs, newOutput];
    if (responseOutput) {
      newOutputs.push(responseOutput);
    }
    
    setOutputs(newOutputs);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="terminal" onClick={focusInput}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="terminal-title">portfolio-cli</div>
      </div>
      <div className="terminal-body">
        {outputs.map(output => (
          <div 
            key={output.id} 
            className={`terminal-line ${output.isCommand ? 'command' : 'response'}`}
          >
            {output.isCommand ? (
              <div className="terminal-prompt">
                <span className="terminal-user">guest</span>
                <span className="terminal-at">@</span>
                <span className="terminal-host">portfolio</span>
                <span className="terminal-colon">:</span>
                <span className="terminal-path">~</span>
                <span className="terminal-dollar">$</span>
                <span className="terminal-command">{output.content}</span>
              </div>
            ) : (
              <pre className="terminal-output">{output.content}</pre>
            )}
          </div>
        ))}
        <div className="terminal-line">
          <div className="terminal-prompt">
            <span className="terminal-user">guest</span>
            <span className="terminal-at">@</span>
            <span className="terminal-host">portfolio</span>
            <span className="terminal-colon">:</span>
            <span className="terminal-path">~</span>
            <span className="terminal-dollar">$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              autoFocus
            />
          </div>
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
} 