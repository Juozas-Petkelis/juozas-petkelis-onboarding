module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['module-resolver', 'prettier', 'import'],
  rules: {
    'module-resolver/use-alias': 2,
    'prettier/prettier': ['error'],
    'import/no-unresolved': 'error',
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
  },
};
