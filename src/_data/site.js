// See ./site.yml for additional static values

module.exports = {
	/**
	 * Return the appropriate URL for development environments, and branch
	 * and production deployments.
	 * @return {string}
	 */
	get url()
	{
		let url = process.env.URL || "http://localhost:5000";

		if( process.env.BRANCH && process.env.BRANCH !== "main" )
		{
			// Netlify branch deployments
			// https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata
			url = process.env.DEPLOY_PRIME_URL || url;
		}

		return url;
	},
};
