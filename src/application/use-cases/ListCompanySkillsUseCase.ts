import type { CompanyRepository } from "@domain/repositories/CompanyRepository";
import type { CompanySkillRepository } from "@domain/repositories/CompanySkillRepository";

type Skill = {
  id: string;
  name: string;
  level: string;
  description: string;
  dateRange: string;
};

type ListCompanySkillsOutput = {
  companyId: string;
  companyName: string;
  position: string;
  dateRange: string;
  skills: Array<Skill>;
};

class ListCompanySkillsUseCase {
  constructor(
    private readonly companyRepository: CompanyRepository,
    private readonly companySkillRepository: CompanySkillRepository,
  ) {}

  async execute(companyId: string): Promise<ListCompanySkillsOutput | null> {
    if (companyId === "") return null;
    const company = await this.companyRepository.findById(companyId);

    if (!company) {
      return null;
    }

    const companySkills =
      await this.companySkillRepository.findByCompanyId(companyId);

    return {
      companyId: company.id,
      companyName: company.name,
      position: company.position,
      dateRange: company.dateRange.formattedDateRange,
      skills: companySkills.map((companySkill) => ({
        id: companySkill.skill.id,
        name: companySkill.skill.name,
        level: companySkill.level.toString(),
        description: companySkill.description,
        dateRange: companySkill.dateRange.formattedDateRange,
      })),
    };
  }
}

export { ListCompanySkillsUseCase, type ListCompanySkillsOutput };

