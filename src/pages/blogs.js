import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';

const Blogs = ({ node }) => {
	return (
		<li>
			<Link to={node.slug}>
				<h3>{node.title}</h3>
			</Link>
			<div>{node.createdAt}</div>
		</li>
	);
};
const IndexPage = ({ data }) => (
	<Layout>
		<ul className="blog-post">{data.allContentfulBlog.edges.map((edge) => <Blogs node={edge.node} />)}</ul>
	</Layout>
);

export default IndexPage;

export const pageQuery = graphql`
	query pageQuery {
		allContentfulBlog(filter: { node_locale: { eq: "en-US" } }, sort: { fields: [createdAt], order: DESC }) {
			edges {
				node {
					id
					title
					slug
					createdAt(formatString: "MMMM DD, YYYY")
				}
			}
		}
	}
`;
