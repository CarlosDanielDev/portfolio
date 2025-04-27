import { CompanySkill } from '@domain/entities/CompanySkill';
import type { CompanySkillRepository } from '@domain/repositories/CompanySkillRepository';

class InMemoryCompanySkillRepository implements CompanySkillRepository {
  private companySkills: CompanySkill[] = [];

  constructor(initialCompanySkills: CompanySkill[] = []) {
    this.companySkills = [...initialCompanySkills];
  }

  async findAll(): Promise<CompanySkill[]> {
    return [...this.companySkills];
  }

  async findById(id: string): Promise<CompanySkill | null> {
    const companySkill = this.companySkills.find(cs => cs.id === id);
    return companySkill || null;
  }

  async findByCompanyId(companyId: string): Promise<CompanySkill[]> {
    return this.companySkills.filter(cs => cs.company.id === companyId);
  }

  async findBySkillId(skillId: string): Promise<CompanySkill[]> {
    return this.companySkills.filter(cs => cs.skill.id === skillId);
  }

  async save(companySkill: CompanySkill): Promise<void> {
    const index = this.companySkills.findIndex(cs => cs.id === companySkill.id);
    
    if (index >= 0) {
      this.companySkills[index] = companySkill;
    } else {
      this.companySkills.push(companySkill);
    }
  }
}

export { InMemoryCompanySkillRepository }; 