import React from 'react';
import { graphql } from "gatsby";

import Layout from '../components/layout';
import SEO from '../components/seo';

const Projects = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="projects" />
      <h1>Projects</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li key={index}>
            <a href={node.frontmatter.path}>{node.frontmatter.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          title
        }
      }
    }
  }
}
`

export default Projects;