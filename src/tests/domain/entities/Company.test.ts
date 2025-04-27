import { Company } from '@domain/entities/Company';
import { DateRange } from '@domain/value-objects/DateRange';

describe('Company', () => {
  const id = '1';
  const name = 'Test Company';
  const description = 'A test company';
  const position = 'Developer';
  const logoUrl = 'https://example.com/logo.png';
  const startDate = new Date(2020, 0, 1);
  const endDate = new Date(2021, 0, 1);
  const dateRange = new DateRange(startDate, endDate);
  
  let company: Company;
  
  beforeEach(() => {
    company = new Company(
      id,
      name,
      description,
      dateRange,
      position,
      logoUrl
    );
  });
  
  describe('constructor', () => {
    it('should create a company with all properties', () => {
      expect(company.id).toBe(id);
      expect(company.name).toBe(name);
      expect(company.description).toBe(description);
      expect(company.dateRange).toBe(dateRange);
      expect(company.position).toBe(position);
      expect(company.logoUrl).toBe(logoUrl);
    });
    
    it('should create a company without a logo URL', () => {
      const companyWithoutLogo = new Company(
        id,
        name,
        description,
        dateRange,
        position
      );
      
      expect(companyWithoutLogo.logoUrl).toBeUndefined();
    });
  });
  
  describe('getters', () => {
    it('should return the id', () => {
      expect(company.id).toBe(id);
    });
    
    it('should return the name', () => {
      expect(company.name).toBe(name);
    });
    
    it('should return the description', () => {
      expect(company.description).toBe(description);
    });
    
    it('should return the date range', () => {
      expect(company.dateRange).toBe(dateRange);
    });
    
    it('should return the position', () => {
      expect(company.position).toBe(position);
    });
    
    it('should return the logo URL', () => {
      expect(company.logoUrl).toBe(logoUrl);
    });
  });
}); 