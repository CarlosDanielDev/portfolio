import { TabCompletion } from '@domain/value-objects/TabCompletion';

class TabCompletionService {
  complete(input: string, options: string[]): TabCompletion {
    if (!input.trim()) {
      return TabCompletion.create(input, null);
    }

    const matchingOptions = this.findMatchingOptions(input.toLowerCase(), options);
    
    if (matchingOptions.length === 0) {
      return TabCompletion.create(input, null);
    }

    if (matchingOptions.some(opt => opt.toLowerCase() === input.toLowerCase())) {
      return TabCompletion.create(input, null);
    }

    const completion = this.getLongestCommonPrefix(matchingOptions);
    
    if (completion.length <= input.length) {
      return TabCompletion.create(input, null);
    }

    return TabCompletion.create(input, completion);
  }

  private findMatchingOptions(input: string, options: string[]): string[] {
    return options.filter(option => 
      option.toLowerCase().startsWith(input.toLowerCase())
    );
  }

  private getLongestCommonPrefix(strings: string[]): string {
    if (strings.length === 0) return '';
    if (strings.length === 1) return strings[0];

    let prefix = strings[0];
    for (let i = 1; i < strings.length; i++) {
      while (strings[i].toLowerCase().indexOf(prefix.toLowerCase()) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix === '') return '';
      }
    }
    return prefix;
  }
}

export { TabCompletionService }; 