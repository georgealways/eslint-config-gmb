import ts from './ts.js';

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

export default tsVue;
