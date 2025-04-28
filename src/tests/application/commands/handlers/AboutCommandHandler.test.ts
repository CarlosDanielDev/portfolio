import { AboutCommandHandler } from '@application/commands/handlers/AboutCommandHandler';
import { Command } from '@domain/value-objects/Command';
import { jest, mockModule } from '@tests/jest-helpers';

// Mock de Command usando nossa função helper
mockModule('@domain/value-objects/Command', {
  Command: jest.fn().mockImplementation((text: string) => ({
    isCommand: jest.fn().mockImplementation((cmd: string) => text.toLowerCase() === cmd)
  }))
});

describe('AboutCommandHandler', () => {
  let handler: AboutCommandHandler;
  
  beforeEach(() => {
    jest.clearAllMocks();
    handler = new AboutCommandHandler();
  });
  
  it('should handle the "about" command', () => {
    const command = new Command('about');
    
    expect(handler.canHandle(command)).toBe(true);
  });
  
  it('should not handle other commands', () => {
    const command = new Command('other');
    
    expect(handler.canHandle(command)).toBe(false);
  });
  
  it('should return the about information when executed', () => {
    const result = handler.handle();
    
    expect(result).toBe('I am a software developer with expertise in web development, focusing on modern JavaScript frameworks and TypeScript.');
  });
}); 