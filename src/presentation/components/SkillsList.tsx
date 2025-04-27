import { usePortfolio } from '@presentation/contexts/PortfolioContext';
import { SkillLevel } from '@presentation/components/SkillLevel';
import './SkillsList.css';

export function SkillsList() {
  const { selectedCompany, loading, error } = usePortfolio();

  if (loading) {
    return <div className="skills-list-loading">Loading skills...</div>;
  }

  if (error) {
    return <div className="skills-list-error">{error}</div>;
  }

  if (!selectedCompany) {
    return <div className="skills-list-empty">Select a company to view skills</div>;
  }

  return (
    <div className="skills-list">
      <div className="skills-header">
        <h2>Skills at {selectedCompany.companyName}</h2>
        <div className="skills-position">{selectedCompany.position}</div>
        <div className="skills-date">{selectedCompany.dateRange}</div>
      </div>

      {selectedCompany.skills.length === 0 ? (
        <div className="skills-empty">No skills found for this company</div>
      ) : (
        <div className="skills-items">
          {selectedCompany.skills.map(skill => (
            <div key={skill.id} className="skill-item">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <SkillLevel level={skill.level} />
              </div>
              <div className="skill-date">{skill.dateRange}</div>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 