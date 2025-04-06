export default {
  displayName: '@hack-network/ui',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
    '\\.(css|less|sass|scss)$': '<rootDir>/jest/cssTransform.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'css'],
  coverageDirectory: 'test-output/jest/coverage',
  setupFilesAfterEnv: ['<rootDir>/../../test-setup.ts'],
};
