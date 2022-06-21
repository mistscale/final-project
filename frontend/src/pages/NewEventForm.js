import React, { useState, useEffect } from 'react';
import { EVENT_URL } from 'utils/urls';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import { useSelector } from 'react-redux';


import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

import Navbar from 'components/Navbar';

const NewEventForm = () => {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [location, setLocation] = useState('');
	const [category, setCategory] = useState('');
	const [details, setDetails] = useState('');
	
	const theme = createTheme();

	const accessToken = useSelector((store) => store.user.accessToken);

	const userId = useSelector((store) => store.user.userId);

	const navigate = useNavigate();

	useEffect(() => {
		if (!accessToken) {
			navigate('/login');
		}
	}, [accessToken, navigate]);

	const onFormSubmit = (event) => {
		event.preventDefault();

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: accessToken,
			},
			body: JSON.stringify({
				title: title,
				date: date,
				location: location,
				category: category,
				details: details,
				user: userId,
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
<<<<<<< HEAD
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 9,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography component="h1" variant="h5">
						Create a Event
					</Typography>
					<Box component="form" noValidate onSubmit={onFormSubmit} sx={{ mt: 3 }}>
					<FormControl sx={{ m: 0, width: 400 }}>
						<InputLabel id="demo-multiple-name-label">Category</InputLabel>
						<Select
							labelId="category-label"
							id="category"
							required
							fullWidth
							label="Category"
							name="category"
							autoComplete="category"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						>
							<MenuItem value={10}>Kid's party</MenuItem>
							<MenuItem value={20}>After work</MenuItem>
							<MenuItem value={30}>Party</MenuItem>
						</Select>
					
				  </FormControl>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="title"
								label="Title"
								name="title"
								autoComplete="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="location"
								label="Location"
								type="location"
								id="location"
								autoComplete="location"
								value={location}
								onChange={(e) => setLocation(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="date"
								type="datetime-local"
								id="date"
								autoComplete="date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="details"
								label="Details"
								type="details"
								id="details"
								autoComplete="details"
								value={details}
								onChange={(e) => setDetails(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Submit
					</Button>
				</Box>
			</Box>
			{/* {errorMessage !== null && (
          <Alert severity="error">{errorMessage}</Alert>
        )} */}
		</Container>
		</ThemeProvider >
=======
		<>
			<Navbar />
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
		</>
>>>>>>> myevents
	);
};

export default NewEventForm;
