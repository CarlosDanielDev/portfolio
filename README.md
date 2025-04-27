# Portfolio Website

An interactive portfolio website showcasing professional experience, skills, and featuring an interactive terminal.

## Features

- **Experience Timeline**: Display work history with company details
- **Skills Showcase**: List skills used at each company with proficiency levels
- **Interactive Terminal**: Execute commands to explore the portfolio
- **Responsive Design**: Works on desktop and mobile devices

## Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Vanilla CSS
- **Testing**: Jest
- **Architecture**: Domain-Driven Design (DDD)

## Project Structure

The project follows DDD principles with a clean architecture approach:

```
src/
├── domain/           # Domain entities, value objects, repositories interfaces
├── application/      # Use cases, services, DTOs
├── infrastructure/   # Concrete implementations, configs, services
├── presentation/     # React components, hooks, contexts
└── tests/            # Test files mirroring the main structure
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/my-website.git
cd my-website
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with your environment variables (see `.env.example`)

4. Start the development server
```bash
npm run dev
```

## Environment Variables

The application uses the following environment variables:

- `VITE_APP_TITLE`: Your portfolio title
- `VITE_APP_DESCRIPTION`: Portfolio description
- `VITE_APP_AUTHOR`: Your name
- `VITE_APP_EMAIL`: Your contact email

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run test`: Run tests
- `npm run test:watch`: Run tests in watch mode

## Terminal Commands

The interactive terminal supports the following commands:

- `help`: Display available commands
- `ls`: List all companies
- `cd <company_name>`: Select a company
- `skills`: Show skills for the current company
- `clear`: Clear the terminal
- `about`: Display information about the author
- `contact`: Show contact information

## Architecture

This project follows Domain-Driven Design (DDD) and Clean Architecture principles:

1. **Domain Layer**: Core business logic (entities, value objects)
2. **Application Layer**: Orchestrates the domain objects (use cases)
3. **Infrastructure Layer**: External concerns and implementations
4. **Presentation Layer**: UI components and state management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
