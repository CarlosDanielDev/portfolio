import { useState, useRef, useEffect } from 'react';
import { usePortfolio } from '@presentation/contexts/PortfolioContext';
import { Command } from '@domain/value-objects/Command';
import { TerminalLine } from '@domain/value-objects/TerminalLine';
import { TerminalHistory } from '@domain/entities/TerminalHistory';
import { CommandProcessor } from '@application/commands/CommandProcessor';
import { HelpCommandHandler } from '@application/commands/handlers/HelpCommandHandler';
import { ListCompaniesCommandHandler } from '@application/commands/handlers/ListCompaniesCommandHandler';
import { ChangeCompanyCommandHandler } from '@application/commands/handlers/ChangeCompanyCommandHandler';
import { SkillsCommandHandler } from '@application/commands/handlers/SkillsCommandHandler';
import { AboutCommandHandler } from '@application/commands/handlers/AboutCommandHandler';
import { ContactCommandHandler } from '@application/commands/handlers/ContactCommandHandler';
import { TerminalHeader } from './TerminalHeader';
import { TerminalLineView } from './TerminalLineView';
import { TerminalPrompt } from './TerminalPrompt';
import './Terminal.css';

export function Terminal() {
  const { companies, selectedCompany, selectCompany } = usePortfolio();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(
    new TerminalHistory([
      new TerminalLine('Welcome to the Portfolio CLI!', false, '1'),
      new TerminalLine('Type "help" to see available commands.', false, '2')
    ])
  );
  
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const commandProcessor = new CommandProcessor([
    new HelpCommandHandler(),
    new ListCompaniesCommandHandler(companies),
    new ChangeCompanyCommandHandler(companies, selectCompany),
    new SkillsCommandHandler(selectedCompany),
    new AboutCommandHandler(),
    new ContactCommandHandler()
  ]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  const executeCommand = (inputText: string) => {
    const command = new Command(inputText);
    
    let newHistory = history.addCommandLine(command);
    
    if (command.isCommand('clear')) {
      setHistory(new TerminalHistory([]));
      return;
    }
    
    const response = commandProcessor.processCommand(command);
    if (response !== null) {
      newHistory = newHistory.addResponseLine(response);
    }
    
    setHistory(newHistory);
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="terminal" onClick={focusInput}>
      <TerminalHeader />
      <div className="terminal-body">
        {history.getLines().map(line => (
          <TerminalLineView key={line.getId()} line={line} />
        ))}
        <TerminalPrompt
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          inputRef={inputRef}
        />
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
} 