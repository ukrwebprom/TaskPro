import { useDispatch } from 'react-redux';
import { updTheme } from 'redux/auth/operations';
import css from './ThemeSelector.module.css';
import { useAuth } from 'hooks/useAuth';

export const ThemeSelector = ({onClose}) => {   
    const dispatch = useDispatch();
    const {user} = useAuth();

    const themes = {
        dark: 'dark',
        light: 'light',
        violet: 'violet'
    }

    const getThemeOptions = () => {
        let list = [];
        for (const option in themes) {
            const item = themes[option];

            list.push(
            <li key={item}><button onClick={() => { dispatch(updTheme(item)); onClose() }} className={`${user.theme === item? css.active : css.selectorItem} noselect`}>{item}</button></li>
            )
        }
        return list;
    }
    return(
        <ul className={css.selector}>{getThemeOptions()}</ul>    
    )
}