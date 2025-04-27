import { CompanySkill } from '@domain/entities/CompanySkill';

interface CompanySkillRepository {
  findAll(): Promise<CompanySkill[]>;
  findById(id: string): Promise<CompanySkill | null>;
  findByCompanyId(companyId: string): Promise<CompanySkill[]>;
  findBySkillId(skillId: string): Promise<CompanySkill[]>;
  save(companySkill: CompanySkill): Promise<void>;
}

export type { CompanySkillRepository }; 