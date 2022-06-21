import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import image from '../images/welcome.jpg';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Welcome = () => {
	const navigate = useNavigate();
	const handleOnClickLogIn = () => {
		navigate('/login');
	};
	const handleOnClickSignUp = () => {
		navigate('/signup');
	};
	return (
		<WelcomeWrapper>
			<img src={image} alt='illustration of a calendar' width='100%' />
			<Typography variant='h6' gutterBottom>
				Welcome to EventApp!
			</Typography>
			<Typography variant='body1' gutterBottom>
				To create an event and start planning, you need to log in to your
				account or sign up to create a new account.
			</Typography>
			<ButtonWrapper>
				<Button onClick={handleOnClickLogIn} variant='outlined'>
					Log In
				</Button>
				<Button onClick={handleOnClickSignUp} variant='outlined'>
					Sign Up
				</Button>
			</ButtonWrapper>
		</WelcomeWrapper>
	);
};

const WelcomeWrapper = styled.div`
	width: 80%;
	max-width: 600px;
	margin: auto;
	background-color: #fff;
	padding: 20px;
	text-align: center;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin: 20px;
`;

export default Welcome;
