import importPlugin from 'eslint-plugin-import';

import { parserOptions } from './typescript.js';

export default [ {
	plugins: { import: importPlugin },
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': [ '.ts', '.tsx' ]
		},
		'import/resolver': {
			typescript: {
				project: parserOptions.project
			}
		}
	},
	rules: {
		'import/order': [ 'warn', {
			groups: [ 'builtin', 'external', 'type', 'internal', 'parent', 'sibling', 'index' ],
			alphabetize: { order: 'asc', caseInsensitive: true },
			'newlines-between': 'always'
		} ],
		'import/newline-after-import': 'warn'
	}
} ];
