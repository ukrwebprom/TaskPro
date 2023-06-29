import Icon from "components/Icon/Icon";
import css from "../../Sidebar.module.css";
import { deleteBoard } from "redux/boards/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import { CardForm } from "components/forms/CardForm/CardForm";

const BoardsItem = ({ index, board, setActive }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className={css.boardLink} onClick={() => setActive(index)}>
        <div className={css.boardInfo}>
          <Icon name={"#" + board.icon} width="18" height="18" />
          <span className={css.boardTitle}>{board.title}</span>
        </div>
        <div className={css.boardButtons}>
          <button
            type="button"
            className={css.boardActionButton}
            onClick={() => setModalIsOpen(true)}>
            <Icon name="#pencil-icon" />
          </button>
          <button
            type="button"
            className={css.boardActionButton}
            onClick={() => dispatch(deleteBoard(board._id))}>
            <Icon name="#trash-icon" />
          </button>
        </div>

        {modalIsOpen && (
          <Modal name="Edit board">
            <CardForm taskData={board} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default BoardsItem;
