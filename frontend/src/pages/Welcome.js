import React from 'react';
import { useNavigate } from 'react-router-dom';

import image from '../images/welcome.jpg';

import Button from '@mui/material/Button';

const Welcome = () => {
	const navigate = useNavigate();
	const handleOnClickLogIn = () => {
		navigate('/login');
	};
	const handleOnClickSignUp = () => {
		navigate('/signup');
	};
	return (
		<div className='container'>
			<h1>Welcome to event planner app</h1>
			<img
				src={image}
				className='illustration'
				alt='illustration of a calendar'
			/>
			<p>
				To create an event you need to log in to your account or sign up to
				create a new account.
			</p>
			<Button onClick={handleOnClickLogIn} variant='outlined'>
				Log In
			</Button>
			<Button onClick={handleOnClickSignUp} variant='outlined'>
				Sign Up
			</Button>
		</div>
	);
};

export default Welcome;
