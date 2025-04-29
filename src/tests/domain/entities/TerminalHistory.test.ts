import { Command } from '@domain/value-objects/Command';
import { TerminalHistory } from '@domain/entities/TerminalHistory';

describe('TerminalHistory', () => {
    it('should create a terminal history', () => {
        const terminalHistory = new TerminalHistory();
        expect(terminalHistory).toBeDefined();
    })

    it('should add a command line to the history', () => {
        const terminalHistory = new TerminalHistory();
        const command = new Command('ls');
        const updatedHistory = terminalHistory.addCommandLine(command);

        expect(updatedHistory.getLines().length).toBe(1);
        expect(updatedHistory.getLines()[0].getContent()).toBe(command.getText());
        expect(updatedHistory.getLines()[0].isCommandLine()).toBe(true);
    })

    it('should add a response line to the history', () => {
        const terminalHistory = new TerminalHistory();
        const content = 'test-content';
        const updatedHistory = terminalHistory.addResponseLine(content);
        
        expect(updatedHistory.getLines().length).toBe(1);
        expect(updatedHistory.getLines()[0].getContent()).toBe(content);
        expect(updatedHistory.getLines()[0].isCommandLine()).toBe(false);
    })

    it('should clear the history', () => {
        const terminalHistory = new TerminalHistory();
        const command = new Command('ls');
        const updatedHistory = terminalHistory.addCommandLine(command);
        const clearedHistory = updatedHistory.clear();

        expect(clearedHistory.getLines().length).toBe(0);
    })
})