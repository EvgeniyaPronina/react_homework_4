import React, { Component } from 'react';
import Modal from './Modal';

class ModalButton extends Component {
  state = { modalOpened: false };

  // showModal = (e) => {
  //     console.log(e.target.tagName)
  //     this.setState({modalOpened: true})
  // }

  handleClick = e => {
    const { modalOpened } = this.state;
    this.setState({ modalOpened: !modalOpened });
  };

  render() {
    const { modalOpened } = this.state;

    return (
      <div className="ModalContainer" onClick={this.handleClick}>
        <button className="ModalButton">Show modal</button>
        {modalOpened ? (
          <Modal domNode={document.querySelector('#modal')}>
            <h2>Modal window</h2>
            <button>Close</button>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default ModalButton;
