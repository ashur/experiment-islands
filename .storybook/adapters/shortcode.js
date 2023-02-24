/**
 * @param {string} shortcodeName
 * @param {string} shortcodeFunction
 * @return {function}
 */
module.exports = ( shortcodeName, shortcodeFunction ) => 
{
	return function CustomExtension()
	{
		this.tags = [shortcodeName];

		this.parse = ( parser, nodes ) =>
		{
			// get the tag token
			var tok = parser.nextToken();

			// parse the args and move after the block end. passing true
			// as the second arg is required if there are no parentheses
			var args = parser.parseSignature( null, true );
			parser.advanceAfterBlockEnd( tok.value );

			// See above for notes about CallExtension
			return new nodes.CallExtension( this, "run", args );
		};

		this.run = ( ...args ) =>
		{
			return shortcodeFunction( ...args.slice( 1 ) );
		};
	};
};
