import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import user from 'reducers/user';

const MyEvents = () => {
	const accessToken = useSelector((store) => store.user.accessToken);
	const userId = useSelector((store) => store.user.userId);

	const navigate = useNavigate();

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
			// body: JSON.stringify({
			// 	title: title,
			// 	date: date,
			// 	location: location,
			// 	category: category,
			// 	details: details,
			// 	user: userId,
			// }),
		};

		fetch(
			`https://final-project-eventapp.herokuapp.com/events/${userId}`,
			options
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	});
};

export default MyEvents;
