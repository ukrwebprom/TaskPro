import React from "react";
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';
import css from './MainButton.module.css';

const MainButton = ({
  btnName,
  iconName,
  onClick,
  ...btnProps
}) => {
  console.log('iconName', iconName);
  return (
    <button
      className={css.btn}
      type="button"
      onClick={onClick}
      {...btnProps}
    >
      <div className={css.btnContext}>
        {!!iconName?.length && (
          <div className={css.iconBtn}>
            <Icon
              color='rgba(255, 255, 255, 1)'
              name={iconName}
              width='14px'
              height='14px'
            />
          </div>
        )}
        <p className={css.buttonName}>{btnName}</p>
      </div>
    </button>
  );
};

MainButton.propTypes = {
  btnName: PropTypes.string.isRequired,
  btnProps: PropTypes.object,
  iconName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default MainButton;