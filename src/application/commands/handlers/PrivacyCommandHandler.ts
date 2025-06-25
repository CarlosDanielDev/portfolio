import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from '@application/commands/CommandHandler';
import type { PrivacyPolicyOutput } from '@application/use-cases/GetPrivacyPolicyUseCase';

class PrivacyCommandHandler implements CommandHandler {
  constructor(private readonly privacyPolicy: PrivacyPolicyOutput) {}

  canHandle(command: Command): boolean {
    return command.isCommand('privacy');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handle(_command: Command): string {
    const sectionsList = this.privacyPolicy.sections
      .sort((a, b) => a.order - b.order)
      .map(section => `  ${section.id} - ${section.title}`)
      .join('\n');

    return `
${this.privacyPolicy.title} (v${this.privacyPolicy.version})
Last Updated: ${this.privacyPolicy.lastUpdated}

Available sections:
${sectionsList}

Use "privacy <section_id>" to view a specific section.
Example: privacy overview

Type "privacy --help" for more information.
    `.trim();
  }
}

export { PrivacyCommandHandler }; 