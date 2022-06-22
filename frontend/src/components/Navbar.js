import React from 'react';
import user from 'reducers/user';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to='/neweventform'>Create New Event</NavLink>
				<NavLink to='/myevents'>My Events</NavLink>
				<NavLink
					to='/'
					onClick={() => {
						localStorage.removeItem('user');
						dispatch(user.actions.setAccessToken(null));
					}}
				>
					Log Out
				</NavLink>
			</Nav>
		</>
	);
};

const Nav = styled.nav`
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

const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	text-transform: uppercase;
	padding: 5px 20px;
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

export default Navbar;
