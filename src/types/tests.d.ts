declare module '@tests/jest-helpers' {
  import { Jest } from '@jest/environment';
  
  export const jest: Jest;
  export function mockModule(modulePath: string, mockImplementation: Record<string, unknown>): void;
  export function doMock(modulePath: string, mockImplementation: Record<string, unknown>): void;
} 