import { useState } from "react";

export const useTheme = () => {
    
    const themes = {
        dark: 'dark',
        light: 'light',
        violet: 'violet'
    }
    const [theme, setTheme] = useState(themes.dark);

    return {setTheme, theme, themes}
}