import { render, screen } from '@testing-library/react';
import { SkillLevel } from '@presentation/components/SkillLevel';

describe('SkillLevel component', () => {
  it('renders with the correct number of stars based on Beginner level', () => {
    render(<SkillLevel level="Beginner" />);
    
    const stars = screen.getAllByText('★');
    expect(stars).toHaveLength(5);
    expect(stars[0].classList.contains('filled')).toBe(true);
    expect(stars[1].classList.contains('filled')).toBe(false);
    expect(stars[2].classList.contains('filled')).toBe(false);
    expect(stars[3].classList.contains('filled')).toBe(false);
    expect(stars[4].classList.contains('filled')).toBe(false);
  });
  
  it('renders with the correct number of stars based on Intermediate level', () => {
    render(<SkillLevel level="Intermediate" />);
    
    const stars = screen.getAllByText('★');
    expect(stars).toHaveLength(5);
    
    expect(stars[0].classList.contains('filled')).toBe(true);
    expect(stars[1].classList.contains('filled')).toBe(true);
    expect(stars[2].classList.contains('filled')).toBe(true);
    expect(stars[3].classList.contains('filled')).toBe(false);
    expect(stars[4].classList.contains('filled')).toBe(false);
  });
  
  it('renders with the correct number of stars based on Expert level', () => {
    render(<SkillLevel level="Expert" />);
    
    const stars = screen.getAllByText('★');
    expect(stars).toHaveLength(5);
    
    stars.forEach(star => {
      expect(star.classList.contains('filled')).toBe(true);
    });
  });
  
  it('renders with tooltip/title attribute containing the level name', () => {
    render(<SkillLevel level="Advanced" />);
    
    const skillLevelElement = screen.getByTitle('Advanced');
    expect(skillLevelElement).toBeTruthy();
  });
  
  it('handles invalid level by showing zero filled stars', () => {
    render(<SkillLevel level="Invalid Level" />);
    
    const stars = screen.getAllByText('★');
    expect(stars).toHaveLength(5);
    
    stars.forEach(star => {
      expect(star.classList.contains('filled')).toBe(false);
    });
  });
}); 