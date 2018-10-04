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
      results: DATA,
      navOpen: false
    }
  }

  foodSearch(term) {
    const regex = new RegExp(term, 'gi');
    const results = this.state.data.filter(food => food.name.match(regex));
    this.setState({ results });
  }

  toggleNav(e) {
    this.setState({navOpen: !this.state.navOpen});
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header toggleNav={e => this.toggleNav(e)} navOpen={this.state.navOpen} />
        <div className="container">
          <SearchBar foodSearch={e => this.foodSearch(e)} />
          <FoodList foods={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
