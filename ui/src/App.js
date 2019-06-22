import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './App.css';
import Search from './Search';
import Results from './Results';
import { surprise } from './Surprise';

const styles = () => ({
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

class App extends React.Component {
  state = {
    showResults: false,
    loading: false,
    error: false,
  };

  setShowResults = (searchValue) => {
    this.setState({ loading: true })
    this.get(searchValue)
  }

  async get(searchValue) {
    this.setState({ error: false })
    if (searchValue) {
      await axios.get(`https://cors.io/?https://gulugulu.herokuapp.com/search?query=${searchValue}`, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
        .then((response) => {
          if (response.data.results.length > 0) {
            this.setState({ showResults: !this.state.showResults, results: response.data.results, loading: false });
          } else {
            this.setState({ loading: false, error: true })
          }
        })
        .catch(e => {
          this.setState({ loading: false, error: true })
        })
    }
    this.setState({ loading: false })
  }

  render() {
    console.log(surprise);
    const { classes } = this.props;
    const { showResults, results, loading, error } = this.state;
    return (
      <div className={classes.bodyWhite}>
        <div className={showResults ? classes.app_no_margin : classes.app}>
          {
            showResults
              ? <Results resultsArray={results} setShowResults={this.setShowResults} />
              : <Search setShowResults={this.setShowResults} loading={loading} error={error}/>
          }
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App);
