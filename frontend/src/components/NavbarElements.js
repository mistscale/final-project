import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	background: #eee;
	height: 60px;
	display: flex;
	justify-content: right;
	padding-right: 50px;
`;

export const NavLink = styled(Link)`
	color: #808080;
	display: flex;
	align-items: center;
	text-decoration: none;
	font-size: 18px;
	text-transform: uppercase;
	padding: 0 20px;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #000000;
	}
`;
