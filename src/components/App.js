import React, { Component } from 'react';
import DATA from '../data.json';
import queryString from 'query-string';

import ReactGA from 'react-ga';

import SearchBar from './search_bar';
import FoodList from './food_list';
import Nav from './nav';

import '../styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    const parsed = queryString.parse(this.props.location.search);
    this.state = {
      data: DATA,
      results: DATA,
      term: parsed.q || ''
    }
  }

  foodSearch(term) {
    let regex;
    const clean = term.replace(/[()]/g, '').toLowerCase();

    try {
      regex = new RegExp(clean, 'gi');
    } catch(err) {
      console.error(err);
      return;
    }

    const results = this.state.data.filter(food => food.name.match(regex));
    this.setState({ results, term: clean });
  }

  updateQuery(query) {
    this.props.history.push(`/search?q=${query}`);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <SearchBar term={this.state.term} foodSearch={e => this.foodSearch(e)} updateQuery={e => this.updateQuery(e)} />
        <FoodList foods={this.state.results} term={this.state.term} />
      </div>
    );
  }
}

ReactGA.initialize('UA-46392706-3');
ReactGA.pageview(window.location.pathname + window.location.search);

export default App;
