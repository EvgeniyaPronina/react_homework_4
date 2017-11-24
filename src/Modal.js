import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  render() {
    const { children, domNode } = this.props;
    return ReactDOM.createPortal(children, domNode);
  }
}

export default Modal;
