import { Command } from "@domain/value-objects/Command";
import { AboutCommandHandler } from "@application/commands/handlers/AboutCommandHandler";

describe("AboutCommandHandler", () => {
  describe("Anonymous user", () => {
    it("Should handle correctly", () => {
      const handler = new AboutCommandHandler();
      const result = handler.handle();
      expect(typeof result).toBe("string");
    });

    it("Should return the about message", () => {
      const command = new Command("about");
      const handler = new AboutCommandHandler();
      const result = handler.canHandle(command);
      expect(result).toBe(true);
    });

    it("Should not handle other commands", () => {
      const command = new Command("ls");
      const handler = new AboutCommandHandler();
      const result = handler.canHandle(command);
      expect(result).toBe(false);
    });
  });
});

