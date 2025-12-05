const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/mobileTests/*.spec.ts'],
  moduleFileExtensions: ['ts','tsx','js','json','node'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  globals: { 'ts-jest': { tsconfig: 'tsconfig.json' } }
};