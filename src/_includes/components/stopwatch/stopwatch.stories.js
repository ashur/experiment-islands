import "./stopwatch.css";
import renderComponent from "./stopwatch.adapter.njk";

export default {
	title: "Blocks/Stopwatch",
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
Story1.storyName = "Stopwatch";
