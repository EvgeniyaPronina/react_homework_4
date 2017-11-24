import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = { selected: 'CardNumberHolder' };

  hendleChildClick = e => {
    let childName = e.target.getAttribute('data-name');
    this.setState({ selected: childName });
  };

  render() {
    const { selected } = this.state;
    const { children } = this.props;

    return (
      <div className="Switcher">
        <nav className="children-names">
          <ul>
            {children.map((child, i) => {
              return (
                <li
                  key={child.type.name}
                  onClick={this.hendleChildClick}
                  data-name={child.type.name}
                >
                  {child.type.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <hr />
        <div className="children-cont">
          {children.map((child, i) => {
            return child.type.name === selected ? child : null;
          })}
        </div>
      </div>
    );
  }
}

export default Switcher;

{
  /*{React.Children.map(Children,*/
}
{
  /*child => child.type.name === selected ? child : null*/
}
{
  /*)}*/
}
