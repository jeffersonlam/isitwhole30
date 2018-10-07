import React, { Component } from 'react';
import DATA from '../data.json';

import SearchBar from './search_bar';
import FoodList from './food_list';
import Header from './header';
import Nav from './nav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: DATA,
      results: DATA
    }
  }

  foodSearch(term) {
    const regex = new RegExp(term, 'gi');
    const results = this.state.data.filter(food => food.name.match(regex));
    this.setState({ results });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <SearchBar foodSearch={e => this.foodSearch(e)} />
        <FoodList foods={this.state.results} />
      </div>
    );
  }
}

export default App;
