import { Skill } from '@domain/entities/Skill';
import type { SkillRepository } from '@domain/repositories/SkillRepository';

class InMemorySkillRepository implements SkillRepository {
  private skills: Skill[] = [];

  constructor(initialSkills: Skill[] = []) {
    this.skills = [...initialSkills];
  }

  async findAll(): Promise<Skill[]> {
    return [...this.skills];
  }

  async findById(id: string): Promise<Skill | null> {
    const skill = this.skills.find(s => s.id === id);
    return skill || null;
  }

  async findByName(name: string): Promise<Skill | null> {
    const skill = this.skills.find(s => s.name === name);
    return skill || null;
  }

  async save(skill: Skill): Promise<void> {
    const index = this.skills.findIndex(s => s.id === skill.id);
    
    if (index >= 0) {
      this.skills[index] = skill;
    } else {
      this.skills.push(skill);
    }
  }
}

export { InMemorySkillRepository }; 