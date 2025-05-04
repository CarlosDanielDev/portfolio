import { Command } from "@domain/value-objects/Command";
import { ListCompaniesCommandHandler } from "@application/commands/handlers/ListCompaniesCommandHandler";
import { CompanyOutput } from "@application/use-cases/ListAllCompaniesUseCase";
import { DependencyConfig } from "@infrastructure/config/DependencyConfig";

describe("ListCompaniesCommandHandler", () => {
  describe("Anonymous user", () => {
    it("Should create with an empty list", async () => {
      const companies: CompanyOutput[] = [];
      const listCompaniesCommandHandler = new ListCompaniesCommandHandler(
        companies,
      );

      expect(listCompaniesCommandHandler).toBeDefined();

      const response = listCompaniesCommandHandler.handle();

      expect(typeof response).toBe("string");

      const lsCommand = new Command("ls");
      const canHandle = listCompaniesCommandHandler.canHandle(lsCommand);
      expect(canHandle).toBe(true);

      const cdCommand = new Command("cd $1");
      const cannotHandle = listCompaniesCommandHandler.canHandle(cdCommand);
      expect(cannotHandle).toBe(false);
    });

    it("Should create with a fill list", async () => {
      const dependencies = DependencyConfig.getInstance();
      await dependencies.initialize();
      const companiesUseCase = dependencies.getListAllCompaniesUseCase();
      const companies = await companiesUseCase.execute();

      const listCompaniesCommandHandler = new ListCompaniesCommandHandler(
        companies,
      );
      expect(listCompaniesCommandHandler).toBeDefined();

      const response = listCompaniesCommandHandler.handle();

      expect(typeof response).toBe("string");

      const lsCommand = new Command("ls");
      const canHandle = listCompaniesCommandHandler.canHandle(lsCommand);
      expect(canHandle).toBe(true);

      const helpCommand = new Command("help");
      const cannotHandle = listCompaniesCommandHandler.canHandle(helpCommand);
      expect(cannotHandle).toBe(false);
    });
  });
});
