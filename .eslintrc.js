module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  plugins: ['module-resolver', 'import', 'unused-imports'],
  rules: {
    'module-resolver/use-alias': 2,
    'prettier/prettier': ['error'],
    'import/no-unresolved': 'warn',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'off',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': 'warn',
    'import/prefer-default-export': 'off',
    'unused-imports/no-unused-imports': 'error',
  },
  o,
};
