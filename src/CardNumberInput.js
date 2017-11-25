import React, { Component } from 'react';

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    };
  }

  componentWillReceiveProps(newProps) {
    const { cardNumber } = newProps;
    let formated = this.format(cardNumber);
    this.setState({ number: formated });
  }

  componentWillMount() {
    const { cardNumber } = this.props;
    let formated = this.format(cardNumber);
    this.setState({ number: formated });
  }

  handleChangeInput = e => {
    const { onChange } = this.props;
    let inputVal = e.target.value;
    let normilized = this.normalize(inputVal);

    onChange(normilized);
  };

  format = value => (value ? value.toString().replace(/\d{4}/g, `$& `) : '');

  normalize = value => (value ? value.toString().replace(/[^\d]/g, '') : '');

  render() {
    return (
      <input
        type="text"
        className="CardNumberInput"
        value={this.state.number}
        onChange={this.handleChangeInput}
      />
    );
  }
}

export default CardNumberInput;
