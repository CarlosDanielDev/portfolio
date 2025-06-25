import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from '@application/commands/CommandHandler';

class ContactCommandHandler implements CommandHandler {
  canHandle(command: Command): boolean {
    return command.isCommand('contact');
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handle(_command: Command): string {
    const email = typeof import.meta.env !== 'undefined' 
      ? (import.meta.env.VITE_APP_EMAIL ?? 'carlosdanielsodev@gmail.com')
      : 'carlosdanielsodev@gmail.com';
      
    return `
Email: ${email}
GitHub: https://github.com/CarlosDanielDev
LinkedIn: https://linkedin.com/in/carlosdanielsodev
`.trim();
  }
}

export { ContactCommandHandler }; 