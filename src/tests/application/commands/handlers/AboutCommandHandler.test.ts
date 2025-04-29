import { Command } from "@domain/value-objects/Command";
import { AboutCommandHandler } from "@application/commands/handlers/AboutCommandHandler";

describe('AboutCommandHandler', () => {
    it('should return the about message', () => {
        const handler = new AboutCommandHandler();
        const result = handler.handle();
        expect(result).toBeDefined();
    })

    it('should return the about message', () => {
        const command = new Command('about');
        const handler = new AboutCommandHandler();
        const result = handler.canHandle(command);
        expect(result).toBe(true);
    })

    it('should not handle other commands', () => {
        const command = new Command('ls');
        const handler = new AboutCommandHandler();
        const result = handler.canHandle(command);
        expect(result).toBe(false);
    })
})