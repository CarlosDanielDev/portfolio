import { Company } from '@domain/entities/Company';
import type { CompanyRepository } from '@domain/repositories/CompanyRepository';

class InMemoryCompanyRepository implements CompanyRepository {
  private companies: Company[] = [];

  constructor(initialCompanies: Company[] = []) {
    this.companies = [...initialCompanies];
  }

  async findAll(): Promise<Company[]> {
    return [...this.companies];
  }

  async findById(id: string): Promise<Company | null> {
    const company = this.companies.find(c => c.id === id);
    return company || null;
  }

  async findByName(name: string): Promise<Company | null> {
    const company = this.companies.find(c => c.name === name);
    return company || null;
  }

  async save(company: Company): Promise<void> {
    const index = this.companies.findIndex(c => c.id === company.id);
    
    if (index >= 0) {
      this.companies[index] = company;
    } else {
      this.companies.push(company);
    }
  }
}

export { InMemoryCompanyRepository }; 