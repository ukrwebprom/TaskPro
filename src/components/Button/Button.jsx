import React from 'react';

const Button = ({ type = 'button', className, children, ...otherProps }) => {
  return (
    <button type={type} className={className} {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
