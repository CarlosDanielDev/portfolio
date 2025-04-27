class ProjectMetric {
  constructor(
    private readonly _name: string,
    private readonly _value: number,
    private readonly _unit: string = ''
  ) {
    if (!_name || _name.trim() === '') {
      throw new Error('Metric name cannot be empty');
    }
    
    if (isNaN(_value)) {
      throw new Error('Metric value must be a number');
    }
  }

  get name(): string {
    return this._name;
  }

  get value(): number {
    return this._value;
  }

  get unit(): string {
    return this._unit;
  }

  get formattedValue(): string {
    return `${this._value}${this._unit ? ' ' + this._unit : ''}`;
  }

  equals(other: ProjectMetric): boolean {
    return this._name === other._name && 
           this._value === other._value && 
           this._unit === other._unit;
  }
}

export { ProjectMetric }; 