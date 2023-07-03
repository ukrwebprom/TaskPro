import { useState } from 'react'
import css from './Header.module.css'
import { ThemeSelector } from 'components/ThemeSelector/ThemeSelector'
import { useModal } from 'hooks/useModal'
import { Avatar } from 'components/Avatar/Avatar'
import Icon from 'components/Icon/Icon'
import { EditProfileForm } from 'components/forms/EditProfileForm/EditProfileForm'

import { useAuth } from 'hooks/useAuth';
// import { useModal } from 'hooks/useModal'

export const Header = ({ toggleSidebar }) => {

  const {getModal, killModal} = useModal();
  // const [isVisibleThemeSelector, setIsVisibleThemeSelector] = useState(false)

  const {user} = useAuth();
  const {getPopover, killPopover} = useModal();
  // const {getModal, killModal} = useModal();
  
  // const showThemeSelector = () => {
  //   setIsVisibleThemeSelector(!isVisibleThemeSelector)
  // };



  return (
    <div className={css.headerall}>
      <div className={css.menuburger}>
        <button className={css.burgerstyle} onClick={() => toggleSidebar(c => !c)}>
          <Icon className={css.burgerMenu}  name="#menu-icon" width='32px' height='32px' />
        </button>        
      </div>

      <div className={css.headerTaskPro}>
        <div className={css.outputselector}>
          <button className={css.styleTheme} onClick={() => getPopover(<ThemeSelector onClose={killPopover}/>)}>
            <span className={css.spantheme}>Theme</span>
            <Icon name="#chevron-down-icon" width='16px' height='16px' color='#ffffff'/>
          </button>
          {/* {isVisibleThemeSelector &&
            (<div className={css.selectortheme}>
              <Popover >
                <ThemeSelector showThemeSelector={showThemeSelector} />
              </Popover >              
            </div>)} */}
        </div>

        <ul className={css.styleUserInfo}>
          <li className={css.styleName}>{user.name}</li>
          <li><Avatar onClick={() => getModal('Edit profile', <EditProfileForm />)} 
            size={32}/>
          </li>
        </ul>

      </div>
    </div>
  )
};