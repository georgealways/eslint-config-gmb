import js from '@eslint/js';

import base from './src/base.js';
import imports from './src/imports.js';
import ts from './src/typescript.js';
import vue from './src/vue.js';

export default [
	js.configs.recommended,
	...base,
	...imports
];

export { base, imports, ts, vue };
