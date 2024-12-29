import stylisticTs from '@stylistic/eslint-plugin-ts';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export const parserOptions = {
	parser: tsParser,
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	}
};

export default [
	{
		name: 'eslint-config-gmb/ts',
		files: [ '**/*.ts', '**/*.tsx' ],
		languageOptions: {
			parser: tsParser,
			parserOptions,
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			'@stylistic/ts': stylisticTs,
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [ 'warn', { argsIgnorePattern: '^_' } ],
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-inferrable-types': [ 'warn', { ignoreParameters: false, ignoreProperties: false } ],
			'@stylistic/ts/type-annotation-spacing': [ 'warn', { after: true } ],
		}
	}
];
