import css from './Header.module.css'
import { ThemeSelector } from 'components/ThemeSelector/ThemeSelector'

export const Header = ({ onClick }) => {
  return (
    <div className={css.headerTaskPro}>
      <div className={css.outputselector}>
        <button onClick={onClick} className={css.styleTheme} > <span className={css.spantheme}>Theme</span>
          <img className={css.icontheme} src="/TaskPro/static/media/icon.811b950c1109ac38463be92ae94fe634.svg" alt='staticlogo'></img>
          {/* <svg className={css.icontheme}><use href="./../../../public/logo192.png"></use> </svg>  */}
        </button>
        <div className={css.selectortheme}>
          <ThemeSelector />
        </div>
      </div>

      <ul className={css.styleUserInfo}>
          <li className={css.styleName}>Name</li>
          <li className={css.styleAvatar}>
              <button className={css.styleAvatar}></button>
          </li>
      </ul>
    </div>
  )
}