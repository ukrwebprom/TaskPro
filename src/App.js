import './App.css';
import {useTheme} from './hooks/useTheme';
import { ThemeSelector } from './components/ThemeSelector/ThemeSelector';

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
