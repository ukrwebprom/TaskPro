import css from './Modal.module.css';

const Popover = ({ children, onClose, position }) => {
    return (
        <div className={css.backdrop} onClick={onClose}>
        <div className={css.popoverContent} 
          style={{...position}} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };
export default Popover;