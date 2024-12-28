import ts from './ts.js';

// Delete @typescript-eslint from plugins and re-export.
// This is so we can combine the TS and Vue configs without eslint complaining.
// Wasn't the point of flat config to make these composable?

const tsVue = [];

ts.forEach( config => {
	const { plugins } = config;
	if ( !plugins ) return;
	// eslint-disable-next-line no-unused-vars
	const { '@typescript-eslint': _, ...tsNoTsPlugin } = plugins;
	tsVue.push( {
		...config,
		plugins: tsNoTsPlugin,
	} );
} );

export default tsVue;
