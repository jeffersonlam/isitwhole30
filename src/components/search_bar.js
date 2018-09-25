import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(e) {
    this.setState({term: e.target.value}, () => {
      this.props.foodSearch(this.state.term);
    });
  }

  render() {
    return (
      <div className="search-bar">
        <DebounceInput
          debounceTimeout={70}
          value={this.state.term}
          placeholder="Enter a food or additive"
          onChange={e => this.onInputChange(e)}
        />
      </div>
    );
  }
}

export default SearchBar;
