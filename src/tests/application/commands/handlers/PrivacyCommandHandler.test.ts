import { Command } from '@domain/value-objects/Command';
import { PrivacyCommandHandler } from '@application/commands/handlers/PrivacyCommandHandler';
import type { PrivacyPolicyOutput } from '@application/use-cases/GetPrivacyPolicyUseCase';

describe('PrivacyCommandHandler', () => {
  const mockPrivacyPolicy: PrivacyPolicyOutput = {
    title: 'Test Privacy Policy',
    version: '1.0.0',
    lastUpdated: '2024-01-15',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: 'This is the overview section',
        order: 1
      },
      {
        id: 'data-collection',
        title: 'Data Collection',
        content: 'This is the data collection section',
        order: 2
      }
    ]
  };

  describe('canHandle', () => {
    it('should handle privacy command', () => {
      const handler = new PrivacyCommandHandler(mockPrivacyPolicy);
      const command = new Command('privacy');
      
      expect(handler.canHandle(command)).toBe(true);
    });

    it('should not handle other commands', () => {
      const handler = new PrivacyCommandHandler(mockPrivacyPolicy);
      const command = new Command('help');
      
      expect(handler.canHandle(command)).toBe(false);
    });
  });

  describe('handle', () => {
    it('should return privacy policy overview', () => {
      const handler = new PrivacyCommandHandler(mockPrivacyPolicy);
      const command = new Command('privacy');
      
      const result = handler.handle(command);
      
      expect(result).toContain('Test Privacy Policy');
      expect(result).toContain('v1.0.0');
      expect(result).toContain('2024-01-15');
      expect(result).toContain('overview - Overview');
      expect(result).toContain('data-collection - Data Collection');
      expect(result).toContain('Use "privacy <section_id>" to view a specific section');
    });
  });
}); 