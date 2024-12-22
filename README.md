# eslint-config-gmb

**eslint-config-gmb** is an ESLint configuration created by George Michael Brower for JavaScript, TypeScript, and Vue projects. It's really only intended for me, but I published it to npm to make it easier to use across projects.

### Features

- Tabs not spaces `→→`
- Spaces in parenthesis, brackets, and braces `[ val ] = fn( { arg } )`
- Automatic import sorting

### Custom rules

- Symmetric newlines within blocks
- Trailing commas in multiline collections (with exceptions)


## Usage

Create an `eslint.config.js` file in your project root with the following:

```js
export { default } from 'eslint-config-gmb';
```

This includes the base configuration. To extend the configuration with TypeScript or Vue rules, import the configurations and spread them into an array:

```js
import { base, tsVue, vue } from 'eslint-config-gmb';

export default [
	...base, // base === default
	...tsVue,
	...vue
]
```

## Configurations

```
* base (default)
├── eslintJs.configs.recommended
├── * js 
└── * imports
* tsVue
* vue

* = exported
```

### js

Provides basic stylistic rules. Included as part of `base`.

### imports

Enforces import sorting and grouping. Included as part of `base`.

### tsVue

Provides rules for TypeScript + Vue that do not conflict with the Vue boilerplate.

### vue

Provides rules for Vue single-file components. Enforces the use of `@` for imports and scoped CSS.


## Custom Rules

### Symmetric Newlines

The `symmetric-newlines` rule enforces an equal number of starting and ending newlines within blocks. This rule ensures that the number of newlines after the opening brace matches the number of newlines before the closing brace.

```js
// Invalid
function example() {

	console.log( 'Hello, world!' );
}

// Valid
function example() {
	console.log( 'Hello, world!' );
}

// Valid
function example() {

	console.log( 'Hello, world!' );

}
```

### Comma Dangle Single

The `comma-dangle-single` rule requires trailing commas in multiline collections with more than one item. It disallows them in single-item collections and collections containing multiline elements.

The purpose of this rule is to make it easy to move elements to a new line, while ensuring that "configuration objects" or objects with deep nesting are excluded from this behavior, unlike the built-in `comma-dangle`.

```js
// Invalid
const arr = [
	1,
];

const arr2 = [
	1,
	2
];

const arr3 = [
	1,
	2,
	[
		3,
		4
	],
];

// Valid
const arr = [
	1
];

const arr2 = [
	1,
	2,
];

const arr3 = [
	1,
	2,
	[
		3,
		4,
	]
];
```
