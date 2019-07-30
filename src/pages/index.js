import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Blogs from './blogs';

const IndexPage = () => (
	<Layout>
		<SEO title="hello" />
		<h3>Hi all, I am Viren Bhagat.</h3>
		<main>
			<p>
				Welcome to my website. I'm a full stack developer. Almost all my work is on my{' '}
				<a href="https://github.com/virenb" target="_blank">
					GitHub
				</a>
				. Here is my{' '}
				<a href="https://twitter.com/virengb" target="_blank">
					Twitter
				</a>{' '}
				. I started a blog, check out the posts below.
			</p>
		</main>
		<Blogs />
	</Layout>
);

export default IndexPage;
