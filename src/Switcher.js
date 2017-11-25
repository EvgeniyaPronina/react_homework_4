import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = { selectedChild: 0 };

  handleChangeChild = e => {
    let childId = +e.target.getAttribute('data-id');
    this.setState({ selectedChild: childId });
  };

  render() {
    const { selectedChild } = this.state;
    const { children } = this.props;

    return (
      <div className="Switcher">
        <nav className="children-names">
          <ul>
            {children.map((child, i) => {
              return (
                <li
                  className="component-list__name"
                  key={child.type.name}
                  onClick={this.handleChangeChild}
                  data-id={+i}
                >
                  {child.type.displayName
                    ? child.type.displayName
                    : child.type.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
        <div className="children-cont">
          {children.map((child, i) => {
            return i === selectedChild ? child : null;
          })}
        </div>
      </div>
    );
  }
}

export default Switcher;
