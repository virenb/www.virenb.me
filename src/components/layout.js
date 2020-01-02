import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          minHeight: `75vh`,
          flexDirection: `column`
        }}
      >
        <main
          style={{flex: 1}}
        >{children}</main>
        <footer
          style={{
            color: `blue`,
            flexShrink: `0`
          }}
            >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
};

export default Layout;
