import React from "react";

const Icon = ({
  path,
  width,
  height,
  fill,
  stroke
  }) => {
    return (
        <svg className='icon' width={width} height={height} fill={fill} stroke={stroke}>
          <use href={path}></use>
        </svg>
    );
  };
  export default Icon;