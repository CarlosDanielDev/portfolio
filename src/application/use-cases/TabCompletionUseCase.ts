import { TabCompletionService } from '@domain/services/TabCompletionService';
import { TabCompletion } from '@domain/value-objects/TabCompletion';
import type { CompanyRepository } from '@domain/repositories/CompanyRepository';

class TabCompletionUseCase {
  private readonly tabCompletionService: TabCompletionService;

  constructor(
    private readonly companyRepository: CompanyRepository
  ) {
    this.tabCompletionService = new TabCompletionService();
  }

  async execute(input: string): Promise<TabCompletion> {
    if (input.startsWith('ls')) {
      return TabCompletion.create(input, 'ls');
    }

    if (input.startsWith('cd ')) {
      const partialCompanyName = input.substring(3).trim();
      const companies = await this.companyRepository.findAll();
      const companyNames = companies.map(c => c.name);
      
      const completion = this.tabCompletionService.complete(
        partialCompanyName,
        companyNames
      );

      if (completion.hasCompletion()) {
        return TabCompletion.create(input, `cd ${completion.getCompletedString()}`);
      }
    }

    const availableCommands = ['help', 'ls', 'cd', 'skills', 'clear', 'about', 'contact'];
    return this.tabCompletionService.complete(input, availableCommands);
  }
}

export { TabCompletionUseCase }; 