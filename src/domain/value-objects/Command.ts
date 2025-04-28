class Command {
  private readonly text: string;
  
  constructor(text: string) {
    this.text = text.trim();
  }
  
  getText(): string {
    return this.text;
  }
  
  isCommand(name: string): boolean {
    return this.text.toLowerCase() === name;
  }
  
  startsWithCommand(prefix: string): boolean {
    return this.text.toLowerCase().startsWith(prefix);
  }
  
  getArgument(prefix: string): string {
    return this.text.substring(prefix.length).trim();
  }
}

export { Command }; 