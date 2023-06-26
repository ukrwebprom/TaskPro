import { WelcomeLayout } from "components/WelcomeLayout/WelcomeLayout";
import { useParams } from "react-router-dom";
import { LoginForm } from "components/forms/LoginForm/LoginForm";
import { RegisterForm } from "components/forms/RegisterForm/RegisterForm";
import { Suspense } from "react";
import Task from 'components/Task/Task';

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
      <div style={{ paddingLeft: 10 }}>
        <Task
          columnList={[{name: 'TODO'}, {name: 'Done'}]}
          taskData={{
            id: 'frepgm23r-43r4--43rrwefv',
            levelIndex: 0,
            endDate: new Date(),
            title: 'The Watch Spot Design',
            description:
              "Create a visually stunning and eye-catching watch dial design that embodies our brand's  essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",
          }}
        />
      </div>
      {getForm(id)}
    </WelcomeLayout>
    </Suspense>
  );
};

export default Auth;
