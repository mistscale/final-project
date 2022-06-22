import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
	return (
		<Box
			sx={{ width: '100%', position: 'absolute', bottom: 15, color: '#999' }}
		>
			<Typography variant='body2' align='center'>
				EventApp {new Date().getFullYear()} - Final Project Technigo
			</Typography>
		</Box>
	);
};

export default Footer;
