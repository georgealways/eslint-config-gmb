import tsParser from '@typescript-eslint/parser';

export const ignoreUnusedPatterns = {
	caughtErrorsIgnorePattern: '_',
	destructuredArrayIgnorePattern: '_',
	argsIgnorePattern: '_',
	ignoreRestSiblings: true,
};

export const tsParserOptions = {
	parser: tsParser,
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	}
};

export const tsRules = {
	'no-unused-vars': 'off',
	'@typescript-eslint/no-explicit-any': 'off',
	'@typescript-eslint/no-param-reassign': 'off',
	'@typescript-eslint/no-non-null-assertion': 'off',
	'@typescript-eslint/no-inferrable-types': [ 'warn', { ignoreParameters: false, ignoreProperties: false } ],
	'@typescript-eslint/no-unused-vars': [ 'warn', ignoreUnusedPatterns ],
	'@stylistic/type-annotation-spacing': [ 'warn', { after: true } ],
};
