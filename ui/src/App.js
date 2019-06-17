import React from 'react';
import { useRoutes } from 'hookrouter';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import Results from './Results';

const useStyles = makeStyles({
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
  app_no_margin: {}
});

const routes = {
  '/': () => <Search />,
  '/results': () => <Results />,
};

function App() {
  const classes = useStyles();
  const routeResult = useRoutes(routes);

	return (
		<div className={classes.bodyWhite}>
      <div className={(routeResult && (routeResult.type.name === 'Search')) ? classes.app: classes.app_no_margin}>
        {
          routeResult || <Search />
        }
      </div>
    </div>
	);
}

export default App;
