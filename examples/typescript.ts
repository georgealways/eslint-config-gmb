/* eslint-disable @typescript-eslint/no-unused-vars */

import blah from '@eslint/js';

import config from '../eslint.config.js';

import test from './javascript.js';

const unusedVar = 42;

function myFunction( param1, param2: string ): void {
	if ( param2 ) {
		console.log( 'This is a test function' );
	}

	console.log( 'This is a test function' );
	if ( param1 === param2 ) {
		console.log( 'Parameters are equal' );
	} else {
		console.log( 'Parameters are not equal' );
	}
	const obj = { a: 1, b: 2 };
	for ( const key in obj ) {
		console.log( key, obj[ key ] );
	}
}

myFunction( 1, '1' );

const arrowFunc = (): number => {
	const x = 10;
	return x;
};

arrowFunc();
