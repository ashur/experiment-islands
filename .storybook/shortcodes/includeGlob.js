const shortcodeAdapter = require( "../adapters/shortcode" );

const CustomExtension = shortcodeAdapter(
	"includeGlob",
	() =>
	{
		// No-op
	},
);

module.exports = new CustomExtension();
