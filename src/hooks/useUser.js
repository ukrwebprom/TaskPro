import { createContext, useContext, useState, useRef, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { getMe, updTheme, login, logout, register } from "api/ServerAPI";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [authToken, setAuthToken] = useLocalStorage("authToken", "");
  const [isLogged, setIsLogged] = useState(null);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("dark");
  const [avatar, setAvatar] = useState("none");
  const [currentBoard, setCurrentBoard] = useState(null);
  const initialized = useRef(false);

  const setUserTheme = async (newtheme) => {
    try {
      await updTheme(newtheme);
      setTheme(newtheme);
    } catch (err) {
      console.log(err);
    }
  };

  const userLogin = async (data) => {
    try {
      const res = await login(data);
      setIsLogged(true);
      setName(res.name);
      setTheme(res.theme);
      setAuthToken(res.token);
      if (res.avatar) setAvatar(res.avatar);
    } catch (err) {
      throw new Error(err);
    }
  };

  const userLoginWithGoogle = async () => {
    setIsLogged(true);
  };

  const userLogout = async () => {
    try {
      await logout();
      setName("");
      setAuthToken("");
      setIsLogged(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  const userRegister = async (data) => {
    try {
      await register(data);
      await userLogin({ email: data.email, password: data.password });
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    const init = async () => {
      initialized.current = true;
      if (authToken) {
        console.log("init");
        try {
          const data = await getMe(authToken);
          setIsLogged(true);
          setName(data.name);
          setTheme(data.theme);
        } catch (err) {
          setIsLogged(false);
          setAuthToken("");
          console.log(err);
        }
      } else setIsLogged(false);
    };
    if (!initialized.current) init();
  }, [authToken, setAuthToken]);

  return (
    <UserContext.Provider
      value={{
        isLogged,
        name,
        theme,
        avatar,
        currentBoard,
        setCurrentBoard,
        setUserTheme,
        setAuthToken,
        userLogin,
        userLoginWithGoogle,
        userLogout,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
