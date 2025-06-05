# Carlos Daniel's Portfolio

An interactive portfolio website showcasing my professional experience as a Senior Frontend Developer with expertise in React Native and TypeScript. Features an innovative terminal-based interface for exploring my career journey.

## Overview

This portfolio is built with a focus on clean architecture and domain-driven design, presenting my 6+ years of experience in creating high-impact mobile and web applications. The terminal interface offers a unique way to explore my professional journey and technical expertise.

## Key Features

- **Interactive Terminal Interface**: Navigate through my experience using familiar terminal commands
- **Company-Based Navigation**: Explore my work at different companies (Nestlé Health Science, Stix, Primepass Connect)
- **Dynamic Skill Mapping**: View skills and achievements specific to each role
- **Clean Architecture**: Implements DDD and SOLID principles for maintainable, testable code
- **Responsive Design**: Seamless experience across all devices

## Technical Stack

- **Core**: React + TypeScript + Vite
- **Architecture**: Domain-Driven Design (DDD) + Clean Architecture
- **Testing**: Jest + React Testing Library
- **State Management**: Context API
- **Build & Deploy**: Docker + Azure DevOps

## Project Structure

The project follows a strict clean architecture approach with DDD principles:

```
src/
├── application/      # Use cases and command handlers
│   ├── commands/    # Terminal command implementations
│   └── use-cases/   # Business logic orchestration
├── domain/          # Core business rules
│   ├── entities/    # Company, Skill, CompanySkill
│   ├── services/    # Domain services
│   └── value-objects/ # Command, DateRange, SkillLevel
├── infrastructure/  # External concerns
│   ├── config/     # Configuration
│   ├── data/       # Profile and experience data
│   ├── repositories/ # Data storage implementations
│   └── services/   # External services
├── presentation/   # UI Layer
│   ├── components/ # React components
│   ├── contexts/   # React contexts
│   ├── hooks/      # Custom hooks
│   └── styles/     # CSS styles
└── tests/         # Test files mirroring src structure
```

## Terminal Commands

Explore my portfolio using these commands:

- `help`: Show available commands
- `ls`: List all companies I've worked at
- `cd <company>`: View details about a specific company
- `skills`: Display skills used at the current company
- `about`: Learn more about me
- `contact`: Get my contact information
- `clear`: Clear the terminal

## Professional Background

- **Senior Frontend Developer** at Nestlé Health Science - Puravida (2022-Present)
  - Lead frontend architect for B2B/B2C applications
  - Expertise in React, React Native, and TypeScript
  - CI/CD implementation with Azure DevOps

- **Senior Frontend Developer** at Stix (2021-2022)
  - Led development of high-impact loyalty app
  - Improved app performance by 40%
  - Integration with major retail chains

- **Senior Frontend Developer** at Primepass Connect (2020)
  - Solo technical lead for subscription-based cinema app
  - Full-stack development with React Native and Node.js
  - Implemented payment and streaming integrations

## Technical Expertise

- **Mobile Development**: React Native (Expert)
- **Frontend**: React.js, TypeScript, JavaScript (Expert)
- **State Management**: Redux, Context API (Advanced)
- **Backend**: Node.js, Express, RESTful APIs (Advanced)
- **DevOps**: Docker, Azure DevOps, CI/CD (Advanced)
- **Testing**: Jest, React Testing Library, E2E Testing (Advanced)
- **Methodologies**: Scrum, Kanban (Advanced)

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/CarlosDanielDev/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run test`: Run test suite
- `npm run test:coverage`: Run tests with coverage report

## Contact

- Email: carlosdanielsodev@gmail.com
- GitHub: [CarlosDanielDev](https://github.com/CarlosDanielDev)
- LinkedIn: [carlosdanielsodev](https://linkedin.com/in/carlosdanielsodev)

## License

This project is licensed under the MIT License. Feel free to use it as inspiration for your own portfolio, but please give appropriate credit.
