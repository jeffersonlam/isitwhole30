import React, { Component } from 'react';
import '../styles/nav_icon.scss';

class NavIcon extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div
        className={`NavIcon ${this.props.navOpen ? 'active' : ''}`}
        onClick={this.props.toggleNav}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default NavIcon;
