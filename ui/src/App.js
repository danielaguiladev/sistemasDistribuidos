import React, { useState } from 'react';
import './App.css';
import Thanos from "react-thanos";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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

function App() {
  const [snap, setSnap] = useState(null);
  const classes = useStyles();
  function busca() {
    console.log("BUSCA!");
  };
	return (
		<div className={snap ? classes.bodyBlack : classes.bodyWhite}>
      <div className={snap ? classes.app_no_margin : classes.app}>
          {
            !snap &&
              <Paper className={classes.root}>
                <InputBase className={classes.input} placeholder="Busque aqui" />
                <Divider className={classes.divider} />
                <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
                  <SearchIcon />
                </IconButton>
              </Paper>
          }
        <div className={classes.thanos}>
          <Thanos
            onSnap={() => {setSnap(true); busca()}}
            onSnapReverse={() => setSnap(false)}
          />
        </div>
      </div>
    </div>
	);
}

export default App;
