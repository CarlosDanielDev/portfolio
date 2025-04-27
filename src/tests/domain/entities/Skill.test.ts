import { Skill } from '@domain/entities/Skill';
import { SkillLevel } from '@domain/value-objects/SkillLevel';

describe('Skill', () => {
  const id = '1';
  const name = 'JavaScript';
  const description = 'A programming language';
  const level = new SkillLevel(4); 
  
  let skill: Skill;
  
  beforeEach(() => {
    skill = new Skill(id, name, description, level);
  });
  
  describe('constructor', () => {
    it('should create a skill with all properties', () => {
      expect(skill.id).toBe(id);
      expect(skill.name).toBe(name);
      expect(skill.description).toBe(description);
      expect(skill.level).toBe(level);
    });
  });
  
  describe('getters', () => {
    it('should return the id', () => {
      expect(skill.id).toBe(id);
    });
    
    it('should return the name', () => {
      expect(skill.name).toBe(name);
    });
    
    it('should return the description', () => {
      expect(skill.description).toBe(description);
    });
    
    it('should return the level', () => {
      expect(skill.level).toBe(level);
    });
  });
  
  describe('updateLevel', () => {
    it('should update the skill level', () => {
      const newLevel = new SkillLevel(5);
      skill.updateLevel(newLevel);
      expect(skill.level).toBe(newLevel);
    });
  });
  
  describe('updateDescription', () => {
    it('should update the skill description', () => {
      const newDescription = 'An updated description';
      skill.updateDescription(newDescription);
      expect(skill.description).toBe(newDescription);
    });
  });
}); 