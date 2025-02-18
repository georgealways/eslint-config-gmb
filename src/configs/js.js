import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

import customRules from '../rules.js';
import { ignoreUnusedPatterns } from './shared.js';

export default [
	{
		name: 'eslint-config-gmb/js',
		files: [ '**/*.{js,mjs,cjs,jsx,ts,tsx,vue}' ],
		ignores: [ '**/*.d.ts' ],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.browser,
		},
		plugins: {
			'@gmb': customRules,
			'@stylistic': stylistic,
		},
		rules: {
			'eqeqeq': [ 'warn', 'always' ],
			'no-cond-assign': 'off',
			'no-empty': 'warn',
			'no-inner-declarations': 'off',
			'no-param-reassign': 'off',
			'no-unused-vars': [ 'warn', ignoreUnusedPatterns ],
			'no-var': 'warn',
			'object-shorthand': [ 'warn', 'properties' ],
			'sort-imports': [ 'warn', { ignoreDeclarationSort: true } ],
			// Custom rules
			'@gmb/symmetric-newlines': 'warn',
			'@gmb/comma-dangle-single': 'warn',
			// Stylistic rules
			'@stylistic/array-bracket-spacing': [ 'warn', 'always' ],
			'@stylistic/arrow-parens': [ 'warn', 'as-needed' ],
			'@stylistic/arrow-spacing': 'warn',
			'@stylistic/block-spacing': [ 'warn', 'always' ],
			'@stylistic/brace-style': [ 'warn', '1tbs', { allowSingleLine: true } ],
			'@stylistic/comma-spacing': 'warn',
			'@stylistic/computed-property-spacing': [ 'warn', 'always' ],
			'@stylistic/eol-last': [ 'warn', 'always' ],
			'@stylistic/func-call-spacing': [ 'warn', 'never' ],
			'@stylistic/indent': [ 'warn', 'tab', { SwitchCase: 1 } ],
			'@stylistic/key-spacing': [ 'warn', { mode: 'minimum' } ],
			'@stylistic/keyword-spacing': 'warn',
			'@stylistic/linebreak-style': [ 'warn', 'unix' ],
			'@stylistic/max-len': [ 'warn', { code: 120, ignoreUrls: true } ],
			'@stylistic/new-parens': 'warn',
			'@stylistic/no-extra-parens': 'warn',
			'@stylistic/no-extra-semi': 'warn',
			'@stylistic/no-mixed-spaces-and-tabs': 'warn',
			'@stylistic/no-multi-spaces': 'warn',
			'@stylistic/no-multiple-empty-lines': [ 'warn', { max: 1, maxBOF: 0, maxEOF: 1 } ],
			'@stylistic/no-trailing-spaces': 'warn',
			'@stylistic/no-whitespace-before-property': 'warn',
			'@stylistic/object-curly-spacing': [ 'warn', 'always' ],
			'@stylistic/quotes': [ 'warn', 'single', { avoidEscape: true } ],
			'@stylistic/semi': [ 'warn', 'always' ],
			'@stylistic/semi-spacing': 'warn',
			'@stylistic/space-before-blocks': [ 'warn', 'always' ],
			'@stylistic/space-before-function-paren': [ 'warn', 'never' ],
			'@stylistic/space-in-parens': [ 'warn', 'always', { exceptions: [ 'empty' ] } ],
			'@stylistic/space-infix-ops': 'warn',
		}
	}
];
