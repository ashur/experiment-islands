import "@storybook/addon-console";
import "../src/_includes/css/reset.css";
import "../src/_includes/css/global.css";
import "../src/_includes/css/themes.css";
import "../src/_includes/css/utilities.css";
import "../src/_includes/css/composition.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
