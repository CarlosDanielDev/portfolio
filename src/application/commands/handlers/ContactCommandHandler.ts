import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from '@application/commands/CommandHandler';

class ContactCommandHandler implements CommandHandler {
  canHandle(command: Command): boolean {
    return command.isCommand('contact');
  }
  
  handle(): string {
    return `
Email: ${import.meta.env.VITE_APP_EMAIL || 'your.email@example.com'}
GitHub: https://github.com/yourusername
LinkedIn: https://linkedin.com/in/yourprofile
`.trim();
  }
}

export { ContactCommandHandler }; 