import React, { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import styles from './Modal.module.css';
import { logoutUser } from 'redux/auth/authOperations';

// const modalRoot = document.querySelector('#modal-root');

function Modal({
  handleClickLeft,
  handleClickRight,
  onClose,
  modalTitle = 'Do you really want to leave?',
  styleReg,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.document.body.style.overflowY = 'visible';
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.modalWrapper} onClick={handleOverlayClick}>
      <div className={`${styles.modalContainer} ${styleReg}`}>
        <span className={styles.closeBtn} onClick={onClose}>
          &#10006;
        </span>

        <div className={styles.title}>
          <p>{modalTitle}</p>
        </div>

        <div className={styles.buttons}>
          <button className={styles.buttonStyles} onClick={handleLogout}>
            Yes
          </button>
          <button className={styles.buttonStyles} onClick={handleClickRight}>
            No
          </button>
        </div>
      </div>
    </div>
    // modalRoot,
  );
}

export default Modal;
