import { useEffect } from 'react';
import propTypes from 'prop-types';
import { Backdrop, Content } from './Modal.styled';
import { createPortal } from 'react-dom';

const ModalRoot = document.querySelector('#modal-root');

export const Modal = ({
  currentImageUrl,
  currentImageDescription,
  toogleModal,
}) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      toogleModal();
    }
  };

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      toogleModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
      <Content>
        <img src={currentImageUrl} alt={currentImageDescription} />
      </Content>
    </Backdrop>,
    ModalRoot
  );
};

Modal.propTypes = {
  toogleModal: propTypes.func.isRequired,
  currentImageUrl: propTypes.string.isRequired,
  currentImageDescription: propTypes.string.isRequired,
};
