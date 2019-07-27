require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: `Viren Bhagat`,
		description: `Website and blog for Viren Bhagat`,
		author: `Viren Bhagat`,
		url: `https://virenb.me`,
		twitterUsername: `@virengb`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Viren Bhagat`,
				short_name: `virenb`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.spaceId,
				accessToken: process.env.accessToken,
				downloadLocal: true
			}
		},
		`gatsby-plugin-offline`
	]
};
