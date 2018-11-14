import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 600,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{          
            textDecoration: 'none',
            color: 'mediumaquamarine',
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
  </div>
);

export default Header;
