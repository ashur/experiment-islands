import "./random-emoji.css";
import renderComponent from "./random-emoji.adapter.njk";

export default {
	title: "Blocks/RandomEmoji",
	args: {},
};

const Template = ( args ) => 
{
	return renderComponent( {
		storybookArgs: args,
	} );
};

export const Story1 = Template.bind( {} );
Story1.args = {
	title: "Hey",
};
Story1.storyName = "RandomEmoji";
