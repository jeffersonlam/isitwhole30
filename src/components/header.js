import React, { Component } from 'react';

import NavIcon from './nav_icon';

import '../styles/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavIcon />
        <h1 className="heading">Whole30 Compliance</h1>
      </div>
    );
  }
}

export default Header;
