import Logo from "./Logo";
import Boards from "./Boards";
import Help from "./Help";
import Icon from "components/Icon";
import css from "./Sidebar.module.css";
import { useUser } from "hooks/useUser";

const Sidebar = () => {
  const { userLogout } = useUser();

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
        <Boards />
      </div>
      <div className={css.sidebarBottom}>
        <Help />
        <button type="button" className={css.logoutButton}>
          <Icon name={"#login-icon"} sprite={2} width="32" height="32" />
          <span onClick={() => userLogout()}>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
