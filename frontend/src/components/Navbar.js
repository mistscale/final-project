import React from 'react';
import { Nav, NavLink } from './NavbarElements';
import user from 'reducers/user';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to='/neweventform'>Create New Event</NavLink>
				<NavLink to='/myevents'>My Events</NavLink>
				<NavLink
					to='/'
					onClick={() => {
						localStorage.removeItem("user");
						dispatch(user.actions.setAccessToken(null));
					}}
				>
					Log Out
				</NavLink>
			</Nav>
		</>
	);
};

export default Navbar;
