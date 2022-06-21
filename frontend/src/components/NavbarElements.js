import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: auto;
	background-color: #fa9746;
	@media (min-width: 600px) {
		flex-direction: row;
		height: 60px;
	}
`;

export const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	text-transform: uppercase;
	padding: 0 20px;
	cursor: pointer;
	&.active {
		background-color: #ed7e2a;
		font-weight: 500;
	}
	&:hover {
		background-color: #ed7e2a;
		transition: 0.3s ease;
	}
`;
