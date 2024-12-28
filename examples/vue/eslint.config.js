import vueEslintConfigTs from '@vue/eslint-config-typescript';
import { base, tsVue, vue } from 'eslint-config-gmb';
import pluginVue from 'eslint-plugin-vue';

export default [

	...base,

	{
		name: 'app/files-to-lint',
		files: [ '**/*.{ts,mts,tsx,vue}' ],
	},

	{
		name: 'app/files-to-ignore',
		ignores: [ '**/dist/**', '**/dist-ssr/**', '**/coverage/**' ],
	},

	...pluginVue.configs[ 'flat/recommended' ],
	...vueEslintConfigTs(),

	{ rules: { 'no-console': 'warn'	}	},

	...vue,
	...tsVue

];
