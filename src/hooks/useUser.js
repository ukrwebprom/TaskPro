import { createContext, useContext, useState, useRef } from "react";
import useLocalStorage from "use-local-storage";
import { getMe } from "api/ServerAPI";

const UserContext = createContext();


export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [authToken, setAuthToken] = useLocalStorage("authToken", "");
    const [isLogged, setIsLogged] = useState(true);
    const initialized = useRef(false);

    const init = token => {
        initialized.current = true;
        console.log(token);
    }

    if(authToken && !initialized.current) init(authToken);

    return <UserContext.Provider value={{isLogged, setAuthToken}}>
        {children}
    </UserContext.Provider>
    
}