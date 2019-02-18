import React from 'react';
import Link from 'gatsby-link';

const Blogs = ({ node }) => {
	return (
		<li>
			<Link to={node.slug}>
				<h3>{node.title}</h3>
			</Link>
			<div>{node.body.childMarkdownRemark.excerpt}</div>
		</li>
	);
};
const IndexPage = ({ data }) => (
	<ul className="blog-post">{data.allContentfulBlog.edges.map((edge) => <Blogs node={edge.node} />)}</ul>
);

export default IndexPage;

export const pageQuery = graphql`
	query pageQuery {
		allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
			edges {
				node {
					title
					slug
					body {
						childMarkdownRemark {
							excerpt
						}
					}
				}
			}
		}
	}
`;
