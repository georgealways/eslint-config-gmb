import js from '@eslint/js';

import base from './configs/base.js';
import imports from './configs/imports.js';
import ts from './configs/typescript.js';
import vue from './configs/vue.js';

export default [
	js.configs.recommended,
	...base,
	...imports
];

export { base, imports, ts, vue };
