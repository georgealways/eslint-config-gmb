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
