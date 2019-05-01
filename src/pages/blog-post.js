import React, { Component } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import PropTypes from 'prop-types';

class BlogPost extends Component {
	render() {
		console.log(this.props);
		const {
			title,
			createdAt,
			//featureImage,
			body
		} = this.props.data.contentfulBlog;
		return (
			<Layout>
				<div>
					<h1>{title}</h1>
					<p>{createdAt}</p>
					<div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
				</div>
				<Link to="/blogs">Back to Blogs</Link>
			</Layout>
		);
	}
}

BlogPost.PropTypes = {
	data: PropTypes.object.isRequired
};

export default BlogPost;

export const postQuery = graphql`
	query blogPostQuery($slug: String!) {
		contentfulBlog(slug: { eq: $slug }) {
			title
			slug
			createdAt(formatString: "MMMM DD, YYYY")
			body {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`;
