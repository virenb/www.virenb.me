require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'Viren Bhagat'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/projects`,
				name: 'projects'
			}
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.spaceId,
				accessToken: process.env.accessToken
			}
		}
	]
};
