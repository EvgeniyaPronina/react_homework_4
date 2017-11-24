import React, { Component } from 'react';

class CardNumberInput extends Component {
  handleChangeInput = e => {
    const { onChange } = this.props;
    let inputVal = e.target.value;
    let inputCleared = inputVal.replace(/[^\d]/g, '').substring(0, 16);
    let inputFormatted =
      inputCleared !== '' ? inputCleared.match(/.{1,4}/g).join(' ') : '';

    onChange(inputFormatted);
  };

  render() {
    return (
      <input
        type="text"
        className="CardNumberInput"
        value={this.props.cardNumber}
        onChange={this.handleChangeInput}
      />
    );
  }
}

export default CardNumberInput;
