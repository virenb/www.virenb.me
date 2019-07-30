import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
	const blog = data.contentfulBlog;
	return (
		<Layout>
			<h2>{blog.title}</h2>
			<h4>{blog.createdAt}</h4>
			<main>{blog.body.body}</main>
		</Layout>
	);
};

export const query = graphql`
	query BlogQuery($slug: String!) {
		contentfulBlog(slug: { eq: $slug }) {
			title
			slug
			createdAt(formatString: "MMMM DD, YYYY")
			childContentfulBlogBodyTextNode {
				body
			}
			body {
				body
			}
		}
	}
`;

export default BlogPost;
