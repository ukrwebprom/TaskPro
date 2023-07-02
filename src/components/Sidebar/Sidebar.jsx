import Logo from "./Logo";
import Boards from "./Boards";
import Help from "./Help";
import Icon from "components/Icon";
import css from "./Sidebar.module.css";
import { logout } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { addBoard } from 'redux/boards/operations';
import { useState } from "react";
import Modal from "components/Modal/Modal";
import { BoardForm } from "components/forms/BoardForm/BoardForm";
import { useModal } from "hooks/useModal";

const Sidebar = () => {
const {getModal, killModal} = useModal();
const dispatch = useDispatch();
const [showModal, setShowModal] = useState(false);
const toggleModal = () => setShowModal(c => !c);
const handleAddBoard = (value) => {
  dispatch(addBoard(value));
  killModal();
}

  return (
    <>
    <div className={css.sidebar}>
      <div>
        <Logo />
        <p className={css.boardsHeading}>My boards</p>
        <button type="button" className={css.createButton} onClick={() => getModal("New board", <BoardForm onSubmitForm={handleAddBoard} type='Create' />)}>
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
          <span onClick={() => dispatch(logout())}>Log out</span>
        </button>
      </div>
    </div>
    {showModal && <Modal onClose={toggleModal} name="New board">
        <BoardForm onSubmitForm={handleAddBoard}/>
      </Modal>}
    </>
  );
};

export default Sidebar;
