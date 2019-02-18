import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const SecondPage = ({ data }) => {
  console.log(data);
  return (
  <Layout>
  <h3>Projects</h3>
  <div>
  {data.allMarkdownRemark.edges.map(({ node }) => (
  <div>
  <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{node.frontmatter.title}</h3>
  <a href={node.frontmatter.url} target="_blank">
							Live
						
</a>
  <br />
  <a href={node.frontmatter.repo} target="_blank">
							Repository
						
</a>
  <p>{node.frontmatter.description}</p>
					</div>
				))}
			</div>
  <Link to="/">Home</Link>
		</Layout>
  );
};

export default SecondPage;

export const query = graphql`
	query {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						description
						url
						repo
					}
				}
			}
		}
	}
`;
