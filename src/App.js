import {useTheme} from './hooks/useTheme';
import { useUser } from './hooks/useUser';
import { ThemeSelector } from './components/ThemeSelector/ThemeSelector';

function App() {
  const { theme } = useTheme();
  const {isLogged} = useUser();

  return (
    <div className="App" data-theme={theme}>
      <h1>TaskPro</h1>
      <ThemeSelector />
    </div>
  );
}

export default App;
