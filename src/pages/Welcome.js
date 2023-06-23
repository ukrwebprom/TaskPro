import React from 'react';
import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";

const Welcome = () => {
  return (
    <WelcomeLayout>
      <h1>You are welcome!</h1>
      <a href="auth/login">Login</a>
      <a href="auth/register">Register</a>
    </WelcomeLayout>
  );
};

export default Welcome;
