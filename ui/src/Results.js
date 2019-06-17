import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Search from './Search';

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
	}
}));

function renderResults(classes, results, error) {
	return (
		results.map(r =>
			<Grid container spacing={3}>
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
												window.location.href = !error ? "https://" + r.link : r.link
											}}
											>
											{r.title}
    								</Link>
										{!error && <Typography variant="body2">
											{r.link}
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

export default function Results({resultsArray}) {
	const classes = useStyles();
	const error = [
		{
			id: 1,
			title: 'OPS! Parece que você ainda não fez uma busca.',
			link: '/',
		}
	]
	return (
		<>
			<Search fill/>
			<div className={classes.root}>
				{
					resultsArray ?
					renderResults(classes, resultsArray, false)
					: renderResults(classes, error, true)
				}
			</div>
		</>
	);
}