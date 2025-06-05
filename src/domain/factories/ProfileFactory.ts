import { ProfileBuilder } from '../builders/ProfileBuilder';
import { Experience } from '../value-objects/Experience';
import { Skill } from '../value-objects/Skill';
import { ExperienceData, ProfileData, SkillData } from '../../infrastructure/data/profile-data';

export class ProfileFactory {
  static createFromData(data: ProfileData) {
    const experiences = data.experiences.map(this.createExperience);
    const skills = data.skills.map(this.createSkill);

    return new ProfileBuilder()
      .withName(data.name)
      .withTitle(data.title)
      .withContact(data.contact)
      .withSummary(data.summary)
      .withExperiences(experiences)
      .withEducation(data.education)
      .withSkills(skills)
      .build();
  }

  private static createExperience(data: ExperienceData): Experience {
    return new Experience(
      data.companyName,
      data.role,
      new Date(data.startDate),
      data.endDate ? new Date(data.endDate) : undefined,
      data.location,
      data.achievements,
    );
  }

  private static createSkill(data: SkillData): Skill {
    return new Skill(
      data.name,
      data.level,
      data.category,
    );
  }
} 