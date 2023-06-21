import './App.css';
import {useTheme} from './hooks/useTheme';
import { ThemeSelector } from './components/ThemeSelector/ThemeSelector';
import { Button } from './components/Button/Button';

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" data-theme={theme}>
      <h1>TaskPro</h1>
      <ThemeSelector />

    </div>
  );
}

export default App;
