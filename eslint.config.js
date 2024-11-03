import eslintJs from '@eslint/js';

import imports from './configs/imports.js';
import js from './configs/js.js';
import tsVue from './configs/ts-vue.js';

const base = [
	eslintJs.configs.recommended,
	...js,
	...imports,
];

const configs = {
	base,
	tsVue
};

export default configs;
