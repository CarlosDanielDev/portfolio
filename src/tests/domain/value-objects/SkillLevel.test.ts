import { SkillLevel } from '@domain/value-objects/SkillLevel';

describe('SkillLevel', () => {
  describe('constructor', () => {
    it('should create a valid skill level', () => {
      const level = new SkillLevel(3);
      expect(level.value).toBe(3);
    });

    it('should throw an error when level is less than minimum', () => {
      expect(() => new SkillLevel(0)).toThrow('Skill level must be between');
    });

    it('should throw an error when level is greater than maximum', () => {
      expect(() => new SkillLevel(6)).toThrow('Skill level must be between');
    });

    it('should throw an error when level is not an integer', () => {
      expect(() => new SkillLevel(2.5)).toThrow('Skill level must be between');
    });
  });

  describe('isValid', () => {
    it('should return true for valid levels', () => {
      expect(SkillLevel.isValid(1)).toBe(true);
      expect(SkillLevel.isValid(3)).toBe(true);
      expect(SkillLevel.isValid(5)).toBe(true);
    });

    it('should return false for invalid levels', () => {
      expect(SkillLevel.isValid(0)).toBe(false);
      expect(SkillLevel.isValid(6)).toBe(false);
      expect(SkillLevel.isValid(3.5)).toBe(false);
    });
  });

  describe('toString', () => {
    it('should return the correct label for each level', () => {
      expect(new SkillLevel(1).toString()).toBe('Beginner');
      expect(new SkillLevel(2).toString()).toBe('Basic');
      expect(new SkillLevel(3).toString()).toBe('Intermediate');
      expect(new SkillLevel(4).toString()).toBe('Advanced');
      expect(new SkillLevel(5).toString()).toBe('Expert');
    });
  });

  describe('equals', () => {
    it('should return true when comparing same levels', () => {
      const level1 = new SkillLevel(3);
      const level2 = new SkillLevel(3);
      expect(level1.equals(level2)).toBe(true);
    });

    it('should return false when comparing different levels', () => {
      const level1 = new SkillLevel(3);
      const level2 = new SkillLevel(4);
      expect(level1.equals(level2)).toBe(false);
    });
  });
}); 