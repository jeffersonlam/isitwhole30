import React, { Component } from 'react';

import NavIcon from './nav_icon';

import '../styles/header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="Header">
        <NavIcon toggleNav={this.props.toggleNav} navOpen={this.props.navOpen} />
        <h1 className="heading">Whole30 Compliance</h1>
      </div>
    );
  }
}

export default Header;
