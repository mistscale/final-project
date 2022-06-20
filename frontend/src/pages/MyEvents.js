import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { EVENT_URL } from 'utils/urls';
import user from 'reducers/user';

import Button from '@mui/material/Button';

const MyEvents = () => {
	const accessToken = useSelector((store) => store.user.accessToken);
	const userId = useSelector((store) => store.user.userId);

	const [events, setEvents] = useState([]);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!accessToken) {
			navigate('/login');
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
			.then((json) => setEvents(json.response));
	}, [accessToken]);
	console.log(events);

	return (
		<>
			{events.map((item) => (
				<div key={item._id}>
					<p>{item.title}</p>
					<p>Date: {item.date}</p>
					<p>Location: {item.location}</p>
					<p>Category: {item.category}</p>
					<p>Details: {item.details}</p>
				</div>
			))}
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
