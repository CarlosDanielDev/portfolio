import { SkillLevel } from '@domain/value-objects/SkillLevel';

class Skill {
  private readonly _id: string;
  private _name: string;
  private _description: string;
  private _level: SkillLevel;

  constructor(
    id: string,
    name: string,
    description: string,
    level: SkillLevel
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._level = level;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get level(): SkillLevel {
    return this._level;
  }

  updateLevel(level: SkillLevel): void {
    this._level = level;
  }

  updateDescription(description: string): void {
    this._description = description;
  }
}

export { Skill }; 