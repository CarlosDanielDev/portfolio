import { v4 as uuidv4 } from 'uuid';

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
export type SkillCategory = 'Frontend' | 'Backend' | 'Mobile' | 'DevOps' | 'Testing' | 'Methodology';

export class Skill {
  private readonly _id: string;

  constructor(
    private readonly _name: string,
    private readonly _level: SkillLevel,
    private readonly _category: SkillCategory,
  ) {
    this._id = uuidv4();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get level(): SkillLevel {
    return this._level;
  }

  get category(): SkillCategory {
    return this._category;
  }
} 