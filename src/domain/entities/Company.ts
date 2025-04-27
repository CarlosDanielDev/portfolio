import { DateRange } from '@domain/value-objects/DateRange';

class Company {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _description: string;
  private readonly _dateRange: DateRange;
  private readonly _position: string;
  private readonly _logoUrl?: string;

  constructor(
    id: string,
    name: string,
    description: string,
    dateRange: DateRange,
    position: string,
    logoUrl?: string
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._dateRange = dateRange;
    this._position = position;
    this._logoUrl = logoUrl;
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

  get dateRange(): DateRange {
    return this._dateRange;
  }

  get position(): string {
    return this._position;
  }

  get logoUrl(): string | undefined {
    return this._logoUrl;
  }
}

export { Company }; 