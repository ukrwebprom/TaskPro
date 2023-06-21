import { createContext, useContext, useState } from "react";
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(true);

    return <UserContext.Provider value={{isLogged}}>
        {children}
    </UserContext.Provider>
    
}