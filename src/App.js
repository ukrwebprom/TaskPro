import "./App.css";
import { useTheme } from "./hooks/useTheme";
import { ThemeSelector } from "./components/ThemeSelector/ThemeSelector";
// import { useEffect } from 'react';

function App() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className="App" data-theme={theme}>
      <h1>TaskPro</h1>
      <ThemeSelector />
    </div>
  );
}

export default App;
