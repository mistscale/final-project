import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { EVENT_URL } from 'utils/urls';
import user from 'reducers/user';

import Button from '@mui/material/Button';

const MyEvents = () => {
	const accessToken = useSelector((store) => store.user.accessToken);
	const userId = useSelector((store) => store.user.userId);

	const [events, setEvents] = useState({});

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!accessToken) {
			navigate('/');
		}
	}, [accessToken, navigate]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: accessToken,
			},
		};

		fetch(
			`https://final-project-eventapp.herokuapp.com/events/${userId}`,
			options
		)
			.then((res) => res.json())
			.then((events) => setEvents(events));
	}, [accessToken]);
	console.log(events);

	return (
		<>
			<Button
				variant='outlined'
				onClick={() => {
					dispatch(user.actions.setAccessToken(null));
				}}
			>
				Log out
			</Button>
		</>
	);
};

export default MyEvents;
