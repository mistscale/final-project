import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
//import { EVENT_URL } from 'utils/urls';
import image from '../images/welcome.jpg';
import user from 'reducers/user';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
			<EventWrapper>
				{events.map((item) => (
					<Card sx={{ maxWidth: 400 }} key={item._id}>
						<CardMedia
							component='img'
							height='140'
							src={image}
							alt='event image'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								{item.title}
							</Typography>
							<Typography variant='subtitle1' gutterBottom>
								{item.category}
							</Typography>
							<Typography variant='body1' gutterBottom>
								<Bold>When:</Bold> {item.date}
							</Typography>
							<Typography variant='body1' gutterBottom>
								<Bold>Where:</Bold> {item.location}
							</Typography>
							<Typography variant='body1' gutterBottom>
								<Bold>Details:</Bold> {item.details}
							</Typography>
						</CardContent>
					</Card>
				))}
			</EventWrapper>
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

const EventWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	gap: 40px;
	margin: 50px;
	@media (min-width: 667px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const Bold = styled.span`
	font-weight: 500;
`;

export default MyEvents;
