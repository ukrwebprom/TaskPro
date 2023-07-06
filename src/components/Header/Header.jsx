import css from './Header.module.css'
import { ThemeSelector } from 'components/ThemeSelector/ThemeSelector'
import { useModal } from 'hooks/useModal'
import { Avatar } from 'components/Avatar/Avatar'
import Icon from 'components/Icon/Icon'
import { EditProfileForm } from 'components/forms/EditProfileForm/EditProfileForm'
/* import { useDispatch } from 'react-redux'; */
import { useAuth } from 'hooks/useAuth';
/* import { updateProfile } from 'redux/auth/operations'; */

export const Header = ({ toggleSidebar }) => {
  const {getModal, killModal} = useModal();
  const {user} = useAuth();
  const {getPopover, killPopover} = useModal();
/*   const dispatch = useDispatch(); */

  const handleUpdateProfile = () => {
/*     dispatch(updateProfile(value)); */
    killModal();
  }

  return (
    <>
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
        </div>

        <ul className={css.styleUserInfo}>
          <li className={css.styleName}>{user.name}</li>
          <li><Avatar onClick={() => getModal('Edit profile', <EditProfileForm onSubmitForm={handleUpdateProfile}/>)} 
            size={32}/>
          </li>
        </ul>

      </div>
    </div>
    </>
  )
};