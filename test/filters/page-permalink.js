/* global describe, it */
const pagePermalink = require( "../../src/_eleventy/filters/system/page-permalink" );
const { assert } = require( "chai" );

describe( "pagePermalink", () =>
{
	it( "should remove leading '/pages'", () =>
	{
		assert.equal( pagePermalink( "/pages/foo/bar/baz" ), "/foo/bar/baz/index.html" );
	} );

	it( "should remove trailing '/index'", () =>
	{
		assert.equal( pagePermalink( "/pages/foo/index" ), "/foo/index.html" );
	} );
} );
