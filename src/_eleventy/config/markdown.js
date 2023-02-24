const markdownIt = require( "markdown-it" );

const options = {
	breaks: true,
	html: true,
	typographer: true,
};

const md = markdownIt( options )
	.disable( "code" );

md.use( require( "markdown-it-anchor" ) );
md.use( require( "markdown-it-attrs" ) );

module.exports = md;
