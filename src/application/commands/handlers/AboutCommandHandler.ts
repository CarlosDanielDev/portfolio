import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from '@application/commands/CommandHandler';

class AboutCommandHandler implements CommandHandler {
  canHandle(command: Command): boolean {
    return command.isCommand('about');
  }
  
  handle(): string {
    return 'I am a software developer with expertise in web development, focusing on modern JavaScript frameworks and TypeScript.';
  }
}

export { AboutCommandHandler }; 