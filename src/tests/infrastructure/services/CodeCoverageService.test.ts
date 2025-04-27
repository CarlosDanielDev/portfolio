import { CodeCoverageService } from '@infrastructure/services/CodeCoverageService';
import { ProjectStatistics } from '@domain/entities/ProjectStatistics';

describe('CodeCoverageService', () => {
  let service: CodeCoverageService;

  beforeEach(() => {
    service = new CodeCoverageService();
  });

  describe('loadCoverageData', () => {
    it('should return ProjectStatistics with metrics', async () => {
      const result = await service.loadCoverageData();

      expect(result).toBeInstanceOf(ProjectStatistics);
      
      expect(result.id).toBeDefined();
      expect(typeof result.id).toBe('string');
      
      const metrics = result.getAllMetrics();
      expect(metrics.length).toBeGreaterThan(0);
      
      const coverageMetrics = result.getMetricsByCategory('coverage.');
      expect(coverageMetrics.length).toBe(4);
      
      const statements = result.findMetricByName('coverage.statements');
      expect(statements).toBeDefined();
      expect(statements?.value).toBeGreaterThan(0);
      expect(statements?.unit).toBe('%');
    });
  });
}); 