// Written entirely by ChatGPT (o1-preview)
export default {
	meta: {
		type: 'layout',
		docs: {
			description: 'Enforce symmetric starting and ending newlines within blocks',
			category: 'Stylistic Issues',
			recommended: false
		},
		fixable: 'whitespace',
		schema: [] // No options for now
	},

	create( context ) {

		const sourceCode = context.getSourceCode();

		function checkSymmetry( node ) {
			const openingBrace = sourceCode.getFirstToken( node );
			const closingBrace = sourceCode.getLastToken( node );

			// Tokens immediately after opening brace and before closing brace
			const tokenAfterOpening = sourceCode.getTokenAfter( openingBrace, { includeComments: true } );
			const tokenBeforeClosing = sourceCode.getTokenBefore( closingBrace, { includeComments: true } );

			// Calculate the number of newlines after opening brace and before closing brace
			const startLinesBetween = tokenAfterOpening.loc.start.line - openingBrace.loc.end.line - 1;
			const endLinesBetween = closingBrace.loc.start.line - tokenBeforeClosing.loc.end.line - 1;

			if ( startLinesBetween !== endLinesBetween ) {
				context.report( {
					node,
					loc: node.loc,
					message: 'Block starting and ending newlines are not symmetric',
					fix( fixer ) {
						const fixes = [];

						if ( startLinesBetween > endLinesBetween ) {
							// Add lines before the closing brace
							const linesToAdd = startLinesBetween - endLinesBetween;
							const insertText = '\n'.repeat( linesToAdd );
							fixes.push( fixer.insertTextAfter( tokenBeforeClosing, insertText ) );
						} else {
							// Remove lines before the closing brace
							const linesToRemove = endLinesBetween - startLinesBetween;
							const rangeToRemove = {
								start: tokenBeforeClosing.range[ 1 ],
								end: tokenBeforeClosing.range[ 1 ] + linesToRemove
							};
							fixes.push( fixer.removeRange( [ rangeToRemove.start, rangeToRemove.end ] ) );
						}

						return fixes;
					}
				} );
			}
		}

		return {
			BlockStatement: checkSymmetry,
			ClassBody: checkSymmetry,
			SwitchStatement: checkSymmetry
		};

	}
};
