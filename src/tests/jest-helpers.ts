import { jest } from '@jest/globals';

// Helper function to mock a module implementation
function mockModule(modulePath: string, mockImplementation: Record<string, unknown> = {}) {
  jest.mock(modulePath, () => mockImplementation, { virtual: true });
}

// Helper function to mock dynamically (can be used inside tests)
function doMock(modulePath: string, mockImplementation: Record<string, unknown> = {}) {
  return jest.doMock(modulePath, () => mockImplementation);
}

export { jest, mockModule, doMock }; 