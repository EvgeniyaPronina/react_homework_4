import React, { Component } from 'react';
import Modal from './Modal';

class ModalButton extends Component {
  state = { isModalShow: false };

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  hideModal = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    const { isModalShow } = this.state;

    return (
      <div className="ModalContainer">
        <button className="ModalButton" onClick={this.showModal}>
          Show modal
        </button>
        {isModalShow ? (
          <Modal domNode={document.querySelector('#modal')}>
            <h2>Modal window</h2>
            <button onClick={this.hideModal}>Close</button>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default ModalButton;
