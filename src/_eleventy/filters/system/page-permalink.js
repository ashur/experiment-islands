/**
 * @param {string} filePathStem
 * @returns {string}
 */
module.exports = ( filePathStem ) =>
{
	const permalinkSegments = filePathStem.split( "/" );

	// Remove leading '/pages'
	if ( permalinkSegments.at( 1 ) === "pages" )
	{
		permalinkSegments.splice( 1, 1 );
	}

	// Remove trailing '/index'
	// ex., 'pages/foo/index'
	if ( permalinkSegments.at( -1 ) === "index" )
	{
		permalinkSegments.splice( -1, 1 );
	}

	permalinkSegments.push( "index.html" );

	return permalinkSegments.join( "/" );
};
