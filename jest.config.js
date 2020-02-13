module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(tsx|ts|js|jsx)?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts|js|jsx)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/setupEnzyme.ts',
}
