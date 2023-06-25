import { useState } from 'react'
import css from './Header.module.css'
import { ThemeSelector } from 'components/ThemeSelector/ThemeSelector'
import { useUser } from 'hooks/useUser'
// import { Icon } from 'components/Icon/Icon'
import defaultAvatar from '../../images/defaultAvatar.png'
import Icon from 'components/Icon/Icon'

export const Header = ({ toggleSidebar }) => {
  const [isVisibleThemeSelector, setIsVisibleThemeSelector] = useState(false)
  const [isVasibleUserModal, setIsVasibleUserModal] = useState(false);
  const { name, avatar } = useUser();
  
  const showThemeSelector = () => {
    setIsVisibleThemeSelector(!isVisibleThemeSelector)
  };

  return (
    <div className={css.headerall}>
      <div className={css.menuburger}>
        <button className={css.burgerstyle} onClick={() => toggleSidebar(c => !c)}>
          <Icon name="#menu-icon" width='32px' height='32px' color='#ffffff'/>
        </button>        
      </div>

      <div className={css.headerTaskPro}>
        <div className={css.outputselector}>
          <button className={css.styleTheme} onClick={() => showThemeSelector()}><span className={css.spantheme}>Theme</span>
            <img className={css.icontheme} src="/TaskPro/static/media/icon.811b950c1109ac38463be92ae94fe634.svg" alt='staticlogo'></img>
            {/* <svg className={css.icontheme}><use href="./../../images/Vector.svg"></use> </svg>  */}
          </button>
          {isVisibleThemeSelector &&
            (<div className={css.selectortheme}>
              <ThemeSelector showThemeSelector={showThemeSelector} />
            </div>)}
        </div>

        <ul className={css.styleUserInfo}>
          <li className={css.styleName}>{name}</li>
          <li className={css.styleAvatar}>
            <button className={css.styleAvatar} onClick={() => setIsVasibleUserModal(!isVasibleUserModal)}>
              <img src={avatar === "none" ? defaultAvatar : avatar} alt='avatar' width="32" height="32" />          
            </button>
          </li>
        </ul>
        {isVasibleUserModal &&
          <div style={{ position: "absolute", top: 70, right: 12 }}>
            <p>EditProfileModal</p>
          </div>
        }
      </div>
    </div>
  )
};