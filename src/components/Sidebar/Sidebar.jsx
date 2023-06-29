import Logo from "./Logo";
import Boards from "./Boards";
import Help from "./Help";
import Icon from "components/Icon";
import css from "./Sidebar.module.css";
import { logout } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import { CardForm } from "components/forms/CardForm/CardForm";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className={css.sidebar}>
      <div>
        <Logo />
        <p className={css.boardsHeading}>My boards</p>
        <button
          type="button"
          className={css.createButton}
          onClick={() => setModalIsOpen(true)}>
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
          <span onClick={() => dispatch(logout)}>Log out</span>
        </button>
      </div>

      {modalIsOpen && (
        <Modal name="New board">
          <CardForm />
        </Modal>
      )}
    </div>
  );
};

export default Sidebar;
