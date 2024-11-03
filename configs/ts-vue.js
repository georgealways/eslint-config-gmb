import stylisticTs from '@stylistic/eslint-plugin-ts';
import parser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

export const parserOptions = {
	parser, // Only needed for vue
	extraFileExtensions: [ '.vue' ],
	projectService: true,
};

/** TypeScript rules that don't conflict with the vue boilerplate */
export default [
	{
		files: [ '**/*.{ts,tsx,vue}' ],
		plugins: {
			'@stylistic/ts': stylisticTs
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-inferrable-types': [ 'warn', { ignoreParameters: false, ignoreProperties: false } ],
			'@stylistic/ts/type-annotation-spacing': [ 'warn', { after: true } ],
		}
	},
	{
		// Why is this necessary? No one else here is targeting js files.
		files: [ '**/*.js' ],
		languageOptions: {
			...tseslint.configs.disableTypeChecked.languageOptions
		},
		rules: {
			...tseslint.configs.disableTypeChecked.rules,
			// Swap these back
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': 'off',
		}
	}
];
