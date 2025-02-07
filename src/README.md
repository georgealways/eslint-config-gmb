# eslint-config-gmb

**eslint-config-gmb** is an ESLint configuration for JavaScript, TypeScript, and Vue projects. It's really only intended for me, but I published it to make it easier to install across projects.

### Features

- Tabs not spaces `→→`
- Spaces in parenthesis, brackets, and braces `[ val ] = fn( { arg } )`
- Automatic import sorting.

### Custom rules

- "Symmetric" newlines within blocks.
- Trailing commas in multiline collections (with exceptions).

## Installation

```sh
npm install -D eslint eslint-config-gmb
```

Create an `eslint.config.js` file in your project root with the following:

```js
export { default as default } from 'eslint-config-gmb';
```

This includes the base configuration. It's intended for vanilla, browser-based JavaScript projects.

## Other configurations

```
vue
└─ ts
   └─ js (default)
```

### TypeScript

For vanilla TypeScript projects. Contains the base configuration with TypeScript-specific rules.

```js
export { ts as default } from 'eslint-config-gmb';
```

### Vue

Contains the base configuration and the TypeScript configuration, with Vue-specific rules.

```js
export { vue as default } from 'eslint-config-gmb';
```

## Custom Rules

### Symmetric Newlines

The `symmetric-newlines` rule ensures that the number of newlines after the opening brace matches the number of newlines before the closing brace.

```js
// Invalid
function example() {
⏎
	console.log( 'Hello, world!' );
}

// Valid
function example() {
	console.log( 'Hello, world!' );
}

// Valid
function example() {
⏎
	console.log( 'Hello, world!' );
⏎
}
```

### Comma Dangle Single

The `comma-dangle-single` rule requires trailing commas in collections. It disallows them in collections with multiline elements or single item collections.

This makes it easy to move elements to a new line, while excluding configuration objects or objects with deep nesting from this behavior (unlike the built-in `comma-dangle`).

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


## Repository Structure

- **`src/`** contains the actual config package. This is what is published to npm.
- `src/configs/` contains the exported configurations.
- `src/rules/` contains custom rules used in those configs.
- `examples/` demonstrates config behavior in different contexts. Also used for testing.

