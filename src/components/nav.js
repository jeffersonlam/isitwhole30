import React, { Component } from 'react';
import '../styles/nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <input
          className="hamburger-x-input"
          id="hamburger-x"
          type="checkbox"
        />
        <label
          class="hamburger-x-icon"
          for="hamburger-x"
        >
          <div></div>
          <div></div>
          <div></div>
        </label>
        <div className="nav-content">
          <h4>Whole30 Compliance</h4>
          <p>Disclaimer: This app is not a 100% reliable information source and is not affiliated with the founders of Whole30. Please double check info through the <a href="https://forum.whole30.com/">Whole30 forums</a> or another veritable source.</p>
          <p>Made by <a href="http://jeffersonlam.com">Jefferson Lam</a>.</p>
        </div>
      </div>
    );
  }
}

export default Nav;
