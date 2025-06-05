import { useState, useRef, useEffect, useMemo } from 'react';
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
import { DependencyConfig } from '@infrastructure/config/DependencyConfig';
import { TerminalHeader } from './TerminalHeader';
import { TerminalLineView } from './TerminalLineView';
import { TerminalPrompt } from './TerminalPrompt';
import './Terminal.css';

export function Terminal() {
  const { companies, selectedCompany, selectCompany } = usePortfolio();
  const [input, setInput] = useState('');
  const [ghostText, setGhostText] = useState('');
  const [history, setHistory] = useState(
    new TerminalHistory([
      new TerminalLine('Welcome to the Portfolio CLI!', false, '1'),
      new TerminalLine('Type "help" to see available commands.', false, '2')
    ])
  );
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);
  
  const commandProcessor = useMemo(() => new CommandProcessor([
    new HelpCommandHandler(),
    new ListCompaniesCommandHandler(companies),
    new ChangeCompanyCommandHandler(companies, selectCompany),
    new SkillsCommandHandler(selectedCompany),
    new AboutCommandHandler(),
    new ContactCommandHandler()
  ]), [companies, selectedCompany, selectCompany]);

  useEffect(() => {
    if (terminalContentRef.current) {
      const scrollHeight = terminalContentRef.current.scrollHeight;
      const height = terminalContentRef.current.clientHeight;
      const maxScroll = scrollHeight - height;
      terminalContentRef.current.scrollTop = maxScroll;
    }
  }, [history]);

  const updateGhostText = async (currentInput: string) => {
    if (!currentInput.trim()) {
      setGhostText('');
      return;
    }

    try {
      const dependencies = DependencyConfig.getInstance();
      const tabCompletionUseCase = dependencies.getTabCompletionUseCase();
      const completion = await tabCompletionUseCase.execute(currentInput);

      if (completion.hasCompletion()) {
        const completed = completion.getCompletedString();
        setGhostText(completed.slice(currentInput.length));
      } else {
        setGhostText('');
      }
    } catch (error) {
      console.error('Ghost text completion error:', error);
      setGhostText('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    updateGhostText(newInput);
  };

  const handleTabCompletion = async () => {
    if (!input.trim()) return;

    try {
      const dependencies = DependencyConfig.getInstance();
      const tabCompletionUseCase = dependencies.getTabCompletionUseCase();
      const completion = await tabCompletionUseCase.execute(input);

      if (completion.hasCompletion()) {
        setInput(completion.getCompletedString());
        setGhostText('');
      }
    } catch (error) {
      console.error('Tab completion error:', error);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      handleTabCompletion();
    } else if (e.key === 'Enter' && input.trim()) {
      executeCommand(input);
      setInput('');
      setGhostText('');
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
      <div className="terminal-content" ref={terminalContentRef}>
        {history.getLines().map(line => (
          <TerminalLineView key={line.getId()} line={line} />
        ))}
        <TerminalPrompt
          value={input}
          ghostText={ghostText}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
} 