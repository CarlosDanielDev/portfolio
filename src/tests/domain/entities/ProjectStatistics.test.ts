import { ProjectStatistics } from '@domain/entities/ProjectStatistics';
import { ProjectMetric } from '@domain/value-objects/ProjectMetric';

describe('ProjectStatistics', () => {
  let coverageMetrics: ProjectMetric[];
  let sizeMetrics: ProjectMetric[];
  let testMetrics: ProjectMetric[];
  let performanceMetrics: ProjectMetric[];
  let allMetrics: ProjectMetric[];
  let stats: ProjectStatistics;

  beforeEach(() => {
    coverageMetrics = [
      new ProjectMetric('coverage.lines', 85, '%'),
      new ProjectMetric('coverage.statements', 80, '%'),
      new ProjectMetric('coverage.functions', 75, '%'),
      new ProjectMetric('coverage.branches', 70, '%')
    ];
    
    sizeMetrics = [
      new ProjectMetric('size.lines', 5000, 'lines'),
      new ProjectMetric('size.files', 100, 'files')
    ];
    
    testMetrics = [
      new ProjectMetric('test.count', 150, 'tests'),
      new ProjectMetric('test.passing', 140, 'tests')
    ];
    
    performanceMetrics = [
      new ProjectMetric('performance.buildTime', 15, 'seconds')
    ];
    
    allMetrics = [
      ...coverageMetrics,
      ...sizeMetrics,
      ...testMetrics,
      ...performanceMetrics
    ];
    
    stats = new ProjectStatistics('stats-2023-01-01', allMetrics);
  });

  describe('constructor', () => {
    it('should create ProjectStatistics with metrics', () => {
      expect(stats.getAllMetrics().length).toBe(9);
    });
    
    it('should handle empty metrics arrays', () => {
      const emptyStats = new ProjectStatistics('empty-stats', []);
      
      expect(emptyStats.getAllMetrics().length).toBe(0);
    });
  });
  
  describe('getAllMetrics', () => {
    it('should return all metrics combined', () => {
      const retrievedMetrics = stats.getAllMetrics();
      
      expect(retrievedMetrics.length).toBe(9);
      expect(retrievedMetrics).toContain(coverageMetrics[0]);
      expect(retrievedMetrics).toContain(sizeMetrics[0]);
      expect(retrievedMetrics).toContain(testMetrics[0]);
      expect(retrievedMetrics).toContain(performanceMetrics[0]);
    });
  });
  
  describe('getMetricsByCategory', () => {
    it('should return metrics for coverage category', () => {
      const metrics = stats.getMetricsByCategory('coverage');
      
      expect(metrics.length).toBe(4);
      expect(metrics).toEqual(expect.arrayContaining(coverageMetrics));
    });
    
    it('should return metrics for size category', () => {
      const metrics = stats.getMetricsByCategory('size');
      
      expect(metrics.length).toBe(2);
      expect(metrics).toEqual(expect.arrayContaining(sizeMetrics));
    });
    
    it('should return metrics for test category', () => {
      const metrics = stats.getMetricsByCategory('test');
      
      expect(metrics.length).toBe(2);
      expect(metrics).toEqual(expect.arrayContaining(testMetrics));
    });
    
    it('should return metrics for performance category', () => {
      const metrics = stats.getMetricsByCategory('performance');
      
      expect(metrics.length).toBe(1);
      expect(metrics).toEqual(expect.arrayContaining(performanceMetrics));
    });
    
    it('should return empty array for non-existent category', () => {
      const metrics = stats.getMetricsByCategory('nonexistent');
      
      expect(metrics.length).toBe(0);
    });
  });
  
  describe('findMetricByName', () => {
    it('should find metric by exact name', () => {
      const metric = stats.findMetricByName('coverage.lines');
      
      expect(metric).toBeDefined();
      expect(metric?.name).toBe('coverage.lines');
      expect(metric?.value).toBe(85);
      expect(metric?.unit).toBe('%');
    });
    
    it('should return undefined for non-existent metric name', () => {
      const metric = stats.findMetricByName('nonexistent');
      
      expect(metric).toBeUndefined();
    });
  });
}); 