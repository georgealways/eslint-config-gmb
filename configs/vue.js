import vueScopedCss from 'eslint-plugin-vue-scoped-css';
import vueParser from 'vue-eslint-parser';

import { parserOptions } from './ts-vue.js';

export default [
	{
		name: '@eslint-config-gmb/vue',
		files: [ '**/*.vue' ],
		languageOptions: {
			parser: vueParser,
			parserOptions,
		},
		plugins: {
			'vue-scoped-css': vueScopedCss
		},
		rules: {
			'no-restricted-imports': [ 'warn', {
				patterns: [ {
					group: [ './', '../' ],
					message: 'Use @ instead of relative paths.',
				} ]
			} ],
			'vue/valid-template-root': 'off'
		}
	}
];
