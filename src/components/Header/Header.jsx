import css from './Header.module.css'
import { ThemeSelector } from 'components/ThemeSelector/ThemeSelector'
// import { Icon } from 'components/Icon/Icon'

export const Header = ({toggleSidebar}) => {
  return (
    <div className={css.headerall}>
      <div className={css.menuburger}>
          <button className={css.burgerstyle} onClick={() => toggleSidebar(c => !c)}><i></i></button>
      </div>

      <div className={css.headerTaskPro}>
        <div className={css.outputselector}>
          <button className={css.styleTheme}><span className={css.spantheme}>Theme</span>
            {/* <img className={css.icontheme} src="/TaskPro/static/media/icon.811b950c1109ac38463be92ae94fe634.svg" alt='staticlogo'></img> */}
            <svg className={css.icontheme}>
              <use href="./../Icon/Icon.jsx#chevron-down-icon"/>
            </svg> 
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
    </div>
    
  )
}