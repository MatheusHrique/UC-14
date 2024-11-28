module.exports = [
  {
    files: ['ex1.js'],
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'double'],
      semi: ['error', 'always'],
      'no-console': 'error',
      'no-use-before-define': 'error',
      'no-unused-vars': ['error', {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': false
      }],
      'no-var': 'error',
      'space-infix-ops': 'error',
      'max-lines': ['error', {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }]
    }
  },
  {
    files: ['ex2.js'],
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'double'],
      semi: ['error', 'always'],
      'no-console': 'warn',
      'no-use-before-define': 'error',
      'no-unused-vars': ['error', {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': false
      }],
      'no-var': 'error',
      'space-infix-ops': 'error',
      'max-lines': ['error', {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }]
    }
  }
];
