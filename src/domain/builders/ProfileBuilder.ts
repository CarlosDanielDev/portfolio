import { Profile, Contact, Education } from '../entities/Profile';
import { Experience } from '../value-objects/Experience';
import { Skill } from '../value-objects/Skill';

export class ProfileBuilder {
  private _name: string = '';
  private _title: string = '';
  private _contact: Contact = {
    email: '',
    phone: '',
    location: '',
  };
  private _summary: string = '';
  private _experiences: Experience[] = [];
  private _education: Education[] = [];
  private _skills: Skill[] = [];

  withName(name: string): ProfileBuilder {
    this._name = name;
    return this;
  }

  withTitle(title: string): ProfileBuilder {
    this._title = title;
    return this;
  }

  withContact(contact: Contact): ProfileBuilder {
    this._contact = contact;
    return this;
  }

  withSummary(summary: string): ProfileBuilder {
    this._summary = summary;
    return this;
  }

  withExperiences(experiences: Experience[]): ProfileBuilder {
    this._experiences = experiences;
    return this;
  }

  withEducation(education: Education[]): ProfileBuilder {
    this._education = education;
    return this;
  }

  withSkills(skills: Skill[]): ProfileBuilder {
    this._skills = skills;
    return this;
  }

  build(): Profile {
    if (!this._name) throw new Error('Name is required');
    if (!this._title) throw new Error('Title is required');
    if (!this._contact.email) throw new Error('Email is required');
    if (!this._contact.phone) throw new Error('Phone is required');
    if (!this._contact.location) throw new Error('Location is required');
    if (!this._summary) throw new Error('Summary is required');

    return new Profile(
      this._name,
      this._title,
      this._contact,
      this._summary,
      this._experiences,
      this._education,
      this._skills,
    );
  }
} 