import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from '@application/commands/CommandHandler';

class HelpCommandHandler implements CommandHandler {
  canHandle(command: Command): boolean {
    return command.isCommand('help');
  }
  
  handle(): string {
    return `
Available commands:
  help - Show this help message
  ls - List all companies
  cd <company_name> - Select a company
  skills - Show skills for the current company
  privacy - Show BlockZero privacy policy overview
  privacy <section> - View specific privacy policy section
  clear - Clear the terminal
  about - About me
  contact - Contact information

Privacy sections: overview, data-collection, permissions, monetization,
online-features, user-rights, security, childrens-privacy, data-lifecycle, contact
`.trim();
  }
}

export { HelpCommandHandler }; 