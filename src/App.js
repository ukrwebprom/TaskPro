import './App.css';
import {useTheme} from './hooks/useTheme';
import { useUser } from './hooks/useUser';
import { ThemeSelector } from './components/ThemeSelector/ThemeSelector';
import { useEffect } from 'react';
import {BoardForm} from './components/forms/BoardForm/BoardForm'
import {HelpForm} from './components/forms/HelpForm/HelpForm'
import {LoginForm} from './components/forms/LoginForm/LoginForm'
import {RegisterForm} from './components/forms/RegisterForm/RegisterForm'

function App() {
  const { theme } = useTheme();
  const {isLogged} = useUser();
  console.log(isLogged)

  return (
    <div className="App" data-theme={theme}>
      <h1>TaskPro</h1>
      <ThemeSelector />
      <BoardForm/>
      <HelpForm/>
      <LoginForm/>
      <RegisterForm/>
    </div>
  );
}

export default App;
