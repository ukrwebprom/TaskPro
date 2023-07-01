import css from './Btn.module.css'
import Icon from 'components/Icon/Icon';

const Button = ({ type = 'button', title, icon=true, invert=false, action }) => {
  return (
    <button type={type} className={invert? css.invertBtn : css.btn} onClick={action} >
      {icon && 
        <div className={invert? css.invertIcon : css.wrapperIcon}>
          <Icon name={'#plus-icon'} />
        </div>}
      <span className={css.title}>{title}</span>
    </button>
  );
};
export default Button;
