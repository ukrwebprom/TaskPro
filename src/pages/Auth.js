import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";
import { useParams } from "react-router-dom";
import { LoginForm } from "components/forms/LoginForm/LoginForm";
import { RegisterForm } from "components/forms/RegisterForm/RegisterForm";
import { Suspense } from "react";

const Auth = () => {
  const { id } = useParams();
  const getForm = (id) => {
    switch(id) {
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
      default:
        return <LoginForm />;
    }
  }
  return (
    <Suspense fallback={<p>Loading...</p>}>
    <WelcomeLayout>
      {getForm(id)}
    </WelcomeLayout>
    </Suspense>
  );
};

export default Auth;
