import { ProjectStatistics } from '@domain/entities/ProjectStatistics';
import type { ProjectStatisticsRepository } from '@domain/repositories/ProjectStatisticsRepository';

class GetProjectStatisticsUseCase {
  constructor(
    private readonly projectStatsRepository: ProjectStatisticsRepository
  ) {}

  async execute(): Promise<ProjectStatistics> {
    return this.projectStatsRepository.getCurrentStats();
  }

  async getByDate(date: Date): Promise<ProjectStatistics | null> {
    return this.projectStatsRepository.getStatsByDate(date);
  }
}

export { GetProjectStatisticsUseCase }; 