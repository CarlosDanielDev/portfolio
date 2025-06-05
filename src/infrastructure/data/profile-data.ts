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
  summary: 'Desenvolvedor Sênior com mais de 6 anos de experiência especializado em React Native e TypeScript, com sólido histórico na criação e arquitetura de aplicações mobile cross-platform de alto impacto. Expertise em liderar projetos técnicos complexos desde a concepção até o lançamento, com foco em soluções ágeis e experiência excepcional do usuário.',
  experiences: [
    {
      companyName: 'Nestlé Health Science - Puravida',
      role: 'Senior Software Developer',
      startDate: '2022-01',
      location: 'Remote',
      achievements: [
        { description: 'Arquiteto principal de soluções frontend para aplicações B2B/B2C' },
        { description: 'Desenvolvimento de aplicações web com React e mobile com React Native' },
        { description: 'Criação de ferramentas internas de automação de marketing', impact: 'reduzindo tempo de campanhas em 60%' },
        { description: 'Implementação de pipelines de CI/CD usando Azure DevOps e Docker' },
        { description: 'Liderança técnica em metodologias ágeis (Scrum e Kanban)' },
      ],
    },
    {
      companyName: 'Stix',
      role: 'Senior Frontend Developer',
      startDate: '2021-02',
      endDate: '2021-12',
      location: 'Remote',
      achievements: [
        { description: 'Liderança técnica no desenvolvimento do aplicativo de fidelidade integrado com Pão de Açúcar, Drogaraia e Drogasil', impact: 'impactando milhões de usuários' },
        { description: 'Arquitetura e implementação de soluções complexas em React Native e TypeScript em ambiente ágil' },
        { description: 'Otimização de performance', impact: '40% de melhoria no tempo de carregamento' },
        { description: 'Implementação de CI/CD com CodePush para deploy contínuo e atualizações over-the-air' },
      ],
    },
    {
      companyName: 'Primepass Connect',
      role: 'Senior Frontend Developer',
      startDate: '2020-05',
      endDate: '2020-12',
      location: 'Remote',
      achievements: [
        { description: 'Responsável técnico único pelo desenvolvimento completo de aplicativo de cinema por assinatura' },
        { description: 'Arquitetura e desenvolvimento from scratch usando React Native com TypeScript' },
        { description: 'Integração com APIs de pagamento e sistemas de streaming' },
        { description: 'Implementação de sistema de Push Notifications', impact: 'aumentando engajamento em 35%' },
        { description: 'Entrega dentro do prazo com zero bugs críticos no lançamento' },
      ],
    },
  ],
  education: [
    {
      institution: 'FIAP - Faculdade de Informática e Administração Paulista',
      degree: 'Análise e Desenvolvimento de Sistemas',
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