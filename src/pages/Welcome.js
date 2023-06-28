import React from "react";
import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";
import Icon from "components/Icon/Icon";
import { Suspense } from "react";

const Welcome = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <WelcomeLayout>
        <div className="logowrap">
          <Icon className="#logo-icon" />
        </div>
        <h1>Task Pro</h1>
        <a href="auth/register">Register</a>
        <a href="auth/login">Login</a>
        <a href={"http://localhost:3001/user/google"}>Login with Google</a>

        {/* example of using SVG sprite */}
        {/*       <div style={{display:'flex', gap: '10px', alignItems:'center'}}>
        <p>Project icons:</p>
        <Icon name="#board1" />
        <Icon name="#board2" />
        <Icon name="#board3" />
        <Icon name="#board4" />
        <Icon name="#board5" />
        <Icon name="#board6" />
        <Icon name="#board7" />
        <Icon name="#board8" />
      </div>
      <div style={{display:'flex', gap: '10px', alignItems:'center'}}>
      <p>UI:</p>
        <Icon name="#arrow-circle-icon" />
        <Icon name="#bell-icon" />
        <Icon name="#chevron-down-icon" />
        <Icon name="#close-icon" />
        <Icon name="#eye-icon" />
        <Icon name="#filter-icon" />
        <Icon name="#help-circle-icon" />
        <Icon name="#login-icon" width='32px' height='32px' color='#bedbb0' />
        <Icon name="#logo-icon" />
        <Icon name="#menu-icon" />
        <Icon name="#pencil-icon" />
        <Icon name="#plus-icon" />
        <Icon name="#trash-icon" />
      </div> */}
      </WelcomeLayout>
    </Suspense>
  );
};

export default Welcome;
