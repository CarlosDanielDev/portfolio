import type { CompanyRepository } from '@domain/repositories/CompanyRepository';

interface CompanyOutput {
  id: string;
  name: string;
  position: string;
  description: string;
  dateRange: string;
  logoUrl?: string;
  duration: string;
}

class ListAllCompaniesUseCase {
  constructor(
    private readonly companyRepository: CompanyRepository
  ) {}

  async execute(): Promise<CompanyOutput[]> {
    const companies = await this.companyRepository.findAll();
    
    return companies.map(company => ({
      id: company.id,
      name: company.name,
      position: company.position,
      description: company.description,
      dateRange: company.dateRange.formattedDateRange,
      logoUrl: company.logoUrl,
      duration: company.dateRange.formattedDuration
    }));
  }
}

export { ListAllCompaniesUseCase, type CompanyOutput }; 