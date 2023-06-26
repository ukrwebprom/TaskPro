import React from 'react';

// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import Icon from 'components/Icon/Icon';

// const modalRoot = document.querySelector('#modal-root');

// const Modal = ({ children, onClose, onClick }) => {
//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   const handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       onClose();
//     }
//   };

//   const handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       onClose();
//     }
//   };
//   return createPortal(
//     <div className={css.backdrop} onClick={handleBackdropClick}>
//       <div className={css.modal_content}>
//         {children}
//       </div>
//     </div>,
//     modalRoot
//   );
// };

// export default Modal;

const Modal = ({ children, isOpen, name, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className={css.modal_content}>
        <button className={css.close_button} onClick={onClose}>
          <Icon
            sprite={2}
            name={'#close-icon'}
            width="18"
            height="18"
            stroke='var( --index-label-color)'
          />
        </button>
        <div className={css.modal_items}>
          <h2 className={css.modal_title}>{name}</h2>
        </div>
        <div className="modalBody">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
