import { useState } from 'react'
import css from './Header.module.css'
import { ThemeSelector } from 'components/ThemeSelector/ThemeSelector'
import { useUser } from 'hooks/useUser'
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
          <Icon className={css.burgerMenu}  name="#menu-icon" width='32px' height='32px' />
        </button>        
      </div>

      <div className={css.headerTaskPro}>
        <div className={css.outputselector}>
          <button className={css.styleTheme} onClick={() => showThemeSelector()}><span className={css.spantheme}>Theme</span>
            <Icon name="#chevron-down-icon" width='16px' height='16px' color='#ffffff'/>
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
            <p className={css.textuseravatar}>EditProfileModal</p>
          </div>
        }
      </div>
    </div>
  )
};