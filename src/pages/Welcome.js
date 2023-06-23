import React from "react";
import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";
import Icon from "components/Icon/Icon";

const Welcome = () => {
  return (
    <WelcomeLayout>
      <h1>You are welcome!</h1>
      <a href='auth/login'>Login</a>
      <a href='auth/register'>Register</a>

      {/* example of using SVG sprite */}
      <div>
        <Icon
          name={"#colors-icon"}
          sprite={1}
          width='50'
          height='50'
          stroke={"#bedbb0"}
          fill={"#bedbb0"}
        />
        <Icon
          name={"#bell-icon"}
          sprite={2}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
        <Icon
          sprite={2}
          name={"#arrow-circle-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
        <Icon
          sprite={2}
          name={"#chevron-down-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
        <Icon
          sprite={2}
          name={"#close-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
        <Icon
          sprite={2}
          name={"#eye-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
        <Icon
          sprite={2}
          name={"#filter-icon"}
          width='50'
          height='50'
          stroke={"#bedbb0"}
        />
      </div>
    </WelcomeLayout>
  );
};

export default Welcome;
