/* eslint-disable @typescript-eslint/no-unused-vars */

import config, { imports, } from 'eslint-config-gmb';

import { js } from 'eslint-config-gmb';

import { type KeyType, Certificate } from 'crypto';

function myFunction( param1: string, param2: string ) {

	param1 = "reassignment allowed";

	console.log( 'This is a test function' );
	if ( param1 ===  param2 ) {
		console.log('Parameters are equal' );
	} else {
		console.log( 'Parameters are not equal' );
	}

	const obj ={ a:1,b: 2 };
	for ( const [key, value ]of Object.entries( obj )) {
		console.log( key, value )
	}

}

myFunction( '1', '1');

const arrowFunc = ( arg1:number, arg2: number ): number => {
	return arg1 + arg2;
};

const arrowFunc1Param = ( arg: string )=> {
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

const shorthand ='test';
const obj3 = { shorthand  };
