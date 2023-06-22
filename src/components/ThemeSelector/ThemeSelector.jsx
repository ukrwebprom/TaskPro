import css from './ThemeSelector.module.css';
import { useUser } from "hooks/useUser";

export const ThemeSelector = () => {
    const {theme, setUserTheme} = useUser();
    const themes = {
        dark: 'dark',
        light: 'light',
        violet: 'violet'
    }
    const getThemeOptions = () => {
        let list = [];
        for (const option in themes) {
            const item = themes[option];
            list.push(<li key={item}><button onClick={() => setUserTheme(item)} className={`${theme === item? css.active : css.selectorItem} noselect`}>{item}</button></li>)
        }
        return list;
    }
    return(
        <ul className={css.selector}>{getThemeOptions()}</ul>
    )
}