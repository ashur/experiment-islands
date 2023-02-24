const pairedShortcodeAdapter = require( "../adapters/pairedShortcode" );

const { pairedShortcode } = require( "../../node_modules/@aaashur/eleventy-toolkit/src/shortcodes/createElement" );

const CustomExtension = pairedShortcodeAdapter(
	"createElement",
	pairedShortcode(),
);

module.exports = new CustomExtension();
