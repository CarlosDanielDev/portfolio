import { ProjectStatistics } from '@domain/entities/ProjectStatistics';

interface ProjectStatisticsRepository {
  getCurrentStats(): Promise<ProjectStatistics>;
  
  getStatsByDate(timestamp: Date): Promise<ProjectStatistics | null>;
  
  save(stats: ProjectStatistics): Promise<void>;
}

export type { ProjectStatisticsRepository }; 