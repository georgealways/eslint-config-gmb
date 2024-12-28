/* eslint-disable no-unused-vars */
import blah from '@eslint/js';

import config, {
	base,
	imports,
	ts,
	vue,
} from '../eslint.config.js';
import test from './javascript.js';

function myFunction(param1, param2 ) {

	console.log( 'This is a test function' );
	if ( param1=== param2 ) {
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

const arrowFunc = ( arg1, arg2 ) => {
	return arg1 + arg2;
};

const arrowFunc1Param = arg => {
	const x = arg;
	return x;
};

const obj = {
	a: 1,
	b: 2,
	c: 3,
};

const obj2 = {
	a: 1,
	b: 2,
	c: {
		d: 4,
		e: 5,
	}
};

const shorthand = 'test';
const obj3 = { shorthand };
