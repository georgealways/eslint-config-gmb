import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginScopedCss from 'eslint-plugin-vue-scoped-css';
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
			'vue-scoped-css': pluginScopedCss
		},
		rules: {
			// The TS config doesn't target *.vue files because Vue requires a different parser.
			// Therefore, we re-include the TS rules here. It's not clear to me how they work without
			// the corresponding plugin definitions though...
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
		name: 'eslint-config-gmb/vue/files-to-lint',
		files: [ '**/*.{ts,mts,tsx,vue}' ],
	},

	{
		name: 'eslint-config-gmb/vue/files-to-ignore',
		ignores: [ '**/dist/**', '**/dist-ssr/**', '**/coverage/**' ],
	},

	// Basic Vue recommended config
	pluginVue.configs[ 'flat/recommended' ],

	// Scoped CSS recommended config
	pluginScopedCss.configs[ 'flat/recommended' ],

	// Vue + TS recommended config
	vueTsConfigs.recommended,

	// Custom Vue config
	vue,

);
