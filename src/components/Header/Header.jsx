import { useState } from 'react'
import css from './Header.module.css'
import { ThemeSelector } from 'components/ThemeSelector/ThemeSelector'
import { Avatar } from 'components/Avatar/Avatar'
import Icon from 'components/Icon/Icon'
import Modal from 'components/Modal/Modal'
import { EditProfileForm } from 'components/forms/EditProfileForm/EditProfileForm'

import { useAuth } from 'hooks/useAuth';

export const Header = ({ toggleSidebar }) => {

  const [isVisibleThemeSelector, setIsVisibleThemeSelector] = useState(false)
  const [isVasibleUserModal, setIsVasibleUserModal] = useState(false);;
  const {user} = useAuth();
  
  const showThemeSelector = () => {
    setIsVisibleThemeSelector(!isVisibleThemeSelector)
  };

  const showUserModal = () => {
    setIsVasibleUserModal(!isVasibleUserModal)
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
          <li className={css.styleName}>{user.name}</li>
          <li><Avatar onClick={() => showUserModal()} size={32}/></li>
        </ul>
        {isVasibleUserModal &&
          <Modal isOpen="isVasibleUserModal" name="Edit profile" onClose={showUserModal}>
            <EditProfileForm/>
          </Modal>
          // <div style={{ position: "absolute", top: 70, right: 12 }}>
          //   <p className={css.textuseravatar}>EditProfileModal</p>
          // </div>
        }
      </div>
    </div>
  )
};