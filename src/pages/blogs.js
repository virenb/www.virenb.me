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
					}
				}
			}
		}
	`);
	return (
		<div>
			<ul>
				{data.allContentfulBlog.edges.map((edge) => <Link to={`/${edge.node.slug}`}>{edge.node.title}</Link>)}
			</ul>
		</div>
	);
};

export default Blogs;
