import reactHooks from 'eslint-plugin-react-hooks'
import react from 'eslint-plugin-react'
import sortKeysFix from 'eslint-plugin-sort-keys-fix'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import {defineConfig} from 'eslint/config'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

const config = [
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      'simple-import-sort': simpleImportSort,
      'react-hooks': reactHooks,
      'sort-keys-fix': sortKeysFix,
    },
    rules: {
      '@typescript-eslint/no-require-imports': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-empty-interface': 1,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'array-bracket-newline': ['warn', 'consistent'],
      'array-bracket-spacing': ['warn', 'never'],
      'arrow-body-style': ['warn', 'as-needed'],
      'arrow-parens': ['warn', 'as-needed'],
      'no-duplicate-imports': 'error',
      'arrow-spacing': ['warn', {after: true, before: true}],
      'brace-style': ['warn', '1tbs', {allowSingleLine: true}],
      camelcase: 'off',
      'comma-spacing': ['warn', {after: true, before: false}],
      'comma-style': ['warn', 'last'],
      'computed-property-spacing': ['warn', 'never'],
      curly: ['warn', 'all'],
      'jsx-a11y/no-autofocus': 0,
      'key-spacing': ['error', {afterColon: true}],
      'linebreak-style': ['error', 'unix'],
      'no-case-declarations': 'off',
      'no-console': 'warn',
      'no-irregular-whitespace': 'error',
      'no-lonely-if': 'warn',
      'no-multi-spaces': 'error',
      'no-undef': 0,
      'no-unused-vars': 'off',
      'object-curly-spacing': ['error', 'never'],
      'padded-blocks': ['warn', 'never'],
      'prefer-const': 'warn',
      'prefer-object-spread': 'warn',
      'prettier/prettier': 'error',
      quotes: ['error', 'single'],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/display-name': 'off',
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 'off',
      semi: ['error', 'never'],
      'semi-spacing': ['warn', {after: true, before: false}],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'template-curly-spacing': 'warn',
      'sort-keys-fix/sort-keys-fix': 'error',
      'sort-keys': ['error', 'asc', {caseSensitive: true, natural: false, minKeys: 2}],
      yoda: 'warn',
    },
  },
]

export default defineConfig(config)
