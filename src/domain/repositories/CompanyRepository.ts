import { Company } from '@domain/entities/Company';

interface CompanyRepository {
  findAll(): Promise<Company[]>;
  findById(id: string): Promise<Company | null>;
  findByName(name: string): Promise<Company | null>;
  save(company: Company): Promise<void>;
}

export type { CompanyRepository }; 