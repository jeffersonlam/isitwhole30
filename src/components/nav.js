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
          className="hamburger-x-icon"
          htmlFor="hamburger-x"
        >
          <div></div>
          <div></div>
          <div></div>
        </label>
        <div className="nav-content">
          <h4>Whole30 Compliance</h4>
          <p>Disclaimer: This app's contents are incomplete. This app is not affiliated with the official Whole30 brand or organization. Please double check info through the <a href="https://forum.whole30.com/">Whole30 forums</a> or another official source.</p>
          <p>Made by <a href="http://jeffersonlam.com">Jefferson Lam</a>. View the <a href="https://github.com/jeffersonlam/whole30compliance">Github repo</a>.</p>
        </div>
      </div>
    );
  }
}

export default Nav;
