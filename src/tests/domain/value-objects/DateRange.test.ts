import { DateRange } from '@domain/value-objects/DateRange';

describe('DateRange', () => {
  const pastDate = new Date(2020, 0, 1); 
  const futureDate = new Date(2021, 0, 1); 

  describe('constructor', () => {
    it('should create a valid date range with start and end dates', () => {
      const dateRange = new DateRange(pastDate, futureDate);
      expect(dateRange.startDate).toBe(pastDate);
      expect(dateRange.endDate).toBe(futureDate);
    });

    it('should create a valid date range with only start date (current position)', () => {
      const dateRange = new DateRange(pastDate);
      expect(dateRange.startDate).toBe(pastDate);
      expect(dateRange.endDate).toBeNull();
    });

    it('should throw an error when start date is after end date', () => {
      expect(() => new DateRange(futureDate, pastDate)).toThrow('Start date cannot be after end date');
    });
  });

  describe('isCurrentPosition', () => {
    it('should return true when no end date is provided', () => {
      const dateRange = new DateRange(pastDate);
      expect(dateRange.isCurrentPosition).toBe(true);
    });

    it('should return false when end date is provided', () => {
      const dateRange = new DateRange(pastDate, futureDate);
      expect(dateRange.isCurrentPosition).toBe(false);
    });
  });

  describe('durationInMonths', () => {
    it('should calculate correct duration between two dates', () => {
      const dateRange = new DateRange(pastDate, futureDate);
      expect(dateRange.durationInMonths).toBe(12); 
    });

    it('should calculate duration until current date for current positions', () => {
      const dateRange = new DateRange(pastDate);
      expect(dateRange.durationInMonths).toBeGreaterThan(0);
    });
  });

  describe('durationInYears', () => {
    it('should calculate correct years between two dates', () => {
      const dateRange = new DateRange(pastDate, futureDate);
      expect(dateRange.durationInYears).toBe(1);
    });
  });

  describe('formattedDuration', () => {
    it('should format duration with only months', () => {
      const startDate = new Date(2020, 0, 1);
      const endDate = new Date(2020, 3, 1); 
      const dateRange = new DateRange(startDate, endDate);
      expect(dateRange.formattedDuration).toBe('3 months');
    });

    it('should format duration with only years', () => {
      const startDate = new Date(2020, 0, 1);
      const endDate = new Date(2022, 0, 1); 
      const dateRange = new DateRange(startDate, endDate);
      expect(dateRange.formattedDuration).toBe('2 years');
    });

    it('should format duration with years and months', () => {
      const startDate = new Date(2020, 0, 1);
      const endDate = new Date(2021, 3, 1); 
      const dateRange = new DateRange(startDate, endDate);
      expect(dateRange.formattedDuration).toBe('1 year 3 months');
    });

    it('should use singular form when duration is 1', () => {
      const startDate = new Date(2020, 0, 1);
      const endDate = new Date(2021, 1, 1); 
      const dateRange = new DateRange(startDate, endDate);
      expect(dateRange.formattedDuration).toBe('1 year 1 month');
    });
  });

  describe('formattedDateRange', () => {
    it('should format date range with start and end dates', () => {
      const dateRange = new DateRange(pastDate, futureDate);
      expect(dateRange.formattedDateRange).toBe('Jan 2020 - Jan 2021');
    });

    it('should format date range for current position', () => {
      const dateRange = new DateRange(pastDate);
      expect(dateRange.formattedDateRange).toBe('Jan 2020 - Present');
    });
  });
}); 