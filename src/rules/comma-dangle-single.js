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

			if ( !isMultiline ) return;

			const lastElement = nonNullElements.at( -1 ) || elements.at( -1 );

			if ( !lastElement ) return;

			const hasMultiline = nonNullElements.some( el => el.loc.start.line !== el.loc.end.line );
			const hasMultiple = elementCount > 1;

			const lastToken = sourceCode.getLastToken( lastElement );
			const nextToken = sourceCode.getTokenAfter( lastToken, { includeComments: false } );

			const hasTrailingComma = nextToken && nextToken.value === ',';

			const needsTrailing = hasMultiple && !hasMultiline;

			if ( needsTrailing && !hasTrailingComma ) {

				context.report( {
					message: 'Missing trailing comma.',
					node: lastElement,
					fix: fixer => fixer.insertTextAfter( lastToken, ',' ),
				} );

			} else if ( !needsTrailing && hasTrailingComma ) {

				const message = hasMultiline ?
					'Unexpected trailing comma in a collection with multiline elements.' :
					'Unexpected trailing comma in a single-item collection.';

				context.report( {
					message,
					node: lastElement,
					fix: fixer => fixer.remove( nextToken ),
				} );

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
