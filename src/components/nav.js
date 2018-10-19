import React, { Component } from 'react';
import '../styles/nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <h1 className="heading">Whole30 Compliance</h1>
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
          <h3>About</h3>
          <p>This app was made by one Whole30er who got frustrated googling additives at the grocery all day. All listed items are manually copied from official Whole30 sources, including the book, website, and forums.</p>
          <h3>What is Whole30?</h3>
          <p><a href="https://whole30.com/">Whole30</a> is a 30 day detox where you only eat nutritious whole foods, primarily meat, vegetables, and fruit.</p>
          <blockquote>"Think of it as a short-term nutrition reset, designed to help you put an end to unhealthy cravings and habits, restore a healthy metabolism, heal your digestive tract, and balance your immune system."<br/>- <a href="https://whole30.com/step-one/">Whole30 Website</a></blockquote>
          <h3>Disclaimer</h3>
          <p>This app is not affiliated with the official Whole30 brand or organization. Information content is incomplete; please double check through the <a href="https://forum.whole30.com/">Whole30 forums</a>.</p>
          <p>Made by <a href="http://jeffersonlam.com">Jefferson Lam</a> • <a href="https://github.com/jeffersonlam/whole30compliance">Github</a> • circa 2018</p>
        </div>
      </div>
    );
  }
}

export default Nav;
