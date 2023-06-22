import { useUser } from "./hooks/useUser";
import { ThemeSelector } from "./components/ThemeSelector/ThemeSelector";
import Sidebar from "components/Sidebar";

function App() {
  const { isLogged, setAuthToken, theme } = useUser();

  return (
    <div className="App" data-theme={theme}>
      <h1>TaskPro</h1>
      <Sidebar />
      <ThemeSelector />
    </div>
  );
}

export default App;
