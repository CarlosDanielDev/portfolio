import React, { useEffect, useState } from 'react';
import './ProjectStatistics.css';

interface Metric {
  name: string;
  value: number | string;
  unit?: string;
}

interface ProjectMetrics {
  coverage: Metric[];
  size: Metric[];
  tests: Metric[];
  performance: Metric[];
}

export const ProjectStatistics: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<ProjectMetrics | null>(null);

  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await new Promise<ProjectMetrics>((resolve) => {
        setTimeout(() => {
          resolve({
            coverage: [
              { name: 'statements', value: 87.5, unit: '%' },
              { name: 'branches', value: 79.2, unit: '%' },
              { name: 'functions', value: 92.3, unit: '%' },
              { name: 'lines', value: 88.9, unit: '%' },
            ],
            size: [
              { name: 'total lines', value: 4256 },
              { name: 'components', value: 24 },
              { name: 'files', value: 78 },
              { name: 'dependencies', value: 12 },
            ],
            tests: [
              { name: 'unit', value: '126/135', unit: 'passing' },
              { name: 'integration', value: '42/45', unit: 'passing' },
              { name: 'e2e', value: '15/18', unit: 'passing' },
              { name: 'total', value: '183/198', unit: 'passing' },
            ],
            performance: [
              { name: 'build time', value: 4.2, unit: 's' },
              { name: 'bundle size', value: 245, unit: 'KB' },
              { name: 'load time', value: 1.8, unit: 's' },
              { name: 'lighthouse', value: 94, unit: '/100' },
            ],
          });
        }, 1000);
      });
      
      setMetrics(response);
      setError(null);
    } catch (err) {
      setError('Failed to load project statistics');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryMetrics = (category: keyof ProjectMetrics): Metric[] => {
    if (!metrics) return [];
    return metrics[category] || [];
  };

  const calculatePassingRate = (value: string): number => {
    const [passing, total] = value.split('/').map(Number);
    return (passing / total) * 100;
  };

  const getCoverageColor = (coverage: number): string => {
    if (coverage >= 90) return '#4caf50'; 
    if (coverage >= 75) return '#ff9800'; 
    return '#f44336'; 
  };

  if (loading) {
    return <div className="statistics-loading">Loading project statistics...</div>;
  }

  if (error) {
    return <div className="statistics-error">{error}</div>;
  }

  return (
    <div className="project-statistics">
      <h2 className="statistics-title">Project Statistics</h2>
      <div className="statistics-container">
        <div className="statistics-card">
          <h3>Code Coverage</h3>
          <div className="metrics-container">
            {getCategoryMetrics('coverage').map((metric, index) => (
              <div className="metric-item" key={index}>
                <span className="metric-label">{metric.name}</span>
                <span className="metric-value">
                  {metric.value}{metric.unit}
                  <div 
                    className="coverage-bar" 
                    style={{ 
                      width: `${Number(metric.value)}%`, 
                      backgroundColor: getCoverageColor(Number(metric.value)) 
                    }}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="statistics-card">
          <h3>Project Size</h3>
          <div className="metrics-container">
            {getCategoryMetrics('size').map((metric, index) => (
              <div className="metric-item" key={index}>
                <span className="metric-label">{metric.name}</span>
                <span className="metric-value">{metric.value}{metric.unit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="statistics-card">
          <h3>Tests</h3>
          <div className="metrics-container">
            {getCategoryMetrics('tests').map((metric, index) => (
              <div className="metric-item" key={index}>
                <span className="metric-label">{metric.name}</span>
                <span className="metric-value">
                  {metric.value} {metric.unit}
                  <div 
                    className="coverage-bar" 
                    style={{ 
                      width: typeof metric.value === 'string' ? `${calculatePassingRate(metric.value)}%` : '0%', 
                      backgroundColor: typeof metric.value === 'string' ? 
                        getCoverageColor(calculatePassingRate(metric.value)) : '#f44336' 
                    }}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="statistics-card">
          <h3>Performance</h3>
          <div className="metrics-container">
            {getCategoryMetrics('performance').map((metric, index) => (
              <div className="metric-item" key={index}>
                <span className="metric-label">{metric.name}</span>
                <span className="metric-value">{metric.value}{metric.unit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatistics; 