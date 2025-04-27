import { GetProjectStatisticsUseCase } from '@application/use-cases/GetProjectStatisticsUseCase';
import type { ProjectStatisticsRepository } from '@domain/repositories/ProjectStatisticsRepository';
import { ProjectStatistics } from '@domain/entities/ProjectStatistics';
import { ProjectMetric } from '@domain/value-objects/ProjectMetric';
import { jest } from '@jest/globals';

describe('GetProjectStatisticsUseCase', () => {
  let useCase: GetProjectStatisticsUseCase;
  let mockRepository: ProjectStatisticsRepository;
  let mockStats: ProjectStatistics;
  
  beforeEach(() => {
    mockStats = new ProjectStatistics('test-id', [
      new ProjectMetric('coverage.statements', 85, '%')
    ]);
    
    mockRepository = {
      getCurrentStats: jest.fn().mockReturnValue(Promise.resolve(mockStats)),
      getStatsByDate: jest.fn().mockReturnValue(Promise.resolve(mockStats)),
      save: jest.fn().mockReturnValue(Promise.resolve(undefined))
    } as ProjectStatisticsRepository;
    
    useCase = new GetProjectStatisticsUseCase(mockRepository);
  });
  
  it('should get current statistics', async () => {
    const result = await useCase.execute();
    
    expect(mockRepository.getCurrentStats).toHaveBeenCalled();
    expect(result).toBe(mockStats);
  });
  
  it('should get statistics by date', async () => {
    const testDate = new Date('2023-01-01');
    const result = await useCase.getByDate(testDate);
    
    expect(mockRepository.getStatsByDate).toHaveBeenCalledWith(testDate);
    expect(result).toBe(mockStats);
  });
  
  it('should return null when no statistics found for date', async () => {
    (mockRepository.getStatsByDate as jest.Mock).mockReturnValueOnce(Promise.resolve(null));
    const testDate = new Date('2022-01-01');
    const result = await useCase.getByDate(testDate);
    
    expect(result).toBeNull();
  });
}); 