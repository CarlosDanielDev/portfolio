import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from '@application/commands/CommandHandler';
import type { PrivacyPolicyOutput } from '@application/use-cases/GetPrivacyPolicyUseCase';

class PrivacySectionCommandHandler implements CommandHandler {
  constructor(private readonly privacyPolicy: PrivacyPolicyOutput) {}

  canHandle(command: Command): boolean {
    return command.startsWithCommand('privacy ');
  }

  handle(command: Command): string {
    const sectionId = command.getArgument('privacy ').toLowerCase();
    
    if (sectionId === '--help' || sectionId === '-h') {
      return this.getHelpMessage();
    }

    const section = this.privacyPolicy.sections.find(s => s.id === sectionId);
    
    if (!section) {
      const availableSections = this.privacyPolicy.sections
        .map(s => s.id)
        .join(', ');
      
      return `Section "${sectionId}" not found. Available sections: ${availableSections}`;
    }

    return this.formatSection(section);
  }

  private getHelpMessage(): string {
    return `
Privacy Policy Commands:
  privacy                    - Show privacy policy overview and available sections
  privacy <section_id>       - View a specific section
  privacy --help             - Show this help message

Available sections:
${this.privacyPolicy.sections
  .sort((a, b) => a.order - b.order)
  .map(section => `  ${section.id.padEnd(18)} - ${section.title}`)
  .join('\n')}

Examples:
  privacy overview           - View the overview section
  privacy data-collection    - View data collection information
  privacy user-rights        - View user rights and data control
    `.trim();
  }

  private formatSection(section: { id: string; title: string; content: string }): string {
    const divider = '='.repeat(Math.min(section.title.length + 4, 60));
    
    return `
${divider}
  ${section.title}
${divider}

${section.content}

Use "privacy" to return to the main privacy policy overview.
    `.trim();
  }
}

export { PrivacySectionCommandHandler }; 