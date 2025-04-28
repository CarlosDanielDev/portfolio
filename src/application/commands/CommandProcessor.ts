import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from './CommandHandler';

class CommandProcessor {
  private readonly handlers: CommandHandler[];
  
  constructor(handlers: CommandHandler[]) {
    this.handlers = handlers;
  }
  
  processCommand(command: Command): string | null {
    for (const handler of this.handlers) {
      if (handler.canHandle(command)) {
        return handler.handle(command);
      }
    }
    
    return `Command not found: ${command.getText()}. Type "help" to see available commands.`;
  }
}

export { CommandProcessor }; 