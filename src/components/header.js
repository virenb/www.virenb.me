import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteTitle }) => (
	<header
		style={{
			marginBottom: `1.45rem`
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				width: 650,
				maxWidth: `90vw`,
				padding: `1.45rem 1.0875rem`
			}}
		>
			<h1
				style={{
					margin: 0
				}}
			>
				<Link
					to="/"
					style={{
						textDecoration: `none`,
						color: `cornflowerblue`
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</header>
);

export default Header;
