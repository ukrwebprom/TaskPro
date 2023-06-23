import {lazy} from 'react';
import { Routes, Route } from "react-router-dom";
import {PrivateRoute} from "routes/PrivateRoute";
import {RestrictedRoute} from 'routes/RestrictedRoute';
import { LoginForm } from 'components/forms/LoginForm/LoginForm';
import { RegisterForm } from 'components/forms/RegisterForm/RegisterForm';
import { NoRoute } from 'pages/404';
import { NoBoard } from 'components/NoBoard/NoBoard';

const Home = lazy(() => import('./pages/Home'));
const Auth = lazy(() => import('./pages/Auth'));
const Welcome = lazy(() => import('./pages/Welcome'));
const Screens = lazy(() => import('./pages/Screens'));

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='home' element={<Home />}>
            <Route index element={<NoBoard />} />
            <Route path=':id' element={<Screens />} />
          </Route>
        </Route>
        
        <Route path='/' element={<RestrictedRoute />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/auth" element={<Auth />}>
            <Route path='login' element={<LoginForm />} />
            <Route path='register' element={<RegisterForm />} />
          </Route>
        </Route>
        
        <Route path="*" element={<NoRoute />} />
      </Routes>
    </div>
  );
}

export default App;
