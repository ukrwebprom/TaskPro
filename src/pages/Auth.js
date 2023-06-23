import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";
import { useParams } from "react-router-dom";
import { LoginForm } from "components/forms/LoginForm/LoginForm";
import { RegisterForm } from "components/forms/RegisterForm/RegisterForm";

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
    <WelcomeLayout>
      {getForm(id)}
    </WelcomeLayout>
  );
};

export default Auth;
