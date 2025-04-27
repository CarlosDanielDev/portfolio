class SkillLevel {
  static readonly MIN_LEVEL = 1;
  static readonly MAX_LEVEL = 5;
  
  private readonly _value: number;

  constructor(level: number) {
    if (!SkillLevel.isValid(level)) {
      throw new Error(`Skill level must be between ${SkillLevel.MIN_LEVEL} and ${SkillLevel.MAX_LEVEL}`);
    }
    this._value = level;
  }

  get value(): number {
    return this._value;
  }

  static isValid(level: number): boolean {
    return level >= SkillLevel.MIN_LEVEL && level <= SkillLevel.MAX_LEVEL && Number.isInteger(level);
  }

  equals(other: SkillLevel): boolean {
    return this._value === other.value;
  }

  toString(): string {
    const labels = ['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];
    return labels[this._value - 1];
  }
}

export { SkillLevel }; 