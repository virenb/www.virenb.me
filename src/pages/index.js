import React, { useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.randomColor || 'cornflowerblue'};
  color: ${props => props.randomColor || 'cornflowerblue'};
  margin: 0.5em 1em;
	padding: 0.25em 1em;
	text-align: center;
	text-decoration: none;
`;

const InverseButton = styled.button`
  background: ${props => props.randomColor || 'cornflowerblue'};
  border-radius: 3px;
  border: 2px solid ${props => props.randomColor || 'cornflowerblue'};
	margin: 0.5em 1em;
	color: white;
	padding: 0.25em 1em;
	text-align: center;
	text-decoration: none;
`;

const ChangeColorText = styled.p`
	font-size: 0.6rem;
	color: crimson;
	text-align: center;
	text-decoration: none;
`;

const IndexPage = () => {
	const [color, setColor] = useState('');

	const changeColor = () => {
		let newColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
		setColor(newColor);
		console.log(newColor)
	}

	return (
		<Layout>
			<SEO title="hello" />
			<main
				style={{
				display: 'flex',
				flexDirection: 'column'
				}}
			>
				<InverseButton as="a" href="/" target="_blank" randomColor={color}>Projects</InverseButton>
				<Button as="a" href="https://github.com/virenb" target="_blank" randomColor={color}>GitHub</Button>
				<Button as="a" href="https://twitter.com/virengb" target="_blank" randomColor={color}>Twitter</Button>
				<Button as="a" href="https://dev.to/virenb" target="_blank" randomColor={color}>Blog</Button>
				<Button as="a" href="/" target="_blank" randomColor={color}>LinkedIn</Button>				
				<InverseButton as="a" href="/" target="_blank" randomColor={color}>Contact Me</InverseButton>
			</main>
			<ChangeColorText onClick={changeColor}>(Change the color)</ChangeColorText>			
		</Layout>
	)
};

export default IndexPage;
