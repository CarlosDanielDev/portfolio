import { TabCompletionService } from '@domain/services/TabCompletionService';

describe('TabCompletionService', () => {
  let service: TabCompletionService;

  beforeEach(() => {
    service = new TabCompletionService();
  });

  describe('complete', () => {
    it('should return null completion for empty input', () => {
      const result = service.complete('', ['test']);
      expect(result.hasCompletion()).toBe(false);
      expect(result.getCompletedString()).toBe('');
    });

    it('should return null completion for whitespace input', () => {
      const result = service.complete('   ', ['test']);
      expect(result.hasCompletion()).toBe(false);
      expect(result.getCompletedString()).toBe('   ');
    });

    it('should complete partial company name', () => {
      const options = ['Nestlé Health Science', 'Stix', 'Primepass Connect'];
      const result = service.complete('Nes', options);
      expect(result.hasCompletion()).toBe(true);
      expect(result.getCompletedString()).toBe('Nestlé Health Science');
    });

    it('should be case insensitive', () => {
      const options = ['Nestlé Health Science', 'Stix', 'Primepass Connect'];
      const result = service.complete('nes', options);
      expect(result.hasCompletion()).toBe(true);
      expect(result.getCompletedString()).toBe('Nestlé Health Science');
    });

    it('should not complete if input matches exactly', () => {
      const options = ['Nestlé Health Science', 'Stix', 'Primepass Connect'];
      const result = service.complete('Stix', options);
      expect(result.hasCompletion()).toBe(false);
      expect(result.getCompletedString()).toBe('Stix');
    });

    it('should not complete if no matches found', () => {
      const options = ['Nestlé Health Science', 'Stix', 'Primepass Connect'];
      const result = service.complete('xyz', options);
      expect(result.hasCompletion()).toBe(false);
      expect(result.getCompletedString()).toBe('xyz');
    });

    it('should complete to longest common prefix when multiple matches', () => {
      const options = ['Primepass Connect', 'Primepass Mobile', 'Primepass Web'];
      const result = service.complete('Prime', options);
      expect(result.hasCompletion()).toBe(true);
      expect(result.getCompletedString()).toBe('Primepass ');
    });
  });
}); 