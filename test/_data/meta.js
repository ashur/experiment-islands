/* global describe, it */
const { assert } = require( "chai" );
const { seo, social, title, url } = require( "../../src/_data/eleventyComputed" ).meta;

const mockGlobalData = () =>
{
	return {
		// page data
		page: {
			url: "/page.url",
		},

		// src/_data/site.js
		site: {
			description: "site.description",
			socialImage: "site.socialImage",
			title: "site.title",
			url: "https://example.com",
		},

		// top-level page data (ex., frontmatter)
		description: "description",
		fullTitle: "fullTitle",
		seoDescription: "seoDescription",
		seoTitle: "seoTitle",
		socialDescription: "socialDescription",
		socialImage: "socialImage",
		socialTitle: "socialTitle",
		title: "title",
	};
};

describe( "meta", () =>
{
	describe( ".seo", () =>
	{
		describe( ".description", () =>
		{
			const globalData = mockGlobalData();

			it( "should prefer 'seoDescription' value", () =>
			{
				assert.equal( seo.description( globalData ), "seoDescription" );
			} );

			it( "should use 'description' if 'seoDescription' is undefined", () =>
			{
				delete globalData.seoDescription;
				assert.equal( seo.description( globalData ), "description" );
			} );

			it( "should use 'site.description' value if 'description' is undefined", () =>
			{
				delete globalData.description;
				assert.equal( seo.description( globalData ), "site.description" );
			} );
		} );

		describe( ".title", () =>
		{
			const globalData = mockGlobalData();

			it( "should prefer 'seoTitle' value", () =>
			{
				assert.equal( seo.title( globalData ), "seoTitle" );
			} );

			it( "should use 'title | site.title' if 'seoTitle' is undefined", () =>
			{
				delete globalData.seoTitle;
				assert.equal( seo.title( globalData ), "title | site.title" );
			} );

			it( "should use 'site.title' value if 'title' is undefined", () =>
			{
				delete globalData.title;
				assert.equal( seo.title( globalData ), "site.title" );
			} );
		} );
	} );

	describe( ".social", () =>
	{
		describe( ".description", () =>
		{
			const globalData = mockGlobalData();

			it( "should prefer 'socialDescription' value", () =>
			{
				assert.equal( social.description( globalData ), "socialDescription" );
			} );

			it( "should use 'seoDescription' if 'socialDescription' is undefined", () =>
			{
				delete globalData.socialDescription;
				assert.equal( social.description( globalData ), "seoDescription" );
			} );

			it( "should use 'description' if 'seoDescription' is undefined", () =>
			{
				delete globalData.seoDescription;
				assert.equal( social.description( globalData ), "description" );
			} );

			it( "should use 'site.description' if 'description' is undefined", () =>
			{
				delete globalData.description;
				assert.equal( social.description( globalData ), "site.description" );
			} );
		} );

		describe( ".image", () =>
		{
			const globalData = mockGlobalData();

			it( "should prefer 'site.url/socialImage'", () =>
			{
				assert.equal( social.image( globalData ), "https://example.com/socialImage" );
			} );

			it( "should use 'site.url/site.socialImage' if 'socialImage' is undefined", () =>
			{
				delete globalData.socialImage;
				assert.equal( social.image( globalData ), "https://example.com/site.socialImage" );
			} );

			it( "should return undefined if 'site.socialImage' is undefined", () =>
			{
				delete globalData.site.socialImage;
				assert.equal( social.image( globalData ), undefined );
			} );

			it( "should return undefined if 'site.url' is undefined", () =>
			{
				delete globalData.site.url;
				assert.equal( social.image( globalData ), undefined );
			} );
		} );

		describe( ".title", () =>
		{
			const globalData = mockGlobalData();

			it( "should prefer 'socialTitle' value", () =>
			{
				assert.equal( social.title( globalData ), "socialTitle" );
			} );

			it( "should use 'seoTitle' if 'socialTitle' is undefined", () =>
			{
				delete globalData.socialTitle;
				assert.equal( social.title( globalData ), "seoTitle" );
			} );

			it( "should use 'title' if 'seoTitle' is undefined", () =>
			{
				delete globalData.seoTitle;
				assert.equal( social.title( globalData ), "title" );
			} );

			it( "should use 'site.title' if 'title' is undefined", () =>
			{
				delete globalData.title;
				assert.equal( social.title( globalData ), "site.title" );
			} );
		} );
	} );

	describe( ".title", () =>
	{
		const globalData = mockGlobalData();

		it( "should prefer 'fullTitle' value", () =>
		{
			assert.equal( title( globalData ), "fullTitle" );
		} );

		it( "should use 'title | site.title' if 'fullTitle' is undefined", () =>
		{
			delete globalData.fullTitle;
			assert.equal( title( globalData ), "title | site.title" );
		} );

		it( "should use 'site.title • site.description' value if 'title' is undefined", () =>
		{
			delete globalData.title;
			assert.equal( title( globalData ), "site.title • site.description" );
		} );

		it( "should use 'site.title' value if 'site.description' is undefined", () =>
		{
			delete globalData.site.description;
			assert.equal( title( globalData ), "site.title" );
		} );
	} );

	describe( ".url", () =>
	{
		const globalData = mockGlobalData();

		it( "should prefer 'site.url/page.url'", () =>
		{
			assert.equal( url( globalData ), "https://example.com/page.url" );
		} );

		it( "should use 'site.url' if 'page.url' is undefined", () =>
		{
			delete globalData.page.url;
			assert.equal( url( globalData ), "https://example.com/" );
		} );
	} );
} );
