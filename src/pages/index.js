import React, { useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.btnColor || 'cornflowerblue'};
  color: ${props => props.btnColor || 'cornflowerblue'};
  margin: 0.5em 1em;
	padding: 0.25em 1em;
	text-align: center;
	text-decoration: none;
`;

const InverseButton = styled.button`
  background: ${props => props.btnColor || 'cornflowerblue'};
  border-radius: 3px;
  border: 2px solid ${props => props.btnColor || 'cornflowerblue'};
	margin: 0.5em 1em;
	color: white;
	padding: 0.25em 1em;
	text-align: center;
	text-decoration: none;
`;

const IndexPage = () => {
	const [color, setColor] = useState('');
	return (
		<Layout>
			<SEO title="hello" />
			<main
				style={{
				display: 'flex',
				flexDirection: 'column'
				}}
			>
				<InverseButton as="a" href="/" target="_blank" btnColor={color}>Projects</InverseButton>
				<Button as="a" href="https://github.com/virenb" target="_blank">GitHub</Button>
				<Button as="a" href="https://twitter.com/virengb" target="_blank">Twitter</Button>
				<Button as="a" href="https://dev.to/virenb" target="_blank">Blog</Button>
				<Button as="a" href="/" target="_blank">LinkedIn</Button>
			</main>
		</Layout>
	)
};

export default IndexPage;
