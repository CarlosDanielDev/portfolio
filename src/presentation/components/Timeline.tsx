import { useMemo } from 'react';
import { profileData } from '@infrastructure/data/profile-data';
import './Timeline.css';

export function Timeline() {
  const experiences = useMemo(() => {
    return profileData.experiences.map((exp) => ({
      ...exp,
      startDate: new Date(exp.startDate),
      endDate: exp.endDate ? new Date(exp.endDate) : undefined
    }));
  }, []);

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Career Journey</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3 className="timeline-company">{experience.companyName}</h3>
              <p className="timeline-role">{experience.role}</p>
              <p className="timeline-date">
                {experience.startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                {' - '}
                {experience.endDate
                  ? experience.endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                  : 'Present'}
              </p>
              <p className="timeline-location">{experience.location}</p>
              <ul className="timeline-achievements">
                {experience.achievements.map((achievement, i) => (
                  <li key={i}>
                    {achievement.description}
                    {achievement.impact && <span className="impact"> • {achievement.impact}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 