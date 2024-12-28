import config from 'eslint-config-gmb';

export default [
	...config,
	{ ignores: [ 'invalid*' ] },
];
