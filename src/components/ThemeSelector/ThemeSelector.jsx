import {useTheme} from "../../hooks/useTheme";
import css from './ThemeSelector.module.css';

export const ThemeSelector = () => {
    const {themes, setTheme, theme} = useTheme();

    const getThemeOptions = () => {
        let list = [];
        for (const option in themes) {
            const item = themes[option];
            list.push(<li key={item}><button onClick={() => setTheme(item)} className={`${theme === item? css.active : css.selectorItem} noselect`}>{item}</button></li>)
        }
        return list;
    }
    return(
        <ul className={css.selector}>{getThemeOptions()}</ul>
    )
}