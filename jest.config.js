export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@application/(.*)$': '<rootDir>/src/application/$1',
    '^@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
    '^@presentation/(.*)$': '<rootDir>/src/presentation/$1',
    '^@tests/(.*)$': '<rootDir>/src/tests/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { 
      useESM: true,
      tsconfig: 'tsconfig.jest.json'
    }]
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'html'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/main.tsx',
    '!src/vite-env.d.ts',
    '!src/tests/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    
    // Arquivos de configuração/inicialização
    '!src/App.tsx',
    '!src/infrastructure/config/DependencyConfig.ts',
    
    // Serviços de dados mock
    '!src/infrastructure/services/DataInitializationService.ts',
    
    // Componentes puramente apresentacionais simples
    '!src/presentation/components/Footer.tsx',
    '!src/presentation/components/ResponsiveInfo.tsx',
    '!src/presentation/components/Header.tsx',
    
    // Utilitários e configurações
    '!src/presentation/styles/**/*.ts'
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80
    }
  }
}; 