import React from "react";
import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";
import s from "..//components/WelcomeLayout/WelcomeLayout.module.css";
import { Suspense } from "react";
import goggle from "..//images/google.png"
import g from '../images/googlesignup.png'
const Welcome = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <WelcomeLayout>
        <a className={s.regbtn} href="auth/register">Registration</a>
        <a className={s.logintext} href="auth/login">Log In</a>
        <div  className={s.gogglelogin}>
        <img  className={s.goggleimage} src={g} alt="Google icon" />
        <a  className={s.logintext} href={"https://taskpro-41yf.onrender.com/user/google"}>
          Sign in with Google</a>
        </div>
      </WelcomeLayout>
    </Suspense>
  );
};

export default Welcome;
