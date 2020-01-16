import React from 'react';
import { graphql } from "gatsby";

import Layout from '../components/layout';
import SEO from '../components/seo';

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="projects" />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
      <h1>Projects</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li
            style={{
              listStyleType: 'none'
            }}
            key={index}>
            <a href={node.frontmatter.path}>{node.frontmatter.title}</a>
          </li>
        ))}
        </ul>
      </main>
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