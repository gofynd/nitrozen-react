/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },
  transformIgnorePatterns: ["node_modules/(?!camelcase)"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  silent: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/src/assets/svg-components",
    "<rootDir>/src/components/Icons/GenIcon.tsx",
  ],
};
