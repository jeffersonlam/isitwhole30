import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { MdSearch } from "react-icons/md";
import '../styles/search_bar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    const { term } = this.props;
    this.state = {
      term: term || ''
    };

    if (this.state.term) {
      this.props.foodSearch(this.state.term);
    }
  }

  onInputChange(e) {
    this.setState({term: e.target.value}, () => {
      this.props.foodSearch(this.state.term);
      this.props.updateQuery(this.state.term);
    });
  }

  render() {
    return (
      <div className="search-bar-container">
        <div className="search-bar">
          <MdSearch className="icon" />
          <DebounceInput
            debounceTimeout={80}
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
