/* eslint-disable no-unused-vars */

import fs, { readFile } from 'fs';

import {
	imports,
	line,
	mutli,
} from 'fake';

import localModule from './localModule.js';
import { localFunction } from './utils.js';

function myFunction( param1, param2 ) {

	console.log( 'This is a test function' );
	if ( param1 === param2 ) {
		console.log( 'Parameters are equal' );
	} else {
		console.log( 'Parameters are not equal' );
	}

	const obj = { a: 1, b: 2 };
	for ( let key in obj ) {
		console.log( key, obj[ key ] );
	}

}

myFunction( 1, '1' );

const arrowFunc = ( arg1, arg2 ) => {
	return arg1 + arg2;
};

const arrowFunc1Param = arg => {
	let x = arg;
	return x;
};

const obj = {
	a: 1,
	b: 2,
	c: 3,
};
