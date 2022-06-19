import React from 'react';
import { Nav, NavLink } from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/neweventform'>Create New Event</NavLink>
				<NavLink to='/myevents'>My Events</NavLink>
				<NavLink to='/login'>Log In</NavLink>
			</Nav>
		</>
	);
};

export default Navbar;
