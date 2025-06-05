class TabCompletion {
  private constructor(
    private readonly input: string,
    private readonly completion: string | null
  ) {}

  static create(input: string, completion: string | null): TabCompletion {
    return new TabCompletion(input, completion);
  }

  hasCompletion(): boolean {
    return this.completion !== null;
  }

  getCompletedString(): string {
    if (!this.completion) {
      return this.input;
    }
    return this.completion;
  }

  getInput(): string {
    return this.input;
  }
}

export { TabCompletion }; 