/**
 * @param {string} type
 * @param {string} value
 * @return {""}
 */
module.exports = function( type, value )
{
	if( !this.ctx?.page )
	{
		return "";
	}

	this.ctx.page.dependencies = this.ctx.page.dependencies || {};
	return addDependency( this.ctx.page.dependencies, type, value );
};

/**
 * @param {Object} dependencies
 * @param {string} type
 * @param {string} value
 * @return {""}
 */
const addDependency = ( dependencies, type, value ) =>
{
	dependencies[type] = dependencies[type] || [];

	const dependencyExists = dependencies[type].find( ( dependency ) => (
		JSON.stringify( dependency ) === JSON.stringify( value )
	) );

	if( !dependencyExists )
	{
		dependencies[type].push( value );
	}

	return "";
};

module.exports.addDependency = addDependency;
