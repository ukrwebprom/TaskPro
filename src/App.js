import { useUser } from "./hooks/useUser";
import { ThemeSelector } from "./components/ThemeSelector/ThemeSelector";
import Home from "pages/Home";

function App() {
  const { isLogged, setAuthToken, theme } = useUser();

  return (
    <div className='App' data-theme={theme}>
      <Home />
    </div>
  );
}

export default App;
