import React from "react";
import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";
import boardPath from "../fonts/board-sprite.svg";
import projectPath from "../fonts/project-sprite.svg";
import Icon from "components/Icon/Icon";

const Welcome = () => {
  return (
    <WelcomeLayout>
      <h1>You are welcome!</h1>
      <a href='auth/login'>Login</a>
      <a href='auth/register'>Register</a>

      {/* example of using SVG sprite */}
      <div>
        <svg className='icon' width='50' height='50' stroke='gray'>
          <use href={boardPath + "#colors-icon"}></use>
        </svg>
        <svg className='icon' width='50' height='50' stroke='black'>
          <use href={boardPath + "#container-icon"}></use>
        </svg>

        <Icon
          path={projectPath + "#bell-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
        <Icon
          path={projectPath + "#arrow-circle-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
        <Icon
          path={projectPath + "#chevron-down-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
        <Icon
          path={projectPath + "#close-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
        <Icon
          path={projectPath + "#eye-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
        <Icon
          path={projectPath + "#filter-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
      </div>
    </WelcomeLayout>
  );
};

export default Welcome;
