/* eslint-disable no-unused-vars */
import config, {
	imports,
	js,
} from 'eslint-config-gmb';
import { a, b, c, d, e, f, g, h, i } from 'module1';
import {
	veryLongImportName,
	veryLongImportName2,
	veryLongImportName3,
	veryLongImportName4,
	veryLongImportName5,
	veryLongImportName6,
	veryLongImportName7,
	veryLongImportName8,
	veryLongImportName9
} from 'module2';

function myFunction( param1, param2 ) {

	param1 = 'reassignment allowed';

	console.log( 'This is a test function' );
	if ( param1 === param2 ) {
		console.log( 'Parameters are equal' );
	} else {
		console.log( 'Parameters are not equal' );
	}

	const obj = { a: 1, b: 2 };
	for ( const [ key, value ] of Object.entries( obj ) ) {
		console.log( key, value );
	}

}

myFunction( '1', '1' );

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
