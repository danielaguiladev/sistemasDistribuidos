import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
	bodyBlack: {
		backgroundColor: '#000',
		height: '100vh'
	},
	bodyWhite: {
		backgroundColor: '#fff',
	},
	root: {
		// padding: '2px 4px',
		display: 'flex',
		width: 400,
		margin: '0 auto',
	},
	fill: {
		display: 'flex',
		width: '97vw',
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
		height: 47,
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
	},
});

const CssTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: 'primary',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'primary',
			},
			'&:hover fieldset': {
				borderColor: 'transparent',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'transparent',
			},
		},
	},
})(TextField);

class Search extends React.Component {
	state = {
		searchValue: null,
	}

	click = (searchValue) => {
		this.props.setShowResults(searchValue);
	}

	setSearchValue = (e) => {
		this.setState({ searchValue: e });
	}

	keypress = (e, searchValue, loading) => {
		if (e.key === 'Enter' && !loading) {
			this.click(searchValue)
		}
	}

	render() {
		const { searchValue } = this.state;
		const { classes, fill, loading, error } = this.props;
		return (
			<Paper className={fill ? classes.fill : classes.root}>
				<CssTextField
					onChange={(e) => this.setSearchValue(e.target.value)}
					onKeyPress={(e) => this.keypress(e, searchValue, loading)}
					className={classes.root}
					label={error ? "Busca inválida!" : "Busque aqui"}
					variant="outlined"
					error={error}
				>
				</CssTextField>
				<Divider className={classes.divider} />
				<IconButton
					onClick={() => this.click(searchValue)}
					color="primary" className={classes.iconButton}
					aria-label="Directions"
				>
					{
						loading
							? <CircularProgress size={20} />
							: <SearchIcon />
					}
				</IconButton>
			</Paper>
		)
	}
}

export default withStyles(styles)(Search);
