const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
	return graphql(
		`
      query loadPagesQuery {
        allContentfulBlog {
          edges {
            node {
              slug
              title
              date
            }
          }
        }
      }
    `
	).then((result) => {
		if (result.errors) {
			throw result.errors;
		}

		result.data.allContentfulBlog.edges.forEach((edge) => {
			createPage({
				path: `${edge.node.slug}`,
				component: blogPostTemplate,
				context: {
					slug: edge.node.slug
				}
			});
		});
	});
};
