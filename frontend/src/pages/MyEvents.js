import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8080/events';

const MyEvents = () => {
	const [myEvents, setMyEvents] = useState();

	useEffect(() => {
		fetchEvents();
	}, []);

	const options = {
		method: 'GET',
		headers: {
			Authorization:
				'3253b0166c620f4c5d9bb5b8674163736bd08a2df220000fa4c2d269a5a2cf2f189c9b60e30b67838693500328370457d6bb9868f2240509f063e275799ce5b3e458512fe0334b6ff436462107ccb64685ee4914ceb3dbb2960e299a86c0a0ec5e6e9dec8130cdaabdf94539d40423a385135be7b824ee99b383f77791bd045c',
		},
	};

	const fetchEvents = () => {
		fetch(API_URL, options)
			.then((res) => res.json())
			.then((data) => {
				setMyEvents(data);
				console.log(data);
			});
	};
};

export default MyEvents;
