import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from '@application/commands/CommandHandler';
import type { CompanyOutput } from '@application/use-cases/ListAllCompaniesUseCase';

class ListCompaniesCommandHandler implements CommandHandler {
  constructor(private readonly companies: CompanyOutput[]) {}
  
  canHandle(command: Command): boolean {
    return command.isCommand('ls');
  }
  
  handle(): string {
    if (this.companies.length === 0) {
      return 'No companies found.';
    }
    
    return this.companies.map(c => c.name).join('\n');
  }
}

export { ListCompaniesCommandHandler }; 