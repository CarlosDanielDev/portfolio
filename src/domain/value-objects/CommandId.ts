class CommandId {
  private readonly value: string;
  
  constructor(value?: string) {
    this.value = value || Date.now().toString();
  }
  
  toString(): string {
    return this.value;
  }
  
  equals(other: CommandId): boolean {
    return this.value === other.value;
  }
}

export { CommandId }; 