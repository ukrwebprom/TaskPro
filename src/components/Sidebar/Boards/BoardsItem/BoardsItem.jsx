import Icon from "components/Icon/Icon";
import css from "../../Sidebar.module.css";

const BoardsItem = ({ index, board, setActive, handleDelete, handleEdit }) => {
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
            onClick={handleEdit}
          >
            <Icon name="#pencil-icon" tip="Edit" />
          </button>

          <button
            type="button"
            className={css.boardActionButton}
            onClick={() => handleDelete(board._id)}
          >
            <Icon name="#trash-icon" tip="Delete" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BoardsItem;
