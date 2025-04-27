import { ProjectMetric } from '@domain/value-objects/ProjectMetric';

class ProjectStatistics {
  constructor(
    private readonly _id: string,
    private readonly _metrics: ProjectMetric[]
  ) {
    if (!_id) {
      throw new Error('Project statistics ID cannot be empty');
    }
  }

  get id(): string {
    return this._id;
  }

  getMetricsByCategory(category: string): ProjectMetric[] {
    return this._metrics.filter(metric => metric.name.startsWith(category));
  }

  findMetricByName(name: string): ProjectMetric | undefined {
    return this._metrics.find(metric => metric.name === name);
  }

  getAllMetrics(): ProjectMetric[] {
    return [...this._metrics];
  }

  get count(): number {
    return this._metrics.length;
  }
}

export { ProjectStatistics }; 