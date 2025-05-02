import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from '@application/commands/CommandHandler';

class ContactCommandHandler implements CommandHandler {
  canHandle(command: Command): boolean {
    return command.isCommand('contact');
  }
  
  handle(): string {
    const email = typeof import.meta.env !== 'undefined' 
      ? (import.meta.env.VITE_APP_EMAIL ?? 'example@example.com')
      : 'example@example.com';
      
    return `
Email: ${email}
GitHub: https://github.com/yourusername
LinkedIn: https://linkedin.com/in/yourprofile
`.trim();
  }
}

export { ContactCommandHandler }; 