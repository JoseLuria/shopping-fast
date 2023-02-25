module.exports = {
  extends: ['standard', 'plugin:astro/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    'space-before-function-paren': 'off'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.astro']
      }
    }
  ]
}
