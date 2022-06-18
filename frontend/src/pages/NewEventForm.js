import React, { useState } from 'react';
import { EVENT_URL } from 'utils/urls';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import { useSelector } from 'react-redux';

const NewEventForm = () => {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [location, setLocation] = useState('');
	const [category, setCategory] = useState('');
	const [details, setDetails] = useState('');

	const accessToken = useSelector((store) => store.user.accessToken);

	const userId = useSelector((store) => store.user.userId)

	const navigate = useNavigate();

	const onFormSubmit = (event) => {
		event.preventDefault();

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					accessToken,
			},
			body: JSON.stringify({
				title: title,
				date: date,
				location: location,
				category: category,
				details: details,
				user: userId
			}),
		};
		fetch(EVENT_URL, options)
			.then((res) => res.json())
			.then((data) => {
				// window.location.reload()
				navigate('/myevents');
			});
	};

	return (
		<section>
			<h1>Create Event</h1>
			<form onSubmit={onFormSubmit}>
				<label>
					Event title
					<input
						name='title'
						type='text'
						value={title}
						required
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
				<label>
					Location
					<input
						name='location'
						type='text'
						value={location}
						required
						onChange={(e) => setLocation(e.target.value)}
					/>
				</label>
				<label>
					Date
					<input
						name='date'
						type='datetime-local'
						value={date}
						required
						onChange={(e) => setDate(e.target.value)}
					/>
				</label>
				<label>
					Category
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value='N/A'></option>
						<option value="Kid's birthday party">Kid's birthday party</option>
						<option value='After work'>After work</option>
						<option value='Party'>Party</option>
					</select>
				</label>
				<label>
					Details
					<input
						name='details'
						type='text'
						value={details}
						required
						onChange={(e) => setDetails(e.target.value)}
					/>
				</label>
				<button type='submit'>Submit event</button>
			</form>
		</section>
	);
};

export default NewEventForm;
