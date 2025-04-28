import { CommandId } from '@domain/value-objects/CommandId';

class TerminalLine {
  private readonly id: CommandId;
  private readonly content: string;
  private readonly isCommand: boolean;
  
  constructor(content: string, isCommand: boolean, id?: string) {
    this.id = new CommandId(id);
    this.content = content;
    this.isCommand = isCommand;
  }
  
  getId(): string {
    return this.id.toString();
  }
  
  getContent(): string {
    return this.content;
  }
  
  isCommandLine(): boolean {
    return this.isCommand;
  }
}

export { TerminalLine }; 