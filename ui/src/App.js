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
  };

  setShowResults = (searchValue) => {
    this.setState({ loading: true })
    this.get(searchValue)
  }

  async get(searchValue) {
    if (searchValue) {
      const results = await axios.get(`https://cors.io/?https://itunes.apple.com/search?term=${searchValue.replace(' ', '+')}`, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
        .then((response) => {
          return response.data;
        })
      console.log(results)
      this.setState({ showResults: !this.state.showResults, results: results.results, loading: false }, () => console.log('DAMN', this.state));
    }
    this.setState({ loading: false })
  }

  render() {
    console.log(surprise);
    const { classes } = this.props;
    const { showResults, results, loading } = this.state;
    return (
      <div className={classes.bodyWhite}>
        <div className={showResults ? classes.app_no_margin : classes.app}>
          {
            showResults
              ? <Results resultsArray={results} setShowResults={this.setShowResults} />
              : <Search setShowResults={this.setShowResults} loading={loading} />
          }
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App);
