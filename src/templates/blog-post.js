import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
	const blog = data;

	return (
		<Layout>
			<h1>{blog.contentfulBlog.title}</h1>
			<h4>{blog.contentfulBlog.createdAt}</h4>
			<div
				dangerouslySetInnerHTML={{
					__html: blog.contentfulBlog.childContentfulBlogBodyTextNode.childMarkdownRemark.html
				}}
			/>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		contentfulBlog(slug: { eq: $slug }) {
			title
			slug
			createdAt(formatString: "MMMM DD, YYYY")
			childContentfulBlogBodyTextNode {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`;

export default BlogPost;
