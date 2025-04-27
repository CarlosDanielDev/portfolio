import { ProjectStatistics } from '@domain/entities/ProjectStatistics';
import type { ProjectStatisticsRepository } from '@domain/repositories/ProjectStatisticsRepository';
import { CodeCoverageService } from '@infrastructure/services/CodeCoverageService';

class InMemoryProjectStatisticsRepository implements ProjectStatisticsRepository {
  private currentStats: ProjectStatistics | null = null;
  private statsHistory: Map<string, ProjectStatistics> = new Map();
  private readonly codeCoverageService: CodeCoverageService;

  constructor() {
    this.codeCoverageService = new CodeCoverageService();
  }

  async getCurrentStats(): Promise<ProjectStatistics> {
    if (!this.currentStats) {
      this.currentStats = await this.codeCoverageService.loadCoverageData();
      
      const timeKey = new Date().toISOString();
      this.statsHistory.set(timeKey, this.currentStats);
    }
    
    return this.currentStats;
  }

  async getStatsByDate(timestamp: Date): Promise<ProjectStatistics | null> {
    const timeKey = timestamp.toISOString();
    return this.statsHistory.get(timeKey) || null;
  }

  async save(stats: ProjectStatistics): Promise<void> {
    this.currentStats = stats;
    
    const timeKey = new Date().toISOString();
    this.statsHistory.set(timeKey, stats);
  }
}

export { InMemoryProjectStatisticsRepository }; 