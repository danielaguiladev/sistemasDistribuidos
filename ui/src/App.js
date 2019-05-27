import React from 'react';
import './App.css';
import Thanos from "react-thanos";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    width: 400,
    margin: '0 auto',
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
});

function App() {
  const classes = useStyles();
  function busca() {
    console.log("BUSCA!");
  };
	return (
		<div className='app'>
      <Paper className={classes.root}>
        <InputBase className={classes.input} placeholder="Busque aqui" />
        <Divider className={classes.divider} />
        <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className={classes.thanos}>
        <Thanos
          onSnap={() => busca()}
          onSnapReverse={() => busca()}
        />
      </div>
    </div>
	);
}

export default App;
