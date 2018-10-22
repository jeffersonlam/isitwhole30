import React, { Component } from 'react';
import ReactGA from 'react-ga';
import '../styles/nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <h1 className="heading">Is It Whole30?</h1>
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
          <p>Zinc gluconate? Tricalcium phosphate? What is this stuff? Is it Whole30? This app was made by one Whole30er who got frustrated googling obscure additives at the grocery store all day.</p>
          <p>All listed items are manually copied from official Whole30 sources, including the <ReactGA.OutboundLink eventLabel="amazon" to="https://www.amazon.com/dp/B00QEGI2GS/" target="_blank">book</ReactGA.OutboundLink>, <ReactGA.OutboundLink eventLabel="whole30resources" to="https://whole30.com/pdf-downloads/" target="_blank">website resources</ReactGA.OutboundLink>, and <ReactGA.OutboundLink eventLabel="whole30forums" to="https://forum.whole30.com/" target="_blank">forums</ReactGA.OutboundLink>.</p>
          <h3>What is Whole30?</h3>
          <p><ReactGA.OutboundLink eventLabel="whole30" to="https://whole30.com/" target="_blank">Whole30</ReactGA.OutboundLink> is a 30 day detox where you only eat nutritious whole foods, primarily meat, vegetables, and fruit.</p>
          <blockquote>"Think of it as a short-term nutrition reset, designed to help you put an end to unhealthy cravings and habits, restore a healthy metabolism, heal your digestive tract, and balance your immune system."<br/>- <ReactGA.OutboundLink eventLabel="whole30stepone" to="https://whole30.com/step-one/" target="_blank">Whole30 Website</ReactGA.OutboundLink></blockquote>
          <h3>Disclaimer</h3>
          <p>This app is not affiliated with the official Whole30 brand or organization. Information content is incomplete; please double check through the <ReactGA.OutboundLink eventLabel="whole30forums2" to="https://forum.whole30.com/" target="_blank">Whole30 forums</ReactGA.OutboundLink>.</p>

          <footer>
            Made by <ReactGA.OutboundLink
              eventLabel="jeffersonlam.com"
              to="http://jeffersonlam.com"
              target="_blank"
            >
              Jefferson Lam
            </ReactGA.OutboundLink>
            &nbsp;|&nbsp;
            <ReactGA.OutboundLink
              eventLabel="github"
              to="https://github.com/jeffersonlam/whole30compliance"
              target="_blank"
            >
              Github
            </ReactGA.OutboundLink> | circa 2018
          </footer>
        </div>
      </div>
    );
  }
}

export default Nav;
