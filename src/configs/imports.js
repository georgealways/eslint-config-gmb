import importPlugin from 'eslint-plugin-import';

const groups = [
	[ 'builtin', 'external' ],
	[ 'type' ],
	[ 'internal', 'parent', 'sibling', 'index' ],
];

export default [ {
	name: 'eslint-config-gmb/imports',
	plugins: { import: importPlugin },
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': [ '.ts', '.tsx' ]
		}
	},
	rules: {
		'import/newline-after-import': 'warn',
		'import/order': [ 'warn', {
			groups,
			alphabetize: { order: 'asc', caseInsensitive: true },
			'newlines-between': 'always',
		} ],
		'import/consistent-type-specifier-style': [ 'warn', 'prefer-top-level' ],
		'import/no-duplicates': 'warn'
	}
} ];
