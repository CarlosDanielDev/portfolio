import { Command } from "@domain/value-objects/Command";
import { ChangeCompanyCommandHandler } from "@application/commands/handlers/ChangeCompanyCommandHandler";
import { DependencyConfig } from "@infrastructure/config/DependencyConfig";
import { CompanyOutput } from "@/application/use-cases/ListAllCompaniesUseCase";

describe("ChangeCompanyCommandHandler", () => {
  describe("Anonyumous user", () => {
    it("Should use ChangeCompanyCommandHandler", async () => {
      const dependencies = DependencyConfig.getInstance();
      await dependencies.initialize();
      const companiesUseCase = dependencies.getListAllCompaniesUseCase();
      const companies = await companiesUseCase.execute();

      const mockSelectCompany = (id: string) => {
        console.log({
          id,
        });
      };

      const changCompanyCommandHanlder = new ChangeCompanyCommandHandler(
        companies,
        mockSelectCompany,
      );

      expect(changCompanyCommandHanlder).toBeDefined();

      const enterChangeCompanyCommand = new Command("cd 1");
      const help = new Command("help");

      const canHandle = changCompanyCommandHanlder.canHandle(
        enterChangeCompanyCommand,
      );

      expect(canHandle).toBe(true);

      const cannotHandle = changCompanyCommandHanlder.canHandle(help);

      expect(cannotHandle).toBe(false);

      const responseHandle = changCompanyCommandHanlder.handle(
        enterChangeCompanyCommand,
      );
      expect(typeof responseHandle).toBe("string");
    });

    it("Should create ChangeCompanyCommandHandler with empty companies", async () => {
      const dependencies = DependencyConfig.getInstance();
      await dependencies.initialize();
      const companies: CompanyOutput[] = [];

      const mockSelectCompany = (id: string) => {
        console.log({
          id,
        });
      };

      const changCompanyCommandHanlder = new ChangeCompanyCommandHandler(
        companies,
        mockSelectCompany,
      );

      expect(changCompanyCommandHanlder).toBeDefined();

      const enterChangeCompanyCommand = new Command("cd 1");
      const help = new Command("help");

      const canHandle = changCompanyCommandHanlder.canHandle(
        enterChangeCompanyCommand,
      );

      expect(canHandle).toBe(true);

      const cannotHandle = changCompanyCommandHanlder.canHandle(help);

      expect(cannotHandle).toBe(false);

      const responseHandle = changCompanyCommandHanlder.handle(
        enterChangeCompanyCommand,
      );
      expect(typeof responseHandle).toBe("string");
    });
  });
});
