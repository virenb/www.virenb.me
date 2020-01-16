import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/layout';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <main
        style={{
          display: 'flex',
          maxWidth: '50%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto'
          }}
        >
        <h3>{frontmatter.title}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`