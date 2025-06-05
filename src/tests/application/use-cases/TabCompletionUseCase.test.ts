import { TabCompletionUseCase } from '@application/use-cases/TabCompletionUseCase';
import { Company } from '@domain/entities/Company';
import { DateRange } from '@domain/value-objects/DateRange';
import type { CompanyRepository } from '@domain/repositories/CompanyRepository';
import { jest } from '@jest/globals';

describe('TabCompletionUseCase', () => {
  let useCase: TabCompletionUseCase;
  let mockCompanyRepository: jest.Mocked<CompanyRepository>;

  beforeEach(() => {
    mockCompanyRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
      findByName: jest.fn(),
      save: jest.fn(),
    };

    useCase = new TabCompletionUseCase(mockCompanyRepository);
  });

  describe('execute', () => {
    it('should complete ls command', async () => {
      const result = await useCase.execute('l');
      expect(result.hasCompletion()).toBe(true);
      expect(result.getCompletedString()).toBe('ls');
    });

    it('should complete cd command with company name', async () => {
      const companies = [
        new Company(
          '1',
          'Nestlé Health Science',
          'Description',
          new DateRange(new Date('2022-01-01'), new Date()),
          'Position'
        ),
        new Company(
          '2',
          'Stix',
          'Description',
          new DateRange(new Date('2021-01-01'), new Date('2021-12-31')),
          'Position'
        )
      ];

      mockCompanyRepository.findAll.mockResolvedValue(companies);

      const result = await useCase.execute('cd Nes');
      expect(result.hasCompletion()).toBe(true);
      expect(result.getCompletedString()).toBe('cd Nestlé Health Science');
    });

    it('should not complete cd command with no matching company', async () => {
      const companies = [
        new Company(
          '1',
          'Nestlé Health Science',
          'Description',
          new DateRange(new Date('2022-01-01'), new Date()),
          'Position'
        )
      ];

      mockCompanyRepository.findAll.mockResolvedValue(companies);

      const result = await useCase.execute('cd xyz');
      expect(result.hasCompletion()).toBe(false);
      expect(result.getCompletedString()).toBe('cd xyz');
    });

    it('should complete available commands', async () => {
      const result = await useCase.execute('he');
      expect(result.hasCompletion()).toBe(true);
      expect(result.getCompletedString()).toBe('help');
    });

    it('should not complete unknown commands', async () => {
      const result = await useCase.execute('xyz');
      expect(result.hasCompletion()).toBe(false);
      expect(result.getCompletedString()).toBe('xyz');
    });
  });
}); 