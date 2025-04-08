import { initializeConfig } from 'mdp-eslint-config';
const baseConfig = initializeConfig({
  disableHeavyRules: false,
  enableNextJs: true,
  enablePrettier: false,
  enableReact: true,
  enableTypescript: true,
  projectPathAliasRegex: '^@.*(?:/.*)?$',
  typescriptOptions: {
    tsconfigRootDir: import.meta.dirname,
  },
});

const eslintConfig = [
  {
    files: ['src/**/*.{ts,tsx}'],
  },
  ...baseConfig,
];

export default eslintConfig;
