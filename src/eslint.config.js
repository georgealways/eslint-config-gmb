import eslintJs from '@eslint/js';

import imports from './configs/imports.js';
import js from './configs/js.js';
import ts from './configs/ts.js';
import _vue from './configs/vue.js';

const base = [
	eslintJs.configs.recommended,
	...js,
	...imports,
];

const vue = [
	...base,
	..._vue,
];

export default base;
export { base, js, imports, ts, vue };
