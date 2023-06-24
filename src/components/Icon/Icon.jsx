import React from "react";
import boardPath from "../../fonts/board-sprite.svg";
import projectPath from "../../fonts/project-sprite.svg";

const Icon = ({
  name,
  sprite,
  width,
  height,
  fill,
  stroke
}) => {
  const iconsPath = {
  1: boardPath,
  2: projectPath
}

    return (
        <svg className='icon' width={width} height={height} fill={fill} stroke={stroke} sprite={sprite}>
          <use href={iconsPath[sprite]+name}></use>
        </svg>
    );
  };
  export default Icon;
