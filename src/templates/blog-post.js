import React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
	const blog = data.contentfulBlog;
	return <div>{blog.title}</div>;
};

export const query = graphql`
	query BlogQuery($slug: String!) {
		contentfulBlog(slug: { eq: $slug }) {
			title
			slug
		}
	}
`;

export default BlogPost;
