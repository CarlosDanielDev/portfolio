import { DateRange } from "@domain/value-objects/DateRange";
import { Company } from "@domain/entities/Company";
import { InMemoryCompanyRepository } from "@infrastructure/repositories/InMemoryCompanyRepository";

describe("InMemoryCompanyRepository", () => {
  describe("Anonymous user", () => {
    it("Should create the CompanyRepository in memory", async () => {
      const dateRange = new DateRange(new Date(), new Date());
      const company = new Company(
        "company",
        "company name",
        "company desrciption",
        dateRange,
        "position",
      );
      const companies: Company[] = [company];
      const inMemoryCompanyRepository = new InMemoryCompanyRepository(
        companies,
      );
      expect(inMemoryCompanyRepository).toBeDefined();

      const allCompanies = await inMemoryCompanyRepository.findAll();

      expect(Array.isArray(allCompanies)).toBe(true);
    });
  });
});
