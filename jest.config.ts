import type { Config } from '@jest/types';
import { defaults } from 'jest-config';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "js", "ts", "tsx"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
    "<rootDir>/lib/.*\\.d\\.ts$",
  ],
};

export default config;
