import { CommandId } from '@domain/value-objects/CommandId';

describe('CommandId', () => {
    it('should create a command id with a given value', () => {
        const name = 'test-command';
        const commandId = new CommandId(name)
        expect(commandId.toString()).toBe(name);
    })

    it('should create a command id with a default value if no value is provided', () => {
        const commandId = new CommandId();
        expect(commandId.toString()).toBeDefined();
    })

    it('should check if two command ids are equal', () => {
        const name = 'test-command';
        const commandId1 = new CommandId(name);
        const commandId2 = new CommandId(name);
        expect(commandId1.equals(commandId2)).toBe(true);
    })
})