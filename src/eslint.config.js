import eslintJs from '@eslint/js';

import imports from './configs/imports.js';
import _js from './configs/js.js';
import _ts from './configs/ts.js';
import _vue from './configs/vue.js';

const js = [
	eslintJs.configs.recommended,
	..._js,
	...imports,
];

const ts = [
	...js,
	..._ts,
];

const vue = [
	...ts,
	..._vue,
];

export default js;
export { js, imports, ts, vue };
