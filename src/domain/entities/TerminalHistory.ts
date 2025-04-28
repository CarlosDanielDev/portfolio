import { Command } from '@domain/value-objects/Command';
import { TerminalLine } from '@domain/value-objects/TerminalLine';

class TerminalHistory {
  private readonly lines: TerminalLine[];
  
  constructor(initialLines: TerminalLine[] = []) {
    this.lines = initialLines;
  }
  
  getLines(): TerminalLine[] {
    return [...this.lines];
  }
  
  addCommandLine(command: Command): TerminalHistory {
    const newLine = new TerminalLine(command.getText(), true);
    return new TerminalHistory([...this.lines, newLine]);
  }
  
  addResponseLine(content: string): TerminalHistory {
    const newLine = new TerminalLine(content, false, `${Date.now()}-response`);
    return new TerminalHistory([...this.lines, newLine]);
  }
  
  clear(): TerminalHistory {
    return new TerminalHistory([]);
  }
}

export { TerminalHistory }; 