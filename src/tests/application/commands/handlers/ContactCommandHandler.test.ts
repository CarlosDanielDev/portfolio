import { Command } from "@domain/value-objects/Command";
import { ContactCommandHandler } from "@application/commands/handlers/ContactCommandHandler";

const createCommand = (command: string) => {
  return new Command(command);
};

const createContact = () => {
 return createCommand('contact')
};

const createHelp = () => {
  return createCommand("help");
};

const mock = {
    createCommand,
    createContact,
    createHelp,
}

describe("ContactCommandHandler", () => {
  describe("Anoymous user with no authentication", () => {
    it("should create a contact", () => {
      const contact = new ContactCommandHandler();
      expect(contact).toBeDefined();
      expect(contact.handle()).toBeDefined();
      const commandContact = mock.createContact();
      const canHandleContact = contact.canHandle(commandContact);
      expect(canHandleContact).toBe(true);
      const result = contact.handle();
      expect(typeof result).toBe("string");
      expect(result).toContain("Email: example@example.com");
    });

    it("should not create a contact", () => {
      const contact = new ContactCommandHandler();
      const commandHelp = mock.createHelp();
      const canHandleHelp = contact.canHandle(commandHelp);
      expect(canHandleHelp).toBe(false);
    });
  });
});
