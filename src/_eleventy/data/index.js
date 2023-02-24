const path = require( "path" );

module.exports.dataExtensions = {
	"yml": path.join( __dirname, "yaml.js" ),
};
