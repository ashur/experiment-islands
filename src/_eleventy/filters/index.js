const path = require( "path" );

module.exports.filters = {
	"log": path.join( __dirname, "system/log.js" ),
	"pagePermalink": path.join( __dirname, "system/page-permalink.js" ),
	"url": path.join( __dirname, "url.js" ),
};
