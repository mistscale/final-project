import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import format from 'date-fns/format';
//import { EVENT_URL } from 'utils/urls';
import image1 from '../images/kidsparty.jpg';
import image2 from '../images/af.jpg';
import image3 from '../images/party.jpg';

import Navbar from 'components/Navbar';

import Card from '@mui/material/Card';
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
		setTimeout(() => window.location.reload(), 500);
	};
	const navigate = useNavigate();

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

	return (
		<>
			<Navbar />
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
							<Typography variant='subtitle1' gutterBottom>
								{item.category}
							</Typography>
							<Typography variant='body1' gutterBottom>
								<Bold>When:</Bold>{' '}
								{format(new Date(item.date), 'eeee d MMMM yyyy')}
							</Typography>
							<Typography variant='body1' gutterBottom>
								<Bold>Time:</Bold> {format(new Date(item.date), 'HH:mm')}
							</Typography>
							<Typography variant='body1' gutterBottom>
								<Bold>Where:</Bold> {item.location}
							</Typography>
							<Typography variant='body1' gutterBottom>
								<Bold>Details:</Bold> {item.details}
							</Typography>
							<DeleteButton>
								<Button
									variant='text'
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
							</DeleteButton>
						</CardContent>
					</Card>
				))}
			</EventWrapper>
		</>
	);
};

const EventWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 40px;
	margin: 50px;
	@media (min-width: 667px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
		max-width: 1200px;
		margin: 50px auto;
	}
`;

const Bold = styled.span`
	font-weight: 500;
`;

const DeleteButton = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: -10px;
`;

export default MyEvents;
