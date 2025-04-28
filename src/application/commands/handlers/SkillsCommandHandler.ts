import type { Command } from '@domain/value-objects/Command';
import type { CommandHandler } from '@application/commands/CommandHandler';
import type { ListCompanySkillsOutput } from '@application/use-cases/ListCompanySkillsUseCase';

class SkillsCommandHandler implements CommandHandler {
  constructor(private readonly selectedCompany: ListCompanySkillsOutput | null) {}
  
  canHandle(command: Command): boolean {
    return command.isCommand('skills');
  }
  
  handle(): string {
    if (!this.selectedCompany) {
      return 'No company selected. Use "cd <company_name>" to select a company.';
    }
    
    const skillsOutput = this.selectedCompany.skills.map((skill) => 
      `${skill.name} (${skill.level}) - ${skill.description}`
    ).join('\n');
    
    return skillsOutput || 'No skills found for this company.';
  }
}

export { SkillsCommandHandler }; 