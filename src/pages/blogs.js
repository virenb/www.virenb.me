import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Blogs = () => {
	const data = useStaticQuery(graphql`
		query BlogsQuery {
			allContentfulBlog {
				edges {
					node {
						title
						slug
						createdAt(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	`);
	return (
		<div>
			<ul style={{ listStyle: 'none' }}>
				{data.allContentfulBlog.edges.map((edge) => (
					<li key={edge.node.slug}>
						<Link
							to={`/${edge.node.slug}`}
							style={{ fontWeight: '700', textDecoration: 'none', color: 'cornflowerblue' }}
						>
							{edge.node.title}
						</Link>
						<br />
						{edge.node.createdAt}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Blogs;
