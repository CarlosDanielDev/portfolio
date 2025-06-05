import { v4 as uuidv4 } from "uuid";
import { Company } from "@domain/entities/Company";
import { Skill } from "@domain/entities/Skill";
import { CompanySkill } from "@domain/entities/CompanySkill";
import { DateRange } from "@domain/value-objects/DateRange";
import { SkillLevel } from "@domain/value-objects/SkillLevel";
import { InMemoryCompanyRepository } from "@infrastructure/repositories/InMemoryCompanyRepository";
import { InMemorySkillRepository } from "@infrastructure/repositories/InMemorySkillRepository";
import { InMemoryCompanySkillRepository } from "@infrastructure/repositories/InMemoryCompanySkillRepository";


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
    const skills = {
      react: new Skill(
        uuidv4(),
        "React.js",
        "A JavaScript library for building user interfaces",
        new SkillLevel(5)
      ),
      reactNative: new Skill(
        uuidv4(),
        "React Native",
        "Cross-platform mobile development framework",
        new SkillLevel(5)
      ),
      typescript: new Skill(
        uuidv4(),
        "TypeScript",
        "JavaScript with syntax for types",
        new SkillLevel(5)
      ),
      javascript: new Skill(
        uuidv4(),
        "JavaScript",
        "Core web programming language (ES6+)",
        new SkillLevel(5)
      ),
      redux: new Skill(
        uuidv4(),
        "Redux",
        "State management for JavaScript apps",
        new SkillLevel(4)
      ),
      styledComponents: new Skill(
        uuidv4(),
        "Styled Components",
        "CSS-in-JS styling solution",
        new SkillLevel(4)
      ),
      nodejs: new Skill(
        uuidv4(),
        "Node.js",
        "JavaScript runtime for server-side development",
        new SkillLevel(4)
      ),
      docker: new Skill(
        uuidv4(),
        "Docker",
        "Container platform for application deployment",
        new SkillLevel(4)
      ),
      azure: new Skill(
        uuidv4(),
        "Azure DevOps",
        "Development and deployment platform",
        new SkillLevel(4)
      ),
      jest: new Skill(
        uuidv4(),
        "Jest",
        "JavaScript Testing Framework",
        new SkillLevel(4)
      )
    };

    // Save all skills
    for (const skill of Object.values(skills)) {
      await this.skillRepository.save(skill);
    }

    // Initialize companies with accurate data
    const companies = [
      new Company(
        uuidv4(),
        "Nestlé Health Science",
        "Desenvolvimento de aplicações web B2B/B2C e mobile com foco em saúde e nutrição",
        new DateRange(new Date("2022-01-01"), new Date()),
        "Senior Software Developer",
        "/logos/nestle.png"
      ),
      new Company(
        uuidv4(),
        "Stix",
        "Aplicativo de fidelidade integrado com Pão de Açúcar, Drogaraia e Drogasil, impactando milhões de usuários",
        new DateRange(new Date("2021-02-01"), new Date("2021-12-31")),
        "Senior Frontend Developer",
        "/logos/stix.png"
      ),
      new Company(
        uuidv4(),
        "Primepass Connect",
        "Aplicativo de cinema por assinatura com integração de pagamentos e streaming",
        new DateRange(new Date("2020-05-01"), new Date("2020-12-31")),
        "Senior Frontend Developer",
        "/logos/primepass.png"
      )
    ];

    for (const company of companies) {
      await this.companyRepository.save(company);
    }

    const companySkills = [
      new CompanySkill(
        uuidv4(),
        companies[0],
        skills.react,
        new DateRange(new Date("2022-01-01"), new Date()),
        new SkillLevel(5),
        "Arquiteto principal de soluções frontend para aplicações B2B/B2C"
      ),
      new CompanySkill(
        uuidv4(),
        companies[0],
        skills.reactNative,
        new DateRange(new Date("2022-01-01"), new Date()),
        new SkillLevel(5),
        "Desenvolvimento de aplicações mobile cross-platform"
      ),
      new CompanySkill(
        uuidv4(),
        companies[0],
        skills.azure,
        new DateRange(new Date("2022-01-01"), new Date()),
        new SkillLevel(4),
        "Implementação de pipelines de CI/CD usando Azure DevOps"
      ),
      new CompanySkill(
        uuidv4(),
        companies[0],
        skills.docker,
        new DateRange(new Date("2022-01-01"), new Date()),
        new SkillLevel(4),
        "Containerização e deploy de aplicações"
      ),

      new CompanySkill(
        uuidv4(),
        companies[1],
        skills.reactNative,
        new DateRange(new Date("2021-02-01"), new Date("2021-12-31")),
        new SkillLevel(5),
        "Liderança técnica no desenvolvimento do aplicativo de fidelidade"
      ),
      new CompanySkill(
        uuidv4(),
        companies[1],
        skills.typescript,
        new DateRange(new Date("2021-02-01"), new Date("2021-12-31")),
        new SkillLevel(5),
        "Arquitetura e implementação de soluções complexas"
      ),
      new CompanySkill(
        uuidv4(),
        companies[1],
        skills.jest,
        new DateRange(new Date("2021-02-01"), new Date("2021-12-31")),
        new SkillLevel(4),
        "Implementação de testes automatizados e otimização de performance"
      ),

      new CompanySkill(
        uuidv4(),
        companies[2],
        skills.reactNative,
        new DateRange(new Date("2020-05-01"), new Date("2020-12-31")),
        new SkillLevel(5),
        "Desenvolvimento completo de aplicativo de cinema por assinatura"
      ),
      new CompanySkill(
        uuidv4(),
        companies[2],
        skills.typescript,
        new DateRange(new Date("2020-05-01"), new Date("2020-12-31")),
        new SkillLevel(5),
        "Arquitetura e desenvolvimento from scratch"
      ),
      new CompanySkill(
        uuidv4(),
        companies[2],
        skills.nodejs,
        new DateRange(new Date("2020-05-01"), new Date("2020-12-31")),
        new SkillLevel(4),
        "Integração com APIs de pagamento e sistemas de streaming"
      )
    ];

    for (const companySkill of companySkills) {
      await this.companySkillRepository.save(companySkill);
    }
  }
}

export { DataInitializationService };

