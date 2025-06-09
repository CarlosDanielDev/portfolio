import { Experience } from '../value-objects/Experience';
import { Skill } from '../value-objects/Skill';

export interface Contact {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: Date;
  endDate?: Date;
}

export class Profile {
  constructor(
    private readonly _name: string,
    private readonly _title: string,
    private readonly _contact: Contact,
    private readonly _summary: string,
    private readonly _experiences: Experience[],
    private readonly _education: Education[],
    private readonly _skills: Skill[],
  ) {}

  get name(): string {
    return this._name;
  }

  get title(): string {
    return this._title;
  }

  get contact(): Contact {
    return { ...this._contact };
  }

  get summary(): string {
    return this._summary;
  }

  get experiences(): Experience[] {
    return [...this._experiences];
  }

  get education(): Education[] {
    return [...this._education];
  }

  get skills(): Skill[] {
    return [...this._skills];
  }
} 