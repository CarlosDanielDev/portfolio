import { ProjectMetric } from '@domain/value-objects/ProjectMetric';
import { ProjectStatistics } from '@domain/entities/ProjectStatistics';
import { v4 as uuidv4 } from 'uuid';

class CodeCoverageService {

  async loadCoverageData(): Promise<ProjectStatistics> {
    const metrics = [
      new ProjectMetric('coverage.statements', 89.5, '%'),
      new ProjectMetric('coverage.branches', 76.2, '%'),
      new ProjectMetric('coverage.functions', 92.3, '%'),
      new ProjectMetric('coverage.lines', 88.7, '%'),
      
      new ProjectMetric('size.components', 15),
      new ProjectMetric('size.entities', 5),
      new ProjectMetric('size.valueObjects', 7),
      new ProjectMetric('size.useCases', 8),
      
      new ProjectMetric('tests.total', 87),
      new ProjectMetric('tests.passing', 85),
      new ProjectMetric('tests.failing', 2),
      
      new ProjectMetric('performance.buildTime', 3.2, 's'),
      new ProjectMetric('performance.loadTime', 0.8, 's')
    ];
    
    return new ProjectStatistics(uuidv4(), metrics);
  }
}

export { CodeCoverageService }; 