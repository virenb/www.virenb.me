import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
	<Layout>
		<h3>Thanks for visiting my page.</h3>
		<p>
			I build software and web applications. Some of my work can be found <Link to="/projects">here</Link>.
		</p>
		<p>
			Here is my{' '}
			<a href="https://github.com/virenb" target="_blank">
				GitHub
			</a>.
		</p>
		<p>
			My email is{' '}
			<a href="mailto:virenb@gmail.com?Subject=Hi%20there" target="_top">
				virenb@gmail.com
			</a>.
		</p>
		<p>
			2019 Update: I've created a <Link to="/blogs">blog</Link>.
		</p>
	</Layout>
);

export default IndexPage;
