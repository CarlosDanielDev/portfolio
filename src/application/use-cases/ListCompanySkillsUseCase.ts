import type { CompanyRepository } from '@domain/repositories/CompanyRepository';
import type { CompanySkillRepository } from '@domain/repositories/CompanySkillRepository';

interface ListCompanySkillsOutput {
  companyId: string;
  companyName: string;
  position: string;
  dateRange: string;
  skills: Array<{
    id: string;
    name: string;
    level: string;
    description: string;
    dateRange: string;
  }>;
}

class ListCompanySkillsUseCase {
  constructor(
    private readonly companyRepository: CompanyRepository,
    private readonly companySkillRepository: CompanySkillRepository
  ) {}

  async execute(companyId: string): Promise<ListCompanySkillsOutput | null> {
    const company = await this.companyRepository.findById(companyId);
    
    if (!company) {
      return null;
    }
    
    const companySkills = await this.companySkillRepository.findByCompanyId(companyId);
    
    return {
      companyId: company.id,
      companyName: company.name,
      position: company.position,
      dateRange: company.dateRange.formattedDateRange,
      skills: companySkills.map(cs => ({
        id: cs.skill.id,
        name: cs.skill.name,
        level: cs.level.toString(),
        description: cs.description,
        dateRange: cs.dateRange.formattedDateRange
      }))
    };
  }
}

export { ListCompanySkillsUseCase, type ListCompanySkillsOutput }; 