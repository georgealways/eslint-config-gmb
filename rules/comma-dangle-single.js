// Written entirely by ChatGPT (o1-preview)
export default {
	meta: {
		type: 'layout',
		docs: {
			description: 'Enforce dangling commas in multiline collections with ' +
				'more than one item, and disallow them in single-item collections',
			category: 'Stylistic Issues',
			recommended: false
		},
		fixable: 'code',
		schema: []
	},

	create( context ) {
		const sourceCode = context.getSourceCode();

		function checkForTrailingComma( node, elements ) {
			const nonNullElements = elements.filter( el => el !== null );

			const elementCount = nonNullElements.length;

			const isMultiline = node.loc.start.line !== node.loc.end.line;

			if ( !isMultiline ) {
				// Do not enforce in single-line collections
				return;
			}

			const lastElement =
        nonNullElements[ nonNullElements.length - 1 ] ||
        elements[ elements.length - 1 ];

			if ( !lastElement ) {
				return;
			}

			const lastToken = sourceCode.getLastToken( lastElement );
			const nextToken = sourceCode.getTokenAfter( lastToken, {
				includeComments: false
			} );

			const hasTrailingComma = nextToken && nextToken.value === ',';

			if ( elementCount <= 1 ) {
				// For single-item collections, ensure there's no trailing comma
				if ( hasTrailingComma ) {
					context.report( {
						node: lastElement,
						message: 'Unexpected trailing comma in single-item collection.',
						fix( fixer ) {
							return fixer.remove( nextToken );
						}
					} );
				}
			} else {
				// For collections with more than one item, ensure there's a trailing comma
				if ( !hasTrailingComma ) {
					context.report( {
						node: lastElement,
						message: 'Missing trailing comma.',
						fix( fixer ) {
							return fixer.insertTextAfter( lastToken, ',' );
						}
					} );
				}
			}
		}

		return {
			ObjectExpression( node ) {
				checkForTrailingComma( node, node.properties );
			},
			ArrayExpression( node ) {
				checkForTrailingComma( node, node.elements );
			}
		};
	}
};
