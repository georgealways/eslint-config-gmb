import eslintJs from '@eslint/js';

import imports from './configs/imports.js';
import js from './configs/js.js';
import ts from './configs/ts.js';
import tsVue from './configs/tsVue.js';
import vue from './configs/vue.js';

const base = [
	eslintJs.configs.recommended,
	...js,
	...imports,
];

export default base;
export { base, js, imports, ts, tsVue, vue };
