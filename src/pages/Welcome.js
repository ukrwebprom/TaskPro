import React from "react";
import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";
import s from "..//components/WelcomeLayout/WelcomeLayout.module.css";
import { Suspense } from "react";
import g from '../images/googlesignup.png'
import mainimg from '../images/welcome-page.png'
import Icon from 'components/Icon/Icon'

const Welcome = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <WelcomeLayout>
        <img className={s.wecomeimage}
            src= {mainimg} 
            alt="welcome to TaskPro" />

        <div className={s.logowrap}>
            <Icon name="#icon-welcome-icon" width="48" height="48" />
            <h1 className={s.title}>Task Pro</h1>
        </div>
        <p className={s.paragraph}>
            Supercharge your productivity and take control of your tasks with
            Task Pro - Don't wait, start achieving your goals now!
        </p>
        <a className={s.regbtn} href="auth/register">Registration</a>
        <a className={s.logintext} href="auth/login">Log In</a>
        {/* <div  className={s.gogglelogin}>
        <img  className={s.goggleimage} src={g} alt="Google icon" /> */}
        <a  className={s.gogglelogin} href={"https://taskpro-41yf.onrender.com/user/google"}>
          Sign in with Google</a>
{/*         </div> */}
      </WelcomeLayout>
    </Suspense>
  );
};

export default Welcome;
