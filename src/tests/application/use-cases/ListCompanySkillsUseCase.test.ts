import { DateRange } from "@domain/value-objects/DateRange";
import { Company } from "@domain/entities/Company";
import { CompanyRepository } from "@domain/repositories/CompanyRepository";
import { jest } from "@jest/globals";
import { CompanySkillRepository } from "@domain/repositories/CompanySkillRepository";
import { CompanySkill } from "@domain/entities/CompanySkill";
import { Skill } from "@domain/entities/Skill";
import { SkillLevel } from "@domain/value-objects/SkillLevel";
import { ListCompanySkillsUseCase } from "@application/use-cases/ListCompanySkillsUseCase";

describe("ListCompanySkillsUseCase", () => {
  describe("Anonymous user", () => {
    let mockCompanyRepository: CompanyRepository;
    let mockCompanySkillRepository: CompanySkillRepository;

    beforeAll(() => {
      const dateRange = new DateRange(new Date(), new Date());
      const companyUnique = new Company(
        "id",
        "company-test",
        "a company test",
        dateRange,
        "software developer",
      );
      const skillLevel = new SkillLevel(5);
      const skill = new Skill(
        "skill-id",
        "skill name",
        "skill description",
        skillLevel,
      );
      const companySkill = new CompanySkill(
        "id-company-skill",
        companyUnique,
        skill,
        dateRange,
        skillLevel,
        "campany skill description",
      );
      const companies: Company[] = [companyUnique];
      const companySkills: CompanySkill[] = [companySkill];

      mockCompanyRepository = {
        findAll: jest.fn().mockReturnValue(Promise.resolve(companies)),
        findById: jest.fn().mockReturnValue(Promise.resolve(companyUnique)),
        findByName: jest.fn().mockReturnValue(Promise.resolve(companyUnique)),
        save: jest.fn().mockReturnValue(Promise.resolve(undefined)),
      } as CompanyRepository;

      mockCompanySkillRepository = {
        findAll: jest.fn().mockReturnValue(Promise.resolve(companySkills)),
        findById: jest.fn().mockReturnValue(Promise.resolve(companySkill)),
        findByCompanyId: jest
          .fn()
          .mockReturnValue(Promise.resolve([companySkill])),
        save: jest.fn().mockReturnValue(Promise.resolve(undefined)),
        findBySkillId: jest.fn().mockReturnValue(companySkills),
      } as CompanySkillRepository;
    });
    it("Should handle the skills of a comapny", async () => {
      const listCompanySkillsUseCase = new ListCompanySkillsUseCase(
        mockCompanyRepository,
        mockCompanySkillRepository,
      );

      expect(listCompanySkillsUseCase).toBeDefined();

      const result = await listCompanySkillsUseCase.execute("id");
      expect(result?.companyId).toBe("id");

      const result2 = await listCompanySkillsUseCase.execute("");
      expect(result2).toBeNull();
    });
  });
});
