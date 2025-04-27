interface SkillLevelProps {
  level: string;
}

export function SkillLevel({ level }: SkillLevelProps) {
  const getLevelValue = (levelName: string): number => {
    const levelMap: Record<string, number> = {
      'Beginner': 1,
      'Basic': 2,
      'Intermediate': 3,
      'Advanced': 4,
      'Expert': 5
    };
    
    return levelMap[levelName] || 0;
  };

  const levelValue = getLevelValue(level);
  const maxStars = 5;
  
  return (
    <div className="skill-level" title={level}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <span 
          key={index} 
          className={`skill-star ${index < levelValue ? 'filled' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
} 