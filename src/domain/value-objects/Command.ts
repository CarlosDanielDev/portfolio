class Command {
  private readonly text: string;
  
  constructor(text: string) {
    if (Command.isEmpty(text)) {
      throw new Error('Command text cannot be empty');
    }
    this.text = text.trim();
  }

  private static isEmpty(text: string): boolean {
    return text.trim() === '';
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