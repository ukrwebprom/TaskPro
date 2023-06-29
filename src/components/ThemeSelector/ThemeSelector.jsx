import { useDispatch } from 'react-redux';
import { updTheme } from 'redux/auth/operations';
import css from './ThemeSelector.module.css';
import { useAuth } from 'hooks/useAuth';
// import { useUser } from "hooks/useUser";

export const ThemeSelector = ({showThemeSelector}) => {
    const dispatch = useDispatch();
    const {user} = useAuth();
    // const {theme, setUserTheme} = useUser();
    const themes = {
        dark: 'dark',
        light: 'light',
        violet: 'violet'
    }
    // const handleClickBtn = () => {
        
    // }

    const getThemeOptions = () => {
        let list = [];
        for (const option in themes) {
            const item = themes[option];

            list.push(
            // <li key={item}><button onClick={() => { setUserTheme(item); showThemeSelector() }} className={`${theme === item? css.active : css.selectorItem} noselect`}>{item}</button></li>

            <li key={item}><button onClick={() => { dispatch(updTheme(item)); showThemeSelector() }} className={`${user.theme === item? css.active : css.selectorItem} noselect`}>{item}</button></li>
            )
        }
        return list;
    }
    return(
        <ul className={css.selector}>{getThemeOptions()}</ul>
    )
}