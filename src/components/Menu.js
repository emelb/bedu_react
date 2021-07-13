import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { RUTAS } from '../helpers/constants'

const Menu = () => {
	return (
		<Grid container spacing={3}>
			<Grid item lg={3} sm={6} xs={12}>
				<Link className="foto" to={RUTAS.rodadas}>
					Rodadas
				</Link>
			</Grid>
			<Grid item lg={3} sm={6} xs={12}>
				<Link className="foto" to={RUTAS.grupos}>
					Grupos
				</Link>
			</Grid>
			<Grid item lg={3} sm={6} xs={12}>
				<Link className="foto" to={RUTAS.registroGrupos}>
					Crear Grupo
				</Link>
			</Grid>
			<Grid item lg={3} sm={6} xs={12}>
				<Link className="foto" to={RUTAS.registroRodadas}>
					Crear Rodada
				</Link>
			</Grid>
		</Grid>
	);
};

export default Menu;
