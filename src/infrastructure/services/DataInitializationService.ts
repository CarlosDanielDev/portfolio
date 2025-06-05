import { v4 as uuidv4 } from "uuid";
import { Company } from "@domain/entities/Company";
import { Skill } from "@domain/entities/Skill";
import { CompanySkill } from "@domain/entities/CompanySkill";
import { DateRange } from "@domain/value-objects/DateRange";
import { SkillLevel } from "@domain/value-objects/SkillLevel";
import { InMemoryCompanyRepository } from "@infrastructure/repositories/InMemoryCompanyRepository";
import { InMemorySkillRepository } from "@infrastructure/repositories/InMemorySkillRepository";
import { InMemoryCompanySkillRepository } from "@infrastructure/repositories/InMemoryCompanySkillRepository";
import { profileData } from "@infrastructure/data/profile-data";

class DataInitializationService {
  private companyRepository: InMemoryCompanyRepository;
  private skillRepository: InMemorySkillRepository;
  private companySkillRepository: InMemoryCompanySkillRepository;

  constructor(
    companyRepository: InMemoryCompanyRepository,
    skillRepository: InMemorySkillRepository,
    companySkillRepository: InMemoryCompanySkillRepository,
  ) {
    this.companyRepository = companyRepository;
    this.skillRepository = skillRepository;
    this.companySkillRepository = companySkillRepository;
  }

  async initialize(): Promise<void> {
    const skills: Record<string, Skill> = {};
    
    for (const skillData of profileData.skills) {
      const skill = new Skill(
        uuidv4(),
        skillData.name,
        `${skillData.name} - ${skillData.category}`,
        new SkillLevel(this.getSkillLevelValue(skillData.level))
      );
      skills[skillData.name.toLowerCase().replace(/\s+/g, '')] = skill;
      await this.skillRepository.save(skill);
    }

    const companies = profileData.experiences.map(exp => 
      new Company(
        uuidv4(),
        exp.companyName,
        exp.achievements.map(a => a.description + (a.impact ? ` (${a.impact})` : '')).join('. '),
        new DateRange(
          new Date(exp.startDate), 
          exp.endDate ? new Date(exp.endDate) : new Date()
        ),
        exp.role,
        `/logos/${exp.companyName.toLowerCase().replace(/\s+/g, '')}.png`
      )
    );

    for (const company of companies) {
      await this.companyRepository.save(company);
    }

    for (let i = 0; i < profileData.experiences.length; i++) {
      const exp = profileData.experiences[i];
      const company = companies[i];
      
      const relevantSkills = new Set<Skill>();
      
      for (const achievement of exp.achievements) {
        for (const [, skill] of Object.entries(skills)) {
          if (achievement.description.toLowerCase().includes(skill.name.toLowerCase())) {
            relevantSkills.add(skill);
          }
        }
      }

      for (const skill of relevantSkills) {
        const companySkill = new CompanySkill(
          uuidv4(),
          company,
          skill,
          new DateRange(
            new Date(exp.startDate),
            exp.endDate ? new Date(exp.endDate) : new Date()
          ),
          skill.level,
          exp.achievements.find(a => 
            a.description.toLowerCase().includes(skill.name.toLowerCase())
          )?.description || `${skill.name} expertise at ${company.name}`
        );
        
        await this.companySkillRepository.save(companySkill);
      }
    }
  }

  private getSkillLevelValue(level: string): number {
    const levelMap: Record<string, number> = {
      'Beginner': 1,
      'Basic': 2,
      'Intermediate': 3,
      'Advanced': 4,
      'Expert': 5
    };
    return levelMap[level] || 3;
  }
}

export { DataInitializationService };

