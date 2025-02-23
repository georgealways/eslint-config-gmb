import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import vueScopedCss from 'eslint-plugin-vue-scoped-css';
import vueParser from 'vue-eslint-parser';

import { tsParserOptions, tsRules } from './shared.js';

const vue = [
	{
		name: 'eslint-config-gmb/vue',
		files: [ '**/*.vue' ],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				...tsParserOptions,
				extraFileExtensions: [ '.vue' ],
			}
		},
		plugins: {
			'vue-scoped-css': vueScopedCss
		},
		rules: {
			...tsRules,
			'no-restricted-imports': [ 'warn', {
				patterns: [ {
					group: [ './', '../' ],
					message: 'Use @ instead of relative paths.',
				} ]
			} ],
			'vue/max-attributes-per-line': [ 'warn', {
				singleline: 3,
				multiline: 1,
			} ],
			'vue/singleline-html-element-content-newline': 'off',
			'vue/valid-template-root': 'off',
			'vue/html-indent': [ 'warn', 'tab' ],
			'vue/html-self-closing': [ 'warn', {
				html: {
					void: 'always',
					normal: 'never',
					component: 'always',
				},
				svg: 'always',
				math: 'always'
			} ]
		}
	}
];

export default defineConfigWithVueTs(

	{
		name: 'app/files-to-lint',
		files: [ '**/*.{ts,mts,tsx,vue}' ],
	},

	{
		name: 'app/files-to-ignore',
		ignores: [ '**/dist/**', '**/dist-ssr/**', '**/coverage/**' ],
	},

	pluginVue.configs[ 'flat/recommended' ],
	vueTsConfigs.recommended,

	vue,

);
