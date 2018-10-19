import React, { Component } from 'react';
import DATA from '../data.json';

import SearchBar from './search_bar';
import FoodList from './food_list';
import Nav from './nav';

import '../styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: DATA,
      results: DATA,
      term: ''
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

  render() {
    return (
      <div className="App">
        <Nav />
        <SearchBar foodSearch={e => this.foodSearch(e)} />
        <FoodList foods={this.state.results} term={this.state.term} />
      </div>
    );
  }
}

export default App;
