import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const BlogPost = () => {
	const data = useStaticQuery(query);
	return (
		<div>
			<h1>{data.contentfulBlog.title}</h1>
		</div>
	);
};

const query = graphql`
	query MyQuery($slug: String!) {
		contentfulBlog(slug: { eq: $slug }) {
			slug
			title
			createdAt
			childContentfulBlogBodyTextNode {
				body
			}
		}
	}
`;

export default BlogPost;
