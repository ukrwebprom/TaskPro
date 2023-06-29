import Logo from "./Logo";
import Boards from "./Boards";
import Help from "./Help";
import Icon from "components/Icon";
import css from "./Sidebar.module.css";
// import { useUser } from "hooks/useUser";
import { logout } from "redux/auth/operations";
import { useDispatch } from "react-redux";


const Sidebar = () => {
  // const { userLogout } = useUser();
const dispatch = useDispatch();

  return (
    <div className={css.sidebar}>
      <div>
        <Logo />
        <p className={css.boardsHeading}>My boards</p>
        <button type="button" className={css.createButton}>
          <span className={css.createText}>Create a new board</span>
          <div className={css.createIcon}>
            <Icon name={"#plus-icon"} sprite={2} width="20" height="20" />
          </div>
        </button>
      </div>
        <Boards />
      <div className={css.sidebarBottom}>
        <Help />
        <button type="button" className={css.logoutButton}>
          <Icon name={"#login-icon"} sprite={2} width="32" height="32" />
          {/* <span onClick={() => userLogout()}>Log out</span> */}
          <span onClick={() => dispatch(logout())}>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
