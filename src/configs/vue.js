import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import vueScopedCss from 'eslint-plugin-vue-scoped-css';
import vueParser from 'vue-eslint-parser';

import { tsParserOptions } from './shared.js';
import ts from './ts.js';

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

// Delete @typescript-eslint from plugins and re-export.
// This is so we can combine the TS and Vue configs without eslint complaining.
// Wasn't the point of flat config to make these composable?
const tsVue = [];

ts.forEach( config => {

	if ( !config.plugins ) return;

	// eslint-disable-next-line no-unused-vars
	const { '@typescript-eslint': _, ...withoutTsEsLint } = config.plugins;
	const newConfig = { ...config, plugins: withoutTsEsLint };

	if ( config.name ) {
		newConfig.name = config.name.replace( 'ts', 'tsVue' );
	}

	tsVue.push( newConfig );

} );

export default defineConfigWithVueTs(

	{
		name: 'app/files-to-lint',
		files: [ '**/*.{ts,mts,tsx,vue}' ],
	},

	{
		name: 'app/files-to-ignore',
		ignores: [ '**/dist/**', '**/dist-ssr/**', '**/coverage/**' ],
	},

	pluginVue.configs[ 'flat/essential' ],
	vueTsConfigs.recommended,

	vue,
	tsVue

);
