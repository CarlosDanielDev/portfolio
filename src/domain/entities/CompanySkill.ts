import { Company } from '@domain/entities/Company';
import { Skill } from '@domain/entities/Skill';
import { DateRange } from '@domain/value-objects/DateRange';
import { SkillLevel } from '@domain/value-objects/SkillLevel';

class CompanySkill {
  private readonly _id: string;
  private readonly _company: Company;
  private readonly _skill: Skill;
  private readonly _dateRange: DateRange;
  private _level: SkillLevel;
  private _description: string;

  constructor(
    id: string,
    company: Company,
    skill: Skill,
    dateRange: DateRange,
    level: SkillLevel,
    description: string
  ) {
    this._id = id;
    this._company = company;
    this._skill = skill;
    this._dateRange = dateRange;
    this._level = level;
    this._description = description;
  }

  get id(): string {
    return this._id;
  }

  get company(): Company {
    return this._company;
  }

  get skill(): Skill {
    return this._skill;
  }

  get dateRange(): DateRange {
    return this._dateRange;
  }

  get level(): SkillLevel {
    return this._level;
  }

  get description(): string {
    return this._description;
  }

  updateLevel(level: SkillLevel): void {
    this._level = level;
  }

  updateDescription(description: string): void {
    this._description = description;
  }
}

export { CompanySkill }; 