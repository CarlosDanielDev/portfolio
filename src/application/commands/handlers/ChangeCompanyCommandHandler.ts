import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from '@application/commands/CommandHandler';
import type { CompanyOutput } from '@application/use-cases/ListAllCompaniesUseCase';

class ChangeCompanyCommandHandler implements CommandHandler {
  constructor(
    private readonly companies: CompanyOutput[],
    private readonly selectCompany: (id: string) => void
  ) {}
  
  canHandle(command: Command): boolean {
    return command.startsWithCommand('cd ');
  }
  
  handle(command: Command): string {
    const companyName = command.getArgument('cd ');
    const company = this.companies.find(c => 
      c.name.toLowerCase() === companyName.toLowerCase()
    );
    
    if (company) {
      this.selectCompany(company.id);
      return `Switched to ${company.name}.`;
    }
    
    return `Company "${companyName}" not found. Use "ls" to see available companies.`;
  }
}

export { ChangeCompanyCommandHandler }; 