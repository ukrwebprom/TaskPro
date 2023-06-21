import "./App.css";
import { RegisterForm } from "components/forms/RegisterForm/RegisterForm";
import { LoginForm } from "components/forms/LoginForm/LoginForm";
import { HelpForm } from "components/forms/HelpForm/HelpForm";

function App() {
  return (
    <div className="App">
      <h1>TaskPro</h1>
      <RegisterForm />
      <LoginForm />
      <HelpForm />
    </div>
  );
}

export default App;
