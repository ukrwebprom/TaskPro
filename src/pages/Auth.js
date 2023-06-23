import { Outlet } from "react-router-dom";
import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";
const Auth = () => {
  return (
    <WelcomeLayout>
      <h1>Auth</h1>
      <a href="/auth/login">Login</a>
      <a href="/auth/register">Register</a>
      <Outlet />
    </WelcomeLayout>
  );
};

export default Auth;
