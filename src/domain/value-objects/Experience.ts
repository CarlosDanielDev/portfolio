import { v4 as uuidv4 } from 'uuid';

export interface Achievement {
  description: string;
  impact?: string;
}

export class Experience {
  private readonly _id: string;

  constructor(
    private readonly _companyName: string,
    private readonly _role: string,
    private readonly _startDate: Date,
    private readonly _endDate?: Date,
    private readonly _location: string = 'Remote',
    private readonly _achievements: Achievement[] = [],
  ) {
    this._id = uuidv4();
  }

  get id(): string {
    return this._id;
  }

  get companyName(): string {
    return this._companyName;
  }

  get role(): string {
    return this._role;
  }

  get startDate(): Date {
    return this._startDate;
  }

  get endDate(): Date | undefined {
    return this._endDate;
  }

  get location(): string {
    return this._location;
  }

  get achievements(): Achievement[] {
    return [...this._achievements];
  }

  get isCurrent(): boolean {
    return !this._endDate;
  }
} 