import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    
    const themes = {
        dark: 'dark',
        light: 'light',
        violet: 'violet'
    }
    const [theme, setTheme] = useState(themes.dark);

    return <ThemeContext.Provider value={{setTheme, theme, themes}}>
        {children}
    </ThemeContext.Provider>
    
}