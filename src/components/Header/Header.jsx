import { useState } from 'react'
import css from './Header.module.css'
import { ThemeSelector } from 'components/ThemeSelector/ThemeSelector'
// import { Icon } from 'components/Icon/Icon'

export const Header = ({toggleSidebar}) => {
  const [isVisibleThemeSelector, setIsVisibleThemeSelector] = useState(false)
  
  const showThemeSelector = () => {
    setIsVisibleThemeSelector(!isVisibleThemeSelector)
  };

  return (
    <div className={css.headerall}>
      <div className={css.menuburger}>
          <button className={css.burgerstyle} onClick={() => toggleSidebar(c => !c)}><i></i></button>
      </div>

      <div className={css.headerTaskPro}>
        <div className={css.outputselector}>
          <button className={css.styleTheme} onClick={() => showThemeSelector()}><span className={css.spantheme}>Theme</span>
            <svg className={css.icontheme} class="Icon_icon__x+UQW" width="18px" height="18px" stroke="currentColor">
              <use href="/TaskPro/static/media/sprite.513d220acd29378299411e78517604da.svg#chevron-down-icon"></use>
            </svg> 
          </button>
          {isVisibleThemeSelector &&
            (<div className={css.selectortheme}>
            <ThemeSelector showThemeSelector={showThemeSelector} />
            </div>)}
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