import React, { Component } from 'react';

class FoodListItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false,
    }
  }

  handleClick(e) {
    const active = this.state.active;
    this.setState({ active: !active });
  }

  render() {
    const { food } = this.props;
    const { compliant, warn } = food;
    const expandable = food.info.length > 0;
    let tabIcon = '';
    if (expandable) {
      tabIcon = this.state.active ? '▲' : '▼';
    }
    let complianceIcon = '❌';
    if (compliant) complianceIcon = '✅';
    if (warn) complianceIcon = '⚠️';

    return (
      <li
        className={`food-list-item
          ${compliant ? '' : 'non-'}compliant
          ${warn ? 'warn' : ''}
          ${expandable ? 'expandable' : ''}
          ${this.state.active ? 'active' : ''}
        `}
        onClick={expandable ? this.handleClick : undefined}
      >
        <div className="tab">
          <div className="tab-name">
            {complianceIcon} {food.name}
          </div>
          <div className="tab-icon">
            {tabIcon}
          </div>
        </div>
        <div className="expand">
          <p>
            {food.info}
          </p>
        </div>
      </li>
    );
  }
}

export default FoodListItem;
