import { ProjectMetric } from '@domain/value-objects/ProjectMetric';

describe('ProjectMetric', () => {
  describe('constructor', () => {
    it('should create a metric with name, value and unit', () => {
      const metric = new ProjectMetric('test.metric', 42, 'units');
      
      expect(metric.name).toBe('test.metric');
      expect(metric.value).toBe(42);
      expect(metric.unit).toBe('units');
    });
    
    it('should create a metric with default empty unit', () => {
      const metric = new ProjectMetric('test.metric', 42);
      
      expect(metric.name).toBe('test.metric');
      expect(metric.value).toBe(42);
      expect(metric.unit).toBe('');
    });
    
    it('should throw error for empty name', () => {
      expect(() => new ProjectMetric('', 42)).toThrow('Metric name cannot be empty');
      expect(() => new ProjectMetric('   ', 42)).toThrow('Metric name cannot be empty');
    });
    
    it('should throw error for NaN value', () => {
      expect(() => new ProjectMetric('test.metric', NaN)).toThrow('Metric value must be a number');
    });
  });
  
  describe('getters', () => {
    it('should return formatted value with unit', () => {
      const metric = new ProjectMetric('test.metric', 42, 'units');
      expect(metric.formattedValue).toBe('42 units');
    });
    
    it('should return formatted value without unit', () => {
      const metric = new ProjectMetric('test.metric', 42);
      expect(metric.formattedValue).toBe('42');
    });
  });
  
  describe('equals', () => {
    it('should return true for equal metrics', () => {
      const metric1 = new ProjectMetric('test.metric', 42, 'units');
      const metric2 = new ProjectMetric('test.metric', 42, 'units');
      expect(metric1.equals(metric2)).toBe(true);
    });
    
    it('should return false for different names', () => {
      const metric1 = new ProjectMetric('test.metric1', 42, 'units');
      const metric2 = new ProjectMetric('test.metric2', 42, 'units');
      expect(metric1.equals(metric2)).toBe(false);
    });
    
    it('should return false for different values', () => {
      const metric1 = new ProjectMetric('test.metric', 42, 'units');
      const metric2 = new ProjectMetric('test.metric', 43, 'units');
      expect(metric1.equals(metric2)).toBe(false);
    });
    
    it('should return false for different units', () => {
      const metric1 = new ProjectMetric('test.metric', 42, 'units');
      const metric2 = new ProjectMetric('test.metric', 42, 'seconds');
      expect(metric1.equals(metric2)).toBe(false);
    });
  });
}); 