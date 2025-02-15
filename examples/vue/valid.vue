<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import config, {
	imports,
	js,
} from 'eslint-config-gmb';

import HelloWorld from '@/components/HelloWorld.vue';
import TheWelcome from '@/components/TheWelcome.vue';

function myFunction( param1: string, param2: string ) {

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

const arrowFunc = ( arg1: number, arg2: number ): number => {
	return arg1 + arg2;
};

const arrowFunc1Param = ( arg: string ) => {
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

</script>

<template>
	<header>
		<img
			alt="Vue logo"
			class="logo"
			src="./assets/logo.svg"
			width="125"
			height="125"
		>

		<div class="wrapper">
			<HelloWorld msg="You did it!" />
		</div>
	</header>

	<main>
		<TheWelcome />
	</main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
