import { Component } from 'react';
import propTypes from 'prop-types';
import { Backdrop, Content } from './Modal.styled';
import { createPortal } from 'react-dom';

const ModalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toogleModal();
    }
  };

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.toogleModal();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleClickBackdrop}>
        <Content>
          <img
            src={this.props.currentImageUrl}
            alt={this.props.currentImageDescription}
          />
        </Content>
      </Backdrop>,
      ModalRoot
    );
  }
}

Modal.propTypes = {
  toogleModal: propTypes.func.isRequired,
};
