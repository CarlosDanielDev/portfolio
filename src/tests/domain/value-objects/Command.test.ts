import { Command } from "@domain/value-objects/Command";

describe("Command", () => {
  describe("Anonymous user", () => {
    it("should create a command with the given text", () => {
      const command = new Command("ls");
      expect(command.getText()).toBe("ls");
    });

    it("should check if the command is a specific command", () => {
      const command = new Command("ls");
      expect(command.isCommand("ls")).toBe(true);
      expect(command.isCommand("cd")).toBe(false);
    });

    it("should get the argument of the command", () => {
      const command = new Command("ls -l");
      expect(command.getArgument("ls ")).toBe("-l");
    });

    it("should check if the command starts with a specific prefix", () => {
      const command = new Command("ls -l");
      expect(command.startsWithCommand("ls")).toBe(true);
      expect(command.startsWithCommand("cd")).toBe(false);
    });

    it("should throw an error if the command text is empty", () => {
      expect(() => new Command("")).toThrow("Command text cannot be empty");
    });
  });
});

