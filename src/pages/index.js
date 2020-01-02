import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid cornflowerblue;
  color: cornflowerblue;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const InverseButton = styled.button`
  background: cornflowerblue;
  border-radius: 3px;
  border: 2px solid cornflowerblue;
	margin: 0.5em 1em;
	color: white;
  padding: 0.25em 1em;
`;

const IndexPage = () => (
	<Layout>
		<SEO title="hello" />
		<main
			style={{
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<InverseButton>Projects</InverseButton>
			<Button>GitHub</Button>
			<Button>Twitter</Button>
			<Button>Blog</Button>
			<Button>LinkedIn</Button>
		</main>
	</Layout>
);

export default IndexPage;
