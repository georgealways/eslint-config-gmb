# eslint-config-gmb

**eslint-config-gmb** is an ESLint configuration created by George Michael Brower. This configuration aims to provide a comprehensive and stylistic linting setup for JavaScript, TypeScript, and Vue projects.

The configuration features:

- Tabbed indentation.
- Spaces in parenthesis, brackets, and braces.
- Import sorting by filename (members sorted alphabetically).
- Import grouping by type (external, internal).
- Symmetric newlines within blocks.


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



