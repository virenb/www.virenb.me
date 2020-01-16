module.exports = {
	siteMetadata: {
		title: `virenb`,
		description: `Website and blog for Viren Bhagat`,
		author: `Viren Bhagat`,
		url: `https://virenb.cc`,
		twitterUsername: `@virengb`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-offline`,
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
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/project-pages`,
				name: `project-pages`,
			},
		},
	`gatsby-transformer-remark`,
	]
};
