import {useTheme} from "../../hooks/useTheme";

export const ThemeSelector = () => {
    const {themes, setTheme} = useTheme();

    return(
        <ul className="theme-selector">
            <li><button onClick={() => setTheme(themes.dark)}>Dark</button></li>
            <li><button onClick={() => setTheme(themes.light)}>Light</button></li>
            <li><button onClick={() => setTheme(themes.violet)}>Violet</button></li>
        </ul>
    )
}