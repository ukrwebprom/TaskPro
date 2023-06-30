import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "routes/PrivateRoute";
import { RestrictedRoute } from "routes/RestrictedRoute";
import { Navigate } from "react-router-dom";
import { NoRoute } from "pages/404";
import { NoBoard } from "components/NoBoard/NoBoard";
// import { useUser } from 'hooks/useUser';
import { useAuth } from "hooks/useAuth";
import { getMe } from "redux/auth/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshTokens } from "redux/auth/slice";

const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth"));
const Welcome = lazy(() => import("./pages/Welcome"));
const DashBoard = lazy(() => import("./components/Dashboard/Dashboard"));
/* const Screens = lazy(() => import('./pages/Screens')); */

const getQueryToken = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get("token");
  const refreshToken = queryParams.get("refreshToken");

  return { token, refreshToken };
};

/* import Home from './pages/Home';
import Auth from './pages/Auth';
import Welcome from './pages/Welcome';
import DashBoard from './components/Dashboard/Dashboard';
import Screens from './pages/Screens'; */

function App() {
  // const { isLogged } = useUser();

  // const {isLogged} = useUser();
  const { isLoggedIn, isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const { token, refreshToken } = getQueryToken();
    if (token && refreshToken) {
      dispatch(refreshTokens({ token, refreshToken }));
    }

    dispatch(getMe());
  }, [dispatch]);

  return (
    <div className="App">
      {/* {(isLogged === null)? <p>Checking user</p> */}
      {isLoggedIn === null ? (
        <p>Checking user</p>
      ) : (
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route exact index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />}>
              <Route exact index element={<NoBoard />} />
              <Route path=":boardName" element={<DashBoard />} />
            </Route>
          </Route>

          <Route path="/" element={<RestrictedRoute />}>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/auth/:id" element={<Auth />} />
          </Route>

          <Route path="*" element={<NoRoute />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
