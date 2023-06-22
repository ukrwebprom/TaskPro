import { createContext, useContext, useState, useRef, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { getMe, updTheme } from "api/ServerAPI";

const UserContext = createContext();


export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [authToken, setAuthToken] = useLocalStorage("authToken", "");
    const [isLogged, setIsLogged] = useState(true);
    const [name, setName] = useState('');
    const [theme, setTheme] = useState('dark');
    const initialized = useRef(false);

    const setUserTheme = async (newtheme) => {
        try {
            await updTheme(newtheme);
            setTheme(newtheme);
        } catch(err) {
            console.log(err);
        }
        
    }

    useEffect(() => {
        const init = async () => {
            initialized.current = true;
            if(authToken) {
                try {
                    const data = await getMe(authToken);
                    setName(data.name);
                    setTheme(data.theme);
                } catch (err) {
                    setIsLogged(false);
                    setAuthToken('');
                }
            }
        }
        if(!initialized.current) init();
    }, [authToken, setAuthToken]);

    return <UserContext.Provider value={{isLogged, name, theme, setUserTheme, setAuthToken }}>
        {children}
    </UserContext.Provider>
    
}