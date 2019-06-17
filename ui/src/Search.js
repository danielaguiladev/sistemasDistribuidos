import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	bodyBlack: {
		backgroundColor: '#000',
		height: '100vh'
	},
	bodyWhite: {
		backgroundColor: '#fff',
	},
	root: {
		padding: '2px 4px',
		display: 'flex',
		width: 400,
		margin: '0 auto',
	},
	fill: {
		display: 'flex',
		width: '98vw',
		margin: '1vw',
	},
	input: {
		marginLeft: 8,
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		width: 1,
		height: 28,
		margin: 4,
	},
	thanos: {
		position: 'fixed',
		right: 10,
		bottom: 5,
	},
	app: {
		margin: '40vh auto 0',
		fontSize: 18,
		transition: 'all .55s'
	},
	app_no_margin: {
	}
});

function click(searchValue) {
	console.log('click!', searchValue);
	window.location.href = "/results"
}

function renderRedirect(redirect, searchValue) {
	// redirect &&
	// return <Redirect to={{
	// 	pathname: "/results",
	// 	state: searchValue
	// }} />
}

function Search({ fill }) {
	const classes = useStyles();
	const [searchValue, setSearchValue, redirect, setRedirect] = useState(0);
	
	return (
		<Paper className={fill ? classes.fill : classes.root}>
			{renderRedirect(redirect, searchValue)}
			<InputBase onChange={(e) => setSearchValue(e.target.value)} className={classes.input} placeholder="Busque aqui" />
			<Divider className={classes.divider} />
			<IconButton onClick={() => click(searchValue)} color="primary" className={classes.iconButton} aria-label="Directions">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}

export default Search;