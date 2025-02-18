import stylistic from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

import { ignoreUnusedPatterns, tsParserOptions } from './shared.js';

export default [
	{
		name: 'eslint-config-gmb/ts',
		files: [ '**/*.{ts,tsx}' ],
		languageOptions: {
			parser: tsParser,
			parserOptions: tsParserOptions,
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			'@stylistic': stylistic,
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-param-reassign': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-inferrable-types': [ 'warn', { ignoreParameters: false, ignoreProperties: false } ],
			'@typescript-eslint/no-unused-vars': [ 'warn', ignoreUnusedPatterns ],
			'@stylistic/type-annotation-spacing': [ 'warn', { after: true } ],
		}
	}
];
