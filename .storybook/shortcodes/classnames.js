const shortcodeAdapter = require( "../adapters/shortcode" );

const { shortcode } = require( "../../node_modules/@aaashur/eleventy-toolkit/src/shortcodes/classnames" );

const CustomExtension = shortcodeAdapter(
	"classnames",
	shortcode(),
);

module.exports = new CustomExtension();
