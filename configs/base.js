import globals from 'globals';

import customRules from '../rules/index.js';

export default [
	{
		files: [ '**/*.{js,jsx,ts,tsx,vue}' ],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.browser }
		},
		plugins: {
			'@gmb': customRules
		},
		rules: {
			'@gmb/symmetric-newlines': 'warn',
			// '@gmb/comma-dangle-single': 'warn',
			'array-bracket-spacing': [ 'warn', 'always' ],
			'arrow-parens': [ 'warn', 'as-needed' ],
			'arrow-spacing': 'warn',
			'brace-style': [ 'warn', '1tbs', { allowSingleLine: true } ],
			'block-spacing': [ 'warn', 'always' ],
			'comma-spacing': 'warn',
			'comma-dangle': [ 'warn', 'never' ],
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
			'no-unused-vars': 'warn',
			'no-cond-assign': 'off',
			'no-empty': 'warn',
			'no-extra-semi': 'warn',
			'no-extra-parens': 'warn',
			'no-inner-declarations': 'off',
			'no-multiple-empty-lines': [ 'warn', { max: 1, maxBOF: 0, maxEOF: 1 } ],
			'no-multi-spaces': 'warn',
			'no-param-reassign': 'warn',
			'sort-imports': [ 'warn', { ignoreDeclarationSort: true } ], // mainly handled by imports.js
			'no-trailing-spaces': 'warn',
			'no-var': 'warn',
			'no-whitespace-before-property': 'warn',
			'object-curly-spacing': [ 'warn', 'always' ],
			'quotes': [ 'warn', 'single', { avoidEscape: true } ],
			'semi-spacing': 'warn',
			'semi': [ 'warn', 'always' ],
			'space-before-blocks': [ 'warn', 'always' ],
			'space-before-function-paren': [ 'warn', 'never' ],
			'space-in-parens': [ 'warn', 'always', { exceptions: [ 'empty' ] } ],
			'space-infix-ops': 'warn'
		}
	}
];
