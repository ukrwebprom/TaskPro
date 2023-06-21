import './App.css';
import {useTheme} from './hooks/useTheme';
import { useUser } from './hooks/useUser';
import { ThemeSelector } from './components/ThemeSelector/ThemeSelector';
import { useEffect } from 'react';

function App() {
  const { theme } = useTheme();
  const {isLogged} = useUser();
  console.log(isLogged)

  return (
    <div className="App" data-theme={theme}>
      <h1>TaskPro</h1>
      <ThemeSelector />
    </div>
  );
}

export default App;
