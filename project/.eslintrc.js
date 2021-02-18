// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true, // Example: { food: 'chicken' }
        arrowParens: 'avoid', // Example: (possible) x => x+x;
      },
    ],
  },
  parserOptions: {
    // 타입스크립트를 ESLint가 이해할 수 있는 트리형태로 바꿔준다.
    parser: '@typescript-eslint/parser',
  },
};
