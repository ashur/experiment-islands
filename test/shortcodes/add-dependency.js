/* global describe, it */
const { addDependency } = require( "../../src/_eleventy/shortcodes/add-dependency" );
const { assert } = require( "chai" );

describe( "addDependency", () =>
{
	it( "should create type property if not defined", () =>
	{
		const dependencies = {};
		addDependency( dependencies, "criticalStyles", "/* global CSS */" );

		assert.hasAllKeys( dependencies, "criticalStyles" );
		assert.equal( dependencies["criticalStyles"], "/* global CSS */" );
	} );

	it( "should only add value if it doesn't not already exist as dependency", () =>
	{
		const dependencies = {
			criticalStyles: [
				"/* global CSS */",
			],
		};

		addDependency( dependencies, "criticalStyles", "/* page-specific CSS */" );
		addDependency( dependencies, "criticalStyles", "/* global CSS */" );
		addDependency( dependencies, "criticalStyles", "/* page-specific CSS */" );

		assert.equal( dependencies["criticalStyles"].length, 2 );
	} );
} );
