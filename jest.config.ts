import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // To handle CSS imports in tests
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
