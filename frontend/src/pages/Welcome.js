import React from 'react';
import { useNavigate } from 'react-router-dom';

import illustration from '../images/illustration.jpg';

const Welcome = () => {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate('/signup');
	};
	return (
		<div className='container'>
			<h1>Welcome to event planner app</h1>
			<img
				src={illustration}
				className='illustration'
				alt='illustration of a party'
                
			/>
			<p>To create events you need to log in to your account or sign up</p>
			<button onClick={handleOnClick}>Click here to login/signup</button>
		</div>
	);
};

export default Welcome;
