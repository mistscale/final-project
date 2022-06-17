import React from 'react';
import { Nav, NavLink } from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to='/' activeStyle>
					Home
				</NavLink>
				<NavLink to='/neweventform' activeStyle>
					Create New Event
				</NavLink>
				<NavLink to='/myevents' activeStyle>
					My Events
				</NavLink>
				<NavLink to='/signup' activeStyle>
					Sign Up
				</NavLink>
			</Nav>
		</>
	);
};

export default Navbar;
