import React from 'react';
import {Grid, Select, MenuItem, Card, CardContent, Typography } from '@material-ui/core';

const Rodadas = () => {
	const [data, setData] = React.useState({
		rodadas:JSON.parse(localStorage.getItem('rodadas')),
		grupos:JSON.parse(localStorage.getItem('grupos'))
	})

	return (
		<Grid container spacing={3}>
			<Grid item lg={3} sm={6} xs={12} align="justify">
				<Select className="options">
					<MenuItem  value="10">Grapefruit</MenuItem>
					<MenuItem  value="lime">Lime</MenuItem>
					<MenuItem  value="coconut">Coconut</MenuItem>
					<MenuItem  value="mango">Mango</MenuItem>
				</Select>
			</Grid>
			<Grid item lg={3} sm={6} xs={12} align="justify">
				<Select className="options">
					<MenuItem  value="10">Grapefruit</MenuItem>
					<MenuItem  value="lime">Lime</MenuItem>
					<MenuItem  value="coconut">Coconut</MenuItem>
					<MenuItem  value="mango">Mango</MenuItem>
				</Select>
			</Grid>
			<Grid item lg={3} sm={6} xs={12} align="justify">
				<Select className="options">
					<MenuItem  value="10">Grapefruit</MenuItem>
					<MenuItem  value="lime">Lime</MenuItem>
					<MenuItem  value="coconut">Coconut</MenuItem>
					<MenuItem  value="mango">Mango</MenuItem>
				</Select>
			</Grid>
			<Grid item lg={3} sm={6} xs={12} align="justify">
				<Select className="options">
					<MenuItem  value="10">Grapefruit</MenuItem>
					<MenuItem  value="lime">Lime</MenuItem>
					<MenuItem  value="coconut">Coconut</MenuItem>
					<MenuItem  value="mango">Mango</MenuItem>
				</Select>
			</Grid>
			{data.rodadas.map((element) => (
				<Grid item lg={4} md={4} sm={6} xs={6}>
					<Card>
						<CardContent>
							<Typography>
								{element.group}
							</Typography>
							<Typography>
								{element.destination}
							</Typography>
							<Typography>
								{element.type}
							</Typography>
							<Typography>
								{element.level}  {element.departure}
							</Typography>
							<Typography>
 							</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default Rodadas;
