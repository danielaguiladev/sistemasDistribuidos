import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Search from './Search';
import ButtonBase from '@material-ui/core/ButtonBase';
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
	img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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
			<Grid container spacing={3} key={r.trackId}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<Grid container spacing={2}>
							<Grid item>
								<ButtonBase className={classes.image}>
									<img className={classes.img} alt="complex" src={r.artworkUrl100} />
								</ButtonBase>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={2}>
									<Grid item xs>
										<Link
											component="button"
											variant="body1"
											onClick={() => {
												window.location.href = !error ? r.artistViewUrl : r.artistViewUrl//"https://" + r.link : r.link
											}}
										>
											{r.trackName}
										</Link>
										<Typography variant="body2">
											${r.trackPrice}
										</Typography>
										<Typography variant="body2">
											{r.contentAdvisoryRating}
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

export default function Results({ resultsArray, setShowResults }) {
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
			<Button
				variant="contained"
				className={classes.button}
				onClick={() => window.location.reload()}
			>
        <HomeIcon className={classes.rightIcon} color="primary" />
        Voltar
      </Button>
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