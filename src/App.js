import "./App.css";
import { LoginForm } from "./components/forms/AuthForm/LoginForm";
import { RegisterForm } from "./components/forms/AuthForm/RegisterForm";

function App() {
  return (
    <div className="App">
      <h1>TaskPro</h1>
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
