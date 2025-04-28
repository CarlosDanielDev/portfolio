import { CommandId } from '@domain/value-objects/CommandId';
import { jest } from '@tests/jest-helpers';

describe('CommandId', () => {
  it('should use the provided value when passed to constructor', () => {
    const id = new CommandId('test-id');
    expect(id.toString()).toBe('test-id');
  });

  it('should generate a timestamp-based ID when no value is provided', () => {
    // Mock Date.now to return a fixed timestamp
    const mockTimestamp = 1234567890;
    
    const spy = jest.spyOn(Date, 'now');
    spy.mockReturnValue(mockTimestamp);
    
    const id = new CommandId();
    expect(id.toString()).toBe(mockTimestamp.toString());
    
    // Restore original Date.now
    spy.mockRestore();
  });

  it('should correctly compare equality with another CommandId', () => {
    const id1 = new CommandId('same-id');
    const id2 = new CommandId('same-id');
    const id3 = new CommandId('different-id');

    expect(id1.equals(id2)).toBe(true);
    expect(id1.equals(id3)).toBe(false);
  });
}); 