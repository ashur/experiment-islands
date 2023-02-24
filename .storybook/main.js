const path = require( "path" );

module.exports = {
	"staticDirs": ["../dist"],
	"stories": [
		"../src/_includes/components/**/*.stories.mdx",
		"../src/_includes/components/**/*.stories.@(js|jsx|ts|tsx)",
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
		"@storybook/addon-interactions",
	],
	"features": {
		interactionsDebugger: true,
	},
	"framework": "@storybook/html",
	"core": {
		"builder": "webpack5",
	},
	"webpackFinal": ( config ) =>
	{
		const { filters } = require( "../src/_eleventy/filters" );
		const storybookFilters = {};
		Object.entries( filters ).forEach( ( [key, value] ) =>
		{
			storybookFilters[key] = value;
		} );

		const { shortcodes } = require( "../src/_eleventy/shortcodes" );
		const storybookShortcodes = {};
		Object.entries( shortcodes ).forEach( ( [key, value] ) =>
		{
			storybookShortcodes[key] = path.join( __dirname, "shortcodes", path.basename( value ) );
		} );

		config.module.rules.push( {
			test: /\.njk$/,
			use: [
				{
					loader: "simple-nunjucks-loader",
					options: {
						extensions: storybookShortcodes,
						filters: storybookFilters,
						searchPaths: "src/_includes",
						dev: true,
					},
				},
			],
		} );

		// Return the altered config
		return config;
	},
};
