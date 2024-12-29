import globals from 'globals';

import customRules from '../rules.js';

export default [
	{
		name: 'eslint-config-gmb/js',
		files: [ '**/*.{js,jsx,ts,tsx,vue}' ],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.browser,
		},
		plugins: {
			'@gmb': customRules
		},
		rules: {
			'@gmb/symmetric-newlines': 'warn',
			'@gmb/comma-dangle-single': 'warn',
			'array-bracket-spacing': [ 'warn', 'always' ],
			'arrow-parens': [ 'warn', 'as-needed' ],
			'arrow-spacing': 'warn',
			'block-spacing': [ 'warn', 'always' ],
			'brace-style': [ 'warn', '1tbs', { allowSingleLine: true } ],
			'comma-spacing': 'warn',
			'computed-property-spacing': [ 'warn', 'always' ],
			'eol-last': [ 'warn', 'always' ],
			'eqeqeq': [ 'warn', 'always' ],
			'func-call-spacing': [ 'warn', 'never' ],
			'indent': [ 'warn', 'tab', { SwitchCase: 1 } ],
			'key-spacing': [ 'warn', { mode: 'minimum' } ],
			'keyword-spacing': 'warn',
			'linebreak-style': [ 'warn', 'unix' ],
			'max-len': [ 'warn', { code: 120, ignoreUrls: true } ],
			'new-parens': 'warn',
			'no-cond-assign': 'off',
			'no-empty': 'warn',
			'no-extra-parens': 'warn',
			'no-extra-semi': 'warn',
			'no-inner-declarations': 'off',
			'no-multi-spaces': 'warn',
			'no-multiple-empty-lines': [ 'warn', { max: 1, maxBOF: 0, maxEOF: 1 } ],
			'no-param-reassign': 'warn',
			'no-trailing-spaces': 'warn',
			'no-unused-vars': 'warn',
			'no-var': 'warn',
			'no-whitespace-before-property': 'warn',
			'object-curly-spacing': [ 'warn', 'always' ],
			'object-shorthand': [ 'warn', 'properties' ],
			'quotes': [ 'warn', 'single', { avoidEscape: true } ],
			'semi-spacing': 'warn',
			'semi': [ 'warn', 'always' ],
			'sort-imports': [ 'warn', { ignoreDeclarationSort: true } ], // mainly handled by imports.js
			'space-before-blocks': [ 'warn', 'always' ],
			'space-before-function-paren': [ 'warn', 'never' ],
			'space-in-parens': [ 'warn', 'always', { exceptions: [ 'empty' ] } ],
			'space-infix-ops': 'warn',
		}
	}
];
