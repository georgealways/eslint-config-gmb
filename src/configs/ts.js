import stylistic from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

import { tsParserOptions, tsRules } from './shared.js';

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
		rules: tsRules
	}
];
