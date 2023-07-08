import css from './Modal.module.css';
import Icon from 'components/Icon/Icon';
import {useMedia} from 'react-use';

const Modal = ({ children, isOpen, name, onClose, position }) => {
  const isMobile = useMedia('(max-width: 480px)');
  return (
      <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal_content} 
        style={isMobile? {top:"50%", left:"50%", transform:"translate(-50%, -50%)", padding: 24} : {...position, padding: 24}} onClick={e => e.stopPropagation()}>
        <button className={css.close_button} onClick={onClose}>
          <Icon name={'#close-icon'} />
        </button>
        <div className={css.modal_items}>
          <h2 className={css.modal_title}>{name}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
