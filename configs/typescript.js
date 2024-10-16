import stylisticTs from '@stylistic/eslint-plugin-ts';
import tsEslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export const parserOptions = {
	parser,
	project: [ './tsconfig.app.json', './tsconfig.*.json', './tsconfig.json' ],
	extraFileExtensions: [ '.vue' ],
};

export default [
	tsEslint.configs.strict,
	{
		files: [ '**/*.{ts,tsx,vue}' ],
		languageOptions: {
			parser,
			parserOptions,
		},
		plugins: {
			'@stylistic/ts': stylisticTs,
		},
		rules: {
			'no-undef': 'off', // ts handles this
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@stylistic/ts/type-annotation-spacing': [ 'warn', { after: true } ],
		},
	},
];
