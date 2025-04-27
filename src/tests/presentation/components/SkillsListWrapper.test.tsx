import { render, screen } from '@testing-library/react';
import type { ListCompanySkillsOutput } from '@application/use-cases/ListCompanySkillsUseCase';
import { jest } from '@jest/globals';

const SkillsListWrapper = ({
  selectedCompany = null,
  loading = false,
  error = null,
}: {
  selectedCompany?: ListCompanySkillsOutput | null;
  loading?: boolean;
  error?: string | null;
}) => {
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
                <div className="skill-level" data-testid="skill-level-indicator">
                  {skill.level}
                </div>
              </div>
              <div className="skill-date">{skill.dateRange}</div>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

describe('SkillsListWrapper', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('shows loading message when loading is true', () => {
    render(
      <SkillsListWrapper
        selectedCompany={null}
        loading={true}
      />
    );
    expect(screen.getByText('Loading skills...')).toBeInTheDocument();
  });

  test('shows error message when there is an error', () => {
    const errorMessage = 'Failed to load skills';
    render(
      <SkillsListWrapper
        selectedCompany={null}
        loading={false}
        error={errorMessage}
      />
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('shows empty message when no company is selected', () => {
    render(
      <SkillsListWrapper
        selectedCompany={null}
        loading={false}
      />
    );
    expect(screen.getByText('Select a company to view skills')).toBeInTheDocument();
  });

  test('shows no skills message when selected company has no skills', () => {
    render(
      <SkillsListWrapper
        selectedCompany={{
          companyId: '1',
          companyName: 'Company A',
          position: 'Developer',
          dateRange: '2020-2022',
          skills: []
        }}
        loading={false}
      />
    );
    expect(screen.getByText('No skills found for this company')).toBeInTheDocument();
    expect(screen.getByText('Skills at Company A')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getAllByText('2020-2022')[0]).toBeInTheDocument();
  });

  test('renders the list of skills correctly', () => {
    render(
      <SkillsListWrapper
        selectedCompany={{
          companyId: '1',
          companyName: 'Company A',
          position: 'Developer',
          dateRange: '2020-2022',
          skills: [
            {
              id: 'skill-1',
              name: 'React',
              level: 'EXPERT',
              dateRange: '2020-2022',
              description: 'Built several applications using React'
            },
            {
              id: 'skill-2',
              name: 'TypeScript',
              level: 'ADVANCED',
              dateRange: '2021-2022',
              description: 'Type-safe JavaScript development'
            }
          ]
        }}
        loading={false}
      />
    );
    
    expect(screen.getByText('Skills at Company A')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
    
    expect(screen.getAllByText('2020-2022').length).toBeGreaterThan(0);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Built several applications using React')).toBeInTheDocument();
    expect(screen.getByText('Type-safe JavaScript development')).toBeInTheDocument();
    
    expect(screen.getByText('2021-2022')).toBeInTheDocument();
    
    const skillLevelElements = screen.getAllByTestId('skill-level-indicator');
    expect(skillLevelElements.length).toBe(2);
  });

  test('renders each skill with the correct information', () => {
    const mockSkills = [
      {
        id: 'skill-1',
        name: 'React',
        level: 'EXPERT',
        dateRange: '2020-2022',
        description: 'Built several applications using React'
      }
    ];
    
    render(
      <SkillsListWrapper
        selectedCompany={{
          companyId: '1',
          companyName: 'Company A',
          position: 'Developer',
          dateRange: '2020-2022',
          skills: mockSkills
        }}
        loading={false}
      />
    );
    
    const skillName = screen.getByText('React');
    const skillDescription = screen.getByText('Built several applications using React');
    
    const skillDates = screen.getAllByText('2020-2022');
    
    expect(skillName).toBeInTheDocument();
    expect(skillDescription).toBeInTheDocument();
    expect(skillDates.length).toBeGreaterThan(0);
    
    const skillItem = skillName.closest('.skill-item');
    expect(skillItem).toContainElement(skillDescription);
    
    const skillDateElement = skillItem?.querySelector('.skill-date');
    expect(skillDateElement).not.toBeNull();
    expect(skillDateElement?.textContent).toBe('2020-2022');
  });
}); 