module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'curly': 'error',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'never'],
  },
};
