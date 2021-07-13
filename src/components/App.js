import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Menu from './Menu';
import Parrafos from './Rodadas';
import Rodadas from './Rodadas';
import { RUTAS } from '../helpers/constants';
import dataGrupo from '../data/grupos.json';
import dataRodadas from '../data/rodadas.json'

const App = () => {
	// const grupos = dataGrupo.map
	console.log(dataGrupo)
	localStorage.setItem('grupos', JSON.stringify(dataGrupo))
	localStorage.setItem('rodadas', JSON.stringify(dataRodadas))
	console.log(JSON.parse(localStorage.getItem('grupos')))
	return (
		<BrowserRouter>
			<Container>
				<Grid container>

					<Grid item xs={12} align="center">
						<h1>
							¿A dónde ruedo?
						</h1>
					</Grid>

					<Grid item xs={12}>
						<Menu />
					</Grid>

					<Route exact path={RUTAS.rodadas} component={Rodadas} />
					

				</Grid>
			</Container>
		</BrowserRouter>
	);
};

export default App;
