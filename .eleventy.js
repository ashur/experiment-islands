const eleventyOptions = require( "./src/_eleventy/config/options" );
const markdown = require( "./src/_eleventy/config/markdown" );

module.exports = ( eleventyConfig ) =>
{
	/* Collections */
	const { collections } = require( "./src/_eleventy/collections" );
	Object.entries( collections ).forEach( ( [key, value] ) =>
	{
		eleventyConfig.addCollection( key, require( value ) );
	} );


	/* Data */
	const { dataExtensions } = require( "./src/_eleventy/data" );
	Object.entries( dataExtensions ).forEach( ( [key, value] ) =>
	{
		eleventyConfig.addDataExtension( key, require( value ) );
	} );


	/* Events */
	// ex., eleventyConfig.on( "eleventy.after", ... )


	/* Filters */
	const { filters } = require( "./src/_eleventy/filters" );
	Object.entries( filters ).forEach( ( [key, value] ) =>
	{
		eleventyConfig.addFilter( key, require( value ) );
	} );


	/* Markdown */
	eleventyConfig.setFrontMatterParsingOptions( {
		excerpt: true,
		/* eslint-disable-next-line camelcase */
		excerpt_separator: "<!-- excerpt -->",
	} );
	eleventyConfig.setLibrary( "md", markdown );


	/* Plugins */
	eleventyConfig.addPlugin( require( "@aaashur/eleventy-toolkit" ), {
		shortcodes: {
			includeGlob: {
				includesDir: "./src/_includes",
			},
		},
	} );


	/* Shortcodes */
	const { pairedShortcodes, shortcodes } = require( "./src/_eleventy/shortcodes" );
	Object.entries( pairedShortcodes ).forEach( ( [key, value] ) =>
	{
		eleventyConfig.addPairedShortcode( key, require( value ) );
	} );

	Object.entries( shortcodes ).forEach( ( [key, value] ) =>
	{
		eleventyConfig.addShortcode( key, require( value ) );
	} );


	/* Static */
	eleventyConfig.addPassthroughCopy( { "src/static": "/" } );
	eleventyConfig.addPassthroughCopy( { "src/_includes/components/**/*.module.js": "/scripts/modules/" } );


	/* Transforms */
	const { transforms } = require( "./src/_eleventy/transforms" );
	Object.entries( transforms ).forEach( ( [key, value] ) =>
	{
		eleventyConfig.addTransform( key, require( value ) );
	} );

	return eleventyOptions;
};
