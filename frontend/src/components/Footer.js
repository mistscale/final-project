import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<p>EventApp - Final Project Technigo </p>
			</FooterContainer>
		</>
	);
};

const FooterContainer = styled.div`
	background: #eee;
	color: #888;
	height: 50px;
	width: 100%;
	position: fixed;
	bottom: 0;
	text-align: center;
`;

export default Footer;
