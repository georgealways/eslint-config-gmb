import vue from 'eslint-plugin-vue';
import vueScopedCss from 'eslint-plugin-vue-scoped-css';
import vueParser from 'vue-eslint-parser';

import { parserOptions } from './typescript.js';

export default [
	...vue.configs[ 'flat/recommended' ],
	{
		files: [ '**/*.vue' ],
		languageOptions: {
			parser: vueParser,
			parserOptions,
		},
		plugins: {
			vue,
			'vue-scoped-css': vueScopedCss,
		},
		rules: {
			// 'no-restricted-imports': [ 'warn', {
			// 	patterns: [ {
			// 		group: [ './', '../' ],
			// 		messages: 'Use @ instead of relative paths.',
			// 	} ]
			// } ],
			'vue/valid-template-root': 'off'
		}
	}
];
