import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
//import { EVENT_URL } from 'utils/urls';
import image1 from '../images/kidsparty.jpg';
import image2 from '../images/af.jpg';
import image3 from '../images/party.jpg';
import user from 'reducers/user';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import swal from 'sweetalert';

const MyEvents = () => {
	const accessToken = useSelector((store) => store.user.accessToken);
	const userId = useSelector((store) => store.user.userId);

	const [events, setEvents] = useState([]);
	const [eventId, setEventId] = useState('');
	console.log(eventId);
	const handleDeleteClick = (eventId) => {
		const options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: accessToken,
			},
		};

		fetch(
			`https://final-project-eventapp.herokuapp.com/events/${eventId}`,
			options
		)
			.then((res) => res.json())
			.then((json) => setEventId(json.response));
		//window.location.reload()
	};
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
					<Card sx={{ maxWidth: 345 }} key={item._id}>
						{item.category === 'Kids party' && (
							<CardMedia
								component='img'
								height='140'
								src={image1}
								alt='kids party image'
							/>
						)}
						{item.category === 'After work' && (
							<CardMedia
								component='img'
								height='140'
								src={image2}
								alt='after work image'
							/>
						)}
						{item.category === 'Party' && (
							<CardMedia
								component='img'
								height='140'
								src={image3}
								alt='party image'
							/>
						)}
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								{item.title}
							</Typography>
							<Typography variant='body1' gutterBottom>
								{item.category}
							</Typography>
							<Typography variant='body1' gutterBottom>
								When: {item.date}
							</Typography>
							<Typography variant='body1' gutterBottom>
								Where: {item.location}
							</Typography>
							<Typography variant='body1' gutterBottom>
								Details: {item.details}
							</Typography>

							<Button
								variant='contained'
								type='button'
								onClick={() => {
									setEventId(item._id);
									swal({
										title: 'Are you sure?',
										text: 'Once deleted, you will not be able to recover this event!',
										icon: 'warning',
										buttons: true,
										dangerMode: true,
									}).then((willDelete) => {
										if (willDelete) {
											handleDeleteClick(item._id);
										} else {
											setEventId('');
										}
									});
								}}
							>
								Delete
							</Button>
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
	grid-template-columns: repeat(3, 1fr);
	gap: 40px;
	margin: 50px;
`;

export default MyEvents;
