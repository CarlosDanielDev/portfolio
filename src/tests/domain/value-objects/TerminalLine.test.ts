import { TerminalLine } from '@domain/value-objects/TerminalLine';

describe('TerminalLine', () => {
    it('should create a terminal line', () => {
        const givenContent = 'test-content';
        const terminalLine = new TerminalLine(givenContent, false);

        expect(terminalLine.getContent()).toBe(givenContent);
        expect(terminalLine.isCommandLine()).toBe(false);
        expect(terminalLine.getId()).toBeDefined();
    })
})