import { InMemoryCompanyRepository } from '@infrastructure/repositories/InMemoryCompanyRepository';
import { InMemorySkillRepository } from '@infrastructure/repositories/InMemorySkillRepository';
import { InMemoryCompanySkillRepository } from '@infrastructure/repositories/InMemoryCompanySkillRepository';
import { DataInitializationService } from '@infrastructure/services/DataInitializationService';
import { ListAllCompaniesUseCase } from '@application/use-cases/ListAllCompaniesUseCase';
import { ListCompanySkillsUseCase } from '@application/use-cases/ListCompanySkillsUseCase';
import { InMemoryProjectStatisticsRepository } from '@infrastructure/repositories/InMemoryProjectStatisticsRepository';
import { GetProjectStatisticsUseCase } from '@application/use-cases/GetProjectStatisticsUseCase';
import type { ProjectStatisticsRepository } from '@domain/repositories/ProjectStatisticsRepository';

class DependencyConfig {
  private static instance: DependencyConfig;
  
  private readonly companyRepository: InMemoryCompanyRepository;
  private readonly skillRepository: InMemorySkillRepository;
  private readonly companySkillRepository: InMemoryCompanySkillRepository;
  private readonly dataInitializationService: DataInitializationService;
  
  private projectStatisticsRepository: ProjectStatisticsRepository | null = null;
  private projectStatisticsUseCase: GetProjectStatisticsUseCase | null = null;
  
  private constructor() {
    this.companyRepository = new InMemoryCompanyRepository();
    this.skillRepository = new InMemorySkillRepository();
    this.companySkillRepository = new InMemoryCompanySkillRepository();
    
    this.dataInitializationService = new DataInitializationService(
      this.companyRepository,
      this.skillRepository,
      this.companySkillRepository
    );
  }
  
  static getInstance(): DependencyConfig {
    if (!DependencyConfig.instance) {
      DependencyConfig.instance = new DependencyConfig();
    }
    
    return DependencyConfig.instance;
  }
  
  async initialize(): Promise<void> {
    await this.dataInitializationService.initialize();
  }
  
  getListAllCompaniesUseCase(): ListAllCompaniesUseCase {
    return new ListAllCompaniesUseCase(this.companyRepository);
  }
  
  getListCompanySkillsUseCase(): ListCompanySkillsUseCase {
    return new ListCompanySkillsUseCase(
      this.companyRepository,
      this.companySkillRepository
    );
  }

  getProjectStatisticsRepository(): ProjectStatisticsRepository {
    if (!this.projectStatisticsRepository) {
      this.projectStatisticsRepository = new InMemoryProjectStatisticsRepository();
    }
    return this.projectStatisticsRepository;
  }

  getProjectStatisticsUseCase(): GetProjectStatisticsUseCase {
    if (!this.projectStatisticsUseCase) {
      const repository = this.getProjectStatisticsRepository();
      this.projectStatisticsUseCase = new GetProjectStatisticsUseCase(repository);
    }
    return this.projectStatisticsUseCase;
  }
}

export { DependencyConfig }; 