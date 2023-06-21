import useLocalStorage from "use-local-storage";

export const useTheme = () => {

    const themes = {
        dark: 'dark',
        light: 'light',
        violet: 'violet'
    }

    const [theme, setTheme] = useLocalStorage('theme', themes.dark);

    return {setTheme, theme, themes}
}