import React from "react";
import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";
import Icon from "components/Icon/Icon";
import s from "..//components/WelcomeLayout/WelcomeLayout.module.css";
import { Suspense } from "react";

const Welcome = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <WelcomeLayout>
        <img
          src="..//images/welcome-page.png"
          alt="welcome"
          width="162"
          height="162"
        />
        <div className={s.logowrap}>
          <Icon name="#icon-welcome-icon" width="48" height="48" />
          <h1 className={s.title}>Task Pro</h1>
        </div>
        <div className={s.paragraph}>
          <p>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
          </p>
        </div>
        <button className={s.regbtn}>
          <a className={s.regbtntext} href="auth/register">
            Registration
          </a>
        </button>
        <a href="auth/login" className={s.logintext}>
          Log In
        </a>
        <a href={"http://localhost:3001/user/google"}>Login with Google</a>
        {/* https://taskpro-41yf.onrender.com */}
        {/* http://localhost:3001 */}

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
