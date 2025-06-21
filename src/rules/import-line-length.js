/** @type {import('eslint').Rule.RuleModule} */
export default {
	meta: {
		type: 'layout',
		docs: {
			description: 'Enforce single-line imports unless they exceed maxLength',
			category: 'Stylistic Issues',
			recommended: false,
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					maxLength: { type: 'number' }
				},
				additionalProperties: false
			}
		]
	},

	create( context ) {
		const sourceCode = context.getSourceCode();
		const maxLength = context.options[ 0 ]?.maxLength ?? 120;

		function calculateSingleLineLength( node ) {
			// Get all the relevant tokens
			const importKeyword = sourceCode.getFirstToken( node );
			const fromKeyword = sourceCode.getTokenBefore( node.source );
			const specifiers = node.specifiers.map( s => sourceCode.getText( s ) ).join( ', ' );

			// Build what the single line would look like
			const line = [
				importKeyword.value,
				`{ ${ specifiers } }`,
				fromKeyword.value,
				sourceCode.getText( node.source ),
			].join( ' ' );

			return line.length;
		}

		function checkImport( node ) {
			// Skip imports with no specifiers or default/namespace imports
			if ( !node.specifiers.length || !node.specifiers.every( s => s.type === 'ImportSpecifier' ) ) {
				return;
			}

			const singleLineLength = calculateSingleLineLength( node );
			const hasNewlines = node.loc.start.line !== node.loc.end.line;

			// Get the range of the entire import specifiers list (including braces)
			const openBraceToken = sourceCode.getFirstToken( node, { skip: 1 } ); // Skip 'import' keyword

			// Get token before 'from'
			const closeBraceToken = sourceCode.getTokenBefore( sourceCode.getTokenBefore( node.source ) );

			// If it's multiline but would fit on one line
			if ( hasNewlines && singleLineLength <= maxLength ) {
				context.report( {
					node,
					message: 'Import statement should be on a single line',
					fix( fixer ) {
						const specifierTexts = node.specifiers.map( s => sourceCode.getText( s ) );
						return fixer.replaceTextRange(
							[ openBraceToken.range[ 0 ], closeBraceToken.range[ 1 ] ],
							`{ ${ specifierTexts.join( ', ' ) } }`
						);
					}
				} );
			} else if ( !hasNewlines && singleLineLength > maxLength ) {
				// If it's single line but exceeds max length
				context.report( {
					node,
					message: 'Long import statement should be split across multiple lines',
					fix( fixer ) {
						const specifierTexts = node.specifiers.map( s => sourceCode.getText( s ) );
						return fixer.replaceTextRange(
							[ openBraceToken.range[ 0 ], closeBraceToken.range[ 1 ] ],
							`{\n\t${ specifierTexts.join( ',\n\t' ) }\n}`
						);
					}
				} );
			}
		}

		return {
			ImportDeclaration: checkImport
		};
	}
};
