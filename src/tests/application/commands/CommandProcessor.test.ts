import { Command } from "@domain/value-objects/Command";
import { CommandProcessor } from "@application/commands/CommandProcessor";
import { AboutCommandHandler } from "@application/commands/handlers/AboutCommandHandler";
import { HelpCommandHandler } from "@application/commands/handlers/HelpCommandHandler";

describe("CommandProcessor", () => {
  describe("Anonymous user", () => {
    it("With a valid command", () => {
      const help = new HelpCommandHandler();
      const about = new AboutCommandHandler();
      const processor = new CommandProcessor([help, about]);
      const helpCommand = new Command("help");
      expect(processor).toBeDefined();

      const canProcessHelp = processor.processCommand(helpCommand);
      expect(typeof canProcessHelp).toBe("string");
    });
  });
});
