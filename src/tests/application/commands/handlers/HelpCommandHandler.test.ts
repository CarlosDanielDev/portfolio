import { HelpCommandHandler } from "@application/commands/handlers/HelpCommandHandler";
import { Command } from "@domain/value-objects/Command";

describe('HelpCommandHandler', () => {
    it('should return the help message', () => {
        const command = new Command('help');
        const handler = new HelpCommandHandler();
        const result = handler.canHandle(command);
        expect(result).toBe(true);
    })

    it('should return the help message', () => {
        const handler = new HelpCommandHandler();
        const result = handler.handle();
        expect(result).toBeDefined();
    })

    it('should not handle other commands', () => {
        const command = new Command('ls');
        const handler = new HelpCommandHandler();
        const result = handler.canHandle(command);
        expect(result).toBe(false);
    })
})