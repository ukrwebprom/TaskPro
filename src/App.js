import {lazy} from 'react';
import { useUser } from "./hooks/useUser";
import { ThemeSelector } from "./components/ThemeSelector/ThemeSelector";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "routes/PrivateRoute";
import { RestrictedRoute } from 'routes/RestrictedRoute';

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./pages/Auth'));
const Welcome = lazy(() => import('./pages/Welcome'));
const Screens = lazy(() => import('./pages/Screens'));

function App() {
  const { isLogged, setAuthToken, theme } = useUser();
  return (
    <div className='App' data-theme={theme}>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='home' element={<Home />}>
            <Route path=':id' element={<Screens />} />
          </Route>
          
        </Route>
        <Route path='/' element={<RestrictedRoute />}>
          <Route path='welcome' element={<Welcome />} />
          <Route path='auth' element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
