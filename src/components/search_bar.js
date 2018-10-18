import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { MdSearch } from "react-icons/md";
import '../styles/search_bar.scss';

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
      <div className="search-bar-container">
        <div className="search-bar">
          <MdSearch className="icon" />
          <DebounceInput
            debounceTimeout={70}
            value={this.state.term}
            placeholder="Enter a food or additive"
            onChange={e => this.onInputChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
