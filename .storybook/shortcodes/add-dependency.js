const shortcodeAdapter = require( "../adapters/shortcode" );

const CustomExtension = shortcodeAdapter(
	"addDependency",
	() =>
	{
		// No-op
	},
);

module.exports = new CustomExtension();
