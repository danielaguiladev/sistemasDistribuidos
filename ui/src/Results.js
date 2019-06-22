import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		flexDirection: 'row',
		padding: '3vw'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.text.secondary,
	},
	rightIcon: {
		marginRight: theme.spacing(1),
	},
	button: {
		margin: theme.spacing(1),
	},
}));

function HomeIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
		</SvgIcon>
	);
}

function renderResults(classes, results, error) {
	return (
		results.map(r =>
			<Grid container spacing={3} key={r.id}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={2}>
									<Grid item xs>
										<Link
											component="button"
											variant="body1"
											onClick={() => {
												window.open(r.link, "_blank")
											}}
										>
											{r.titulo}
										</Link>
										<Typography variant="body2">
											{r.link}
										</Typography>
										{!error && <Typography variant="body2">
											{r.trackViewUrl}
										</Typography>}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		)
	)
}

export default function Results({ resultsArray }) {
	const classes = useStyles();
	return (
		<>
			<Button
				variant="outlined"
				className={classes.button}
				onClick={() => window.location.reload()}
				color="primary"
			>
				<HomeIcon className={classes.rightIcon} color="primary" />
				Voltar
      		</Button>
			<div className={classes.root}>
				{resultsArray && renderResults(classes, resultsArray, false)}
			</div>
		</>
	);
}