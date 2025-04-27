import { Skill } from '@domain/entities/Skill';

interface SkillRepository {
  findAll(): Promise<Skill[]>;
  findById(id: string): Promise<Skill | null>;
  findByName(name: string): Promise<Skill | null>;
  save(skill: Skill): Promise<void>;
}

export type { SkillRepository }; 