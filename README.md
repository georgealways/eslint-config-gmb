# eslint-config-gmb

**eslint-config-gmb** is a ESLint configuration created by George Michael Brower. This configuration aims to provide a comprehensive and stylistic linting setup for JavaScript, TypeScript, and Vue projects.

## Usage

Create an `eslint.config.js` file in your project root with the following:

```js
export { default } from 'eslint-config-gmb';
```

This includes the base configuration. To extend the configuration with TypeScript or Vue rules, import the configurations and spread them into an array:

```js

import base, { typescript, vue } from 'eslint-config-gmb';

export default [
	...base,
	...typescript,
	...vue,
	// Custom config here...
]
```

## Configurations

### Base

The base configuration includes general rules and settings for JavaScript projects. It extends the recommended ESLint rules and includes additional stylistic rules.

### Import

The import configuration includes rules for managing import statements. It uses `eslint-plugin-import` and includes rules for ordering and grouping imports. This is included in the base configuration.

### TypeScript

The TypeScript configuration extends the base configuration and includes additional rules and settings specific to TypeScript. It uses `@typescript-eslint/parser` and includes rules from `@typescript-eslint/eslint-plugin`.

### Vue

The Vue configuration extends the base configuration and includes additional rules and settings for Vue.js projects. It uses `vue-eslint-parser` and includes rules from `eslint-plugin-vue` and `eslint-plugin-vue-scoped-css`.


## Custom Rules

### Symmetric Newlines

The `symmetric-newlines` rule enforces symmetric starting and ending newlines within blocks. This rule ensures that the number of newlines after the opening brace matches the number of newlines before the closing brace.

```js
// Wrong
function example() {

	console.log( 'Hello, world!' );
}

// Correct
function example() {
	console.log( 'Hello, world!' );
}

function example() {

	console.log( 'Hello, world!' );

}
```

## Examples

These examples show the output of ESLint with the `eslint-config-gmb` configuration.

```html
<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <button @click="handleClick">Click Me</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import unusedModule from './unusedModule'
import { unusedFunction } from './utils'

export default {
    name: 'ExampleComponent',
    data() {
        return {
            message: "Hello World"
            items: []
        }
    },
    created: function() {
        var self = this
        axios.get('/api/items').then(function(response){
            self.items = response.data
        })
    },
    methods: {
        handleClick() {
            console.log('Button clicked')
        }
    }
}
</script>

<style>
.container {
    background-color: #f0f0f0
    padding: 20px
}

h1 {
    color: blue
}

ul {
    list-style-type: none;
    padding: 0
}

li {
    padding: 5px;
    border-bottom: 1px solid #ccc
}
</style>
```
