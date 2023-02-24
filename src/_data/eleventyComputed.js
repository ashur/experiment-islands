module.exports = {
	meta: {
		seo: {
			/**
			 * @example
			 * <meta name="description" content="{{ meta.seo.description }}">
			 *
			 * @param {Object} data - Eleventy global data
			 * @return {Object}
			 */
			description: ( data ) => (
				data.seoDescription ||
				data.description ||
				data.site?.description
			),

			/**
			 * @example
			 * <meta name="title" content="{{ meta.seo.title }}">
			 *
			 * @param {Object} data - Eleventy global data
			 * @return {Object}
			 */
			title: ( data ) => (
				data.seoTitle ||
				( data.title && data.site?.title ? `${data.title} | ${data.site?.title}` : undefined ) ||
				data.site?.title
			),
		},

		social: {
			/**
			 * @example
			 * <meta property="og:description" content="{{ meta.social.description }}">
			 *
			 * @param {Object} data - Eleventy global data
			 * @return {Object}
			 */
			description: ( data ) => (
				data.socialDescription ||
				data.seoDescription ||
				data.description ||
				data.site?.description
			),

			/**
			 * @example
			 * <meta property="og:image" content="{{ meta.social.image }}">
			 *
			 * @param {Object} data - Eleventy global data
			 * @return {Object}
			 */
			image: ( data ) =>
			{
				if ( !data.site?.url )
				{
					return;
				}

				const url = new URL( data.site.url );
				if ( data.socialImage )
				{
					url.pathname = data.socialImage;
					return url.toString();
				}

				if ( data.site?.socialImage )
				{
					url.pathname = data.site.socialImage;
					return url.toString();
				}

				return;
			},

			/**
			 * @example
			 * <meta property="og:title" content="{{ meta.social.title }}">
			 *
			 * @param {Object} data - Eleventy global data
			 * @return {Object}
			 */
			title: ( data ) => (
				data.socialTitle ||
				data.seoTitle ||
				data.title ||
				data.site?.title
			),
		},

		/**
		 * @example
		 * <title>{{ meta.title }}</title>
		 *
		 * @param {Object} data - Eleventy global data
		 * @return {Object}
		 */
		title: ( data ) => (
			data.fullTitle ||
			( data.title && data.site?.title ? `${data.title} | ${data.site?.title}` : undefined ) ||
			( data.site?.title && data.site?.description ? `${data.site?.title} • ${data.site?.description}` : undefined ) ||
			data.site?.title
		),

		/**
		 * @example
		 * <meta property="og:url" content="{{ meta.url }}">
		 *
		 * @param {Object} data - Eleventy global data
		 * @return {Object}
		 */
		url: ( data ) =>
		{
			if ( !data.site?.url )
			{
				return;
			}

			const url = new URL( data.site.url );
			if ( data.page?.url )
			{
				url.pathname = data.page.url;
			}

			return url.toString();
		},
	},
};
