import {lazy} from 'react';
import { Routes, Route } from "react-router-dom";
import {PrivateRoute} from "routes/PrivateRoute";
import {RestrictedRoute} from 'routes/RestrictedRoute';
import { Navigate } from "react-router-dom";
import { NoRoute } from 'pages/404';
import { NoBoard } from 'components/NoBoard/NoBoard';
import { useUser } from 'hooks/useUser';

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./pages/Auth'));
const Welcome = lazy(() => import('./pages/Welcome'));
const DashBoard = lazy(() => import('./components/Dashboard/Dashboard'));
const Screens = lazy(() => import('./pages/Screens'));

function App() {
  const {isLogged} = useUser();

  return (
    <div className='App'>
      {(isLogged === null)? <p>Checking user</p>
      :
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route index element={<Navigate to='/home' />} />
          <Route path='home' element={<Home />}>
            <Route index element={<NoBoard />} />
            <Route path=':boardName' element={<Screens />} />
          </Route>
        </Route>
        
        <Route path='/' element={<RestrictedRoute />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/auth/:id" element={<Auth />} />
        </Route>
        
        <Route path="*" element={<NoRoute />} />
      </Routes>}
    </div>
  );
}

export default App;
