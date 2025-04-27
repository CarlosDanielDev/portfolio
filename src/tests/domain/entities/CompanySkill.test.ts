import { CompanySkill } from '@domain/entities/CompanySkill';
import { Company } from '@domain/entities/Company';
import { Skill } from '@domain/entities/Skill';
import { DateRange } from '@domain/value-objects/DateRange';
import { SkillLevel } from '@domain/value-objects/SkillLevel';

describe('CompanySkill', () => {
  const id = '1';
  const startDate = new Date(2020, 0, 1);
  const endDate = new Date(2021, 0, 1);
  const dateRange = new DateRange(startDate, endDate);
  const level = new SkillLevel(4);
  const description = 'Used this skill extensively';
  
  const company = new Company(
    'c1',
    'Test Company',
    'A test company',
    dateRange,
    'Developer'
  );
  
  const skill = new Skill(
    's1',
    'JavaScript',
    'A programming language',
    new SkillLevel(3)
  );
  
  let companySkill: CompanySkill;
  
  beforeEach(() => {
    companySkill = new CompanySkill(
      id,
      company,
      skill,
      dateRange,
      level,
      description
    );
  });
  
  describe('constructor', () => {
    it('should create a company skill with all properties', () => {
      expect(companySkill.id).toBe(id);
      expect(companySkill.company).toBe(company);
      expect(companySkill.skill).toBe(skill);
      expect(companySkill.dateRange).toBe(dateRange);
      expect(companySkill.level).toBe(level);
      expect(companySkill.description).toBe(description);
    });
  });
  
  describe('getters', () => {
    it('should return the id', () => {
      expect(companySkill.id).toBe(id);
    });
    
    it('should return the company', () => {
      expect(companySkill.company).toBe(company);
    });
    
    it('should return the skill', () => {
      expect(companySkill.skill).toBe(skill);
    });
    
    it('should return the date range', () => {
      expect(companySkill.dateRange).toBe(dateRange);
    });
    
    it('should return the level', () => {
      expect(companySkill.level).toBe(level);
    });
    
    it('should return the description', () => {
      expect(companySkill.description).toBe(description);
    });
  });
  
  describe('updateLevel', () => {
    it('should update the company skill level', () => {
      const newLevel = new SkillLevel(5);
      companySkill.updateLevel(newLevel);
      expect(companySkill.level).toBe(newLevel);
    });
  });
  
  describe('updateDescription', () => {
    it('should update the company skill description', () => {
      const newDescription = 'An updated description';
      companySkill.updateDescription(newDescription);
      expect(companySkill.description).toBe(newDescription);
    });
  });
}); 