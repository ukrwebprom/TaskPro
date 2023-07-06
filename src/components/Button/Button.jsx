import css from './Btn.module.css'
import sprite from '../../images/sprite.svg'

const Button = ({ type = 'button', title, icon=true, invert=false, action }) => {
  return (
    <button type={type} className={invert? css.invertBtn : css.btn} onClick={action} >
      {icon && 
        <div className={invert? css.invertIcon : css.wrapperIcon}>
          <svg width='18px' height='18px' stroke="currentColor">
                      <use href={sprite + "#plus-icon"} />
          </svg>
        </div>}
      <span className={css.title}>{title}</span>
    </button>
  );
};
export default Button;
