import { Contact, Education } from '../../domain/entities/Profile';
import { Achievement } from '../../domain/value-objects/Experience';
import { SkillCategory, SkillLevel } from '../../domain/value-objects/Skill';

export interface ExperienceData {
  companyName: string;
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  achievements: Achievement[];
}

export interface SkillData {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
}

export interface ProfileData {
  name: string;
  title: string;
  contact: Contact;
  summary: string;
  experiences: ExperienceData[];
  education: Education[];
  skills: SkillData[];
}

export const profileData: ProfileData = {
  name: 'Carlos Daniel S. Oliveira',
  title: 'Senior Frontend Developer | Mobile Specialist',
  contact: {
    email: 'carlosdanieldev@gmail.com',
    phone: '+55 11 917031763',
    location: 'São Paulo, SP',
    linkedin: 'https://www.linkedin.com/in/carlosdanielsodev',
    github: 'https://github.com/CarlosDanielDev',
  },
  summary: 'Senior Developer with 6+ years of experience specializing in React Native and TypeScript, with a proven track record in architecting and delivering high-impact cross-platform mobile applications. Expertise in leading complex technical projects from conception to launch, with focus on agile solutions and exceptional user experience.',
  experiences: [
    {
      companyName: 'Nestlé Health Science - Puravida',
      role: 'Senior Software Developer',
      startDate: '2022-01',
      location: 'Remote',
      achievements: [
        { description: 'Lead frontend architect for B2B/B2C applications' },
        { description: 'Developed web applications with React and mobile apps with React Native' },
        { description: 'Built internal marketing automation tools', impact: 'reducing campaign time by 60%' },
        { description: 'Implemented CI/CD pipelines using Azure DevOps and Docker' },
        { description: 'Provided technical leadership in agile methodologies (Scrum and Kanban)' },
      ],
    },
    {
      companyName: 'Stix',
      role: 'Senior Frontend Developer',
      startDate: '2021-02',
      endDate: '2021-12',
      location: 'Remote',
      achievements: [
        { description: 'Led technical development of loyalty app integrated with Pão de Açúcar, Drogaraia and Drogasil', impact: 'impacting millions of users' },
        { description: 'Architected and implemented complex solutions in React Native and TypeScript in agile environment' },
        { description: 'Optimized application performance', impact: '40% improvement in loading time' },
        { description: 'Implemented CI/CD with CodePush for continuous deployment and over-the-air updates' },
      ],
    },
    {
      companyName: 'Primepass Connect',
      role: 'Senior Frontend Developer',
      startDate: '2020-05',
      endDate: '2020-12',
      location: 'Remote',
      achievements: [
        { description: 'Sole technical owner for complete development of subscription-based cinema app' },
        { description: 'Architected and developed from scratch using React Native with TypeScript' },
        { description: 'Integrated payment APIs and streaming systems' },
        { description: 'Implemented Push Notifications system', impact: 'increasing engagement by 35%' },
        { description: 'Delivered on time with zero critical bugs at launch' },
      ],
    },
  ],
  education: [
    {
      institution: 'FIAP - Faculty of Informatics and Business Administration',
      degree: 'Systems Analysis and Development',
      startDate: new Date('2022-01'),
      endDate: new Date('2024-01'),
    },
  ],
  skills: [
    { name: 'React Native', level: 'Expert', category: 'Mobile' },
    { name: 'React.js', level: 'Expert', category: 'Frontend' },
    { name: 'TypeScript', level: 'Expert', category: 'Frontend' },
    { name: 'JavaScript', level: 'Expert', category: 'Frontend' },
    { name: 'Redux', level: 'Advanced', category: 'Frontend' },
    { name: 'Context API', level: 'Advanced', category: 'Frontend' },
    { name: 'Styled Components', level: 'Advanced', category: 'Frontend' },
    { name: 'React Navigation', level: 'Advanced', category: 'Mobile' },
    { name: 'Node.js', level: 'Advanced', category: 'Backend' },
    { name: 'Express', level: 'Advanced', category: 'Backend' },
    { name: 'RESTful APIs', level: 'Advanced', category: 'Backend' },
    { name: 'Docker', level: 'Advanced', category: 'DevOps' },
    { name: 'Azure DevOps', level: 'Advanced', category: 'DevOps' },
    { name: 'CI/CD', level: 'Advanced', category: 'DevOps' },
    { name: 'Git', level: 'Advanced', category: 'DevOps' },
    { name: 'Jest', level: 'Advanced', category: 'Testing' },
    { name: 'React Testing Library', level: 'Advanced', category: 'Testing' },
    { name: 'E2E Testing', level: 'Advanced', category: 'Testing' },
    { name: 'Scrum', level: 'Advanced', category: 'Methodology' },
    { name: 'Kanban', level: 'Advanced', category: 'Methodology' },
  ],
};