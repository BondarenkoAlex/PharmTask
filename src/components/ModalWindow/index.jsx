import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import './style.scss';

class ModalWindow extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.modalRoot = document.getElementById('modal-root');
    this.el = document.createElement('div');
    this.el.classList.add('modal-window');
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
    this.el.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    this.el.removeEventListener('click', this.onClick);
    this.modalRoot.removeChild(this.el);
  }

  onClick(e) {
    if (e.target === this.el) {
      this.props.onClick(e);
    }
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

ModalWindow.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func.isRequired,
};
ModalWindow.defaultProps = {
  children: null,
};

export default ModalWindow;

