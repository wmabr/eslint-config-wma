import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from '@stylistic/eslint-plugin'

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },

    rules: {
      semi: ['error', 'never'],
      camelcase: [
        'warn',
        {
          properties: 'always',
          ignoreDestructuring: true,
          ignoreImports: true,
          ignoreGlobals: false,
        },
      ],
      'capitalized-comments': 'warn',
      curly: 'error',
      'default-case-last': 'error',
      'dot-notation': 'error',
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
          overrides: { namedExports: 'declaration' },
        },
      ],
      'no-alert': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-else-return': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-eval': 'error',
      'no-extra-boolean-cast': 'error',
      'no-lone-blocks': 'error',
      'no-magic-numbers': [
        'warn',
        {
          ignore: [-1, 0, 1, 2, 10, 100],
          ignoreArrayIndexes: true,
        },
      ],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-multiple-empty-lines': [
        'error',
        { max: 2, maxBOF: 0, maxEOF: 1 },
      ],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/quotes': [
        'warn',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      'no-var': 'warn',
      'prefer-exponentiation-operator': 'warn',
      yoda: 'error',
    },
  },
];
