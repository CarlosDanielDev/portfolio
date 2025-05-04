import { Command } from "@domain/value-objects/Command";
import { SkillsCommandHandler } from "@application/commands/handlers/SkillsCommandHandler";
import { ListCompanySkillsOutput } from "@/application/use-cases/ListCompanySkillsUseCase";

describe("SkillsCommandHandler", () => {
  describe("Anonymous user", () => {
    it("should list the company valid skills", () => {
      const selectedCompany: ListCompanySkillsOutput = {
        companyId: "1",
        companyName: "Test",
        dateRange: "date-range",
        position: "position",
        skills: [
          {
            dateRange: "date-range",
            description: "description",
            id: "2",
            level: "5",
            name: "technology",
          },
        ],
      };
      const handler = new SkillsCommandHandler(selectedCompany);
      const result = handler.handle();

      expect(result).toBeDefined();
      expect(result).not.toBe("No skills found for this company.");

      const lsCommand = new Command("ls");
      const cannotHandle = handler.canHandle(lsCommand);
      expect(cannotHandle).toBe(false);

      const skillsCommand = new Command("skills");
      const canHandle = handler.canHandle(skillsCommand);
      expect(canHandle).toBe(true);
    });

    it("should handle with a empty company", () => {
      const selectedCompany: ListCompanySkillsOutput | null = null;
      const handler = new SkillsCommandHandler(selectedCompany);
      const result = handler.handle();
      expect(result).toBe(
        'No company selected. Use "cd <company_name>" to select a company.',
      );

      expect(result).toBeDefined();

      const lsCommand = new Command("ls");
      const cannotHandle = handler.canHandle(lsCommand);
      expect(cannotHandle).toBe(false);

      const skillsCommand = new Command("skills");
      const canHandle = handler.canHandle(skillsCommand);
      expect(canHandle).toBe(true);
    });
  });
});

