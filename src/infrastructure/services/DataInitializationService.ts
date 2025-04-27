import { v4 as uuidv4 } from 'uuid';
import { Company } from '@domain/entities/Company';
import { Skill } from '@domain/entities/Skill';
import { CompanySkill } from '@domain/entities/CompanySkill';
import { DateRange } from '@domain/value-objects/DateRange';
import { SkillLevel } from '@domain/value-objects/SkillLevel';
import { InMemoryCompanyRepository } from '@infrastructure/repositories/InMemoryCompanyRepository';
import { InMemorySkillRepository } from '@infrastructure/repositories/InMemorySkillRepository';
import { InMemoryCompanySkillRepository } from '@infrastructure/repositories/InMemoryCompanySkillRepository';

class DataInitializationService {
  private companyRepository: InMemoryCompanyRepository;
  private skillRepository: InMemorySkillRepository;
  private companySkillRepository: InMemoryCompanySkillRepository;

  constructor(
    companyRepository: InMemoryCompanyRepository,
    skillRepository: InMemorySkillRepository,
    companySkillRepository: InMemoryCompanySkillRepository
  ) {
    this.companyRepository = companyRepository;
    this.skillRepository = skillRepository;
    this.companySkillRepository = companySkillRepository;
  }

  async initialize(): Promise<void> {
    const reactSkill = new Skill(
      uuidv4(),
      'React',
      'A JavaScript library for building user interfaces',
      new SkillLevel(4)
    );

    const typescriptSkill = new Skill(
      uuidv4(),
      'TypeScript',
      'JavaScript with syntax for types',
      new SkillLevel(4)
    );

    const nodeSkill = new Skill(
      uuidv4(),
      'Node.js',
      'JavaScript runtime built on Chrome\'s V8 engine',
      new SkillLevel(3)
    );

    await this.skillRepository.save(reactSkill);
    await this.skillRepository.save(typescriptSkill);
    await this.skillRepository.save(nodeSkill);

    const company1 = new Company(
      uuidv4(),
      'Example Tech',
      'Leading software development company',
      new DateRange(new Date('2020-01-01'), new Date('2022-05-31')),
      'Senior Frontend Developer',
      '/logos/example-tech.png'
    );

    const company2 = new Company(
      uuidv4(),
      'Digital Solutions',
      'Digital transformation consulting',
      new DateRange(new Date('2022-06-01')),
      'Tech Lead',
      '/logos/digital-solutions.png'
    );

    await this.companyRepository.save(company1);
    await this.companyRepository.save(company2);

    const company1React = new CompanySkill(
      uuidv4(),
      company1,
      reactSkill,
      new DateRange(new Date('2020-02-01'), new Date('2022-05-31')),
      new SkillLevel(3),
      'Developed multiple client projects using React and Redux'
    );

    const company1TypeScript = new CompanySkill(
      uuidv4(),
      company1,
      typescriptSkill,
      new DateRange(new Date('2020-05-01'), new Date('2022-05-31')),
      new SkillLevel(2),
      'Migrated JavaScript codebase to TypeScript'
    );

    const company2React = new CompanySkill(
      uuidv4(),
      company2,
      reactSkill,
      new DateRange(new Date('2022-06-01')),
      new SkillLevel(4),
      'Led team of developers building React applications'
    );

    const company2TypeScript = new CompanySkill(
      uuidv4(),
      company2,
      typescriptSkill,
      new DateRange(new Date('2022-06-01')),
      new SkillLevel(4),
      'Implemented TypeScript best practices across projects'
    );

    const company2Node = new CompanySkill(
      uuidv4(),
      company2,
      nodeSkill,
      new DateRange(new Date('2022-08-01')),
      new SkillLevel(3),
      'Developed RESTful APIs with Node.js and Express'
    );

    await this.companySkillRepository.save(company1React);
    await this.companySkillRepository.save(company1TypeScript);
    await this.companySkillRepository.save(company2React);
    await this.companySkillRepository.save(company2TypeScript);
    await this.companySkillRepository.save(company2Node);
  }
}

export { DataInitializationService }; 