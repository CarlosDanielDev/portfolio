import { Command } from "@domain/value-objects/Command";
import { SkillsCommandHandler } from "@application/commands/handlers/SkillsCommandHandler";

describe('SkillsCommandHandler', () => {
    it('should return the skills message', () => {
        const handler = new SkillsCommandHandler(null);
        const result = handler.handle();
        expect(result).toBeDefined();
    })

    it('should not handle other commands', () => {
        const command = new Command('ls');
        const handler = new SkillsCommandHandler(null);
        const result = handler.canHandle(command);
        expect(result).toBe(false);
    })

    it('should return the skills message', () => {
        const command = new Command('skills');
        const handler = new SkillsCommandHandler(null);
        const result = handler.canHandle(command);
        expect(result).toBe(true);
    })
})