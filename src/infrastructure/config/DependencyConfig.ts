import { InMemoryCompanyRepository } from '@infrastructure/repositories/InMemoryCompanyRepository';
import { InMemorySkillRepository } from '@infrastructure/repositories/InMemorySkillRepository';
import { InMemoryCompanySkillRepository } from '@infrastructure/repositories/InMemoryCompanySkillRepository';
import { InMemoryPrivacyPolicyRepository } from '@infrastructure/repositories/InMemoryPrivacyPolicyRepository';
import { DataInitializationService } from '@infrastructure/services/DataInitializationService';
import { ListAllCompaniesUseCase } from '@application/use-cases/ListAllCompaniesUseCase';
import { ListCompanySkillsUseCase } from '@application/use-cases/ListCompanySkillsUseCase';
import { TabCompletionUseCase } from '@application/use-cases/TabCompletionUseCase';
import { GetPrivacyPolicyUseCase } from '@application/use-cases/GetPrivacyPolicyUseCase';
import { InMemoryProjectStatisticsRepository } from '@infrastructure/repositories/InMemoryProjectStatisticsRepository';
import { GetProjectStatisticsUseCase } from '@application/use-cases/GetProjectStatisticsUseCase';
import type { ProjectStatisticsRepository } from '@domain/repositories/ProjectStatisticsRepository';
import type { PrivacyPolicyRepository } from '@domain/repositories/PrivacyPolicyRepository';

class DependencyConfig {
  private static instance: DependencyConfig;
  
  private readonly companyRepository: InMemoryCompanyRepository;
  private readonly skillRepository: InMemorySkillRepository;
  private readonly companySkillRepository: InMemoryCompanySkillRepository;
  private readonly dataInitializationService: DataInitializationService;
  
  private projectStatisticsRepository: ProjectStatisticsRepository | null = null;
  private projectStatisticsUseCase: GetProjectStatisticsUseCase | null = null;
  private listAllCompaniesUseCase: ListAllCompaniesUseCase | null = null;
  private listCompanySkillsUseCase: ListCompanySkillsUseCase | null = null;
  private tabCompletionUseCase: TabCompletionUseCase | null = null;
  private privacyPolicyRepository: PrivacyPolicyRepository | null = null;
  private privacyPolicyUseCase: GetPrivacyPolicyUseCase | null = null;
  
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
    if (!this.listAllCompaniesUseCase) {
      this.listAllCompaniesUseCase = new ListAllCompaniesUseCase(this.companyRepository);
    }
    return this.listAllCompaniesUseCase;
  }
  
  getListCompanySkillsUseCase(): ListCompanySkillsUseCase {
    if (!this.listCompanySkillsUseCase) {
      this.listCompanySkillsUseCase = new ListCompanySkillsUseCase(
        this.companyRepository,
        this.companySkillRepository
      );
    }
    return this.listCompanySkillsUseCase;
  }

  getTabCompletionUseCase(): TabCompletionUseCase {
    if (!this.tabCompletionUseCase) {
      this.tabCompletionUseCase = new TabCompletionUseCase(this.companyRepository);
    }
    return this.tabCompletionUseCase;
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

  getPrivacyPolicyRepository(): PrivacyPolicyRepository {
    if (!this.privacyPolicyRepository) {
      this.privacyPolicyRepository = new InMemoryPrivacyPolicyRepository();
    }
    return this.privacyPolicyRepository;
  }

  getPrivacyPolicyUseCase(): GetPrivacyPolicyUseCase {
    if (!this.privacyPolicyUseCase) {
      const repository = this.getPrivacyPolicyRepository();
      this.privacyPolicyUseCase = new GetPrivacyPolicyUseCase(repository);
    }
    return this.privacyPolicyUseCase;
  }
}

export { DependencyConfig }; 