import importPlugin from 'eslint-plugin-import';

export default [ {
	plugins: { import: importPlugin },
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': [ '.ts', '.tsx' ]
		}
	},
	rules: {
		'import/newline-after-import': 'warn',
		'import/order': [ 'warn', {
			groups: [ [ 'builtin', 'external' ], 'type', [ 'internal', 'parent', 'sibling', 'index' ] ],
			alphabetize: { order: 'asc', caseInsensitive: true },
			'newlines-between': 'always',
		} ]
	}
} ];
